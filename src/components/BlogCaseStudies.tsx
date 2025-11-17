import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BookOpen } from "lucide-react";
import { cms } from "@/services/cms";

const BlogCaseStudies = () => {
  const featuredBlogPosts = cms.getFeaturedBlogPosts().slice(0, 3);
  const featuredCaseStudies = cms.getFeaturedCaseStudies().slice(0, 3);
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
            {featuredBlogPosts.map((post) => (
              <Link key={post.id} to={`/blog-posts/${post.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card group cursor-pointer h-full">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <FileText className="h-4 w-4 text-[#962C5D]" />
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#962C5D] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center text-sm font-medium text-[#962C5D]">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
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
            {featuredCaseStudies.map((study) => (
              <Link key={study.id} to={`/case-studies/${study.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card group cursor-pointer h-full">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold mb-3 text-[#962C5D]">
                      <BookOpen className="h-4 w-4 text-[#962C5D]" />
                      <span>{study.company}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#962C5D] transition-colors">
                      {study.challenge.split(' ').slice(0, 5).join(' ')}...
                    </h3>
                    <div className="text-2xl font-bold text-[#962C5D] mb-3">
                      {study.metrics.timeSaved} Time Saved
                    </div>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="flex items-center text-sm font-medium text-[#962C5D]">
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
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
