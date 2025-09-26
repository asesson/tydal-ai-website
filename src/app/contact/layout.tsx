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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens after I submit this form?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We'll review your information and respond within 24 hours with 2-3 time slots that match your preferences. No automated booking—we personally review each request."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any cost for the initial call?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely not. The 20-minute strategy call is completely free with no obligations. It's our way of understanding if there's a mutual fit."
        }
      },
      {
        "@type": "Question",
        "name": "What if I'm not ready to implement anything yet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That's perfectly fine. Many of our best clients started with exploratory conversations months before they were ready to move forward. We're here when you're ready."
        }
      },
      {
        "@type": "Question",
        "name": "What size companies do you typically work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our sweet spot is small to mid-sized businesses (10-500 employees) looking to implement AI without massive enterprise overhead or complexity."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can we start a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Quick Wins projects, we can typically start within 1-2 weeks after the initial consultation and scoping. Larger implementations may require 2-4 weeks for planning."
        }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Tydal AI | AI Consulting & Business Automation",
    "description": "Get in touch with Tydal AI for AI consulting and business automation consultation. Start your AI transformation journey today.",
    "url": "https://tydalai.com/contact",
    "mainEntity": {
      "@type": "FAQPage"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tydalai.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://tydalai.com/contact"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {children}
    </>
  );
}