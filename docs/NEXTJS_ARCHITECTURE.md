# Next.js 15 App Router Architecture Documentation - Tydal AI Website

## Overview
This document provides comprehensive documentation of the Next.js 15.5.4 App Router architecture implementation for the Tydal AI website, focusing on architectural patterns, file organization, and development practices.

## Technology Stack

### Core Framework
- **Next.js**: 15.5.4 with App Router
- **React**: 19.1.0 (latest stable)
- **TypeScript**: 5.x for type safety
- **Node.js**: Modern ES modules and latest features

### Build and Development
- **Turbopack**: Fast development server and bundling
- **ESM**: Full ES modules support
- **TypeScript**: Strict mode enabled for maximum type safety

## Project Configuration

### Next.js Configuration
**File**: `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Static export for hosting flexibility
  trailingSlash: true,     // Consistent URL structure for static hosting
  images: {
    unoptimized: true      // Static export compatibility
  }
};

export default nextConfig;
```

**Key Configuration Decisions**:
- **Static Export**: Enables deployment to any static hosting service
- **Trailing Slashes**: Ensures consistent URL structure for SEO
- **Unoptimized Images**: Required for static export, handled manually for performance

### TypeScript Configuration
**File**: `tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Key Features**:
- **Strict Mode**: Maximum type safety enforcement
- **Path Mapping**: `@/*` aliases for clean imports
- **Bundler Resolution**: Latest module resolution for optimal bundling

## App Router Architecture

### Directory Structure
```
src/
├── app/                          # App Router pages and layouts
│   ├── layout.tsx               # Root layout with global metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles and CSS variables
│   ├── about/                   # About page route
│   │   └── page.tsx
│   ├── services/                # Services page route
│   │   └── page.tsx
│   ├── case-studies/            # Case studies page route
│   │   └── page.tsx
│   ├── insights/                # Insights section
│   │   ├── page.tsx            # Insights listing page
│   │   └── [slug]/             # Dynamic insight articles
│   │       └── page.tsx
│   └── contact/                 # Contact section
│       ├── layout.tsx          # Contact-specific layout
│       └── page.tsx
├── components/                  # Reusable UI components
│   ├── ui/                     # Base UI components
│   └── case-study/             # Page-specific components
└── lib/                        # Utility functions and configurations
    └── utils.ts
```

### Root Layout Implementation
**File**: `src/app/layout.tsx`

The root layout establishes the foundation for all pages:

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font optimization with Next.js font system
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Comprehensive metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://tydalai.com'),
  title: {
    default: "Tydal AI - Transform Your Business",
    template: "%s | Tydal AI"
  },
  // ... comprehensive metadata (documented in SEO_IMPLEMENTATION.md)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**Architecture Patterns**:
1. **Font Optimization**: Uses Next.js font system for performance
2. **CSS Variables**: Font variables for consistent typography
3. **Metadata Template**: Template-based title generation for all pages
4. **Global Styles**: Antialiased rendering for crisp text
5. **Type Safety**: Readonly props and strict TypeScript

### Page Implementation Patterns

#### Static Pages Pattern
**Example**: `src/app/about/page.tsx`

```typescript
import { Metadata } from 'next';

// Page-specific metadata
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Tydal AI...',
  // ... page-specific SEO configuration
};

export default function About() {
  // Structured data for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    // ... schema configuration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-background">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Page Content */}
      {/* Navigation, sections, footer components */}
    </div>
  );
}
```

#### Dynamic Pages Pattern
**Example**: `src/app/insights/[slug]/page.tsx`

```typescript
import { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic metadata generation
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    // ... dynamic metadata based on article content
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    notFound(); // Next.js 404 handling
  }

  // Article-specific structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    // ... article schema
  };

  return (
    <div>
      {/* Article content */}
    </div>
  );
}
```

#### Nested Layout Pattern
**Example**: `src/app/contact/layout.tsx`

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Tydal AI...',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="contact-layout">
      {/* Contact-specific layout elements */}
      {children}
    </div>
  );
}
```

## Component Architecture

