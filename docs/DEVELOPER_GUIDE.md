# Developer Onboarding & Technical Implementation Guide - Tydal AI Website

## Overview
This comprehensive guide provides everything a developer needs to get started with the Tydal AI website project, from initial setup through advanced development patterns and deployment procedures.

## Prerequisites

### Required Software
Before starting development, ensure you have the following installed:

#### Node.js and Package Manager
- **Node.js**: Version 18.x or later (Latest LTS recommended)
- **npm**: Version 9.x or later (comes with Node.js)
- **Optional**: pnpm or yarn for alternative package management

#### Development Tools
- **Git**: Version 2.x or later for version control
- **VS Code**: Recommended IDE with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint

#### Browser Development Tools
- **Chrome DevTools**: For debugging and performance analysis
- **React Developer Tools**: Browser extension for React debugging
- **Tailwind CSS DevTools**: For design system debugging

### System Requirements
- **Operating System**: macOS, Windows, or Linux
- **RAM**: Minimum 8GB, 16GB recommended for optimal performance
- **Storage**: At least 2GB free space for dependencies and build files

## Project Setup

### Initial Setup
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd tydal-ai-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000` to view the development site.

### Development Scripts
The project includes several npm scripts for different development tasks:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",      // Start development server with Turbopack
    "build": "next build --turbopack",  // Build for production
    "start": "next start",              // Start production server
    "lint": "eslint"                    // Run ESLint for code quality
  }
}
```

#### Script Details
- **`npm run dev`**: Starts the development server with hot reloading and Turbopack for faster builds
- **`npm run build`**: Creates an optimized production build with static export
- **`npm run start`**: Starts a production server (requires `npm run build` first)
- **`npm run lint`**: Runs ESLint to check code quality and consistency

### Environment Configuration
The project uses Next.js configuration for environment management:

#### Next.js Configuration
**File**: `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Static export for hosting flexibility
  trailingSlash: true,     // Consistent URL structure
  images: {
    unoptimized: true      // Required for static export
  }
};
```

#### Development Environment
- **Hot Reloading**: Automatic page refresh on file changes
- **Error Overlay**: In-browser error reporting
- **Fast Refresh**: React state preservation during updates
- **Turbopack**: Ultra-fast bundler for development

## Project Architecture

### Directory Structure
```
tydal-ai-website/
├── docs/                           # Project documentation
│   ├── SEO_IMPLEMENTATION.md      # SEO documentation
│   ├── NEXTJS_ARCHITECTURE.md     # Next.js architecture guide
│   ├── DESIGN_SYSTEM.md           # Design system documentation
│   ├── TAILWIND_CONFIGURATION.md  # Tailwind CSS guide
│   └── DEVELOPER_GUIDE.md          # This file
├── public/                         # Static assets
│   ├── favicon.ico                 # Favicon and icons
│   ├── tydal-logo-green.png       # Brand assets
│   ├── og-*.png                   # Open Graph images
│   └── robots.txt                 # SEO configuration
├── src/                           # Source code
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   ├── globals.css            # Global styles
│   │   ├── about/                 # About page
│   │   ├── services/              # Services page
│   │   ├── case-studies/          # Case studies page
│   │   ├── insights/              # Insights section
│   │   │   ├── page.tsx           # Insights listing
│   │   │   └── [slug]/            # Dynamic article pages
│   │   └── contact/               # Contact section
│   ├── components/                # Reusable components
│   │   ├── ui/                    # Base UI components
│   │   │   ├── card.tsx           # Card component
│   │   │   ├── button.tsx         # Button component
│   │   │   ├── badge.tsx          # Badge component
│   │   │   └── input.tsx          # Input component
│   │   └── case-study/            # Page-specific components
│   └── lib/                       # Utility functions
│       └── utils.ts               # Class merging utility
├── .next/                         # Next.js build output (gitignored)
├── node_modules/                  # Dependencies (gitignored)
├── .gitignore                     # Git ignore rules
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Project dependencies and scripts
├── postcss.config.mjs             # PostCSS configuration
├── README.md                      # Project overview
├── todo.md                        # Project tasks and progress
└── tsconfig.json                  # TypeScript configuration
```

