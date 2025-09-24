import { Card } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { HiChartBar, HiUserGroup, HiShieldCheck, HiCloud, HiRocketLaunch, HiTag, HiCog, HiArrowTrendingUp } from 'react-icons/hi2';

export default function About() {
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
              <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
              <Link href="/case-studies" className="text-gray-600 hover:text-primary transition-colors">Case Studies</Link>
              <Link href="/about" className="text-primary font-medium">About</Link>
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
            We're builders, not buzzwords.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Tydal AI was founded to make advanced AI accessible to growing businesses. We combine deep technical expertise with a practical, hands-on consulting style—so you don't just hear about AI's potential, you experience it in your operations.
          </p>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Principles
            </h2>
            <p className="text-lg text-gray-600">
              Everything we do is guided by these core beliefs about AI implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="marketing" className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HiChartBar className="text-2xl text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Outcome over hype</h3>
                  <p className="text-gray-600">
                    Every engagement is tied to measurable KPIs. We don't implement AI for the sake of it—we solve real business problems with quantifiable results.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="marketing" className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HiUserGroup className="text-2xl text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">People-first adoption</h3>
                  <p className="text-gray-600">
                    Designed with your team, not imposed on them. We believe the best AI solutions enhance human capabilities rather than replace them.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="marketing" className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HiShieldCheck className="text-2xl text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Responsible by default</h3>
                  <p className="text-gray-600">
                    Bias checks, guardrails, and compliance monitoring are built into every solution. Responsible AI isn't an afterthought—it's the foundation.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="marketing" className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <HiCloud className="text-2xl text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cloud-agnostic flexibility</h3>
                  <p className="text-gray-600">
                    We work within your ecosystem, not ours. Whether you're on AWS, Azure, Google Cloud, or hybrid—we adapt to your infrastructure.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How we work
            </h2>
            <p className="text-lg text-gray-600">
              Our proven methodology gets you from idea to implementation faster than traditional AI consulting approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Assessment</h3>
              <p className="text-gray-600">
                Assessment call to understand your challenges, followed by a strategy assessment of your current workflows and data landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Pilot Implementation</h3>
              <p className="text-gray-600">
                Start with a focused 2-4 week pilot project that delivers immediate value while building confidence in AI capabilities and training employees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Scale & Optimize</h3>
              <p className="text-gray-600">
                Expand successful pilots across your organization with proper governance, monitoring, and continuous improvement frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tydal AI */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Tydal AI?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <HiRocketLaunch className="text-xl text-primary" />
                <h3 className="text-lg font-semibold">Speed to Value</h3>
              </div>
              <p className="text-gray-600 mb-6">
                While others talk about AI strategies, we deliver working solutions in weeks. Our focus on quick wins means you see ROI before making larger investments.
              </p>

              <div className="flex items-center gap-2 mb-3">
                <HiTag className="text-xl text-primary" />
                <h3 className="text-lg font-semibold">SMB-Focused</h3>
              </div>
              <p className="text-gray-600">
                Built specifically for small and mid-sized businesses. We understand your constraints, budgets, and need for practical solutions that work immediately.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <HiCog className="text-xl text-primary" />
                <h3 className="text-lg font-semibold">Technical Excellence</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Deep expertise across all major AI platforms and cloud providers. We're not vendor-locked or technology-biased—we choose what works best for you.
              </p>

              <div className="flex items-center gap-2 mb-3">
                <HiArrowTrendingUp className="text-xl text-primary" />
                <h3 className="text-lg font-semibold">Proven Results</h3>
              </div>
              <p className="text-gray-600">
                Track record of measurable improvements: 30% faster response times, 40% error reduction, 25% cycle time improvements—real metrics from real clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience the difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's start with one conversation. No sales pitch, no lengthy discovery process—just a practical discussion about what's possible for your business.
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
                <li><Link href="/services" className="hover:text-white transition-colors">Quick Wins</Link></li>
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