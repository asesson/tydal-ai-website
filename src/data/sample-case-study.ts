import { CaseStudyData } from '@/types/case-study';

export const sampleCaseStudy: CaseStudyData = {
  id: 'workflow-automation-financial-services',
  category: 'Financial Services',
  categoryColor: 'info',
  title: 'Workflow Automation',
  challenge: 'Loan processors spent hours re-keying data and tracking documents across systems, slowing approvals and risking compliance errors. Manual document verification was creating bottlenecks and inconsistent processing times.',
  solution: 'AI-driven document classification, data extraction and routing was implemented, streamlining the entire loan file process. The system automatically extracts key data from loan paperwork, verifies document completeness, and routes files based on risk profiles.',
  implementation: [
    '6-week pilot with loan processing team',
    'OCR and NLP integration with existing systems',
    'Compliance checking automation',
    'Real-time monitoring dashboard'
  ],
  metrics: [
    {
      value: '89%',
      description: 'Reduction in processing time',
      subtitle: 'From 1 hr per package to seconds per package',
      trend: 'up'
    },
    {
      value: '40%',
      description: 'Drop in compliance errors',
      subtitle: 'Error rate: 2.1% → 1.3%',
      trend: 'up'
    },
    {
      value: '15%',
      description: 'More client-facing time',
      subtitle: '25 additional hours per week per LP',
      trend: 'up'
    }
  ],
  annualImpact: '$200K in efficiency gains and reduced staff hours',
  timeline: '6-week implementation',
  clientQuote: {
    text: 'The transformation has been remarkable. Our team can now focus on high-value client interactions instead of manual data entry. The accuracy improvements have been a game-changer for our compliance team.',
    author: 'Sarah Johnson',
    role: 'VP of Operations, Regional Financial Group'
  }
};

export const sampleCaseStudy2: CaseStudyData = {
  id: 'email-automation-professional-services',
  category: 'Professional Services',
  categoryColor: 'success',
  title: 'Email Automation in Professional Services',
  challenge: 'A professional services firm was drowning in 3,000+ monthly support emails, leading to long response times and frustrated clients. Manual triage was consuming entire staff days, and important client communications were getting lost in the noise.',
  solution: 'Email automation was deployed inside their helpdesk to triage, summarize, and draft replies. The system automatically categorizes emails by urgency and topic, provides intelligent summaries of complex threads, and generates contextually appropriate response drafts.',
  implementation: [
    '2-week pilot with customer support team',
    'Integration with existing helpdesk platform',
    'AI responses trained on company data',
    'Gradual rollout with human oversight'
  ],
  metrics: [
    {
      value: '64%',
      description: 'Faster average response times',
      subtitle: 'From 4.2 hours to 1.5 hours',
      trend: 'up'
    },
    {
      value: '12%',
      description: 'Lift in customer satisfaction',
      trend: 'up'
    },
    {
      value: '20+',
      description: 'Staff hours reclaimed each week',
      subtitle: 'Redeployed to client-facing work',
      trend: 'up'
    }
  ],
  annualImpact: '121% ROI through reduced response time and staffing hours saved',
  timeline: '2-week pilot, 6-week full rollout',
  clientQuote: {
    text: 'The AI system has revolutionized our client communication. Our response times have never been better, and our team can focus on complex client needs rather than routine email processing.',
    author: 'Michael Chen',
    role: 'Client Services Director, Apex Consulting'
  }
};