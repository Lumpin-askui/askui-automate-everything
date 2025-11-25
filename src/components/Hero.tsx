import { Link } from "react-router-dom";
import { ArrowRight, Check, FileText } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";
import intelLogo from "@/assets/clients/intel.png";
import HeroVisual from "./HeroVisual";
import "./Hero.css";

const Hero = () => {
  const customers = [
    { 
      name: "Deutsche Bahn", 
      logo: dbLogo,
      link: "/case-studies/deutsche-bahn-boosts-efficiency-with-askui-test-automation"
    },
    { 
      name: "SEW Eurodrive", 
      logo: sewLogo,
      link: "/case-studies/sew-eurodrive-builds-scalable-system-testing-with-askui"
    },
    { 
      name: "Zucchetti", 
      logo: zucchettiLogo,
      link: "/case-studies/from-manual-testing-to-automated-excellence-zucchettis-success-with-askui"
    },
    { 
      name: "Solute", 
      logo: soluteLogo,
      link: null
    },
    { 
      name: "Intel Software", 
      logo: intelLogo,
      link: null
    }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg-grid" />
        
        <div className="container-custom">
          <div className="hero-content">
            
            {/* Text Column */}
            <div className="hero-text-col">
              <Link to="/benchmarks" className="hero-badge">
                <span className="hero-badge-dot" />
                Leading Android World Benchmark
              </Link>
              
              <h1 className="hero-title">
                Deploy Agents <br />
                <span className="text-accent-gradient" style={{ whiteSpace: 'nowrap' }}>on Any Device.</span>
              </h1>
              
              <p className="hero-subtitle" style={{ fontSize: '1.5rem', fontWeight: 500, marginTop: '1rem' }}>
                The infrastructure layer for AI-driven automation across desktop, mobile, and embedded systems.
              </p>

              <div className="hero-actions">
                <a href="/enterprise" className="btn-primary">
                  Book a Demo
                  <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
                </a>
              </div>

              <div className="hero-trust-badges">
                <span className="trust-badge-item">
                  <Check style={{ width: '16px', height: '16px', color: 'var(--accent-primary)' }} />
                  ISO27001 Certified
                </span>
                <span className="trust-badge-item">
                  <Check style={{ width: '16px', height: '16px', color: 'var(--accent-primary)' }} />
                  On-Premise
                </span>
                <span className="trust-badge-item">
                  <Check style={{ width: '16px', height: '16px', color: 'var(--accent-primary)' }} />
                  BYOM Support
                </span>
              </div>
            </div>

            {/* Visual Column */}
            <div className="hero-visual-col">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section style={{ padding: 'var(--space-xl) 0 var(--space-2xl)', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-custom">
          <p style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', marginBottom: 'var(--space-xl)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Trusted by Engineering Teams At
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-2xl)', alignItems: 'center' }}>
            {customers.map((customer, index) => {
              const content = (
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }} className="group">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    style={{ 
                      height: '32px', 
                      width: 'auto', 
                      objectFit: 'contain',
                      filter: customer.link ? 'grayscale(100%)' : 'grayscale(100%) opacity(0.4)',
                      transition: 'all 0.3s ease',
                      cursor: customer.link ? 'pointer' : 'default'
                    }}
                    onMouseEnter={(e) => {
                      if (customer.link) {
                        e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (customer.link) {
                        e.currentTarget.style.filter = 'grayscale(100%)';
                      }
                    }}
                  />
                  {customer.link && (
                    <div style={{ 
                      position: 'absolute', 
                      top: '-10px', 
                      right: '-12px', 
                      opacity: 0, 
                      transform: 'scale(0.8)', 
                      transition: 'all 0.3s ease' 
                    }} className="group-hover:opacity-100 group-hover:scale-100">
                      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '4px', borderRadius: '50%' }}>
                        <FileText size={12} style={{ color: 'var(--accent-primary)' }} />
                      </div>
                    </div>
                  )}
                </div>
              );

              return customer.link ? (
                <Link key={index} to={customer.link} title={`Read ${customer.name} Case Study`}>
                  {content}
                </Link>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;