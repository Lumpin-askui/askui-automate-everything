import type { BlogPost, CaseStudy } from "@/types/content";

// Import blog posts
import blogPost1 from "@/content/blog/leading-android-world-benchmark.json";
import blogPost2 from "@/content/blog/building-production-ready-agents.json";
import blogPost3 from "@/content/blog/cross-platform-automation-scale.json";
import blogPost4 from "@/content/blog/introducing-askui-cli-2.json";
import blogPost5 from "@/content/blog/getting-started-askui-sdk.json";
import blogPost6 from "@/content/blog/osworld-benchmark-analysis.json";
import blogPost7 from "@/content/blog/securing-ai-agent-infrastructure.json";
import blogPost8 from "@/content/blog/mobile-device-automation.json";

// Import case studies
import caseStudy1 from "@/content/case-studies/deutsche-bahn.json";
import caseStudy2 from "@/content/case-studies/sew-eurodrive.json";
import caseStudy3 from "@/content/case-studies/intel-software.json";
import caseStudy4 from "@/content/case-studies/zucchetti.json";
import caseStudy5 from "@/content/case-studies/solute.json";

// Convert imported data to typed objects
const blogPostsData: BlogPost[] = [
  blogPost1 as BlogPost,
  blogPost2 as BlogPost,
  blogPost3 as BlogPost,
  blogPost4 as BlogPost,
  blogPost5 as BlogPost,
  blogPost6 as BlogPost,
  blogPost7 as BlogPost,
  blogPost8 as BlogPost,
];

const caseStudiesData: CaseStudy[] = [
  caseStudy1 as CaseStudy,
  caseStudy2 as CaseStudy,
  caseStudy3 as CaseStudy,
  caseStudy4 as CaseStudy,
  caseStudy5 as CaseStudy,
];

// Import logo images
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import intelLogo from "@/assets/clients/intel.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";

// Helper to map logo paths to imported images
const logoMap: Record<string, string> = {
  '/src/assets/clients/db.png': dbLogo,
  '/src/assets/clients/sew.png': sewLogo,
  '/src/assets/clients/intel.png': intelLogo,
  '/src/assets/clients/zucchetti.png': zucchettiLogo,
  '/src/assets/clients/solute.png': soluteLogo,
};

// Process case studies to resolve logo paths
const processedCaseStudies = caseStudiesData.map(study => ({
  ...study,
  logo: logoMap[study.logo] || study.logo,
}));

class CMSService {
  // Blog Posts
  getAllBlogPosts(): BlogPost[] {
    return blogPostsData.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPostsData.find(post => post.slug === slug);
  }

  getBlogPostById(id: string): BlogPost | undefined {
    return blogPostsData.find(post => post.id === id);
  }

  getFeaturedBlogPosts(): BlogPost[] {
    return blogPostsData
      .filter(post => post.featured)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  getBlogPostsByCategory(category: string): BlogPost[] {
    if (category === "All") return this.getAllBlogPosts();
    return blogPostsData
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  searchBlogPosts(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase();
    return blogPostsData.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  getBlogCategories(): string[] {
    const categories = new Set(blogPostsData.map(post => post.category));
    return Array.from(categories).sort();
  }

  // Case Studies
  getAllCaseStudies(): CaseStudy[] {
    return processedCaseStudies;
  }

  getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return processedCaseStudies.find(study => study.slug === slug);
  }

  getCaseStudyById(id: string): CaseStudy | undefined {
    return processedCaseStudies.find(study => study.id === id);
  }

  getFeaturedCaseStudies(): CaseStudy[] {
    return processedCaseStudies.filter(study => study.featured);
  }
}

export const cms = new CMSService();

