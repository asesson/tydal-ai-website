import React from 'react';
import { cn } from '@/lib/utils';
import { trackButtonClick } from '@/lib/analytics';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  analyticsLabel?: string;
  analyticsLocation?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, children, disabled, analyticsLabel, analyticsLocation, onClick, ...props }, ref) => {
    const variants = {
      primary: 'bg-gradient-to-b from-primary to-primary-dark border border-primary-dark text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm',
      secondary: 'bg-transparent border-1.5 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
      ghost: 'bg-transparent border-none text-primary hover:bg-primary/10',
      destructive: 'bg-gradient-to-b from-error to-error-dark border border-error-dark text-white hover:shadow-md hover:-translate-y-0.5'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Track button click if analytics props are provided
      if (analyticsLabel) {
        const buttonText = typeof children === 'string' ? children : analyticsLabel;
        const location = analyticsLocation || 'unknown';
        trackButtonClick(buttonText, location);
      }

      // Call the original onClick handler if provided
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;