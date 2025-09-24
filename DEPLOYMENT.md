# Tydal AI Website - Deployment Guide

## Quick Deployment to Vercel (Recommended)

### Option 1: GitHub Integration (Easiest)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Next.js and configure build settings
5. Click "Deploy" - your site will be live in minutes!

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts to configure your project
# Vercel will automatically detect Next.js settings
```

### Option 3: Manual Upload
1. Run `npm run build` to create production build
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and drag/drop the entire project folder

## Alternative Deployment Options

### Netlify
1. Run `npm run build`
2. Upload the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Traditional Web Hosting
1. Run `npm run build && npm run export` (you may need to add export script)
2. Upload the `out` folder to your web hosting service

## Environment Variables
Currently no environment variables are required, but for future features you may need:
- `NEXT_PUBLIC_SITE_URL` - Your production domain
- Email service API keys for contact form
- Analytics tracking IDs

## Custom Domain Setup
1. After deployment, go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., tydalai.com)
4. Update your DNS records as instructed

## Performance Optimizations
The site is already optimized with:
- ✅ Static generation for all pages
- ✅ Tailwind CSS for minimal bundle size
- ✅ Next.js Image optimization ready
- ✅ Responsive design for all devices

## Post-Deployment Checklist
- [ ] Test all navigation links
- [ ] Verify contact form functionality (when backend is added)
- [ ] Check mobile responsiveness
- [ ] Test page load speeds
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up monitoring (Vercel Analytics, etc.)

## Adding Features Later
The codebase is structured for easy expansion:
- Contact form can be connected to email service
- Blog content can be managed with CMS
- Analytics and tracking can be added
- E-commerce functionality can be integrated
- Multi-language support can be implemented

## Build Information
- Framework: Next.js 15.5.4
- Styling: Tailwind CSS v4
- Build size: ~117kB first load JS
- All pages are statically generated for optimal performance

Your Tydal AI website is ready for production! 🚀