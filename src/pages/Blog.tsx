import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowRight, Search, Clock, Tag } from "lucide-react";
import { cms } from "@/services/cms";

const ITEMS_PER_PAGE = 12;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = cms.getAllBlogPosts();
  const categories = ["All", ...cms.getBlogCategories()];

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by category
    if (selectedCategory !== "All") {
      posts = cms.getBlogPostsByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      posts = cms.searchBlogPosts(searchQuery).filter(post => 
        selectedCategory === "All" || post.category === selectedCategory
      );
    }

    return posts;
  }, [selectedCategory, searchQuery, allPosts]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis-start");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

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
            <>
              {/* Results count */}
              <div className="mb-6 text-sm text-muted-foreground">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedPosts.map((post) => (
                  <Link key={post.id} to={`/blog-posts/${post.slug}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group cursor-pointer h-full">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#962C5D]/10 text-[#962C5D] font-medium">
                            <Tag className="h-3 w-3" />
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#962C5D] transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="text-xs text-muted-foreground">
                            <div className="font-medium text-foreground">{post.author}</div>
                            <div>{new Date(post.date).toLocaleDateString()}</div>
                          </div>
                          <div className="flex items-center text-sm font-medium text-[#962C5D]">
                            Read
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                          }
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {getPageNumbers().map((page, index) => {
                      if (page === "ellipsis-start" || page === "ellipsis-end") {
                        return (
                          <PaginationItem key={`ellipsis-${index}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }

                      const pageNumber = page as number;
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(pageNumber);
                            }}
                            isActive={currentPage === pageNumber}
                            className="cursor-pointer"
                            href="#"
                            role="button"
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    <PaginationItem>
                      <PaginationNext
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1);
                          }
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
