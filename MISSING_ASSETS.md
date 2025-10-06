# Missing Image Assets for SEO/LLMO Optimization

This document lists all image assets that are referenced in the code but missing from the `/public` directory. These assets are critical for proper SEO, social sharing, and mobile/browser experience.

## Critical Missing Assets

### Favicons (Required for all browsers/platforms)
These files should be placed in `/public/`:

- `favicon.ico` - ⚠️ Exists in `/src/app/` but should also be in `/public/`
- `favicon-16x16.png` - 16x16px PNG favicon
- `favicon-32x32.png` - 32x32px PNG favicon
- `apple-touch-icon.png` - 180x180px PNG for iOS devices
- `android-chrome-192x192.png` - 192x192px PNG for Android
- `android-chrome-512x512.png` - 512x512px PNG for Android
- `safari-pinned-tab.svg` - SVG for Safari pinned tabs (monochrome)

### Open Graph/Social Sharing Images
These images are used when sharing links on social media (Facebook, LinkedIn, Twitter, etc.):

- `og-image.png` - 1200x630px - Homepage/default OG image
- `og-services.png` - 1200x630px - Services page OG image
- `og-about.png` - 1200x630px - About page OG image
- `og-insights.png` - 1200x630px - Insights/blog page OG image

## Asset Specifications

### Favicon Requirements
- **favicon.ico**: 16x16, 32x32, 48x48 multi-resolution ICO file
- **PNG favicons**: Transparent background, Tydal AI logo centered
- **apple-touch-icon.png**: 180x180px, can have colored background (#10b981 - brand green)
- **android-chrome-*.png**: Transparent background preferred
- **safari-pinned-tab.svg**: Single color (#10b981), no gradients

### Open Graph Image Requirements
- **Dimensions**: Exactly 1200x630 pixels (Facebook/LinkedIn recommended size)
- **Format**: PNG or JPEG (PNG preferred for quality)
- **Content suggestions**:
  - Include Tydal AI logo
  - Add tagline or key message
  - Use brand colors (green #10b981)
  - Ensure text is readable when thumbnail is small
  - Leave safe margins (avoid text near edges)

### Brand Colors Reference
- Primary Green: `#10b981`
- Dark Green: `#059669`
- Background: `#ffffff`
- Text: `#111827`

## Current Status

✅ **Existing Assets:**
- `tydal-logo.png`
- `tydal-logo-new.png`
- `tydal-logo-updated.png`
- `tydal-logo-green.png`
- Various SVG icons (file.svg, globe.svg, window.svg, next.svg, vercel.svg)

❌ **Missing Assets:**
- All favicons (except favicon.ico in /src/app/)
- All Open Graph images
- Safari pinned tab SVG

## Recommended Actions

1. **Immediate Priority**: Create favicons to fix browser/mobile display
   - Use `tydal-logo-green.png` as source
   - Generate multi-resolution favicon.ico
   - Create PNG variants in required sizes

2. **High Priority**: Create OG images for social sharing
   - Design template with brand guidelines
   - Generate variants for each page type
   - Ensure mobile preview looks good

3. **Tools Suggestions**:
   - [Favicon Generator](https://realfavicongenerator.net/) - Generate all favicon formats
   - [Canva](https://www.canva.com/) - Design OG images (1200x630 template)
   - [Figma](https://www.figma.com/) - Professional design tool
   - ImageMagick/Sharp - Programmatic image generation

## Testing After Asset Creation

1. **Favicon Testing**:
   - Test on Chrome, Firefox, Safari, Edge
   - Test on iOS and Android devices
   - Check browser tab and bookmark appearance

2. **OG Image Testing**:
   - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   - Share on actual social platforms to verify

3. **Automated Testing**:
   - Run Lighthouse audit for PWA score
   - Check manifest.json references
   - Validate all meta tags in HTML

## Notes

- The `manifest.json` already references these assets correctly
- The metadata in `src/app/layout.tsx` is properly configured
- Once assets are created, no code changes should be needed
- Consider automating OG image generation for blog posts in the future
