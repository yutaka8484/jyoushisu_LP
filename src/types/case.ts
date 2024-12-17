export interface CaseStudy {
  id: string;
  companyType: string;
  industry: string;
  challenges: string[];
  solutions: {
    title: string;
    details: string[];
  }[];
  effects: {
    title: string;
    description: string;
  }[];
  testimonial?: string;
  conclusion: string;
}