### Component Organization
```
components/
├── ui/                     # Base UI components (design system)
│   ├── card.tsx           # Reusable card component with variants
│   ├── badge.tsx          # Badge component for categorization
│   ├── button.tsx         # Button component with variants
│   ├── input.tsx          # Form input components
│   ├── textarea.tsx       # Form textarea component
│   └── metrics-display.tsx # Specialized metrics component
└── case-study/            # Page-specific components
    ├── floating-sidebar.tsx
    ├── visual-timeline.tsx
    ├── modular-grid.tsx
    └── interactive-hover.tsx
```

### Component Design Patterns

#### Variant-Based Component Pattern
**Example**: `src/components/ui/card.tsx`

```typescript
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
      // ... more variants
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
```

**Architecture Benefits**:
1. **Variant System**: Flexible styling for different use cases
2. **Forward Refs**: Proper ref forwarding for React patterns
3. **TypeScript**: Full type safety with extended HTML props
4. **Composition**: Easy to compose with other components
5. **Tailwind Integration**: Utility-first styling with variant mapping

## Styling Architecture

### CSS Variables System
**File**: `src/app/globals.css`

```css
@import "tailwindcss";

:root {
  /* Light mode colors - primarily white */
  --background: #ffffff;
  --foreground: #1A1A1A;

  /* Brand colors - matching Tydal green */
  --primary: #10B981;
  --primary-dark: #059669;
  --primary-light: #34D399;

  /* Neutral scale - softer grays */
  --gray-50: #FAFBFC;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;

  /* Semantic colors */
  --success: #10B981;
  --success-light: #D1FAE5;
  --success-dark: #059669;
  --error: #DC2626;
  --error-light: #FEE2E2;
  --warning: #F59E0B;
  --warning-light: #FEF3C7;
  --info: #3B82F6;
  --info-light: #DBEAFE;
}
```

**Design System Features**:
1. **CSS Variables**: Consistent color system across all components
2. **Brand Colors**: Tydal green as primary with calculated variants
3. **Semantic Colors**: Success, error, warning, info for consistent UI
4. **Gray Scale**: 9-step gray scale for text and backgrounds
5. **Tailwind Integration**: Variables work seamlessly with Tailwind classes

### Tailwind CSS v4 Integration
- **Modern Architecture**: Uses latest Tailwind CSS v4 features
- **CSS Variables**: Native integration with CSS custom properties
- **JIT Compilation**: Just-in-time compilation for optimal bundle size
- **PostCSS**: Modern CSS processing pipeline

## Data Management Patterns

### Static Data Pattern
**Example**: Article data structure

```typescript
// Static article data with full TypeScript typing
const articles: Record<string, ArticleData> = {
  'how-to-pick-your-first-ai-workflow': {
    title: "How to Pick Your First AI Workflow",
    excerpt: "A practical guide to identifying the best starting point for AI implementation in your business.",
    content: `Full article content...`,
    author: "Tydal AI Team",
    publishedDate: "2024-12-26T10:00:00Z",
    lastModified: "2024-12-26T10:00:00Z",
    readTime: "5 min read",
    category: "Getting Started",
    keywords: ["AI workflow", "business automation", "AI implementation"],
    featured: true
  },
  // ... more articles
};
```

### Dynamic Import Pattern
```typescript
// Component lazy loading for performance
const DynamicComponent = dynamic(() => import('@/components/heavy-component'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Client-side only if needed
});
```

## Performance Optimization Patterns

### Image Optimization
```typescript
import Image from 'next/image';

// Optimized image component usage
<Image
  src="/tydal-logo-green.png"
  alt="Tydal AI - Return to homepage"
  width={160}
  height={60}
  className="h-12 w-auto"
  priority // For above-the-fold images
/>
```

### Font Optimization
```typescript
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Optimal font loading
});
```

### Code Splitting
- **Automatic**: Next.js automatically splits code at page level
- **Dynamic Imports**: Manual code splitting for heavy components
- **Route-based**: Each page is a separate chunk

## SEO Integration Patterns

