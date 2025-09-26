import { Card, Badge } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore real AI success stories and implementation case studies from Tydal AI. See how businesses achieved measurable results through strategic AI automation and workflow optimization.',
  keywords: [
    'AI success stories',
    'AI implementation case studies',
    'business automation results',
    'AI ROI examples',
    'AI transformation case studies',
    'business process automation results',
    'AI consulting success stories'
  ],
  openGraph: {
    title: 'AI Success Stories & Case Studies | Tydal AI',
    description: 'Explore real AI success stories and implementation case studies. See how businesses achieved measurable results through strategic AI automation.',
    url: 'https://tydalai.com/case-studies',
    images: [
      {
        url: '/og-case-studies.png',
        width: 1200,
        height: 630,
        alt: 'Tydal AI Case Studies - Real Business Results',
      }
    ],
  },
  twitter: {
    title: 'AI Success Stories & Case Studies | Tydal AI',
    description: 'Explore real AI success stories and implementation case studies. See how businesses achieved measurable results through strategic AI automation.',
    images: ['/og-case-studies.png'],
  },
  alternates: {
    canonical: 'https://tydalai.com/case-studies',
  },
};

export default function CaseStudies() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Success Stories & Case Studies | Tydal AI",
    "description": "Explore real AI success stories and implementation case studies. See how businesses achieved measurable results through strategic AI automation.",
    "url": "https://tydalagentai.com/case-studies",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tydalagentai.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Case Studies",
          "item": "https://tydalagentai.com/case-studies"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-background">
      {/* Structured Data */}
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
              <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
              <Link href="/case-studies" className="text-primary font-medium">Case Studies</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
              <Link href="/insights" className="text-gray-600 hover:text-primary transition-colors">Insights</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real businesses, real wins, real numbers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            See how companies just like yours turned AI from buzzword to bottom-line impact—with the actual results to prove it
          </p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Card variant="marketing" className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8">
                <Badge variant="info" className="mb-4">Financial Services</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Workflow Automation
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-600">
                    Loan processors spent hours re-keying data and tracking documents across systems, slowing approvals and risking compliance errors. Manual document verification was creating bottlenecks and inconsistent processing times.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600">
                    AI-driven document classification, data extraction and routing was implemented, streamlining the entire loan file process. The system automatically extracts key data from loan paperwork, verifies document completeness, and routes files based on risk profiles.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 6-week pilot with loan processing team</li>
                    <li>• OCR and NLP integration with existing systems</li>
                    <li>• Compliance checking automation</li>
                    <li>• Real-time monitoring dashboard</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Results</h3>

                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">89%</div>
                    <div className="text-sm text-gray-600 mb-1">Reduction in processing time</div>
                    <div className="text-xs text-gray-500">From 1 hr per package to seconds per package</div>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">40%</div>
                    <div className="text-sm text-gray-600 mb-1">Drop in compliance errors</div>
                    <div className="text-xs text-gray-500">Error rate: 2.1% → 1.3%</div>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">15%</div>
                    <div className="text-sm text-gray-600 mb-1">More client-facing time</div>
                    <div className="text-xs text-gray-500">25 additional hours per week per LP</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Annual impact:</strong> $200K in efficiency gains and reduced staff hours.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Card variant="marketing" className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8">
                <Badge variant="success" className="mb-4">Professional Services</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Email Automation in Professional Services
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-600">
                    A professional services firm was drowning in 3,000+ monthly support emails, leading to long response times and frustrated clients. Manual triage was consuming entire staff days, and important client communications were getting lost in the noise.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600">
                    Email automation was deployed inside their helpdesk to triage, summarize, and draft replies. The system automatically categorizes emails by urgency and topic, provides intelligent summaries of complex threads, and generates contextually appropriate response drafts.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 2-week pilot with customer support team</li>
                    <li>• Integration with existing helpdesk platform</li>
                    <li>• AI reponses trained on company data</li>
                    <li>• Gradual rollout with human oversight</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Results</h3>

                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">64%</div>
                    <div className="text-sm text-gray-600 mb-1">Faster average response times</div>
                    <div className="text-xs text-gray-500">From 4.2 hours to 1.5 hours</div>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">12%</div>
                    <div className="text-sm text-gray-600 mb-1">Lift in customer satisfaction</div>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">20+</div>
                    <div className="text-sm text-gray-600 mb-1">Staff hours reclaimed each week</div>
                    <div className="text-xs text-gray-500">Redeployed to client-facing work</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>6-month ROI:</strong> 121% return on investment through reduced response time and staffing hours saved.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our proven implementation process
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Every successful case study follows the same structured approach—designed to minimize risk and maximize results.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Discovery & Scoping</h3>
              <p className="text-gray-600 text-sm">
                Assessment call followed by detailed workflow analysis, strategic plan and pilot project scoping.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Rapid Pilot</h3>
              <p className="text-gray-600 text-sm">
                4-6 week focused implementation with clear success metrics and regular check-ins.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Scale & Optimize</h3>
              <p className="text-gray-600 text-sm">
                Expand successful pilots with proper governance and continuous improvement frameworks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
See how these results could translate to your team
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every business is different, but the principles remain the same. Let's explore what's possible for your specific workflows and challenges.
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