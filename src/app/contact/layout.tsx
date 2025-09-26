import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Tydal AI for AI consulting and business automation consultation. Start your AI transformation journey with expert guidance and strategic implementation.',
  keywords: [
    'AI consulting contact',
    'business automation consultation',
    'AI strategy consultation',
    'AI implementation quote',
    'AI consulting inquiry',
    'business AI consultation',
    'AI transformation contact'
  ],
  openGraph: {
    title: 'Contact Tydal AI | AI Consulting & Business Automation',
    description: 'Get in touch with Tydal AI for AI consulting and business automation consultation. Start your AI transformation journey today.',
    url: 'https://tydalai.com/contact',
    images: [
      {
        url: '/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Tydal AI - AI Consulting Services',
      }
    ],
  },
  twitter: {
    title: 'Contact Tydal AI | AI Consulting & Business Automation',
    description: 'Get in touch with Tydal AI for AI consulting and business automation consultation. Start your AI transformation journey today.',
    images: ['/og-contact.png'],
  },
  alternates: {
    canonical: 'https://tydalai.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}