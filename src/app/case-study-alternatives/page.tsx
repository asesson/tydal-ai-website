'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, Badge } from '@/components/ui';
import ResultsFirstHero from '@/components/case-study/results-first-hero';
import ProgressiveAccordion from '@/components/case-study/progressive-accordion';
import VisualTimeline from '@/components/case-study/visual-timeline';
import ModularGrid from '@/components/case-study/modular-grid';
import FloatingSidebar from '@/components/case-study/floating-sidebar';
import InteractiveHover from '@/components/case-study/interactive-hover';
import { sampleCaseStudy } from '@/data/sample-case-study';

type ApproachType = 'hero' | 'accordion' | 'timeline' | 'modular' | 'floating' | 'interactive';

interface ApproachOption {
  id: ApproachType;
  name: string;
  description: string;
  pros: string[];
  bestFor: string;
  inspiration: string;
}

const approachOptions: ApproachOption[] = [
  {
    id: 'hero',
    name: 'Results-First Hero',
    description: 'Lead with impact metrics in a prominent hero section, followed by story details',
    pros: ['Immediate impact visibility', 'Executive-friendly', 'Follows 2024 best practices'],
    bestFor: 'Stakeholder presentations, high-impact metrics',
    inspiration: 'Stripe customer stories'
  },
  {
    id: 'accordion',
    name: 'Progressive Disclosure',
    description: 'Expandable sections that reveal details on demand',
    pros: ['Scannable overview', 'Mobile-friendly', 'Reduces cognitive load'],
    bestFor: 'Complex case studies, mobile users',
    inspiration: 'Linear documentation style'
  },
  {
    id: 'timeline',
    name: 'Visual Timeline',
    description: 'Step-by-step visual progression showing the transformation journey',
    pros: ['Strong narrative flow', 'Process transparency', 'Visual engagement'],
    bestFor: 'Process-focused stories, transformation narratives',
    inspiration: 'Modern storytelling approach'
  },
  {
    id: 'modular',
    name: 'Modular Grid',
    description: 'Mix-and-match card components for different case study needs',
    pros: ['Flexible layouts', 'Component reusability', 'Visual variety'],
    bestFor: 'Varied content types, design system flexibility',
    inspiration: 'Component-based design systems'
  },
  {
    id: 'floating',
    name: 'Floating Sidebar',
    description: 'Sticky metrics panel with detailed story content',
    pros: ['Constant metric visibility', 'Clean content separation', 'Desktop-optimized'],
    bestFor: 'Long-form content, desktop users, detailed stories',
    inspiration: 'Dashboard and documentation layouts'
  },
  {
    id: 'interactive',
    name: 'Interactive Hover States',
    description: 'Subtle animations and expanded details on hover/click',
    pros: ['Modern feel', 'Progressive disclosure', 'Enhanced engagement'],
    bestFor: 'Interactive experiences, modern brands, tech-savvy users',
    inspiration: 'Modern web interactions'
  }
];

const CaseStudyAlternatives: React.FC = () => {
  const [selectedApproach, setSelectedApproach] = useState<ApproachType>('hero');

  const renderCaseStudy = () => {
    switch (selectedApproach) {
      case 'hero':
        return <ResultsFirstHero data={sampleCaseStudy} />;
      case 'accordion':
        return <ProgressiveAccordion data={sampleCaseStudy} />;
      case 'timeline':
        return <VisualTimeline data={sampleCaseStudy} />;
      case 'modular':
        return <ModularGrid data={sampleCaseStudy} />;
      case 'floating':
        return <FloatingSidebar data={sampleCaseStudy} />;
      case 'interactive':
        return <InteractiveHover data={sampleCaseStudy} />;
      default:
        return <ResultsFirstHero data={sampleCaseStudy} />;
    }
  };

  const selectedOption = approachOptions.find(option => option.id === selectedApproach);

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
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">Design Exploration</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Alternative Case Study Card Designs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore 6 different approaches to presenting case study content, each optimized for different use cases and user needs while maintaining the Tydal AI design system.
            </p>
          </div>

          {/* Approach Selector */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {approachOptions.map((option) => (
              <Card
                key={option.id}
                variant="interactive"
                padding="sm"
                className={`cursor-pointer transition-all duration-200 ${
                  selectedApproach === option.id
                    ? 'ring-2 ring-primary bg-primary/5 border-primary/30'
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedApproach(option.id)}
              >
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {option.name}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {option.inspiration}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Selected Approach Info */}
          {selectedOption && (
            <Card variant="marketing" className="mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {selectedOption.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedOption.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedOption.pros.map((pro, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Best For</h4>
                  <p className="text-sm text-gray-600 mb-3">{selectedOption.bestFor}</p>
                  <div className="text-xs text-gray-500">
                    <strong>Inspired by:</strong> {selectedOption.inspiration}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Case Study Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Live Preview: {selectedOption?.name}
            </h2>
            <p className="text-gray-600">
              Interact with the case study below to see how this approach works in practice
            </p>
          </div>

          {/* Render Selected Component */}
          <div className="case-study-preview">
            {renderCaseStudy()}
          </div>
        </div>
      </section>

      {/* Implementation Notes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <Card variant="marketing" className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Implementation Notes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Built with Next.js 15 and TypeScript</li>
                  <li>• Uses Tailwind CSS v4 with custom design tokens</li>
                  <li>• Extends existing shadcn/ui component system</li>
                  <li>• Maintains WCAG AA accessibility compliance</li>
                  <li>• Fully responsive and mobile-optimized</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Design System</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Preserves Tydal green brand identity</li>
                  <li>• Uses established spacing and typography scales</li>
                  <li>• Follows Stripe/Circle design principles</li>
                  <li>• Consistent component variants and patterns</li>
                  <li>• Smooth animations and micro-interactions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <Image
              src="/tydal-logo-green.png"
              alt="Tydal AI Logo"
              width={160}
              height={60}
              className="h-8 w-auto mx-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Alternative case study designs for modern B2B SaaS
            </p>
            <p className="text-gray-500 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyAlternatives;