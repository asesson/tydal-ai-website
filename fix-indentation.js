const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'src/data/articles.ts');
let content = fs.readFileSync(articlesPath, 'utf8');

// Find the email automation article and fix its content indentation
const emailArticleStart = content.indexOf('slug: \'email-automation-best-first-ai-step\'');
const emailContentStart = content.indexOf('content: `', emailArticleStart);
const emailContentEnd = content.indexOf('}`', emailContentStart);

if (emailContentStart !== -1 && emailContentEnd !== -1) {
  const beforeContent = content.substring(0, emailContentStart);
  const articleContent = content.substring(emailContentStart, emailContentEnd + 1);
  const afterContent = content.substring(emailContentEnd + 1);
  
  // Remove leading spaces from each line in the content
  const fixedContent = articleContent.replace(/\n  /g, '\n');
  
  const newContent = beforeContent + fixedContent + afterContent;
  fs.writeFileSync(articlesPath, newContent, 'utf8');
  
  console.log('✅ Fixed indentation in email-automation article');
} else {
  console.log('❌ Could not find email article content');
}
