import React from 'react';
import { Card, Badge } from '@/components/ui';
import MetricsDisplay from '@/components/ui/metrics-display';
import { CaseStudyProps } from '@/types/case-study';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  variant?: 'default' | 'highlight' | 'subtle';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  children,
  icon,
  variant = 'default',
  size = 'medium',
  className
}) => {
  const variants = {
    default: 'bg-background',
    highlight: 'bg-primary/5 border-primary/20',
    subtle: 'bg-gray-50'
  };

  const sizes = {
    small: 'col-span-1',
    medium: 'col-span-2',
    large: 'col-span-3'
  };

  return (
    <Card
      variant="modular"
      className={cn(
        sizes[size],
        variants[variant],
        className
      )}
    >
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-sm">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-600">
        {children}
      </div>
    </Card>
  );
};

const ModularGrid: React.FC<CaseStudyProps> = ({ data, className }) => {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <Card variant="marketing" padding="lg" className="text-center">
        <Badge variant={data.categoryColor || 'info'} className="mb-4">
          {data.category}
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {data.title}
        </h2>
      </Card>

      {/* Modular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Challenge Module */}
        <ModuleCard
          title="Challenge"
          icon="⚠️"
          size="large"
          variant="subtle"
        >
          <p className="leading-relaxed">{data.challenge}</p>
        </ModuleCard>

        {/* Solution Module */}
        <ModuleCard
          title="Solution"
          icon="💡"
          size="large"
          variant="default"
        >
          <p className="leading-relaxed">{data.solution}</p>
        </ModuleCard>

        {/* Results Module - Highlighted */}
        <ModuleCard
          title="Key Results"
          icon="📊"
          size="large"
          variant="highlight"
        >
          <MetricsDisplay metrics={data.metrics.slice(0, 3)} variant="compact" />
        </ModuleCard>

        {/* Implementation Steps */}
        <ModuleCard
          title="Implementation"
          icon="🔧"
          size="medium"
        >
          <ul className="space-y-2">
            {data.implementation.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </ModuleCard>

        {/* Timeline */}
        {data.timeline && (
          <ModuleCard
            title="Timeline"
            icon="⏱️"
            size="small"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {data.timeline}
              </div>
              <div className="text-xs text-gray-500">
                Implementation period
              </div>
            </div>
          </ModuleCard>
        )}

        {/* Annual Impact */}
        <ModuleCard
          title="Annual Impact"
          icon="💰"
          size="large"
          variant="highlight"
        >
          <div className="text-center py-4">
            <div className="text-lg font-semibold text-primary mb-2">
              {data.annualImpact}
            </div>
            <div className="text-sm text-gray-600">
              Total value delivered annually
            </div>
          </div>
        </ModuleCard>

        {/* Client Quote */}
        {data.clientQuote && (
          <ModuleCard
            title="Client Testimonial"
            icon="💬"
            size="large"
            variant="subtle"
          >
            <blockquote className="italic text-sm mb-3">
              "{data.clientQuote.text}"
            </blockquote>
            <div className="text-xs text-gray-600">
              <p className="font-medium">{data.clientQuote.author}</p>
              <p>{data.clientQuote.role}</p>
            </div>
          </ModuleCard>
        )}

        {/* Additional Metrics */}
        {data.metrics.length > 3 && (
          <ModuleCard
            title="Additional Metrics"
            icon="📈"
            size="medium"
          >
            <div className="grid grid-cols-1 gap-3">
              {data.metrics.slice(3).map((metric, index) => (
                <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>
          </ModuleCard>
        )}
      </div>

      {/* Call to Action */}
      <Card variant="marketing" className="text-center bg-gradient-to-r from-primary/5 to-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Similar Results for Your Business?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Every business is different, but the principles remain the same. Let's explore what's possible for your specific workflows and challenges.
        </p>
        <div className="flex justify-center">
          <div className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors cursor-pointer">
            Schedule a Discovery Call
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModularGrid;