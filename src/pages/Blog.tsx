import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Clock, Tag } from "lucide-react";

const categories = ["All", "Benchmarks", "Engineering", "Best Practices", "Product Updates", "Tutorials"];

const blogPosts = [
  {
    id: 1,
    title: "Leading Android World Benchmark Results",
    excerpt: "How AskUI achieved top performance in the Android World benchmark with our optimized infrastructure and multi-platform approach.",
    category: "Benchmarks",
    readTime: "5 min read",
    date: "2025-01-15",
    author: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Building Production-Ready Computer Use Agents",
    excerpt: "A comprehensive guide to deploying AI agents in enterprise environments with reliability, security, and compliance at scale.",
    category: "Engineering",
    readTime: "8 min read",
    date: "2025-01-10",
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Cross-Platform Automation at Scale",
    excerpt: "Strategies and best practices for managing automated workflows across Windows, MacOS, Linux, iOS, and Android platforms.",
    category: "Best Practices",
    readTime: "6 min read",
    date: "2025-01-05",
    author: "Lisa Park",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Introducing AskUI CLI 2.0",
    excerpt: "Major update brings enhanced model support, improved orchestration, and new sandbox management capabilities.",
    category: "Product Updates",
    readTime: "4 min read",
    date: "2024-12-28",
    author: "AskUI Team",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Getting Started with AskUI SDK",
    excerpt: "Complete tutorial on building your first computer use agent with the AskUI Python SDK and connecting to devices.",
    category: "Tutorials",
    readTime: "10 min read",
    date: "2024-12-20",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "OSWorld Benchmark Performance Analysis",
    excerpt: "Deep dive into our OSWorld benchmark results and the optimizations that made them possible.",
    category: "Benchmarks",
    readTime: "7 min read",
    date: "2024-12-15",
    author: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
  },
  {
    id: 7,
    title: "Securing Your AI Agent Infrastructure",
    excerpt: "Best practices for implementing enterprise-grade security in computer use agent deployments.",
    category: "Best Practices",
    readTime: "9 min read",
    date: "2024-12-10",
    author: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
  },
  {
    id: 8,
    title: "Mobile Device Automation with AskUI",
    excerpt: "Learn how to automate iOS and Android devices using AskUI Suite's advanced capabilities.",
    category: "Tutorials",
    readTime: "12 min read",
    date: "2024-12-05",
    author: "Lisa Park",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              AskUI Blog
              <span className="block text-accent text-2xl md:text-3xl font-normal mt-4">Insights, Tutorials & Updates</span>
            </h1>
            
            <p className="mb-8 text-lg text-white/80">
              Learn about computer use agents, automation best practices, and product updates
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..."
                className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/40 sticky top-16 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-medium">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="text-xs text-muted-foreground">
                        <div className="font-medium text-foreground">{post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <div className="flex items-center text-sm font-medium text-accent">
                        Read
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
