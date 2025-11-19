import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "@/styles/design-system.css";

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="glass-panel" style={{ 
          padding: 'var(--space-3xl)', 
          position: 'relative', 
          overflow: 'hidden', 
          background: 'var(--bg-card)', 
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.05)'
        }}>
          {/* Background Grid - Light */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', 
            backgroundSize: '40px 40px', 
            opacity: 0.5
          }} />
          
          {/* Glow - Subtle Green */}
          <div style={{ 
            position: 'absolute', 
            top: '-50%', 
            right: '-20%', 
            width: '800px', 
            height: '800px', 
            background: 'radial-gradient(circle at center, rgba(22, 163, 74, 0.05) 0%, transparent 70%)', 
            borderRadius: '50%', 
            pointerEvents: 'none' 
          }} />

          <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }} id="contact">
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--space-md)', lineHeight: 1.1 }}>
              Scale Your Automation <br />
              <span style={{ color: 'var(--accent-primary)' }}>Without Limits</span>
            </h2>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-2xl)', lineHeight: 1.6 }}>
              Join engineering teams at Deutsche Bahn, Intel, and more who trust AskUI for mission-critical automation.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--space-md)', justifyContent: 'center', marginBottom: 'var(--space-2xl)', flexWrap: 'wrap' }}>
              <a href="/enterprise" className="btn-primary" style={{ height: '56px', padding: '0 32px', fontSize: '1.125rem', boxShadow: '0 4px 14px rgba(22, 163, 74, 0.4)' }}>
                Book a Demo
                <ArrowRight style={{ marginLeft: '8px' }} size={20} />
              </a>
              <a href="https://www.caesr.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ height: '56px', padding: '0 32px', fontSize: '1.125rem' }}>
                Start for Free
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-xl)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                <span>No Credit Card Required</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                <span>ISO27001 Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)' }} />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
