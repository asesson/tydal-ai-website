# 🌊 Tydal AI Website

A modern, responsive website for Tydal AI consulting firm, built with Next.js and Tailwind CSS. Features compelling content integration, professional design, and optimized performance.

## ✨ Features

- **Modern Design**: Professional aesthetic with Stripe/Circle-inspired design system
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Static generation with ~117kB first load JS
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: WCAG AA compliant design and focus management
- **Tailwind CSS v4**: Latest version with inline theme configuration
- **Component Library**: Reusable UI components for easy maintenance

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── case-studies/      # Case studies page
│   ├── insights/          # Blog/insights page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles & design tokens
│   └── layout.tsx         # Root layout
├── components/
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       ├── input.tsx      # Input component
│       ├── textarea.tsx   # Textarea component
│       ├── badge.tsx      # Badge component
│       └── index.ts       # Component exports
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

The website implements a comprehensive design system inspired by industry leaders:

### Colors
- **Primary**: #635BFF (Stripe-inspired indigo)
- **Grays**: 9-step scale from #FAFBFC to #0F1419
- **Semantic**: Success (green), Error (red), Warning (amber), Info (blue)

### Typography
- **Font**: Inter (primary), JetBrains Mono (code)
- **Scale**: Display (48px) → Caption (12px)
- **Weights**: 400, 500, 600, 700

### Spacing
- **Base Unit**: 4px
- **Scale**: 4px → 96px using consistent multipliers

## 📄 Pages Overview

### Homepage
- Hero section with compelling value proposition
- Trust indicators (cloud providers, frameworks)
- Quick wins preview with social proof
- Case study highlights with metrics

### Services
- Three-tier structure: Quick Wins → Foundations → Scale & Governance
- Timeline indicators and detailed feature lists
- Results-focused messaging with typical outcomes

### About
- "We're builders, not buzzwords" messaging
- Four core principles with visual icons
- Three-step process explanation
- Credibility and differentiation factors

### Case Studies
- Two detailed case studies with before/after metrics
- Professional Services email automation
- Financial Services workflow automation
- Implementation process overview

### Contact
- Comprehensive contact form with validation
- FAQ section addressing common concerns
- Multiple contact methods and fast-track options
- Clear value proposition for the initial call

### Insights
- Blog-style layout with featured articles
- Newsletter signup with compelling copy
- Category browsing and topic organization
- Sample articles covering implementation guidance

## 🔧 Technical Details

### Framework & Tools
- **Next.js 15.5.4** with App Router
- **Tailwind CSS v4** with inline theme configuration
- **TypeScript** for type safety
- **ESLint** for code quality

### Performance
- All pages statically generated
- Optimized bundle sizes
- Lazy loading and code splitting
- Web Vitals optimized

### Accessibility
- WCAG AA compliant
- Keyboard navigation support
- Screen reader compatible
- Focus management and indicators

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Vercel deployment:**
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## 🔮 Future Enhancements

The codebase is structured for easy expansion:

- **Contact Form Backend**: Connect to email service (SendGrid, Resend)
- **CMS Integration**: Add Contentful/Sanity for blog management
- **Analytics**: Google Analytics, Vercel Analytics
- **Lead Tracking**: HubSpot, Salesforce integration
- **A/B Testing**: Experiment framework for conversion optimization
- **Internationalization**: Multi-language support
- **E-commerce**: Stripe integration for digital products

## 📝 Content Strategy

The website content follows a strategic approach:

1. **Homepage**: Immediate value proposition with social proof
2. **Services**: Clear three-tier progression showing growth path
3. **About**: Credibility building with principles and process
4. **Case Studies**: Detailed social proof with specific metrics
5. **Contact**: Low-friction conversion with clear next steps
6. **Insights**: Thought leadership and SEO content

## 🎯 Image & Icon Suggestions

For completing the visual design:

### Homepage
- **Hero**: Abstract AI/wave visualization representing "Tydal"
- **Services**: Process flow icons, timeline graphics
- **Social Proof**: Metric dashboards, before/after comparisons

### About
- **Team**: Professional headshots (when team grows)
- **Process**: Step-by-step workflow diagrams
- **Values**: Icon representations of principles

### Case Studies
- **Results**: Interactive charts and graphs
- **Workflows**: Before/after process diagrams
- **Testimonials**: Client company logos

### General
- **Cloud Providers**: AWS, Azure, Google Cloud logos
- **Technology**: Integration diagrams
- **Social Media**: Professional imagery for sharing

## 📞 Support

For questions about this codebase or implementation:
- Review the component documentation in `/src/components/ui/`
- Check the deployment guide in `DEPLOYMENT.md`
- Follow Next.js best practices for any modifications

Built with ❤️ for Tydal AI
