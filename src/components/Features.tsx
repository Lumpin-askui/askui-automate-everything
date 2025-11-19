import "@/styles/design-system.css";

const Features = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="glass-panel" style={{ 
          padding: 'var(--space-3xl)', 
          background: 'linear-gradient(135deg, var(--accent-primary), #15803d)', 
          color: '#ffffff',
          maxWidth: '900px', 
          margin: '0 auto',
          textAlign: 'center',
          border: 'none',
          boxShadow: '0 20px 40px -10px rgba(22, 163, 74, 0.3)'
        }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--space-md)', color: '#ffffff' }}>
            Privacy & Security First
          </h3>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-xl)', lineHeight: 1.6 }}>
            ISO27001 certified with complete data sovereignty. Deploy on-premise or bring your own models for maximum control.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '8px', fontWeight: 500, fontSize: '0.875rem' }}>
              ISO27001 Certified
            </div>
            <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '8px', fontWeight: 500, fontSize: '0.875rem' }}>
              On-Premise Available
            </div>
            <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '8px', fontWeight: 500, fontSize: '0.875rem' }}>
              BYOM Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
