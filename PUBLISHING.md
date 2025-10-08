# Article Publishing Guide for Tydal AI Insights

**Quick Reference:** This guide shows you how to add new articles to the Tydal AI website in 5-10 minutes.

---

## Table of Contents
1. [Quick Start (5 Minutes)](#quick-start)
2. [Article Object Template](#article-object-template)
3. [Step-by-Step Publishing Process](#step-by-step-process)
4. [Pre-Publishing Checklist](#pre-publishing-checklist)
5. [Testing Locally](#testing-locally)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## Quick Start

**To add a new article:**

1. Open `/src/data/articles.ts`
2. Copy the article template below
3. Fill in your content
4. Test with `npm run dev`
5. Deploy

**That's it!** Everything else updates automatically:
- ✅ Article appears in listing page
- ✅ Article detail page renders
- ✅ Category count updates
- ✅ Category filter works
- ✅ Sitemap includes new article
- ✅ SEO metadata applied

---

## Article Object Template

Copy-paste this template into the `articles` array in `/src/data/articles.ts`:

```typescript
{
  slug: 'url-friendly-article-title',  // No spaces, lowercase, use hyphens
  title: "How Do I [Action] [Specific Topic]?",  // Always use question format
  excerpt: "Brief 1-2 sentence summary that appears on the insights listing page.",
  category: "Getting Started",  // See categories list below
  readTime: "6 min read",
  publishDate: "October 2025",
  featured: true,  // true for homepage, false otherwise
  tldr: {
    summary: "2-3 sentence summary that directly answers the title question. This appears in a green box at the top of the article.",
    points: [
      "First key takeaway with specific, actionable details",
      "Second key takeaway with concrete examples or numbers",
      "Third key takeaway that readers can implement",
      "Fourth key takeaway (add 4-5 total points)",
      "Optional fifth key takeaway if needed"
    ]
  },
  content: `Full article content goes here in markdown format.

## Use H2 headings for main sections

Content here...

### Use H3 for subsections

More content...

**Bold important terms**

- Use bullet points
- For lists and key points
- Makes content scannable

Include 1-2 real-world examples from SMBs throughout the article.

---

*Optional CTA paragraph at the end with link to [Tydal AI](http://tydalagentai.com).*`
},
```

### Available Categories
Choose ONE of these exactly as written:
- `"Getting Started"`
- `"Best Practices"`
- `"Implementation"`
- `"Strategy"`
- `"Advanced Strategies"`
- `"Business Value"`

---

## Step-by-Step Publishing Process

### Step 1: Write Your Article Content

**Before you start coding, write the article content** following the template in `/src/content/articles/_TEMPLATE.md`.

Use the content calendar (`/src/content/articles/CONTENT_CALENDAR.md`) for topic ideas and outlines.

**Content Requirements:**
- 1,500-2,500 words
- Question-format title
- TLDR with 4-5 bullet points
- 1-2 real-world SMB examples
- Clear H2/H3 heading structure
- Specific numbers and metrics where possible

### Step 2: Open the Articles Data File

```bash
# Navigate to the file
open /src/data/articles.ts
```

### Step 3: Add Your Article to the Array

**Location:** Find the `articles` array (starts around line 35)

**Add your article object** at the end of the array (before the closing `];`)

**Important:** Make sure to add a comma after the previous article object!

```typescript
export const articles: Article[] = [
  { /* existing article 1 */ },
  { /* existing article 2 */ },
  // ... more articles ...
  { /* YOUR NEW ARTICLE HERE */ }  // <- Don't forget the comma before this!
];
```

### Step 4: Fill in the Template

Replace all placeholders with your actual content:

1. **slug**: URL-friendly version of title (no spaces, lowercase, hyphens)
   - Example: `"how-do-i-know-if-business-ready-for-ai"`

2. **title**: Question format (start with How/What/Why/When)
   - Example: `"How Do I Know If My Business Is Ready for AI?"`

3. **excerpt**: Brief summary for the listing page (1-2 sentences)
   - Example: `"Assess AI readiness across five critical dimensions including data quality, process documentation, and leadership commitment."`

4. **category**: Choose from the 6 available categories (exact match required)

5. **readTime**: Estimate based on word count (1,500 words ≈ 6 min)

6. **publishDate**: Month and year (e.g., `"October 2025"`)

7. **featured**: `true` if you want it on homepage, `false` otherwise

8. **tldr.summary**: 2-3 sentences answering the title question directly

9. **tldr.points**: 4-5 specific, actionable bullet points

10. **content**: Full article in markdown with backticks

### Step 5: Save the File

Press `Cmd+S` (Mac) or `Ctrl+S` (Windows/Linux)

---

## Pre-Publishing Checklist

Before you deploy, verify:

- [ ] **Title is in question format** (starts with How/What/Why/When/Which)
- [ ] **Slug is unique** (no other article has the same slug)
- [ ] **Slug is URL-friendly** (lowercase, hyphens, no spaces or special characters)
- [ ] **Category matches exactly** one of the 6 available categories
- [ ] **TLDR has 4-5 points** (not more, not less)
- [ ] **Content includes 1-2 examples** from real SMBs
- [ ] **Content has H2/H3 headings** for structure
- [ ] **Excerpt is 1-2 sentences** (not too long)
- [ ] **No syntax errors** (matching quotes, commas, brackets)

---

## Testing Locally

### Start Development Server

```bash
cd /Users/asexton/Documents/Claude/tydal-ai-website
npm run dev
```

Server will start at `http://localhost:3004` (or 3000 if available)

### Test These Pages

1. **Insights Listing Page** - `http://localhost:3004/insights`
   - [ ] New article appears in the grid
   - [ ] Title, excerpt, category, and read time are correct
   - [ ] Article is clickable

2. **Article Detail Page** - `http://localhost:3004/insights/[your-slug]`
   - [ ] Article loads without errors
   - [ ] TLDR box appears at the top (green background)
   - [ ] Title displays correctly
   - [ ] All content renders properly
   - [ ] Headings have proper hierarchy

3. **Category Filter** - `http://localhost:3004/insights`
   - [ ] Click on the category card for your article
   - [ ] Your article appears in filtered results
   - [ ] Category count is accurate

### Check Browser Console

Press `F12` or `Cmd+Option+I` to open dev tools:
- [ ] No red errors in Console tab
- [ ] No TypeScript errors

### Common Issues During Testing

**Article doesn't appear:**
- Check slug is unique
- Verify no syntax errors (missing commas, brackets)
- Make sure you saved the file

**Category filter doesn't work:**
- Verify category name matches exactly (case-sensitive)
- Check category is one of the 6 valid options

**TLDR doesn't render:**
- Verify `tldr` object has both `summary` and `points`
- Check `points` is an array with strings

---

## Deployment

### Production Checklist

Before deploying to production:
- [ ] All local tests pass
- [ ] No console errors
- [ ] Article looks correct on mobile view (resize browser)
- [ ] TLDR is readable and accurate
- [ ] Internal links work (if you added any)
- [ ] Proofread content for typos

### Deploy

```bash
# Your deployment command here
# Example:
npm run build
# Then deploy to your hosting platform
```

### Verify Production

After deployment:
1. Visit production site
2. Navigate to Insights page
3. Find and click your new article
4. Verify everything works as expected

---

## Troubleshooting

### Problem: TypeScript errors about article properties

**Solution:** Make sure your article object includes all required fields:
- slug, title, excerpt, category, readTime, publishDate, featured, tldr (with summary and points), content

**Check your commas:**
- Every property needs a comma after it (except the last one in the object)
- Every article object needs a comma after it (except the last one in the array)

### Problem: Article doesn't appear in listing

**Solution:**
1. Check `/src/data/articles.ts` - Is your article in the array?
2. Verify the file saved correctly
3. Restart dev server: `Ctrl+C` then `npm run dev`
4. Check for TypeScript compilation errors in terminal

### Problem: Category filter shows wrong count

**Solution:**
- Verify your article's `category` field matches exactly (including capitalization)
- Valid categories: "Getting Started", "Best Practices", "Implementation", "Strategy", "Advanced Strategies", "Business Value"

### Problem: TLDR doesn't display

**Solution:**
1. Check `tldr` object structure:
```typescript
tldr: {
  summary: "Text here",
  points: [
    "Point 1",
    "Point 2",
    // etc
  ]
}
```
2. Verify closing brackets and commas
3. Make sure `points` is an array (with square brackets)

### Problem: Content doesn't render properly

**Solution:**
- Content must be wrapped in backticks: `content: \`...\``
- For multi-line content, use backticks at start and end only
- Check for unescaped backticks in your content (escape with \\`)
- Verify markdown syntax is correct

### Problem: Slug creates 404 error

**Solution:**
- Slug must match exactly what's in the URL
- Use lowercase only
- Replace spaces with hyphens
- Remove special characters
- Example: "How Do I Test?" → `"how-do-i-test"`

---

## Example: Adding Week 1 Article from Content Calendar

Here's a complete example showing how to add the first article from the content calendar:

```typescript
{
  slug: 'how-do-i-know-if-my-business-is-ready-for-ai',
  title: "How Do I Know If My Business Is Ready for AI?",
  excerpt: "Assess AI readiness across five critical dimensions: data quality, process documentation, team capacity, budget allocation, and leadership commitment.",
  category: "Getting Started",
  readTime: "6 min read",
  publishDate: "October 2025",
  featured: true,
  tldr: {
    summary: "Assess AI readiness across five dimensions: data quality, process documentation, team capacity, budget allocation, and leadership commitment. Businesses ready for AI have documented workflows, clean data in 2+ systems, allocated $15K+ budget, and executive sponsorship.",
    points: [
      "Data readiness: Can you export data from existing systems in consistent formats?",
      "Process maturity: Are workflows documented and repeatable, or ad-hoc and variable?",
      "Resource availability: Do you have 10+ hours/week for implementation support?",
      "Success metrics: Can you define and measure specific improvement targets?",
      "Leadership buy-in: Is there executive support and willingness to adapt processes?"
    ]
  },
  content: `Your introduction paragraph here...

## Main Section Heading

Content for this section...

### Subsection

More content...

**Bold key terms** and include specific examples from SMBs.

---

*Ready to assess your AI readiness? [Tydal AI](http://tydalagentai.com) can help...*`
},
```

---

## Weekly Publishing Workflow

**Recommended schedule:**

**Monday-Wednesday:** Write article
- Follow template in `/src/content/articles/_TEMPLATE.md`
- Use outline from `/src/content/articles/CONTENT_CALENDAR.md`
- Write in Google Docs or text editor first

**Thursday:** Add to site
- Open `/src/data/articles.ts`
- Copy article template
- Paste your content
- Fill in metadata
- Save file
- ~5-10 minutes

**Friday:** Test and deploy
- Test locally: `npm run dev`
- Check listing, detail page, category filter
- Fix any issues
- Deploy to production
- ~15-20 minutes

**Total time:** ~5-30 minutes to publish (after article is written)

---

## Tips for Success

### Writing Tips
- **Start with TLDR:** Write summary and points first to clarify your message
- **Use examples:** Every article needs 1-2 real SMB examples
- **Be specific:** Include numbers, timelines, concrete details
- **Question format:** Titles should directly match how people search

### Publishing Tips
- **Test first:** Always test locally before deploying
- **Small batches:** Add one article at a time to catch errors quickly
- **Backup:** Keep article content in a separate doc before adding to code
- **Version control:** Consider committing after each new article

### SEO Tips
- **Question titles:** Match user search queries
- **Internal links:** Link to related articles in your content
- **Update old articles:** Add links to new articles in older content
- **Monitor performance:** Track which topics get most traffic

---

## Need Help?

**Can't figure something out?**
1. Check this guide's Troubleshooting section
2. Review the article template in `/src/content/articles/_TEMPLATE.md`
3. Look at existing articles in `/src/data/articles.ts` for examples
4. Check content calendar for topic outlines: `/src/content/articles/CONTENT_CALENDAR.md`

**Common resources:**
- Article template: `/src/content/articles/_TEMPLATE.md`
- Content calendar: `/src/content/articles/CONTENT_CALENDAR.md`
- This guide: `/PUBLISHING.md`
- Articles data file: `/src/data/articles.ts`

---

## Summary

Adding a new article is simple:

1. **Write** your article following the template
2. **Open** `/src/data/articles.ts`
3. **Add** your article object to the array
4. **Test** locally with `npm run dev`
5. **Deploy** to production

Everything else happens automatically. The system handles routing, SEO, categories, and display.

**Time investment:** 5-10 minutes per article (after writing)

Happy publishing! 🚀