### Technology Stack
- **Frontend Framework**: Next.js 15.5.4 with App Router
- **React Version**: 19.1.0 (latest stable)
- **TypeScript**: 5.x for type safety
- **Styling**: Tailwind CSS v4 with CSS variables
- **Icons**: React Icons (Hero Icons, Simple Icons, Font Awesome)
- **Build Tool**: Turbopack for fast development and builds
- **Deployment**: Static export compatible with any hosting service

## Development Workflow

### File Creation Patterns

#### Creating New Pages
1. **Static Pages** (e.g., `/about`)
   ```bash
   mkdir src/app/about
   touch src/app/about/page.tsx
   ```

2. **Dynamic Pages** (e.g., `/blog/[slug]`)
   ```bash
   mkdir -p src/app/blog/[slug]
   touch src/app/blog/[slug]/page.tsx
   ```

#### Page Template Structure
```typescript
import { Metadata } from 'next';

// Page-specific metadata
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
  // ... additional metadata
};

export default function PageName() {
  // Structured data schema
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

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200">
        {/* Navigation content */}
      </nav>

      {/* Page Content */}
      <main>
        {/* Page sections */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        {/* Footer content */}
      </footer>
    </div>
  );
}
```

### Component Development

#### Creating New Components
1. **UI Components** (reusable across the app)
   ```bash
   touch src/components/ui/new-component.tsx
   ```

2. **Page-Specific Components**
   ```bash
   mkdir src/components/page-name
   touch src/components/page-name/specific-component.tsx
   ```

#### Component Template Structure
```typescript
import React from 'react';
import { cn } from '@/lib/utils';

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  // Additional props
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-background border border-gray-200',
      secondary: 'bg-gray-50 border border-gray-300',
      accent: 'bg-primary/5 border border-primary/20'
    };

    const sizes = {
      sm: 'p-3 text-sm',
      md: 'p-4 text-base',
      lg: 'p-6 text-lg'
    };

    return (
      <div
        className={cn(
          'rounded-md transition-colors',
          variants[variant],
          sizes[size],
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

Component.displayName = 'Component';

export default Component;
```

### Styling Development

#### Using Tailwind CSS
1. **Utility-First Approach**: Use Tailwind utility classes for styling
2. **Component Variants**: Create variant-based styling systems
3. **Custom CSS Variables**: Leverage the existing CSS variable system
4. **Responsive Design**: Mobile-first responsive approach

#### Example Styling Patterns
```typescript
// Basic styling
<div className="bg-white shadow-md rounded-lg p-6">

// Responsive styling
<div className="text-base md:text-lg lg:text-xl">

// Interactive states
<button className="bg-primary hover:bg-primary-dark transition-colors">

// Component composition
<Card variant="marketing" padding="lg">
  <Badge variant="success">Featured</Badge>
  <Button variant="primary" size="lg">Get Started</Button>
</Card>
```

### SEO Implementation

#### Adding SEO to New Pages
1. **Page Metadata**: Define comprehensive metadata
2. **Structured Data**: Add appropriate schema.org markup
3. **Open Graph**: Include social media sharing metadata
4. **Sitemap Update**: Add new pages to sitemap generation

#### SEO Checklist
- [ ] Unique title and description
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Structured data implementation
- [ ] Internal linking strategy
- [ ] Mobile-responsive design
- [ ] Fast loading performance

## Code Quality Standards

### TypeScript Guidelines
1. **Strict Mode**: All TypeScript files use strict mode
2. **Interface Definitions**: Define interfaces for all props and data structures
3. **Type Safety**: Avoid `any` type, use proper type annotations
4. **Generic Types**: Use generics for reusable components

#### TypeScript Best Practices
```typescript
// Good: Proper interface definition
interface UserData {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Good: Generic component props
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Good: Proper function typing
const processUserData = (user: UserData): UserData => {
  return { ...user, name: user.name.trim() };
};
```

