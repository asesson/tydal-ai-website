import { MetadataRoute } from 'next'

// For static export compatibility
export const dynamic = 'force-static'

// Article slugs from insights
const articles = [
  'how-to-pick-your-first-ai-workflow',
  '7-guardrails-every-smb-needs-before-rolling-out-ai',
  'from-pilot-to-production-30-day-checklist',
  'why-ai-adoption-fails-and-how-to-prevent-it',
  'email-ai-beyond-auto-reply',
  'roi-calculator-measuring-ai-impact',
  'when-to-scale-your-ai-initiatives',
  'measuring-ai-roi-in-your-business'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tydalai.com'
  const currentDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD format

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/case-study-alternatives`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic article pages
  const articlePages = articles.map(slug => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
