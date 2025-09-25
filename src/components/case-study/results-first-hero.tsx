import React from 'react';
import { Card, Badge } from '@/components/ui';
import MetricsDisplay from '@/components/ui/metrics-display';
import { CaseStudyProps } from '@/types/case-study';
import { cn } from '@/lib/utils';

const ResultsFirstHero: React.FC<CaseStudyProps> = ({ data, className }) => {
  return (
    <div className={cn("w-full space-y-12", className)}>
      {/* Hero Section with Results */}
      <Card variant="hero" padding="xl" className="text-center w-full">
        <div className="max-w-7xl mx-auto">
          <Badge variant={data.categoryColor || 'info'} className="mb-8 text-base px-4 py-2">
            {data.category}
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {data.title}
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            See the measurable impact achieved through intelligent automation
          </p>

          {/* Key Metrics Display */}
          <div className="mb-12">
            <MetricsDisplay
              metrics={data.metrics}
              variant="hero"
              className="w-full"
            />
          </div>

          {/* Annual Impact */}
          <div className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl max-w-4xl mx-auto border border-primary/10">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              <strong className="text-primary">Annual Impact:</strong> {data.annualImpact}
            </p>
          </div>
        </div>
      </Card>

      {/* Story Details */}
      <Card variant="marketing" className="w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center text-error font-bold text-lg mr-4">
                  ⚠️
                </div>
                Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-4">
                  💡
                </div>
                Solution
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.solution}
              </p>
            </div>

            {/* Implementation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center text-warning font-bold text-lg mr-4">
                  🔧
                </div>
                Implementation
              </h3>
              <ul className="space-y-3">
                {data.implementation.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {data.timeline && (
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-base text-gray-700">
                    <strong className="text-primary">Timeline:</strong> {data.timeline}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Client Quote */}
      {data.clientQuote && (
        <Card variant="marketing" className="text-center w-full">
          <div className="max-w-5xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-8">
              💬
            </div>
            <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-8 leading-relaxed font-light">
              "{data.clientQuote.text}"
            </blockquote>
            <div className="text-gray-600">
              <p className="font-semibold text-xl">{data.clientQuote.author}</p>
              <p className="text-lg text-gray-500 mt-2">{data.clientQuote.role}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ResultsFirstHero;