### ESLint Configuration
The project uses ESLint for code quality enforcement:

**File**: `eslint.config.mjs`
```javascript
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]
```

#### Code Quality Rules
- **Consistent Formatting**: Use Prettier for code formatting
- **No Unused Variables**: Remove unused imports and variables
- **Consistent Naming**: Use camelCase for variables, PascalCase for components
- **Import Organization**: Organize imports by type (React, third-party, internal)

### Git Workflow

#### Branch Strategy
- **main**: Production-ready code
- **develop**: Integration branch (if using)
- **feature/[feature-name]**: Feature development branches
- **fix/[issue-description]**: Bug fix branches

#### Commit Message Convention
Use conventional commit format:
```
type(scope): description

types: feat, fix, docs, style, refactor, test, chore
scopes: seo, ui, components, pages, config
```

Examples:
```
feat(seo): add structured data for article pages
fix(ui): resolve button hover state issue
docs(readme): update installation instructions
```

## Testing Strategy

### Testing Setup (Future Implementation)
The project is prepared for comprehensive testing:

#### Unit Testing
- **Jest**: JavaScript testing framework
- **React Testing Library**: Component testing utilities
- **@testing-library/user-event**: User interaction simulation

#### Integration Testing
- **Playwright**: End-to-end testing framework
- **API Testing**: Test API endpoints and data fetching

#### Testing File Organization
```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── button.test.tsx      # Co-located unit tests
├── app/
│   └── __tests__/               # Page integration tests
└── __tests__/
    ├── setup.ts                 # Test setup configuration
    └── utils.test.ts            # Utility function tests
```

#### Testing Best Practices
1. **Test Behavior, Not Implementation**: Focus on user interactions
2. **Descriptive Test Names**: Clearly describe what is being tested
3. **Test Edge Cases**: Include error states and boundary conditions
4. **Mock External Dependencies**: Use mocks for API calls and external services

## Performance Optimization

### Development Performance
1. **Turbopack**: Ultra-fast development bundler
2. **Fast Refresh**: Preserves React state during updates
3. **Incremental Compilation**: Only recompiles changed files
4. **Efficient Hot Reloading**: Instant updates without full page refresh

### Production Performance
1. **Static Export**: No server required, maximum performance
2. **Code Splitting**: Automatic page-level code splitting
3. **Image Optimization**: Next.js Image component with optimization
4. **CSS Optimization**: Tailwind CSS purges unused styles

### Performance Monitoring
- **Core Web Vitals**: Monitor LCP, FID, CLS metrics
- **Bundle Analysis**: Use Next.js bundle analyzer
- **Lighthouse Audits**: Regular performance, accessibility, and SEO audits

## Debugging and Development Tools

### Browser DevTools
1. **React Developer Tools**: Component tree inspection
2. **Chrome DevTools**: Performance profiling and debugging
3. **Tailwind CSS DevTools**: Design system debugging

### VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Debugging Techniques
1. **Console Logging**: Strategic console.log statements
2. **React DevTools**: Component state and props inspection
3. **Network Tab**: API request monitoring
4. **Source Maps**: Debug original TypeScript source

## Deployment

### Build Process
1. **Development Build**: `npm run dev` for development server
2. **Production Build**: `npm run build` creates optimized static files
3. **Export Verification**: Test the static export locally

### Static Export
The project is configured for static export:
- **Output Directory**: `.next/out/` contains all static files
- **Asset Optimization**: Images, CSS, and JavaScript are optimized
- **SEO Files**: Sitemap, robots.txt, and meta tags included

### Hosting Options
The static export is compatible with:
- **Vercel**: Automatic deployment from Git
- **Netlify**: Static site hosting with CDN
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting for open source projects
- **Any CDN**: Cloudflare, AWS CloudFront, etc.

### Deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test the production build locally
- [ ] Verify all pages load correctly
- [ ] Check SEO metadata on all pages
- [ ] Test responsive design on multiple devices
- [ ] Validate performance with Lighthouse
- [ ] Confirm analytics tracking (when implemented)