### Metadata Generation
```typescript
// Template-based metadata in root layout
export const metadata: Metadata = {
  title: {
    template: '%s | Tydal AI',
    default: 'Tydal AI - Transform Your Business'
  },
  // ...
};

// Page-specific metadata override
export const metadata: Metadata = {
  title: 'About Us', // Becomes "About Us | Tydal AI"
  // ...
};
```

### Structured Data Integration
```typescript
// Inline structured data in pages
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // ...
};

return (
  <div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    {/* Page content */}
  </div>
);
```

## Development Patterns

### Import Organization
```typescript
// 1. React and Next.js imports
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party library imports
import { HiRocketLaunch, HiCog } from 'react-icons/hi2';

// 3. Internal component imports
import { Card, Badge } from '@/components/ui';

// 4. Utility imports
import { cn } from '@/lib/utils';
```

### Type Safety Patterns
```typescript
// Interface definitions for props
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Proper async component typing
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  // ...
}
```

### Error Handling Patterns
```typescript
// 404 handling in dynamic routes
import { notFound } from 'next/navigation';

export default async function Page({ params }: PageProps) {
  const data = await getData(params.slug);

  if (!data) {
    notFound(); // Triggers Next.js 404 page
  }

  return <div>{/* Page content */}</div>;
}
```

## Build and Deployment Architecture

### Static Export Configuration
- **Output**: Static HTML/CSS/JS files
- **Hosting**: Compatible with any static hosting service
- **CDN**: Optimal for global CDN distribution
- **Performance**: No server required, maximum performance

### Asset Optimization
- **Images**: Manual optimization for static export
- **Fonts**: Optimized loading with font display swap
- **CSS**: Purged unused styles in production
- **JavaScript**: Tree-shaking and minification

## Security Patterns

### Content Security
```typescript
// Safe HTML rendering for structured data
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### Input Sanitization
```typescript
// TypeScript ensures type safety for user inputs
interface FormData {
  name: string;
  email: string;
  message: string;
}
```

## Testing Architecture

### Component Testing Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── card.tsx
│   │   └── card.test.tsx    # Co-located tests
│   └── __tests__/           # Additional test files
├── app/
│   └── __tests__/           # Page tests
└── lib/
    └── __tests__/           # Utility tests
```

### Testing Patterns
```typescript
// Component testing with React Testing Library
import { render, screen } from '@testing-library/react';
import Card from './card';

describe('Card Component', () => {
  test('renders with default variant', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
```

## Best Practices and Conventions

### File Naming
- **Pages**: `page.tsx` for App Router pages
- **Layouts**: `layout.tsx` for nested layouts
- **Components**: PascalCase (`Card.tsx`)
- **Utilities**: camelCase (`utils.ts`)

### Code Organization
- **Co-location**: Keep related files close (tests with components)
- **Separation**: Separate UI components from business logic
- **Reusability**: Design components for reuse across pages

### Performance Guidelines
- **Bundle Size**: Monitor and optimize bundle size
- **Core Web Vitals**: Optimize for LCP, FID, CLS
- **Image Optimization**: Use appropriate formats and sizing
- **Font Loading**: Optimize font loading strategy

## Future Architecture Considerations

### Scalability Patterns
- **Microfrontends**: Architecture supports future microfrontend integration
- **API Integration**: Ready for future API integration patterns
- **State Management**: Architecture supports future state management solutions

### Migration Paths
- **SSR Migration**: Easy migration to SSR if needed
- **Database Integration**: Architecture supports future database integration
- **CMS Integration**: Ready for headless CMS integration

---

## Conclusion

The Tydal AI website implements a modern, scalable Next.js 15 App Router architecture that prioritizes:

1. **Performance**: Static export with optimal loading
2. **SEO**: Comprehensive metadata and structured data
3. **Developer Experience**: Type safety and modern tooling
4. **Maintainability**: Clear patterns and organization
5. **Scalability**: Architecture ready for future enhancements

This architecture provides a solid foundation for the current requirements while maintaining flexibility for future growth and feature additions.

**Implementation Date**: December 26, 2024
**Next.js Version**: 15.5.4
**Status**: ✅ Production Ready