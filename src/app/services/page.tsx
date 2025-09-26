import { Card, Badge } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { HiMail, HiUserGroup, HiCog, HiLink, HiShieldCheck, HiChartBar, HiSearchCircle, HiArchive, HiAcademicCap, HiMicrophone, HiChat } from 'react-icons/hi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consulting Services',
  description: 'Comprehensive AI consulting services for small and mid-sized businesses. From AI foundations to scaled governance, we help transform your operations with automated workflows and intelligent decision-making.',
  keywords: [
    'AI consulting services',
    'business process automation',
    'AI workflow automation',
    'AI integration services',
    'business AI consulting',
    'AI transformation services',
    'process automation consulting'
  ],
  openGraph: {
    title: 'AI Consulting Services | Tydal AI',
    description: 'Comprehensive AI consulting services for small and mid-sized businesses. Transform your operations with automated workflows and intelligent decision-making.',
    url: 'https://tydalai.com/services',
    images: [
      {
        url: '/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Tydal AI Services - AI Consulting and Business Automation',
      }
    ],
  },
  twitter: {
    title: 'AI Consulting Services | Tydal AI',
    description: 'Comprehensive AI consulting services for small and mid-sized businesses. Transform your operations with automated workflows and intelligent decision-making.',
    images: ['/og-services.png'],
  },
  alternates: {
    canonical: 'https://tydalai.com/services',
  },
};

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Consulting Services",
    "description": "Comprehensive AI consulting services for small and mid-sized businesses. From AI foundations to scaled governance, we help transform your operations with automated workflows and intelligent decision-making.",
    "provider": {
      "@type": "Organization",
      "name": "Tydal AI",
      "url": "https://tydalai.com"
    },
    "serviceType": "AI Consulting",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Email Automation",
            "description": "Classify, summarize, and draft replies to reduce response times with automatic email categorization, intelligent summarization, draft response generation, and priority detection."
          },
          "category": "Quick Wins"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales Co-Pilots",
            "description": "AI-powered research and outreach to boost pipeline with lead qualification scoring, automated prospect research, personalized outreach drafts, and follow-up sequence management."
          },
          "category": "Quick Wins"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation",
            "description": "Eliminate repetitive back-office tasks and human error with document processing & extraction, data validation & cleansing, process optimization, and exception handling."
          },
          "category": "Quick Wins"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Meeting Notes",
            "description": "Automatically capture, transcribe, and organize meeting insights with real-time transcription, action item extraction, meeting summaries, and speaker identification."
          },
          "category": "Quick Wins"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Company Knowledge Chat",
            "description": "Chat with your business data to get instant insights and answers with document search, data analysis, instant answers, and knowledge retrieval."
          },
          "category": "Quick Wins"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Connections",
            "description": "Connect your tools and automate workflows with intelligent integrations including API tool synchronization, automated workflows, data harmonization, and system integration."
          },
          "category": "Quick Wins"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Integrations",
            "description": "Secure access layers connecting your existing systems with AI capabilities."
          },
          "category": "Foundations"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Compliance Monitoring",
            "description": "Automated audit trails and compliance checking for regulatory requirements."
          },
          "category": "Foundations"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Dashboards",
            "description": "Real-time monitoring and reporting on AI system performance and ROI."
          },
          "category": "Foundations"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accuracy & Feedback",
            "description": "Regular evaluation and testing of AI performance."
          },
          "category": "Scale & Governance"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Expansion Planning",
            "description": "Identify new high-impact automation opportunities."
          },
          "category": "Scale & Governance"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Training & Adoption",
            "description": "Comprehensive playbooks and training programs for team enablement."
          },
          "category": "Scale & Governance"
        }
      ]
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Consulting Services | Tydal AI",
    "description": "Comprehensive AI consulting services for small and mid-sized businesses. From AI foundations to scaled governance, we help transform your operations with automated workflows and intelligent decision-making.",
    "url": "https://tydalai.com/services",
    "mainEntity": {
      "@type": "Service",
      "name": "AI Consulting Services"
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
          "name": "Services",
          "item": "https://tydalai.com/services"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/tydal-logo-green.png"
                  alt="Tydal AI - Return to homepage"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="text-primary font-medium">Services</Link>
              <Link href="/case-studies" className="text-gray-600 hover:text-primary transition-colors">Case Studies</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
              <Link href="/insights" className="text-gray-600 hover:text-primary transition-colors">Insights</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform your business with AI that actually works
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            From proof of concept to enterprise scale, we deliver AI solutions tailored to your pace and priorities.
          </p>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="success" size="md" className="mb-4">Quick Wins</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4–6 weeks to results
            </h2>
            <p className="text-lg text-gray-600">
              Get immediate value with focused AI implementations that solve specific business problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="marketing" className="text-center">
              <div className="flex justify-center mb-6">
                <HiMail className="text-5xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Automation</h3>
              <p className="text-gray-600 mb-6">
                Classify, summarize, and draft replies to reduce response times.
              </p>
              <ul className="text-center text-sm text-gray-600 space-y-2 mb-6">
                <li>• Automatic email categorization</li>
                <li>• Intelligent summarization</li>
                <li>• Draft response generation</li>
                <li>• Priority detection</li>
              </ul>
            </Card>

            <Card variant="marketing" className="text-center">
              <div className="flex justify-center mb-6">
                <HiUserGroup className="text-5xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sales Co-Pilots</h3>
              <p className="text-gray-600 mb-6">
                AI-powered research and outreach to boost pipeline.
              </p>
              <ul className="text-center text-sm text-gray-600 space-y-2 mb-6">
                <li>• Lead qualification scoring</li>
                <li>• Automated prospect research</li>
                <li>• Personalized outreach drafts</li>
                <li>• Follow-up sequence management</li>
              </ul>
            </Card>

            <Card variant="marketing" className="text-center">
              <div className="flex justify-center mb-6">
                <HiCog className="text-5xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Workflow Automation</h3>
              <p className="text-gray-600 mb-6">
                Eliminate repetitive back-office tasks and human error.
              </p>
              <ul className="text-center text-sm text-gray-600 space-y-2 mb-6">
                <li>• Document processing & extraction</li>
                <li>• Data validation & cleansing</li>
                <li>• Process optimization</li>
                <li>• Exception handling</li>
              </ul>
            </Card>

            <Card variant="marketing" className="text-center">
              <div className="flex justify-center mb-6">
                <HiMicrophone className="text-5xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Meeting Notes</h3>
              <p className="text-gray-600 mb-6">
                Automatically capture, transcribe, and organize meeting insights.
              </p>
              <ul className="text-center text-sm text-gray-600 space-y-2 mb-6">
                <li>• Real-time transcription</li>
                <li>• Action item extraction</li>
                <li>• Meeting summaries</li>
                <li>• Speaker identification</li>
              </ul>
            </Card>

            <Card variant="marketing" className="text-center">
              <div className="flex justify-center mb-6">
                <HiChat className="text-5xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Company Knowledge Chat</h3>
              <p className="text-gray-600 mb-6">
                Chat with your business data to get instant insights and answers.
              </p>
              <ul className="text-center text-sm text-gray-600 space-y-2 mb-6">
                <li>• Document search</li>
                <li>• Data analysis</li>
                <li>• Instant answers</li>
                <li>• Knowledge retrieval</li>
              </ul>
            </Card>

            <Card variant="marketing" className="text-center">
              <div className="flex justify-center mb-6">
                <HiLink className="text-5xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Connections</h3>
              <p className="text-gray-600 mb-6">
                Connect your tools and automate workflows with intelligent integrations.
              </p>
              <ul className="text-center text-sm text-gray-600 space-y-2 mb-6">
                <li>• API tool synchronization</li>
                <li>• Automated workflows</li>
                <li>• Data harmonization</li>
                <li>• System integration</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
          </div>
        </div>
      </section>

      {/* Foundations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="info" size="md" className="mb-4">Foundations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              6–10 weeks to scale
            </h2>
            <p className="text-lg text-gray-600">
              Build the infrastructure and governance needed for organization-wide AI adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiLink className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Data Integrations</h3>
              <p className="text-gray-600 text-sm">
                Secure access layers connecting your existing systems with AI capabilities.
              </p>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiShieldCheck className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Compliance Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Automated audit trails and compliance checking for regulatory requirements.
              </p>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiChartBar className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Performance Dashboards</h3>
              <p className="text-gray-600 text-sm">
                Real-time monitoring and reporting on AI system performance and ROI.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Scale & Governance Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="warning" size="md" className="mb-4">Scale & Governance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quarterly optimization
            </h2>
            <p className="text-lg text-gray-600">
              Ongoing governance and optimization to ensure AI systems remain effective and compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiSearchCircle className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Accuracy & Feedback</h3>
              <p className="text-gray-600 text-sm">
                Regular evaluation and testing of AI performance.
              </p>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiArchive className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">AI Expansion Planning</h3>
              <p className="text-gray-600 text-sm">
                Identify new high-impact automation opportunities.
              </p>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiAcademicCap className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Training & Adoption</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive playbooks and training programs for team enablement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your AI journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a discovery call. We'll walk through your workflows,
            identify quick wins, and show you what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors text-lg"
            >
              See Success Stories
            </Link>
          </div>

          <p className="text-white mt-6 opacity-75">
            Want to learn more? Read our <Link href="/insights" className="text-white hover:underline font-medium">insights and guides</Link> or explore <Link href="/about" className="text-white hover:underline font-medium">our approach</Link> to AI implementation.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/tydal-logo-green.png"
                alt="Tydal AI - Return to homepage"
                width={160}
                height={60}
                className="h-6 w-auto mb-4"
              />
              <p className="text-gray-400">Making advanced AI accessible to growing businesses.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Foundations</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Scale & Governance</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tydal AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}