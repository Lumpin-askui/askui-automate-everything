export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  publishedAt: string;
  author: string;
  authorRole?: string;
  image: string;
  tags?: string[];
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  company: string;
  logo: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    timeSaved: string;
    coverage: string;
    roi: string;
  };
  quote: string;
  author: string;
  content?: string;
  featured?: boolean;
}

