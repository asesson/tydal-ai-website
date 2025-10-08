# Tydal AI Website - Quick Start Guide

**Last Updated:** October 8, 2025

---

## 🚀 Adding New Articles (5 Minutes)

### Quick Steps:
1. Open `/src/data/articles.ts`
2. Add your article object to the `articles` array
3. Save the file
4. View at http://localhost:3004/insights

### Article Template:
```typescript
{
  slug: 'your-article-slug',
  title: "How Do I [Question]?",
  excerpt: "Brief 1-2 sentence summary",
  category: "Getting Started",  // or other category
  readTime: "5 min read",
  publishDate: "November 2025",
  featured: true,  // Shows in Featured section
  tldr: {
    summary: "Direct answer in 2-3 sentences",
    points: [
      "Key point 1",
      "Key point 2",
      "Key point 3",
      "Key point 4"
    ]
  },
  content: `Full article content...`
}
```

---

## 📁 Project Structure

```
tydal-ai-website/
├── src/
│   ├── data/
│   │   └── articles.ts          ← ADD NEW ARTICLES HERE
│   ├── app/
│   │   └── insights/
│   │       ├── page.tsx          (listing page - auto-updates)
│   │       └── [slug]/page.tsx   (detail page - auto-updates)
│   └── components/
├── PUBLISHING.md                 ← Full publishing guide
├── MIGRATION-STATUS.md           ← Technical migration details
├── COMPLETE-SETUP-SUMMARY.md     ← SEO/LLM optimization info
└── QUICK-START.md                ← This file
```

---

## 📚 Documentation

### For Adding Articles:
- **`/PUBLISHING.md`** - Complete guide with examples and best practices

### For Technical Details:
- **`/MIGRATION-STATUS.md`** - Migration completion status
- **`/COMPLETE-SETUP-SUMMARY.md`** - SEO optimization analysis

### For Content Planning:
- **`/src/content/articles/CONTENT_CALENDAR.md`** - 10 weeks of topics
- **`/src/content/articles/_TEMPLATE.md`** - Article writing template

---

## 🎯 Categories

Choose one for your article:
- **Getting Started** - First steps and foundations
- **Best Practices** - Proven strategies
- **Implementation** - Hands-on guides
- **Strategy** - Planning and decisions
- **Advanced Strategies** - Complex optimization
- **Business Value** - ROI and metrics

---

## ✅ Current Articles (6)

1. How Do I Pick My First AI Workflow?
2. Why Is Email Automation Your Best First Step Into Business AI?
3. What Are the 7 Essential Guardrails for AI Deployment in SMBs?
4. How Do I Scale an AI Pilot to Production in 30 Days?
5. Why Does AI Adoption Fail and How Can I Prevent It?
6. How Do I Measure ROI from AI Implementations?

---

## 🔧 Development

### Run locally:
```bash
npm run dev
```
Visit: http://localhost:3004/insights

### Deploy:
```bash
git add .
git commit -m "Add new article: [title]"
git push
```

---

## 💡 Tips

### For Best Results:
- ✅ Use question-format titles (LLM optimization)
- ✅ Write 2-3 sentence TLDR summaries
- ✅ Include 4-5 actionable bullet points
- ✅ Use H2/H3 headings for structure
- ✅ Keep 1,500-2,500 words
- ✅ Include real examples

### SEO is Automatic:
- Meta tags generated from content
- Schema.org markup included
- Open Graph tags for social
- Clean URLs created
- Sitemap auto-updates

---

## 🎊 System Status

✅ **100% Operational**
- All 6 articles migrated
- Centralized publishing system
- Category filtering working
- SEO optimization complete
- Ready for weekly publishing

---

**Questions?** See `/PUBLISHING.md` for detailed instructions.
