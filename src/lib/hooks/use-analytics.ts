'use client';

import { useCallback } from 'react';
import {
  trackEvent,
  trackButtonClick,
  trackContactFormSubmission,
  trackFileDownload,
  trackExternalLinkClick,
  trackScrollDepth,
  trackVideoInteraction,
  trackSearch,
  trackNewsletterSignup,
  trackLeadGeneration,
  trackConsultationBooking,
  isAnalyticsEnabled
} from '@/lib/analytics';

// Custom hook for analytics tracking
export function useAnalytics() {
  const trackCustomEvent = useCallback((
    eventName: string,
    parameters?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      custom_parameters?: Record<string, unknown>;
    }
  ) => {
    trackEvent(eventName, parameters);
  }, []);

  const trackButton = useCallback((buttonName: string, location: string) => {
    trackButtonClick(buttonName, location);
  }, []);

  const trackFormSubmission = useCallback((method: 'form' | 'phone' | 'email') => {
    trackContactFormSubmission(method);
  }, []);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    trackFileDownload(fileName, fileType);
  }, []);

  const trackExternalLink = useCallback((url: string, linkText: string) => {
    trackExternalLinkClick(url, linkText);
  }, []);

  const trackScroll = useCallback((percentage: number) => {
    trackScrollDepth(percentage);
  }, []);

  const trackVideo = useCallback((action: 'play' | 'pause' | 'complete', videoTitle: string) => {
    trackVideoInteraction(action, videoTitle);
  }, []);

  const trackSearchQuery = useCallback((searchTerm: string, resultsCount?: number) => {
    trackSearch(searchTerm, resultsCount);
  }, []);

  const trackNewsletter = useCallback((source: string) => {
    trackNewsletterSignup(source);
  }, []);

  const trackLead = useCallback((leadType: 'contact' | 'consultation' | 'demo', value?: number) => {
    trackLeadGeneration(leadType, value);
  }, []);

  const trackConsultation = useCallback((consultationType: string, value?: number) => {
    trackConsultationBooking(consultationType, value);
  }, []);

  return {
    trackCustomEvent,
    trackButton,
    trackFormSubmission,
    trackDownload,
    trackExternalLink,
    trackScroll,
    trackVideo,
    trackSearchQuery,
    trackNewsletter,
    trackLead,
    trackConsultation,
    isEnabled: isAnalyticsEnabled()
  };
}