import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import "@/styles/design-system.css";

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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="section-title">
              AskUI Blog <br />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.6em', display: 'block', marginTop: '1rem', fontWeight: 400 }}>Insights, Tutorials & Updates</span>
            </h1>
            
            <p className="section-subtitle">
              Learn about computer use agents, automation best practices, and product updates
            </p>

            {/* Search */}
            <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" style={{ color: 'var(--text-tertiary)' }} />
              <Input 
                placeholder="Search articles..."
                className="pl-12 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  backgroundColor: 'var(--bg-primary)', 
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: 'var(--space-lg) 0', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: '64px', zIndex: 40, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}>
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
                style={selectedCategory === category ? {
                  backgroundColor: 'var(--accent-primary)',
                  color: '#fff',
                  border: 'none'
                } : {
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--border-subtle)'
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg" style={{ color: 'var(--text-secondary)' }}>No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="mb-6 text-sm text-muted-foreground" style={{ color: 'var(--text-tertiary)' }}>
                Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
              </div>

              <div className="grid-3" style={{ marginBottom: 'var(--space-3xl)' }}>
                {paginatedPosts.map((post) => (
                  <Link key={post.id} to={`/blog-posts/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="glass-panel group" style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          className="group-hover:scale-105"
                        />
                      </div>
                      <div style={{ padding: 'var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }}>
                          <span style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '4px', 
                            padding: '2px 8px', 
                            borderRadius: '4px', 
                            background: 'rgba(22, 163, 74, 0.1)', 
                            color: 'var(--accent-primary)', 
                            fontWeight: 500 
                          }}>
                            <Tag size={12} />
                            {post.category}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-sm)', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="group-hover:text-accent-primary">
                          {post.title}
                        </h3>
                        
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {post.excerpt}
                        </p>

                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                            <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{post.author}</div>
                            <div>{new Date(post.date).toLocaleDateString()}</div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-primary)' }}>
                            Read
                            <ArrowRight style={{ marginLeft: '8px', transition: 'transform 0.2s' }} size={16} className="group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
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
                        style={{ color: 'var(--text-primary)' }}
                      />
                    </PaginationItem>

                    {getPageNumbers().map((page, index) => {
                      if (page === "ellipsis-start" || page === "ellipsis-end") {
                        return (
                          <PaginationItem key={`ellipsis-${index}`}>
                            <PaginationEllipsis style={{ color: 'var(--text-tertiary)' }} />
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
                            style={currentPage === pageNumber ? {
                              backgroundColor: 'var(--accent-primary)',
                              color: '#fff',
                              border: 'none'
                            } : {
                              color: 'var(--text-primary)'
                            }}
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
                        style={{ color: 'var(--text-primary)' }}
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
