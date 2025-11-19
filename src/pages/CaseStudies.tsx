import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Clock, CheckCircle, TrendingUp } from "lucide-react";
import { cms } from "@/services/cms";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import "@/styles/design-system.css";

const ITEMS_PER_PAGE = 5;

const summarize = (text: string, maxLength = 160) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

const CaseStudies = () => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allCaseStudies = cms
    .getAllCaseStudies()
    .sort((a, b) => {
      const priorityCompanies = [
        "Deutsche Bahn",
        "SEW Eurodrive",
        "Zucchetti",
        "Pickert & Partner",
        "FICUS Health"
      ];
      
      const aHasRealLogo = priorityCompanies.some(c => a.company.includes(c));
      const bHasRealLogo = priorityCompanies.some(c => b.company.includes(c));

      if (aHasRealLogo && !bHasRealLogo) return -1;
      if (!aHasRealLogo && bHasRealLogo) return 1;
      
      return a.company.localeCompare(b.company);
    });

  const totalPages = Math.ceil(allCaseStudies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCaseStudies = allCaseStudies.slice(startIndex, endIndex);

  useEffect(() => {
    // Scroll to top of the list when page changes, but only if not the first load
    // or maybe just scroll to the top of the list section
    const listSection = document.getElementById("case-studies-list");
    if (listSection && currentPage > 1) {
      listSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const toggleRow = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("ellipsis-start");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }
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
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '6px 16px', 
              borderRadius: '99px', 
              background: 'rgba(22, 163, 74, 0.1)', 
              border: '1px solid rgba(22, 163, 74, 0.2)', 
              color: 'var(--accent-primary)', 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              marginBottom: 'var(--space-lg)' 
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor', boxShadow: '0 0 8px currentColor' }}></span>
              Trusted by Industry Leaders
            </div>
            
            <h1 className="section-title">
              Customer Success <br />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.6em', display: 'block', marginTop: '1rem', fontWeight: 400 }}>Real Results, Proven Impact</span>
            </h1>
            
            <p className="section-subtitle">
              See how leading enterprises automate their most complex workflows with AskUI.
            </p>

            <div className="grid-3" style={{ marginTop: 'var(--space-2xl)' }}>
              <div className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <Clock size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>70%</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Time Saved</div>
              </div>
              <div className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <CheckCircle size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>90%</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Coverage Increase</div>
              </div>
              <div className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <TrendingUp size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>300%</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies-list" className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', marginBottom: 'var(--space-3xl)' }}>
            {paginatedCaseStudies.map((study, index) => {
              const isExpanded = expandedSlug === study.slug;
              const challengeSummary = summarize(study.challenge, 120);
              const solutionSummary = summarize(study.solution, 120);
              const metrics = [
                study.metrics?.timeSaved ? { value: study.metrics.timeSaved, label: "Time Saved" } : null,
                study.metrics?.coverage ? { value: study.metrics.coverage, label: "Coverage" } : null,
                study.metrics?.roi ? { value: study.metrics.roi, label: "ROI" } : null,
              ].filter(Boolean);

              return (
                <div 
                  key={study.slug} 
                  className="glass-panel group"
                  style={{ 
                    overflow: 'hidden', 
                    borderColor: isExpanded ? 'var(--accent-primary)' : 'var(--border-subtle)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Main Row */}
                  <div style={{ padding: 'var(--space-xl)', display: 'grid', gridTemplateColumns: '300px 1fr 200px', gap: 'var(--space-xl)', alignItems: 'flex-start' }} className="case-study-grid">
                    
                    {/* Company Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                      <div style={{ height: '48px', display: 'flex', alignItems: 'center' }}>
                        <img
                          src={study.logo}
                          alt={study.company}
                          style={{ height: '100%', width: 'auto', objectFit: 'contain', maxWidth: '160px' }}
                        />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{study.company}</h3>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {study.industry}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-xs)' }}>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="btn-secondary"
                          style={{ height: '32px', fontSize: '0.75rem', padding: '0 12px' }}
                          onClick={() => toggleRow(study.slug)}
                        >
                          {isExpanded ? "Less Info" : "Quick View"}
                          <ChevronDown style={{ marginLeft: '6px', width: '12px', height: '12px', transition: 'transform 0.3s', transform: isExpanded ? "rotate(180deg)" : "none" }} />
                        </Button>
                        <Link to={`/case-studies/${study.slug}`} className="btn-primary" style={{ height: '32px', fontSize: '0.75rem', padding: '0 12px', textDecoration: 'none' }}>
                          Read Story
                          <ArrowRight style={{ marginLeft: '6px', width: '12px', height: '12px' }} />
                        </Link>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }} className="content-grid">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Challenge</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, minHeight: '4.8em' }}>
                          {challengeSummary}
                        </p>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solution</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, minHeight: '4.8em' }}>
                          {solutionSummary}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', borderLeft: '1px solid var(--border-subtle)', paddingLeft: 'var(--space-lg)' }} className="metrics-col">
                      {metrics.length > 0 ? (
                        metrics.map((metric, idx) => (
                          <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{metric?.value}</span>
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>{metric?.label}</span>
                          </div>
                        ))
                      ) : (
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>Qualitative results available in full story</div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-xl)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-2xl)' }} className="expanded-grid">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                          <div>
                            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>Full Challenge</h4>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{study.challenge}</p>
                          </div>
                          <div>
                            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>AskUI Solution</h4>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{study.solution}</p>
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                          <div style={{ background: 'var(--bg-primary)', padding: 'var(--space-lg)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                            <div style={{ fontSize: '1.5rem', color: 'var(--border-highlight)', marginBottom: 'var(--space-md)', lineHeight: 1 }}>❝</div>
                            <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                              {study.quote}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                                {study.author?.[0] || "C"}
                              </div>
                              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                                {study.author || "Customer"}
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-md)' }}>Key Results</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                              {study.results.slice(0, 3).map((result, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                  <CheckCircle size={14} style={{ color: 'var(--accent-primary)', marginTop: '3px', flexShrink: 0 }} />
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ marginTop: 'var(--space-xl)', display: 'flex', justifySelf: 'end' }}>
                        <Link to={`/case-studies/${study.slug}`} className="btn-primary" style={{ textDecoration: 'none' }}>
                          Read Full Case Study
                          <ArrowRight style={{ marginLeft: '8px' }} size={16} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to write your own success story?</h2>
          <p className="section-subtitle">
            Join Deutsche Bahn, SEW Eurodrive, and other industry leaders in the future of automation.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/enterprise" className="btn-primary">
              Book a Demo
              <ArrowRight style={{ marginLeft: '8px' }} size={20} />
            </Link>
            <a href="https://www.caesr.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Try Caesr
            </a>
          </div>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 1024px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-lg) !important;
          }
          .content-grid {
            grid-template-columns: 1fr !important;
          }
          .metrics-col {
            border-left: none !important;
            padding-left: 0 !important;
            flex-direction: row !important;
            flex-wrap: wrap;
            gap: var(--space-xl) !important;
            border-top: 1px solid var(--border-subtle);
            padding-top: var(--space-lg);
          }
          .expanded-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default CaseStudies;
