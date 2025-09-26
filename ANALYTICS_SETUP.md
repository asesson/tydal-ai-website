# Google Analytics 4 Setup Guide - Tydal AI Website

## Overview
This guide explains how to set up and use Google Analytics 4 (GA4) tracking on the Tydal AI website. The implementation includes comprehensive page view tracking, event tracking, and user interaction analytics.

## Setup Instructions

### 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or use an existing one
3. Navigate to Admin > Data Streams
4. Select your web data stream
5. Copy the Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Required: Your GA4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: Enable GA tracking in development mode
NEXT_PUBLIC_GA_DEBUG=false
```

### 3. Verification

The Analytics component will automatically:
- Load only in production builds (unless `NEXT_PUBLIC_GA_DEBUG=true`)
- Track page views on route changes
- Provide event tracking capabilities

## Implementation Details

### Files Created

1. **`src/lib/analytics.ts`** - Core analytics functions
2. **`src/components/analytics.tsx`** - React component for GA4 integration
3. **`src/lib/hooks/use-analytics.ts`** - Custom hook for easier usage
4. **`.env.example`** - Environment variable template

### Key Features

- ✅ **Page View Tracking**: Automatic tracking on route changes
- ✅ **Event Tracking**: Custom events for user interactions
- ✅ **Button Click Tracking**: Enhanced button component with analytics
- ✅ **Form Submission Tracking**: Contact form and lead generation events
- ✅ **File Download Tracking**: Automatic download event tracking
- ✅ **External Link Tracking**: Outbound link click tracking
- ✅ **Scroll Depth Tracking**: User engagement measurement
- ✅ **Enhanced Measurement**: Enabled for better automatic tracking

## Usage Examples

### Basic Event Tracking

```typescript
import { useAnalytics } from '@/lib/hooks/use-analytics';

function MyComponent() {
  const { trackCustomEvent, trackButton } = useAnalytics();

  const handleClick = () => {
    trackButton('Get Started', 'hero-section');
  };

  return <button onClick={handleClick}>Get Started</button>;
}
```

### Enhanced Button Component

The Button component now includes built-in analytics tracking:

```tsx
import Button from '@/components/ui/button';

// Button with analytics tracking
<Button
  analyticsLabel="Contact Us"
  analyticsLocation="footer"
  onClick={handleContactClick}
>
  Contact Us
</Button>
```

### Custom Event Tracking

```typescript
// Track custom business events
trackCustomEvent('consultation_requested', {
  event_category: 'conversion',
  event_label: 'AI Strategy Consultation',
  value: 1500,
  custom_parameters: {
    consultation_type: 'strategy',
    company_size: 'medium'
  }
});
```

### Lead Generation Tracking

```typescript
// Track lead generation
trackLead('consultation', 1500);
trackFormSubmission('form');
trackNewsletterSignup('homepage-hero');
```

## Available Tracking Functions

### Core Functions (from `@/lib/analytics`)

- `trackPageView(url, title)` - Track page views
- `trackEvent(name, parameters)` - Track custom events
- `trackButtonClick(name, location)` - Track button interactions
- `trackContactFormSubmission(method)` - Track form submissions
- `trackFileDownload(fileName, fileType)` - Track downloads
- `trackExternalLinkClick(url, linkText)` - Track outbound links
- `trackScrollDepth(percentage)` - Track scroll engagement
- `trackLeadGeneration(type, value)` - Track leads
- `trackConsultationBooking(type, value)` - Track bookings

### Hook Functions (from `useAnalytics()`)

All core functions are available through the `useAnalytics()` hook with React-optimized callbacks.

## Enhanced Measurement Features

The implementation automatically enables:

- **Scroll tracking** - Tracks 90% scroll depth
- **Outbound clicks** - Tracks external link clicks
- **Site search** - Disabled (can be enabled when search is implemented)
- **Video engagement** - Tracks video play, pause, complete
- **File downloads** - Tracks PDF, DOC, and other file downloads

## Event Categories

Events are organized into these categories:

- **`engagement`** - User interactions (buttons, scrolling, videos)
- **`conversion`** - Lead generation, form submissions, bookings
- **`outbound`** - External link clicks
- **`media`** - Video and multimedia interactions
- **`search`** - Search queries (when implemented)
- **`performance`** - Page timing and performance metrics

## Testing

### Development Testing

To test analytics in development mode:

1. Set `NEXT_PUBLIC_GA_DEBUG=true` in `.env.local`
2. Add your measurement ID
3. Open browser dev tools > Network tab
4. Look for requests to `google-analytics.com`

### Production Testing

1. Deploy with your GA4 measurement ID
2. Visit your live site
3. Check Google Analytics Real-time reports
4. Verify page views and events are appearing

### Browser Testing

Open browser console and run:

```javascript
// Check if analytics is loaded
console.log(window.gtag);
console.log(window.dataLayer);

// Test custom event
gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'manual_test'
});
```

## Best Practices

### Event Naming
- Use lowercase with underscores: `button_click`, `form_submit`
- Be descriptive but concise
- Use consistent naming patterns

### Event Parameters
- Always include `event_category` and `event_label`
- Add `value` for events with monetary significance
- Use `custom_parameters` for additional context

### Performance
- Analytics loads `afterInteractive` to not block page rendering
- Events are queued if analytics isn't loaded yet
- Minimal impact on Core Web Vitals

### Privacy
- No personally identifiable information (PII) is tracked
- All tracking respects user privacy settings
- Consider adding cookie consent if required by jurisdiction

## Troubleshooting

### Common Issues

1. **Events not showing in GA4**
   - Check measurement ID is correct
   - Verify environment variables are set
   - Ensure you're looking at the right property in GA4

2. **Analytics not loading in development**
   - Set `NEXT_PUBLIC_GA_DEBUG=true`
   - Check browser console for errors
   - Verify measurement ID format (G-XXXXXXXXXX)

3. **TypeScript errors**
   - Ensure all analytics imports are correct
   - Check that the global window types are properly declared

### Debug Commands

```bash
# Check environment variables
echo $NEXT_PUBLIC_GA_MEASUREMENT_ID

# Test build
npm run build

# Check for analytics errors in dev tools console
# Look for: "Analytics not enabled" messages
```

## Future Enhancements

Planned improvements include:

1. **A/B Testing Integration** - Track experiment variants
2. **Enhanced Ecommerce** - Detailed consultation booking tracking
3. **Custom Dimensions** - Company size, industry tracking
4. **Goal Tracking** - Conversion funnel analysis
5. **Attribution Analysis** - Multi-touch attribution setup

## Support

For questions about this implementation:

1. Check the [Google Analytics documentation](https://developers.google.com/analytics/devguides/collection/ga4)
2. Review the code in `src/lib/analytics.ts`
3. Test with browser dev tools
4. Verify setup in Google Analytics interface

---

**Implementation Date**: December 26, 2024
**Analytics Version**: Google Analytics 4
**Status**: ✅ Production Ready
**Next.js Version**: 15.5.4