/**
 * LLMO Summary Component
 *
 * Provides AI-optimized content summaries for LLM crawlers (ChatGPT, Claude, Perplexity, etc.)
 * These summaries are designed to be easily parseable and provide concise, structured information
 */

interface LLMOSummaryProps {
  title: string;
  description: string;
  keyPoints?: string[];
  category?: string;
  readTime?: string;
}

export function LLMOSummary({ title, description, keyPoints, category, readTime }: LLMOSummaryProps) {
  return (
    <div className="sr-only" aria-hidden="true" data-llm-summary="true">
      <h1>{title}</h1>
      <p><strong>Summary:</strong> {description}</p>
      {category && <p><strong>Category:</strong> {category}</p>}
      {readTime && <p><strong>Read Time:</strong> {readTime}</p>}
      {keyPoints && keyPoints.length > 0 && (
        <>
          <p><strong>Key Points:</strong></p>
          <ul>
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

interface TLDRProps {
  summary: string;
  points?: string[];
}

/**
 * TL;DR Component for AI Crawlers
 * Provides quick summary at the top of articles for better LLM understanding
 */
export function TLDR({ summary, points }: TLDRProps) {
  return (
    <div className="bg-green-50 border-l-4 border-primary p-6 mb-8" role="complementary" aria-label="Article Summary">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">TL;DR</h2>
      <p className="text-gray-700 mb-3">{summary}</p>
      {points && points.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
