import React from 'react';
import { Card, Badge } from '@/components/ui';
import MetricsDisplay from '@/components/ui/metrics-display';
import { CaseStudyProps } from '@/types/case-study';
import { cn } from '@/lib/utils';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  status: 'before' | 'during' | 'after';
  metrics?: { value: string; description: string; subtitle?: string; trend?: 'up' | 'down' | 'neutral'; }[];
  className?: string;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  title,
  description,
  status,
  metrics,
  className
}) => {
  const statusColors = {
    before: 'bg-error/10 border-error/20',
    during: 'bg-warning/10 border-warning/20',
    after: 'bg-primary/10 border-primary/20'
  };

  const statusIcons = {
    before: '⚠️',
    during: '🔄',
    after: '✅'
  };

  return (
    <div className={cn("relative", className)}>
      <Card variant="timeline" className={cn("ml-8", statusColors[status])}>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {step}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-2">
              <span className="text-lg mr-2">{statusIcons[status]}</span>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {description}
            </p>
            {metrics && (
              <div className="mt-4">
                <MetricsDisplay metrics={metrics} variant="compact" />
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Timeline connector */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
      <div className="absolute left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>
    </div>
  );
};

const VisualTimeline: React.FC<CaseStudyProps> = ({ data, className }) => {
  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <Card variant="marketing" padding="lg" className="text-center">
        <Badge variant={data.categoryColor || 'info'} className="mb-4">
          {data.category}
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {data.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow the transformation journey from challenge to measurable success
        </p>
      </Card>

      {/* Timeline */}
      <div className="relative space-y-8">
        {/* Step 1: Challenge */}
        <TimelineStep
          step={1}
          title="The Challenge"
          description={data.challenge}
          status="before"
        />

        {/* Step 2: Solution Implementation */}
        <TimelineStep
          step={2}
          title="Solution Implementation"
          description={data.solution}
          status="during"
        />

        {/* Step 3: Implementation Details */}
        <TimelineStep
          step={3}
          title="Implementation Process"
          description={data.implementation.join(' • ')}
          status="during"
        />

        {/* Step 4: Results */}
        <TimelineStep
          step={4}
          title="Results & Impact"
          description="Measurable outcomes achieved through the implementation"
          status="after"
          metrics={data.metrics}
        />
      </div>

      {/* Final Impact */}
      <Card variant="hero" padding="lg" className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Transformation Complete
        </h3>
        <div className="p-6 bg-primary/5 rounded-lg mb-6">
          <p className="text-lg text-gray-700">
            <strong className="text-primary">Annual Impact:</strong> {data.annualImpact}
          </p>
        </div>

        {data.timeline && (
          <div className="text-gray-600">
            <p><strong>Total Timeline:</strong> {data.timeline}</p>
          </div>
        )}
      </Card>

      {/* Client Quote */}
      {data.clientQuote && (
        <Card variant="marketing" className="text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl text-primary/20 mb-4">"</div>
            <blockquote className="text-xl italic text-gray-700 mb-6">
              {data.clientQuote.text}
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold">{data.clientQuote.author}</p>
              <p className="text-sm">{data.clientQuote.role}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default VisualTimeline;