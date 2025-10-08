'use client';

import { Card, Badge } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { HiRocketLaunch, HiCog, HiChartBar, HiShieldCheck, HiLightBulb, HiSparkles, HiXMark } from 'react-icons/hi2';
import { useState, useRef } from 'react';
import { getAllArticles } from '@/data/articles';

export default function Insights() {
  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const allArticlesRef = useRef<HTMLElement>(null);

  // Get all articles from centralized data file
  const articles = getAllArticles();

  // Define all categories with their metadata
  const categories = [
    {
      name: "Getting Started",
      icon: HiRocketLaunch,
      description: "First steps and foundational concepts"
    },
    {
      name: "Best Practices",
      icon: HiShieldCheck,
      description: "Proven strategies and guidelines"
    },
    {
      name: "Implementation",
      icon: HiCog,
      description: "Hands-on guides and workflows"
    },
    {
      name: "Strategy",
      icon: HiLightBulb,
      description: "Planning and decision-making"
    },
    {
      name: "Advanced Strategies",
      icon: HiSparkles,
      description: "Complex use cases and optimization"
    },
    {
      name: "Business Value",
      icon: HiChartBar,
      description: "ROI measurement and metrics"
    }
  ];

  // Helper function to get article count by category
  const getArticleCount = (categoryName: string) => {
    return articles.filter(article => article.category === categoryName).length;
  };

  // Helper function to filter articles by category
  const filteredArticles = selectedCategory
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  // Function to handle category click
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    // Scroll to All Articles section
    setTimeout(() => {
      allArticlesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Function to clear category filter
  const clearFilter = () => {
    setSelectedCategory(null);
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Insights & Resources | Tydal AI",
    "description": "Expert insights on AI implementation, business automation strategies, and practical guides for transforming your business with artificial intelligence.",
    "url": "https://tydalai.com/insights",
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
          "name": "Insights",
          "item": "https://tydalai.com/insights"
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
              <Link key={index} href={`/insights/${article.slug}`}>
                <Card variant="marketing" className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
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
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* All Articles */}
      <section ref={allArticlesRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
                <p className="text-lg text-gray-600">
                  {selectedCategory
                    ? `Showing ${filteredArticles.length} ${filteredArticles.length === 1 ? 'article' : 'articles'} in ${selectedCategory}`
                    : 'Comprehensive library of AI implementation resources'
                  }
                </p>
              </div>
              {selectedCategory && (
                <button
                  onClick={clearFilter}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <HiXMark className="text-xl" />
                  Clear Filter
                </button>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link key={index} href={`/insights/${article.slug}`}>
                <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
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
              </Link>
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
            {categories.map((category) => {
              const Icon = category.icon;
              const count = getArticleCount(category.name);
              const isActive = selectedCategory === category.name;

              return (
                <Card
                  key={category.name}
                  className={`text-center p-6 hover:shadow-lg transition-all cursor-pointer ${
                    isActive ? 'ring-2 ring-primary shadow-lg bg-green-50' : ''
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className={`text-4xl ${isActive ? 'text-primary' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <span className="text-primary text-sm font-medium">
                    {count} {count === 1 ? 'article' : 'articles'} →
                  </span>
                </Card>
              );
            })}
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