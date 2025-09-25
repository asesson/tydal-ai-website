import React from 'react';
import { cn } from '@/lib/utils';

export interface MetricProps {
  value: string;
  description: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export interface MetricsDisplayProps {
  metrics: MetricProps[];
  variant?: 'default' | 'compact' | 'hero' | 'floating';
  className?: string;
}

const Metric: React.FC<MetricProps> = ({ value, description, subtitle, trend, className }) => (
  <div className={cn("text-center p-4 bg-white rounded-lg shadow-sm", className)}>
    <div className={cn(
      "text-2xl font-bold mb-1",
      trend === 'up' ? "text-primary" :
      trend === 'down' ? "text-error" :
      "text-primary"
    )}>
      {value}
    </div>
    <div className="text-sm text-gray-600 mb-1">{description}</div>
    {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
  </div>
);

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({
  metrics,
  variant = 'default',
  className
}) => {
  const variants = {
    default: 'grid grid-cols-1 gap-4',
    compact: 'grid grid-cols-3 gap-3',
    hero: 'grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto',
    floating: 'space-y-3'
  };

  return (
    <div className={cn(variants[variant], className)}>
      {metrics.map((metric, index) => (
        <Metric
          key={index}
          {...metric}
          className={variant === 'hero' ? 'p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200' : undefined}
        />
      ))}
    </div>
  );
};

export default MetricsDisplay;