import { Card, Badge } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { HiRocketLaunch, HiCog, HiChartBar, HiArrowRight } from 'react-icons/hi2';

export default function Insights() {
  const articles = [
    {
      title: "How to Pick Your First AI Workflow",
      excerpt: "A practical guide to identifying the best starting point for AI implementation in your business.",
      readTime: "5 min read",
      category: "Getting Started",
      featured: true
    },
    {
      title: "The 7 Guardrails Every SMB Needs Before Rolling Out AI",
      excerpt: "Essential safeguards and compliance measures for responsible AI deployment.",
      readTime: "8 min read",
      category: "Best Practices",
      featured: true
    },
    {
      title: "From Pilot to Production: A 30-Day Checklist",
      excerpt: "Step-by-step guide to scaling successful AI pilots across your organization.",
      readTime: "6 min read",
      category: "Implementation",
      featured: true
    },
    {
      title: "Why AI Adoption Fails—and How to Prevent It",
      excerpt: "Common pitfalls in AI implementation and proven strategies to avoid them.",
      readTime: "7 min read",
      category: "Strategy",
      featured: true
    },
    {
      title: "Email AI: Beyond Auto-Reply",
      excerpt: "Advanced email automation strategies that go beyond simple response generation.",
      readTime: "4 min read",
      category: "Use Cases",
      featured: false
    },
    {
      title: "ROI Calculator: Measuring AI Impact",
      excerpt: "Framework for calculating and tracking return on investment from AI initiatives.",
      readTime: "5 min read",
      category: "Business Value",
      featured: false
    }
  ];

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
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
              <Link href="/insights" className="text-primary font-medium">Insights</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Practical AI guidance for SMB leaders
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            No-nonsense insights, real-world strategies, and actionable advice for implementing AI in growing businesses.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-lg text-gray-600">Start here for essential AI implementation guidance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {articles.filter(article => article.featured).map((article, index) => (
              <Card key={index} variant="marketing" className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="mb-4">
                  <Badge variant="info" size="sm">{article.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.readTime}</span>
                  <span className="text-primary hover:text-primary-dark font-medium">Read more →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-lg text-gray-600">Comprehensive library of AI implementation resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="mb-4">
                  <Badge variant="neutral" size="sm">{article.category}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.readTime}</span>
                  <span className="text-primary hover:text-primary-dark font-medium">Read →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Topic</h2>
            <p className="text-lg text-gray-600">Find exactly what you're looking for</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-center mb-4">
                <HiRocketLaunch className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
              <p className="text-gray-600 text-sm mb-4">First steps and foundational concepts</p>
              <span className="text-primary text-sm font-medium">5 articles →</span>
            </Card>

            <Card className="text-center p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-center mb-4">
                <HiCog className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm mb-4">Hands-on guides and best practices</p>
              <span className="text-primary text-sm font-medium">8 articles →</span>
            </Card>

            <Card className="text-center p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-center mb-4">
                <HiChartBar className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Value</h3>
              <p className="text-gray-600 text-sm mb-4">ROI measurement and strategy</p>
              <span className="text-primary text-sm font-medium">6 articles →</span>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to move from reading to doing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            These insights are great, but nothing beats a personalized conversation about your specific challenges and opportunities.
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