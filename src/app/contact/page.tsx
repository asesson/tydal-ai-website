'use client';

import { useState } from 'react';
import { Button, Card, Input, Textarea } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    challenge: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = 'New Contact Form Submission - Schedule Call Request';
    const body = `
New contact form submission:

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Challenge: ${formData.challenge}
Preferred Time: ${formData.preferredTime}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@tydalagentai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
  };

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
              <Link href="/insights" className="text-gray-600 hover:text-primary transition-colors">Insights</Link>
              <Link href="/contact" className="text-primary font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's start with one conversation.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Schedule a discovery call. We'll walk through your workflows, identify quick wins, and show you what's possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />

                <Input
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@company.com"
                  required
                />

                <Textarea
                  label="What challenge are you trying to solve?"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  placeholder="Describe your current workflow challenges or AI goals..."
                  required
                />

                <Input
                  label="Preferred time for a call"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekday mornings, Tuesday/Thursday afternoons"
                />

                <Button type="submit" size="lg" className="w-full">
                  Schedule your call
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours to schedule your assessment call.
                </p>
              </form>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">What to expect from your call</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <HiArrowRight className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quick assessment of your current workflows and pain points</span>
                  </li>
                  <li className="flex items-start">
                    <HiArrowRight className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identification of immediate AI opportunities in your business</span>
                  </li>
                  <li className="flex items-start">
                    <HiArrowRight className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Overview of our approach and what a pilot project might look like</span>
                  </li>
                  <li className="flex items-start">
                    <HiArrowRight className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>No sales pressure—just practical insights and next steps</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Other ways to connect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:info@tydalagentai.com" className="text-primary hover:text-primary-dark transition-colors">
                      info@tydalagentai.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">LinkedIn</h4>
                    <a href="https://www.linkedin.com/company/tydal-agent-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                      linkedin.com/company/tydal-agent-ai
                    </a>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens after I submit this form?</h3>
              <p className="text-gray-600 mb-6">
                We'll review your information and respond within 24 hours with 2-3 time slots that match your preferences. No automated booking—we personally review each request.
              </p>

              <h3 className="text-lg font-semibold mb-2">Is there any cost for the initial call?</h3>
              <p className="text-gray-600 mb-6">
                Absolutely not. The 20-minute strategy call is completely free with no obligations. It's our way of understanding if there's a mutual fit.
              </p>

              <h3 className="text-lg font-semibold mb-2">What if I'm not ready to implement anything yet?</h3>
              <p className="text-gray-600">
                That's perfectly fine. Many of our best clients started with exploratory conversations months before they were ready to move forward. We're here when you're ready.
              </p>
            </div>

            <div>

              <h3 className="text-lg font-semibold mb-2">What size companies do you typically work with?</h3>
              <p className="text-gray-600 mb-6">
                Our sweet spot is small to mid-sized businesses (10-500 employees) looking to implement AI without massive enterprise overhead or complexity.
              </p>

              <h3 className="text-lg font-semibold mb-2">How quickly can we start a project?</h3>
              <p className="text-gray-600">
                For Quick Wins projects, we can typically start within 1-2 weeks after the initial consultation and scoping. Larger implementations may require 2-4 weeks for planning.
              </p>
            </div>
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