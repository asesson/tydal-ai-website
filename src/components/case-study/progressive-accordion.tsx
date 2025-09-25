'use client';

import React, { useState } from 'react';
import { Card, Badge } from '@/components/ui';
import MetricsDisplay from '@/components/ui/metrics-display';
import { CaseStudyProps } from '@/types/case-study';
import { cn } from '@/lib/utils';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  icon: string;
  metrics?: { value: string; description: string; subtitle?: string; trend?: 'up' | 'down' | 'neutral'; }[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  children,
  isOpen,
  onClick,
  icon,
  metrics
}) => (
  <Card variant="accordion" className="overflow-hidden" onClick={onClick}>
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {metrics && !isOpen && (
          <div className="ml-4 flex space-x-2">
            {metrics.slice(0, 2).map((metric, index) => (
              <span
                key={index}
                className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
              >
                {metric.value}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={cn(
        "w-6 h-6 flex items-center justify-center transition-transform duration-200",
        isOpen ? "rotate-180" : "rotate-0"
      )}>
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <div className={cn(
      "transition-all duration-200 ease-in-out overflow-hidden",
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    )}>
      <div className="px-6 pb-6 border-t border-gray-100">
        <div className="pt-6">
          {children}
        </div>
      </div>
    </div>
  </Card>
);

const ProgressiveAccordion: React.FC<CaseStudyProps> = ({ data, className }) => {
  const [openSection, setOpenSection] = useState<string | null>('results');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <Card variant="marketing" padding="lg" className="text-center">
        <Badge variant={data.categoryColor || 'info'} className="mb-4">
          {data.category}
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {data.title}
        </h2>
        <p className="text-gray-600">
          Expand sections to explore the transformation journey
        </p>
      </Card>

      {/* Results Section - Open by default */}
      <AccordionSection
        title="Results & Impact"
        icon="✓"
        isOpen={openSection === 'results'}
        onClick={() => toggleSection('results')}
        metrics={data.metrics}
      >
        <div className="space-y-6">
          <MetricsDisplay metrics={data.metrics} variant="compact" />
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-primary">Annual Impact:</strong> {data.annualImpact}
            </p>
          </div>
        </div>
      </AccordionSection>

      {/* Challenge Section */}
      <AccordionSection
        title="Challenge"
        icon="⚠"
        isOpen={openSection === 'challenge'}
        onClick={() => toggleSection('challenge')}
      >
        <p className="text-gray-600 leading-relaxed">
          {data.challenge}
        </p>
      </AccordionSection>

      {/* Solution Section */}
      <AccordionSection
        title="Solution"
        icon="💡"
        isOpen={openSection === 'solution'}
        onClick={() => toggleSection('solution')}
      >
        <p className="text-gray-600 leading-relaxed">
          {data.solution}
        </p>
      </AccordionSection>

      {/* Implementation Section */}
      <AccordionSection
        title="Implementation"
        icon="🔧"
        isOpen={openSection === 'implementation'}
        onClick={() => toggleSection('implementation')}
      >
        <ul className="space-y-3">
          {data.implementation.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
        {data.timeline && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Timeline:</strong> {data.timeline}
            </p>
          </div>
        )}
      </AccordionSection>

      {/* Client Quote */}
      {data.clientQuote && (
        <AccordionSection
          title="Client Testimonial"
          icon="💬"
          isOpen={openSection === 'testimonial'}
          onClick={() => toggleSection('testimonial')}
        >
          <blockquote className="text-lg italic text-gray-700 mb-4">
            "{data.clientQuote.text}"
          </blockquote>
          <div className="text-gray-600">
            <p className="font-semibold">{data.clientQuote.author}</p>
            <p className="text-sm">{data.clientQuote.role}</p>
          </div>
        </AccordionSection>
      )}
    </div>
  );
};

export default ProgressiveAccordion;