'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/data/personal';
import { Mail, Copy, Check, Github, Linkedin, MapPin, Send, AlertCircle } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Contact() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');

    try {
      // Send form data to Next.js API Route which delivers to amansharmaradauri@gmail.com
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        router.push(`/thank-you?name=${encodeURIComponent(formState.name)}`);
        return;
      }

      // Client-side fallback to FormSubmit endpoint to guarantee email delivery
      const fallbackRes = await fetch('https://formsubmit.co/ajax/amansharmaradauri@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`,
        }),
      });

      if (fallbackRes.ok) {
        router.push(`/thank-you?name=${encodeURIComponent(formState.name)}`);
      } else {
        throw new Error('Unable to send message right now. Please try again.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred while sending.';
      setErrorMessage(msg);
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 overflow-hidden bg-background relative">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                {"Let's Build Something Premium Together"}
              </h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed">
                Whether you have a live project that needs optimization, a brand new website idea, or just want to connect, feel free to drop a message.
              </p>
            </ScrollReveal>

            {/* Quick Email Card */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <Card className="p-6 border-white/[0.06] bg-surface/40">
                <span className="text-secondary/50 text-xs font-semibold uppercase tracking-wider block mb-3">
                  Direct Email
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose/5 flex items-center justify-center text-rose">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm font-medium text-primary select-all">
                      {personalInfo.email}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={copyEmail}
                    className="w-full sm:w-auto font-medium"
                    ariaLabel="Copy email address"
                  >
                    {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* Location & Social Dock */}
            <ScrollReveal variant="fadeUp" delay={0.3} className="space-y-4">
              <div className="flex items-center gap-3 text-secondary text-sm">
                <MapPin size={16} className="text-emerald" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-secondary transition-all hover:border-violet/30 hover:text-violet hover:bg-violet/[0.06]"
                      aria-label={link.label}
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <Card className="p-8 border-white/[0.08] bg-surface/50">
                <form onSubmit={handleSend} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet/40 focus:bg-white/[0.05] focus:outline-none transition-all text-primary text-sm placeholder-secondary/30"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet/40 focus:bg-white/[0.05] focus:outline-none transition-all text-primary text-sm placeholder-secondary/30"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-violet/40 focus:bg-white/[0.05] focus:outline-none transition-all text-primary text-sm placeholder-secondary/30 resize-none"
                      placeholder="Hello, I'd like to work together..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSending}
                    variant="primary"
                    className="w-full"
                    size="lg"
                    ariaLabel="Submit contact form"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-violet border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
