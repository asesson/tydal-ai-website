import { Card } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { FaAws, FaMicrosoft, FaGoogle } from 'react-icons/fa';
import { SiOpenai, SiAnthropic, SiGooglegemini } from 'react-icons/si';
import { HiLightningBolt, HiShieldCheck, HiTrendingUp, HiMail, HiUserGroup, HiCog, HiMicrophone, HiChat, HiLink } from 'react-icons/hi';

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "name": "Tydal AI",
    "alternateName": "Tydal Agent AI",
    "description": "AI consulting company helping small and mid-sized businesses unlock real value from artificial intelligence through strategic implementation and automation.",
    "url": "https://tydalai.com",
    "logo": "https://tydalai.com/tydal-logo-green.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@tydalagentai.com",
        "url": "https://tydalai.com/contact"
      },
      {
        "@type": "ContactPoint",
        "contactType": "business",
        "email": "hello@tydalai.com",
        "url": "https://tydalai.com/contact"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/tydal-agent-ai/?viewAsMember=true"
    ],
    "serviceType": [
      "AI Consulting",
      "Business Process Automation",
      "AI Implementation",
      "AI Strategy Development",
      "Workflow Automation",
      "AI Integration Services"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Small and mid-sized businesses (10-500 employees)"
    },
    "industry": "Technology Consulting",
    "foundingDate": "2024",
    "slogan": "Making advanced AI accessible to growing businesses",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Business Process Automation",
      "Workflow Optimization",
      "AI Implementation",
      "Digital Transformation"
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tydal AI - Transform Your Business",
    "description": "From automated workflows to data-driven decisions, Tydal AI helps small and mid-sized companies unlock real value from AI—fast, safe, and scalable.",
    "url": "https://tydalai.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Tydal AI"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tydalai.com"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
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
              <Link href="/case-studies" className="text-gray-600 hover:text-primary transition-colors">Case Studies</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
              <Link href="/insights" className="text-gray-600 hover:text-primary transition-colors">Insights</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Streamline operations. Amplify insights. Accelerate growth.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto">
            From automated workflows to data-driven decisions, Tydal AI helps small and
            mid-sized companies unlock real value from AI—fast, safe, and scalable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              View Success Stories
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-6">Works with</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                <div className="flex items-center gap-12 whitespace-nowrap">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaAws className="text-2xl" />
                    <span className="font-medium">AWS</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMicrosoft className="text-2xl" />
                    <span className="font-medium">Azure</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaGoogle className="text-2xl" />
                    <span className="font-medium">Google Cloud</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <SiOpenai className="text-2xl" />
                    <span className="font-medium">OpenAI</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <SiAnthropic className="text-2xl" />
                    <span className="font-medium">Anthropic</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <SiGooglegemini className="text-2xl" />
                    <span className="font-medium">Gemini</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMicrosoft className="text-2xl" />
                    <span className="font-medium">Copilot</span>
                  </div>

                  {/* Duplicate for seamless loop */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaAws className="text-2xl" />
                    <span className="font-medium">AWS</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMicrosoft className="text-2xl" />
                    <span className="font-medium">Azure</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaGoogle className="text-2xl" />
                    <span className="font-medium">Google Cloud</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <SiOpenai className="text-2xl" />
                    <span className="font-medium">OpenAI</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <SiAnthropic className="text-2xl" />
                    <span className="font-medium">Anthropic</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <SiGooglegemini className="text-2xl" />
                    <span className="font-medium">Gemini</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMicrosoft className="text-2xl" />
                    <span className="font-medium">Copilot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Key Benefits - Green Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiLightningBolt className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">First workflow live in weeks, not months</h3>
              <p className="text-gray-600">Get results fast with our proven implementation approach</p>
            </Card>
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiTrendingUp className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Measurable business impact</h3>
              <p className="text-gray-600">Every project tied to specific KPIs and outcomes</p>
            </Card>
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <HiShieldCheck className="text-4xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Responsible AI baked into every solution</h3>
              <p className="text-gray-600">Built-in safeguards and compliance monitoring</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Wins Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI adoption doesn't have to be complex or risky
            </h2>
            <p className="text-xl text-gray-600">
              We meet you where you are today and build solutions that grow with you tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="marketing" className="relative overflow-hidden">
              <div className="flex justify-center mb-4">
                <HiMail className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Smart Email Assistant</h3>
              <p className="text-gray-600 mb-4 text-center">Classify, summarize, and draft replies to reduce response times.</p>
            </Card>

            <Card variant="marketing" className="relative overflow-hidden">
              <div className="flex justify-center mb-4">
                <HiUserGroup className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sales Intelligence</h3>
              <p className="text-gray-600 mb-4 text-center">AI-powered research and outreach to boost pipeline.</p>
            </Card>

            <Card variant="marketing" className="relative overflow-hidden">
              <div className="flex justify-center mb-4">
                <HiCog className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Process Automation</h3>
              <p className="text-gray-600 mb-4 text-center">Eliminate repetitive back-office tasks and human error.</p>
            </Card>

            <Card variant="marketing" className="relative overflow-hidden">
              <div className="flex justify-center mb-4">
                <HiMicrophone className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Smart Meeting Notes</h3>
              <p className="text-gray-600 mb-4 text-center">Automatically capture, transcribe, and organize meeting insights.</p>
            </Card>

            <Card variant="marketing" className="relative overflow-hidden">
              <div className="flex justify-center mb-4">
                <HiChat className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Company Knowledge Chat</h3>
              <p className="text-gray-600 mb-4 text-center">Chat with your business data to get instant insights and answers.</p>
            </Card>

            <Card variant="marketing" className="relative overflow-hidden">
              <div className="flex justify-center mb-4">
                <HiLink className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Smart Connections</h3>
              <p className="text-gray-600 mb-4 text-center">Connect your tools and automate workflows with intelligent integrations.</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-lg"
            >
              See All Our AI Services
            </Link>
            <p className="text-gray-600 mt-4">
              Discover our complete range of <Link href="/services" className="text-primary hover:underline">AI consulting services</Link> and find the perfect solution for your business.
            </p>
          </div>

        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See how businesses like yours are creating measurable results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Customer Support Email Automation</h3>
                <p className="text-gray-600">3,000+ monthly support emails → streamlined response system</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">64%</div>
                  <div className="text-sm text-gray-600">faster response times</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">12%</div>
                  <div className="text-sm text-gray-600">lift in satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">hours reclaimed/week</div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Backoffice Process Automation</h3>
                <p className="text-gray-600">Document classification and data extraction</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-sm text-gray-600">reduction in cycle time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">reduced errors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">150</div>
                  <div className="text-sm text-gray-600">hours reclaimed/mo</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              View More Success Stories
            </Link>
            <p className="text-white mt-4 opacity-90">
              See detailed <Link href="/case-studies" className="text-white hover:underline font-medium">case studies</Link> and learn how we've helped businesses like yours transform with AI.
            </p>
          </div>

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
                width={140}
                height={50}
                className="h-8 w-auto mb-4"
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
