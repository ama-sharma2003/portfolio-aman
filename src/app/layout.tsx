import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { personalInfo } from '@/data/personal';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const baseUrl = 'https://amansharma.dev'; // Base URL for metadata

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.title} from Haryana, India. ${personalInfo.tagline} Experienced in React.js, Next.js, HTML, CSS, and interactive frontend development.`,
  keywords: [
    'Aman Sharma',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
    'Web Developer India',
    'Ambros Tech Solutions',
  ],
  authors: [{ name: personalInfo.name, url: baseUrl }],
  creator: personalInfo.name,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    url: baseUrl,
    siteName: `${personalInfo.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    creator: '@amansharma_it',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Person schema definition
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yamuna Nagar',
      addressRegion: 'Haryana',
      addressCountry: 'India',
    },
    sameAs: [personalInfo.linkedin, personalInfo.github],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-primary font-body antialiased selection:bg-violet/20 selection:text-white">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
