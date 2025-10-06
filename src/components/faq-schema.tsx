/**
 * FAQ Schema Component
 *
 * Generates structured data (JSON-LD) for FAQs to improve SEO and LLMO
 * This helps search engines and AI assistants understand and display FAQ content
 */

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

/**
 * FAQ Display Component with Schema
 * Renders FAQs with proper HTML structure and includes schema markup
 */
interface FAQDisplayProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQDisplay({ faqs, title = "Frequently Asked Questions" }: FAQDisplayProps) {
  return (
    <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-3"
                itemProp="name"
              >
                {faq.question}
              </h3>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div
                  className="text-gray-700 leading-relaxed"
                  itemProp="text"
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Accordion-style FAQ Component with Schema
 * Collapsible FAQ section for better UX
 */
'use client';

import { useState } from 'react';

export function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: FAQDisplayProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <FAQSchema faqs={faqs} />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                aria-expanded={openIndex === index}
              >
                <h3
                  className="text-lg font-semibold text-gray-900 pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <span className="text-2xl text-gray-500 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div
                  className="px-6 py-4 bg-white"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="text-gray-700 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
