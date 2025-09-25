import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dashboard' | 'marketing' | 'interactive' | 'hero' | 'timeline' | 'floating' | 'modular' | 'accordion';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'dashboard', padding = 'md', children, ...props }, ref) => {
    const variants = {
      dashboard: 'bg-background border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-150',
      marketing: 'bg-background shadow-lg border-0 bg-gradient-to-br from-background to-background',
      interactive: 'bg-background border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-200 cursor-pointer',
      hero: 'bg-gradient-to-br from-primary/5 to-background shadow-xl border border-gray-100 overflow-hidden',
      timeline: 'bg-background border-l-4 border-primary shadow-sm hover:shadow-md transition-all duration-200',
      floating: 'bg-background/80 backdrop-blur-md border border-gray-200/50 shadow-lg sticky top-4',
      modular: 'bg-background border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200',
      accordion: 'bg-background border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer'
    };

    const paddings = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    };

    return (
      <div
        className={cn(
          'rounded-md',
          variants[variant],
          paddings[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;