import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import { cms } from "@/services/cms";
import "@/styles/design-system.css";

const CustomerStory = () => {
  const caseStudy = cms.getCaseStudyBySlug(
    "deutsche-bahn-boosts-efficiency-with-askui-test-automation"
  );

  if (!caseStudy) {
    return null;
  }

  const keyResults = caseStudy.results.slice(0, 4);

  const impactMetrics = (
    [
      caseStudy.metrics?.timeSaved
        ? { label: "Time Saved", value: caseStudy.metrics.timeSaved }
        : null,
      caseStudy.metrics?.coverage
        ? { label: "Coverage", value: caseStudy.metrics.coverage }
        : null,
      caseStudy.metrics?.roi
        ? { label: "ROI", value: caseStudy.metrics.roi }
        : null,
    ] as Array<{ label: string; value: string } | null>
  ).filter((metric): metric is { label: string; value: string } => Boolean(metric));

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <div className="glass-panel" style={{ overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr' }} className="customer-story-grid">
            
            {/* Left Column */}
            <div style={{ padding: 'var(--space-2xl)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div style={{ background: '#fff', padding: '12px', borderRadius: '8px', width: 'fit-content' }}>
                  <img
                    src={caseStudy.logo}
                    alt={caseStudy.company}
                    style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: 'var(--space-xs)' }}>
                    {caseStudy.industry}
                  </div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                    {caseStudy.company}
                  </h2>
                </div>

                {caseStudy.quote && (
                  <div style={{ padding: 'var(--space-lg)', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                    <Quote style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-md)' }} size={24} />
                    <p style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                      “{caseStudy.quote}”
                    </p>
                    {caseStudy.author && (
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {caseStudy.author}
                      </div>
                    )}
                  </div>
                )}

                <a 
                  href={`/case-studies/${caseStudy.slug}`} 
                  className="btn-primary"
                  style={{ width: 'fit-content', marginTop: 'var(--space-md)', background: 'var(--text-primary)', color: 'var(--bg-primary)' }}
                >
                  Read Full Story
                  <ArrowRight style={{ marginLeft: '8px' }} size={20} />
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ 
              padding: 'var(--space-2xl)', 
              background: 'var(--bg-card)', 
              borderLeft: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2xl)'
            }}>
              {keyResults.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                    Key Results
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    {keyResults.map((result, index) => (
                      <li key={index} style={{ display: 'flex', gap: 'var(--space-md)', color: 'var(--text-primary)' }}>
                        <CheckCircle style={{ color: 'var(--accent-primary)', flexShrink: 0 }} size={20} />
                        <span style={{ fontSize: '1rem', lineHeight: 1.5 }}>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {impactMetrics.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                    Impact Metrics
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)' }}>
                    {impactMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        style={{ 
                          padding: 'var(--space-md)', 
                          background: 'rgba(255,255,255,0.05)', 
                          borderRadius: '12px',
                          textAlign: 'center',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          {metric.value}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .customer-story-grid {
            grid-template-columns: 1fr !important;
          }
          .customer-story-grid > div:last-child {
            border-left: none !important;
            border-top: 1px solid var(--border-subtle);
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerStory;
