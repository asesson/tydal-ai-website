// Google Analytics 4 integration for Tydal AI website
// Provides tracking for page views, events, and user interactions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize Google Analytics
export function initializeAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];

  // Initialize gtag function
  window.gtag = function gtag(...args: Parameters<typeof window.gtag>) {
    window.dataLayer.push(args);
  };

  // Configure gtag with timestamp
  window.gtag('js', new Date());

  // Configure GA4 with the measurement ID
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

// Track page views
export function trackPageView(url: string, title?: string) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_location: url,
    page_title: title || document.title,
  });
}

// Track custom events
export function trackEvent(
  eventName: string,
  parameters?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    custom_parameters?: Record<string, unknown>;
  }
) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  const { event_category, event_label, value, custom_parameters, ...rest } = parameters || {};

  window.gtag('event', eventName, {
    event_category,
    event_label,
    value,
    ...custom_parameters,
    ...rest,
  });
}

// Predefined event tracking functions for common user interactions

// Track contact form submissions
export function trackContactFormSubmission(method: 'form' | 'phone' | 'email') {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: method,
    custom_parameters: {
      contact_method: method,
    },
  });
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    custom_parameters: {
      button_name: buttonName,
      button_location: location,
    },
  });
}

// Track file downloads
export function trackFileDownload(fileName: string, fileType: string) {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    custom_parameters: {
      file_name: fileName,
      file_type: fileType,
    },
  });
}

// Track external link clicks
export function trackExternalLinkClick(url: string, linkText: string) {
  trackEvent('external_link_click', {
    event_category: 'outbound',
    event_label: linkText,
    custom_parameters: {
      external_url: url,
      link_text: linkText,
    },
  });
}

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage,
    custom_parameters: {
      scroll_percentage: percentage,
    },
  });
}

// Track video interactions
export function trackVideoInteraction(action: 'play' | 'pause' | 'complete', videoTitle: string) {
  trackEvent('video_interaction', {
    event_category: 'media',
    event_label: videoTitle,
    custom_parameters: {
      video_action: action,
      video_title: videoTitle,
    },
  });
}

// Track search queries (if implementing search functionality)
export function trackSearch(searchTerm: string, resultsCount?: number) {
  trackEvent('search', {
    event_category: 'search',
    event_label: searchTerm,
    custom_parameters: {
      search_term: searchTerm,
      results_count: resultsCount,
    },
  });
}

// Track newsletter signups
export function trackNewsletterSignup(source: string) {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
    event_label: source,
    custom_parameters: {
      signup_source: source,
    },
  });
}

// Track lead generation events
export function trackLeadGeneration(leadType: 'contact' | 'consultation' | 'demo', value?: number) {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    event_label: leadType,
    value: value || 0,
    custom_parameters: {
      lead_type: leadType,
    },
  });
}

// Enhanced ecommerce events for consultation bookings
export function trackConsultationBooking(consultationType: string, value?: number) {
  trackEvent('begin_checkout', {
    event_category: 'ecommerce',
    event_label: consultationType,
    value: value || 0,
    custom_parameters: {
      consultation_type: consultationType,
      currency: 'USD',
    },
  });
}

// Track page timing for performance analysis
export function trackPageTiming(timingCategory: string, timingVariable: string, timingValue: number) {
  trackEvent('timing_complete', {
    event_category: 'performance',
    event_label: timingCategory,
    value: timingValue,
    custom_parameters: {
      timing_category: timingCategory,
      timing_variable: timingVariable,
      timing_value: timingValue,
    },
  });
}

// Utility function to check if analytics is enabled
export function isAnalyticsEnabled(): boolean {
  return !!(GA_MEASUREMENT_ID && typeof window !== 'undefined');
}

// Utility function to get the GA measurement ID (for debugging)
export function getAnalyticsId(): string | undefined {
  return GA_MEASUREMENT_ID;
}