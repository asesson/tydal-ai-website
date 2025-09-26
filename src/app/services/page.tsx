import { Card, Badge } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { HiMail, HiUserGroup, HiCog, HiLink, HiShieldCheck, HiChartBar, HiSearchCircle, HiArchive, HiAcademicCap, HiMicrophone, HiChat } from 'react-icons/hi';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/tydal-logo-green.png"
                  alt="Tydal AI Logo"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/tydal-logo-green.png"
                alt="Tydal AI Logo"
                width={160}
                height={60}
                className="h-6 w-auto mb-4"
              />
              <p className="text-gray-400">Making advanced AI accessible to growing businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Foundations</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Scale & Governance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
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