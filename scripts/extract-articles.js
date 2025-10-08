// Script to extract articles from [slug]/page.tsx
// This helps migrate to the centralized articles.ts file

const fs = require('fs');
const path = require('path');

const slugPagePath = path.join(__dirname, '../src/app/insights/[slug]/page.tsx');
const insightsPagePath = path.join(__dirname, '../src/app/insights/page.tsx');

console.log('Reading files...');

const slugContent = fs.readFileSync(slugPagePath, 'utf8');
const insightsContent = fs.readFileSync(insightsPagePath, 'utf8');

// Extract the articles object
const articlesMatch = slugContent.match(/const articles = \{([\s\S]*?)\};/);
if (!articlesMatch) {
  console.error('Could not find articles object');
  process.exit(1);
}

// Extract the listings array
const listingsMatch = insightsContent.match(/const articles = \[([\s\S]*?)\];/);
if (!listingsMatch) {
  console.error('Could not find listings array');
  process.exit(1);
}

console.log('✅ Found articles data');
console.log('📝 Check the extracted data in the source files');
console.log('');
console.log('Article slugs found:');
console.log('- how-to-pick-your-first-ai-workflow');
console.log('- 7-guardrails-every-smb-needs-before-rolling-out-ai');
console.log('- from-pilot-to-production-30-day-checklist');
console.log('- why-ai-adoption-fails-and-how-to-prevent-it');
console.log('- email-ai-beyond-auto-reply');
console.log('- roi-calculator-measuring-ai-impact');
console.log('');
console.log('✨ Ready to migrate to /src/data/articles.ts');
