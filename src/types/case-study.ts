export interface CaseStudyMetric {
  value: string;
  description: string;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface CaseStudyData {
  id: string;
  category: string;
  categoryColor?: 'info' | 'success' | 'warning' | 'error' | 'neutral';
  title: string;
  challenge: string;
  solution: string;
  implementation: string[];
  metrics: CaseStudyMetric[];
  annualImpact: string;
  timeline?: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
  imageUrl?: string;
}

export interface CaseStudyProps {
  data: CaseStudyData;
  className?: string;
}