import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dashboard' | 'marketing' | 'interactive';
  padding?: 'sm' | 'md' | 'lg';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'dashboard', padding = 'md', children, ...props }, ref) => {
    const variants = {
      dashboard: 'bg-background border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-150',
      marketing: 'bg-background shadow-lg border-0 bg-gradient-to-br from-background to-background',
      interactive: 'bg-background border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all duration-200 cursor-pointer'
    };

    const paddings = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
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