## Troubleshooting

### Common Issues

#### Development Server Issues
**Problem**: Dev server won't start
**Solutions**:
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear Next.js cache: `rm -rf .next`
3. Check Node.js version: `node --version` (should be 18+)

#### Build Issues
**Problem**: Build fails with TypeScript errors
**Solutions**:
1. Run type checking: `npx tsc --noEmit`
2. Fix type errors in indicated files
3. Check for missing dependencies

#### Styling Issues
**Problem**: Tailwind classes not working
**Solutions**:
1. Check PostCSS configuration
2. Verify Tailwind import in globals.css
3. Clear browser cache and restart dev server

#### Performance Issues
**Problem**: Slow development server
**Solutions**:
1. Ensure Turbopack is enabled (`--turbopack` flag)
2. Close unnecessary browser tabs
3. Restart the development server

### Getting Help
1. **Documentation**: Check project documentation in `/docs`
2. **Issue Tracking**: Create GitHub issues for bugs
3. **Team Communication**: Use established team channels
4. **External Resources**: Next.js, React, and Tailwind documentation

## Advanced Development

### Custom Hooks
Create reusable hooks for common functionality:

```typescript
// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
```

### Context Providers
Implement global state management:

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface ThemeState {
  isDark: boolean;
  primaryColor: string;
}

type ThemeAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_PRIMARY_COLOR'; payload: string };

const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
} | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

### API Integration
Prepare for future API integration:

```typescript
// src/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.tydalai.com';

export class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }
}

export const apiClient = new ApiClient();
```

## Security Considerations

### Data Security
1. **Input Sanitization**: Sanitize all user inputs
2. **XSS Prevention**: Use React's built-in XSS protection
3. **HTTPS**: Ensure all production traffic uses HTTPS
4. **Environment Variables**: Keep sensitive data in environment variables

### Dependencies
1. **Regular Updates**: Keep dependencies updated
2. **Security Audits**: Run `npm audit` regularly
3. **Vulnerability Scanning**: Use automated security scanning
4. **Minimal Dependencies**: Only include necessary packages

## Documentation Standards

### Code Documentation
1. **JSDoc Comments**: Document complex functions and components
2. **README Updates**: Keep README.md current
3. **Inline Comments**: Explain complex logic
4. **Type Definitions**: Well-defined TypeScript interfaces

### Project Documentation
1. **Architecture Decisions**: Document major architectural choices
2. **Setup Instructions**: Clear setup and installation guides
3. **API Documentation**: Document any API integrations
4. **Deployment Guides**: Step-by-step deployment instructions

---

## Quick Reference

### Essential Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Install new dependency
npm install package-name

# Install dev dependency
npm install -D package-name
```

### Key File Locations
- **Configuration**: `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`
- **Styles**: `src/app/globals.css`
- **Components**: `src/components/ui/`
- **Pages**: `src/app/`
- **Documentation**: `docs/`

### Important URLs
- **Development**: `http://localhost:3000`
- **Production**: `https://tydalai.com` (when deployed)
- **Documentation**: `/docs` directory

---

## Conclusion

This developer guide provides a comprehensive foundation for working with the Tydal AI website. The project is built with modern web development best practices, comprehensive documentation, and a clear development workflow.

Key strengths of the current implementation:
1. **Modern Stack**: Next.js 15, React 19, TypeScript 5, Tailwind v4
2. **Performance**: Turbopack, static export, optimized builds
3. **Developer Experience**: Hot reloading, type safety, excellent tooling
4. **Maintainability**: Clear architecture, component patterns, documentation
5. **SEO Ready**: Comprehensive SEO implementation
6. **Production Ready**: Optimized for deployment and performance

For additional questions or advanced usage scenarios, refer to the specific documentation files in the `/docs` directory or reach out to the development team.

**Last Updated**: December 26, 2024
**Project Status**: ✅ Production Ready