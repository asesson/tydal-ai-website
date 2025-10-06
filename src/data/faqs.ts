import { FAQItem } from '@/components/faq-schema';

/**
 * General AI Consulting FAQs
 */
export const generalFAQs: FAQItem[] = [
  {
    question: "What is AI consulting and how can it help my business?",
    answer: "AI consulting helps businesses identify, implement, and optimize artificial intelligence solutions to improve operations, reduce costs, and drive growth. We analyze your workflows, identify automation opportunities, and build custom AI solutions that deliver measurable ROI. Our focus is on practical, results-driven implementations that integrate seamlessly with your existing systems."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Most initial AI workflows can be implemented in 2-6 weeks, depending on complexity. We prioritize 'quick wins' that deliver value fast—often getting your first workflow live in under a month. More complex, enterprise-wide implementations may take 2-3 months. We use an iterative approach, so you start seeing results early in the process."
  },
  {
    question: "Do I need a technical team to work with Tydal AI?",
    answer: "No technical team is required. We handle all the technical implementation, integration, and ongoing support. You just need team members who understand your business processes and can provide input on workflows and requirements. We design solutions that your existing staff can use without special training."
  },
  {
    question: "What size companies do you work with?",
    answer: "We specialize in small to mid-sized businesses with 10-500 employees. This includes startups, growing companies, and established SMBs across industries like professional services, logistics, healthcare, finance, and manufacturing. Our solutions scale with your business."
  },
  {
    question: "How much does AI consulting cost?",
    answer: "Our pricing is project-based and depends on scope and complexity. Most initial implementations range from $15,000 to $50,000. We always start with a discovery phase to understand your needs and provide a fixed-price quote. Many clients see ROI within 3-6 months through time savings and efficiency gains. Contact us for a customized quote."
  },
  {
    question: "Is my data safe and secure with AI solutions?",
    answer: "Absolutely. Data security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance monitoring. All solutions are built with privacy by design, and we can deploy entirely on your infrastructure if needed. We're compliant with GDPR, HIPAA, and other relevant regulations."
  },
  {
    question: "What's the difference between AI consulting and buying an AI tool?",
    answer: "Off-the-shelf AI tools are generic and require significant customization to fit your workflows. AI consulting provides tailored solutions designed specifically for your business processes, integrated with your existing systems, and optimized for your specific use cases. We focus on solving your actual problems, not just implementing technology."
  },
  {
    question: "Can AI replace my employees?",
    answer: "Our approach focuses on augmenting your team, not replacing them. AI handles repetitive, time-consuming tasks so your employees can focus on strategic, creative, and relationship-building work that drives real business value. Most clients redirect saved time to growth activities, often hiring additional staff as their business expands."
  }
];

/**
 * Services-specific FAQs
 */
export const servicesFAQs: FAQItem[] = [
  {
    question: "What types of workflows can be automated with AI?",
    answer: "We can automate email classification and response, document processing and data extraction, meeting transcription and notes, sales research and outreach, report generation, customer support routing, invoice processing, and many other repetitive business tasks. The best candidates are high-volume, rule-based processes that don't require complex human judgment."
  },
  {
    question: "How do you measure ROI from AI implementations?",
    answer: "We track specific KPIs tied to your business goals: time saved per task, error rate reduction, processing speed improvements, cost savings, customer satisfaction changes, and revenue impact. Every project includes clear success metrics defined upfront, with regular reporting on actual vs. expected results."
  },
  {
    question: "What AI platforms and technologies do you use?",
    answer: "We're platform-agnostic and choose the best technology for each use case. We work with leading AI providers including OpenAI (GPT-4), Anthropic (Claude), Google (Gemini), and Azure AI. For deployment, we use AWS, Google Cloud, and Azure, depending on your existing infrastructure and requirements."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes. We offer managed service plans that include monitoring, optimization, updates, and technical support. Most clients choose ongoing support to ensure their AI solutions continue performing optimally and to expand implementations to new use cases over time."
  }
];

/**
 * Getting Started FAQs
 */
export const gettingStartedFAQs: FAQItem[] = [
  {
    question: "How do I get started with AI in my business?",
    answer: "Start with a free consultation where we discuss your business challenges and identify high-impact automation opportunities. We'll assess 2-3 potential quick wins, estimate ROI, and propose a pilot project. Most companies begin with one workflow to prove value before expanding to additional use cases."
  },
  {
    question: "What information do you need from me to get started?",
    answer: "We need to understand your current workflows, pain points, team structure, existing systems, and business goals. During our discovery phase, we'll interview key stakeholders, observe processes, and review documentation. The more insight you provide into your challenges, the better we can design solutions."
  },
  {
    question: "Can we start with a small pilot project?",
    answer: "Absolutely—we recommend it. Pilot projects typically focus on one high-value workflow, deliver results in 4-6 weeks, and cost $10,000-$25,000. This proves ROI and builds organizational confidence before expanding to larger implementations. Most clients expand significantly after seeing initial results."
  }
];

/**
 * Technical FAQs
 */
export const technicalFAQs: FAQItem[] = [
  {
    question: "Will AI solutions integrate with our existing software?",
    answer: "Yes. We specialize in integrating AI with existing systems including CRMs (Salesforce, HubSpot), ERPs (NetSuite, SAP), communication tools (Slack, Microsoft Teams), productivity suites (Google Workspace, Microsoft 365), and custom applications. We use APIs, webhooks, and middleware to ensure seamless data flow."
  },
  {
    question: "What happens if the AI makes a mistake?",
    answer: "All our implementations include human oversight, validation checks, and error handling. Critical decisions always require human review. We also implement monitoring and alerts to catch issues early, plus detailed logging for troubleshooting. Our guardrails framework ensures mistakes are caught before they impact your business."
  },
  {
    question: "How do you handle bias in AI systems?",
    answer: "We test all AI outputs for bias across different demographic groups, data sources, and scenarios. Our implementations include bias detection monitoring, diverse training data, regular audits, and human oversight for sensitive decisions. We follow industry best practices for responsible AI development."
  }
];

/**
 * All FAQs combined (for general FAQ page)
 */
export const allFAQs: FAQItem[] = [
  ...generalFAQs,
  ...servicesFAQs,
  ...gettingStartedFAQs,
  ...technicalFAQs
];
