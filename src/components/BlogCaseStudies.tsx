import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Leading Android World Benchmark Results",
    excerpt: "How AskUI achieved top performance in the Android World benchmark with our optimized infrastructure.",
    category: "Benchmarks",
    readTime: "5 min read"
  },
  {
    title: "Building Production-Ready Computer Use Agents",
    excerpt: "A comprehensive guide to deploying AI agents in enterprise environments with reliability and security.",
    category: "Engineering",
    readTime: "8 min read"
  },
  {
    title: "Cross-Platform Automation at Scale",
    excerpt: "Strategies for managing automated workflows across Windows, MacOS, Linux, iOS, and Android.",
    category: "Best Practices",
    readTime: "6 min read"
  }
];

const caseStudies = [
  {
    company: "Deutsche Bahn",
    title: "Automating Railway System Testing",
    result: "80% reduction in testing time",
    description: "How Deutsche Bahn uses AskUI to automate complex HMI testing across their railway infrastructure."
  },
  {
    company: "SEW Eurodrive",
    title: "Industrial Automation Quality Assurance",
    result: "95% test coverage increase",
    description: "SEW Eurodrive leverages AskUI Suite for comprehensive testing of industrial control systems."
  },
  {
    company: "Intel Software",
    title: "Multi-Platform SDK Testing",
    result: "70% faster release cycles",
    description: "Intel uses AskUI CLI to orchestrate testing across multiple platforms and configurations."
  }
];

const BlogCaseStudies = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Blog Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest from Our Blog</h2>
              <p className="text-muted-foreground">Insights, tutorials, and updates</p>
            </div>
            <Button variant="outline" className="hidden md:flex" asChild>
              <a href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card group cursor-pointer">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <FileText className="h-4 w-4 text-accent" />
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="flex items-center text-sm font-medium text-accent">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="md:hidden w-full mt-6" asChild>
            <a href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Case Studies Section */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Customer Success Stories</h2>
              <p className="text-muted-foreground">See how enterprises use AskUI</p>
            </div>
            <Button variant="outline" className="hidden md:flex" asChild>
              <a href="/case-studies">
                All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card group cursor-pointer">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold mb-3 text-accent">
                    <BookOpen className="h-4 w-4" />
                    <span>{study.company}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <div className="text-2xl font-bold text-accent mb-3">
                    {study.result}
                  </div>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </div>
                <div className="flex items-center text-sm font-medium text-accent">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="lg:hidden w-full mt-6" asChild>
            <a href="/case-studies">
              All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogCaseStudies;
