'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID, initializeAnalytics, trackPageView } from '@/lib/analytics';

// Google Analytics component for client-side tracking
export default function Analytics() {
  const pathname = usePathname();

  // Track page views when pathname changes
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      const url = window.location.origin + pathname;
      trackPageView(url);
    }
  }, [pathname]);

  // Don't render analytics in development mode unless explicitly enabled
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GA_DEBUG) {
    return null;
  }

  // Don't render if no measurement ID is provided
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics gtag.js script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={initializeAnalytics}
      />

      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              // Enable enhanced measurement for better tracking
              send_page_view: true,
              // Track file downloads automatically
              enhanced_measurement: {
                scrolls: true,
                outbound_clicks: true,
                site_search: false,
                video_engagement: true,
                file_downloads: true
              }
            });
          `,
        }}
      />
    </>
  );
}