'use client';

import React, { useState } from 'react';
import { Card, Badge } from '@/components/ui';
import MetricsDisplay from '@/components/ui/metrics-display';
import { CaseStudyProps } from '@/types/case-study';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  expandedContent?: React.ReactNode;
  icon?: string;
  className?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  subtitle,
  children,
  expandedContent,
  icon,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      variant="interactive"
      className={cn(
        "transition-all duration-300 relative overflow-hidden",
        isHovered ? "scale-102 shadow-xl -translate-y-1" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => expandedContent && setIsExpanded(!isExpanded)}
    >
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {icon && (
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              {subtitle && (
                <p className="text-sm text-gray-500">{subtitle}</p>
              )}
            </div>
          </div>
          {expandedContent && (
            <div className={cn(
              "transition-transform duration-200",
              isExpanded ? "rotate-180" : ""
            )}>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="text-gray-600">
          {children}
        </div>

        {/* Expanded Content */}
        {expandedContent && (
          <div className={cn(
            "transition-all duration-300 overflow-hidden",
            isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}>
            <div className="pt-4 border-t border-gray-100">
              {expandedContent}
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none",
          isHovered ? "opacity-100" : ""
        )} />
      </div>
    </Card>
  );
};

const InteractiveHover: React.FC<CaseStudyProps> = ({ data, className }) => {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <Card variant="marketing" padding="lg" className="text-center relative overflow-hidden">
        <div className="relative z-10">
          <Badge variant={data.categoryColor || 'info'} className="mb-4">
            {data.category}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600">
            Hover over cards to see enhanced details • Click to expand
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
      </Card>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Challenge */}
        <InteractiveCard
          title="The Challenge"
          subtitle="What we were facing"
          icon="⚠️"
          expandedContent={
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <strong>Impact Areas:</strong> Processing efficiency, compliance risk, team productivity
              </p>
              <p className="text-sm text-gray-600">
                <strong>Business Impact:</strong> Delayed approvals, increased operational costs, team burnout
              </p>
            </div>
          }
        >
          <p className="leading-relaxed">{data.challenge}</p>
        </InteractiveCard>

        {/* Solution */}
        <InteractiveCard
          title="Our Solution"
          subtitle="How we transformed the process"
          icon="💡"
          expandedContent={
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> AI/ML, OCR, NLP, Automated Routing
              </p>
              <p className="text-sm text-gray-600">
                <strong>Integration:</strong> Seamless integration with existing systems and workflows
              </p>
            </div>
          }
        >
          <p className="leading-relaxed">{data.solution}</p>
        </InteractiveCard>
      </div>

      {/* Results Section */}
      <InteractiveCard
        title="Measurable Results"
        subtitle="The impact achieved"
        icon="📊"
        className="bg-gradient-to-r from-primary/5 to-primary/10"
        expandedContent={
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              <strong>Measurement Period:</strong> 12 months post-implementation
            </p>
            <p className="text-sm text-gray-600">
              <strong>ROI Timeline:</strong> Results visible within 6 weeks, full ROI achieved in 4 months
            </p>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-700">
                <strong className="text-primary">Annual Impact:</strong> {data.annualImpact}
              </p>
            </div>
          </div>
        }
      >
        <MetricsDisplay metrics={data.metrics} variant="compact" />
      </InteractiveCard>

      {/* Implementation Process */}
      <InteractiveCard
        title="Implementation Process"
        subtitle={data.timeline ? `Completed in ${data.timeline}` : "Rapid deployment approach"}
        icon="🔧"
        expandedContent={
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Phase 1: Discovery</h5>
                <p className="text-sm text-gray-600">Requirements analysis and system audit</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Phase 2: Development</h5>
                <p className="text-sm text-gray-600">Custom solution development and testing</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Phase 3: Deployment</h5>
                <p className="text-sm text-gray-600">Gradual rollout with team training</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Phase 4: Optimization</h5>
                <p className="text-sm text-gray-600">Performance monitoring and refinement</p>
              </div>
            </div>
          </div>
        }
      >
        <div className="grid md:grid-cols-2 gap-4">
          {data.implementation.map((item, index) => (
            <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </InteractiveCard>

      {/* Client Testimonial */}
      {data.clientQuote && (
        <InteractiveCard
          title="Client Testimonial"
          subtitle="What our client says"
          icon="💬"
          className="bg-gradient-to-r from-gray-50 to-white"
          expandedContent={
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <strong>Industry:</strong> {data.category}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Implementation Date:</strong> {data.timeline ? `Completed in ${data.timeline}` : 'Recent'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Follow-up:</strong> Continued partnership for additional automation initiatives
              </p>
            </div>
          }
        >
          <blockquote className="text-lg italic text-gray-700 mb-4">
            "{data.clientQuote.text}"
          </blockquote>
          <div className="text-gray-600">
            <p className="font-semibold">{data.clientQuote.author}</p>
            <p className="text-sm">{data.clientQuote.role}</p>
          </div>
        </InteractiveCard>
      )}

      {/* Call to Action */}
      <Card variant="hero" padding="xl" className="text-center bg-gradient-to-r from-primary/10 to-primary/5">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready for Similar Results?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Every business transformation starts with a conversation. Let's explore how these principles can be applied to your specific challenges and opportunities.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 cursor-pointer">
            Schedule Discovery Call
          </div>
          <div className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transform hover:scale-105 transition-all duration-200 cursor-pointer">
            Download Case Study
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InteractiveHover;