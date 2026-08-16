'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Send, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-background pt-24">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-2xl px-6 py-12 text-center relative z-10 flex-grow flex flex-col items-center justify-center">
        {/* Animated Checkmark Circle */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-emerald/10 border-2 border-emerald/40 text-emerald shadow-[0_0_50px_rgba(16,185,129,0.25)]"
        >
          <CheckCircle2 className="h-12 w-12 text-emerald" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/[0.06] px-4 py-1.5 text-xs font-medium text-emerald mb-4">
            <Sparkles size={14} />
            Submission Successful
          </span>

          <h1 className="font-heading font-bold text-primary text-4xl sm:text-5xl mb-4">
            Thank You{name ? `, ${name}` : ''}!
          </h1>

          <p className="text-secondary text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-8">
            Your message has been sent directly to{' '}
            <span className="text-violet font-medium underline underline-offset-4 decoration-violet/30 select-all">
              amansharmaradauri@gmail.com
            </span>
            . I will review your email and get back to you shortly!
          </p>
        </motion.div>

        {/* Confirmation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full rounded-2xl border border-white/[0.08] bg-surface/50 p-6 sm:p-8 backdrop-blur-xl mb-10 text-left space-y-4 shadow-xl"
        >
          <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
            <Send className="text-violet h-5 w-5" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Automated Notification Sent
            </span>
          </div>

          <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed">
            A confirmation notification with your details was dispatched to Aman Sharma&apos;s primary inbox. You should expect a response within 24 hours.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-primary transition-all hover:bg-white/[0.08] hover:border-white/20 active:scale-95"
          >
            <ArrowLeft size={16} />
            Return to Home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-violet/30 bg-violet px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-violet/90 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] active:scale-95"
          >
            Explore Projects
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen bg-background flex items-center justify-center text-secondary">
          Loading...
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </>
  );
}
