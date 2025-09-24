import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
  size?: 'sm' | 'md';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', size = 'md', children, ...props }, ref) => {
    const variants = {
      success: 'bg-success-light text-success-dark',
      error: 'bg-error-light text-error-dark',
      warning: 'bg-warning-light text-warning-dark',
      info: 'bg-info-light text-info-dark',
      neutral: 'bg-gray-100 text-gray-700'
    };

    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm'
    };

    return (
      <span
        className={cn(
          'inline-flex items-center rounded-full font-medium capitalize',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;