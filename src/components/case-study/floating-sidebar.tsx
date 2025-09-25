'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import MetricsDisplay from '@/components/ui/metrics-display';
import { CaseStudyProps } from '@/types/case-study';
import { cn } from '@/lib/utils';

const FloatingSidebar: React.FC<CaseStudyProps> = ({ data, className }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Header */}
          <Card variant="marketing" padding="lg">
            <Badge variant={data.categoryColor || 'info'} className="mb-4">
              {data.category}
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>
            <p className="text-gray-600 text-lg">
              A comprehensive transformation story with measurable results
            </p>
          </Card>

          {/* Challenge Section */}
          <Card variant="marketing">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center text-error font-bold text-xl mr-4 flex-shrink-0">
                ⚠️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {data.challenge}
                </p>
              </div>
            </div>
          </Card>

          {/* Solution Section */}
          <Card variant="marketing">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4 flex-shrink-0">
                💡
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {data.solution}
                </p>
              </div>
            </div>
          </Card>

          {/* Implementation Section */}
          <Card variant="marketing">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center text-warning font-bold text-xl mr-4 flex-shrink-0">
                🔧
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Process</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.implementation.map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                {data.timeline && (
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-gray-700">
                      <strong className="text-primary">Timeline:</strong> {data.timeline}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Client Quote */}
          {data.clientQuote && (
            <Card variant="marketing" className="bg-gradient-to-r from-primary/5 to-primary/10">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">
                  💬
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-6 max-w-2xl mx-auto">
                  "{data.clientQuote.text}"
                </blockquote>
                <div className="text-gray-600">
                  <p className="font-semibold text-lg">{data.clientQuote.author}</p>
                  <p className="text-sm">{data.clientQuote.role}</p>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Floating Sidebar */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-8 space-y-6">
            {/* Key Metrics */}
            <Card variant="floating" padding="lg" className="bg-white">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                📊 Key Results
              </h4>
              <MetricsDisplay metrics={data.metrics} variant="floating" />
            </Card>

            {/* Annual Impact */}
            <Card variant="floating" padding="lg" className="bg-primary/5 border-primary/20">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                💰 Annual Impact
              </h4>
              <div className="text-center">
                <p className="text-sm text-gray-700 font-medium">
                  {data.annualImpact}
                </p>
              </div>
            </Card>

            {/* Quick Facts */}
            <Card variant="floating" padding="lg" className="bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                ⚡ Quick Facts
              </h4>
              <div className="space-y-3">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600">Category</div>
                  <div className="font-medium text-gray-900">{data.category}</div>
                </div>
                {data.timeline && (
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-sm text-gray-600">Implementation</div>
                    <div className="font-medium text-gray-900">{data.timeline}</div>
                  </div>
                )}
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600">Key Metrics</div>
                  <div className="font-medium text-gray-900">{data.metrics.length}</div>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card variant="floating" padding="lg" className="bg-primary text-white text-center">
              <h4 className="text-lg font-semibold mb-3">
                Similar Results?
              </h4>
              <p className="text-sm mb-4 opacity-90">
                Let's discuss how we can achieve similar outcomes for your business
              </p>
              <div className="px-4 py-2 bg-white/20 rounded-lg font-medium hover:bg-white/30 transition-colors cursor-pointer">
                Get Started
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingSidebar;