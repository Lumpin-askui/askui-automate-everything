import { Shield, Zap, Users, Lock, Monitor, Code, Terminal, Database, Building, MessageSquare, ArrowRight, Check, Laptop, Tablet, Smartphone } from "lucide-react";
import "@/styles/design-system.css";

const VisualPlatform = () => (
  <div style={{ height: '140px', width: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
      <Monitor size={40} style={{ color: 'var(--text-tertiary)', opacity: 0.4 }} />
      <Laptop size={32} style={{ color: 'var(--text-tertiary)', opacity: 0.6 }} />
      <Tablet size={24} style={{ color: 'var(--text-tertiary)', opacity: 0.8 }} />
      <Smartphone size={20} style={{ color: 'var(--text-secondary)' }} />
    </div>
  </div>
);

const VisualIntegration = () => (
  <div style={{ height: '140px', width: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ padding: '8px', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
        <Code size={24} style={{ color: 'var(--text-secondary)' }} />
      </div>
      <div style={{ width: '30px', height: '1px', background: 'var(--border-subtle)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-3px', left: '50%', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
      </div>
      <div style={{ padding: '8px', background: 'rgba(22, 163, 74, 0.1)', borderRadius: '8px', border: '1px solid rgba(22, 163, 74, 0.2)' }}>
        <Terminal size={24} style={{ color: 'var(--accent-primary)' }} />
      </div>
    </div>
  </div>
);

const VisualReliability = () => (
  <div style={{ height: '140px', width: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px' }}>
      <div style={{ width: '12px', height: '40%', background: 'rgba(22, 163, 74, 0.1)', borderRadius: '2px 2px 0 0' }} />
      <div style={{ width: '12px', height: '60%', background: 'rgba(22, 163, 74, 0.2)', borderRadius: '2px 2px 0 0' }} />
      <div style={{ width: '12px', height: '50%', background: 'rgba(22, 163, 74, 0.3)', borderRadius: '2px 2px 0 0' }} />
      <div style={{ width: '12px', height: '80%', background: 'rgba(22, 163, 74, 0.4)', borderRadius: '2px 2px 0 0' }} />
      <div style={{ width: '12px', height: '100%', background: 'var(--accent-primary)', borderRadius: '2px 2px 0 0', position: 'relative' }}>
        <Zap size={12} style={{ position: 'absolute', top: '-16px', left: '0', color: 'var(--accent-primary)', fill: 'currentColor' }} />
      </div>
    </div>
  </div>
);

const VisualBarriers = () => (
  <div style={{ height: '140px', width: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ position: 'relative' }}>
      <div style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid var(--border-subtle)' }}>
        <MessageSquare size={20} style={{ color: 'var(--accent-primary)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ width: '40px', height: '6px', background: 'var(--bg-tertiary)', borderRadius: '99px' }} />
          <div style={{ width: '24px', height: '6px', background: 'var(--bg-tertiary)', borderRadius: '99px' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: 'var(--accent-primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-primary)' }}>
        <Users size={16} style={{ color: 'var(--text-inverse)' }} />
      </div>
    </div>
  </div>
);

const VisualEnterprise = () => (
  <div style={{ height: '140px', width: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ position: 'relative' }}>
      <Building size={64} style={{ color: 'var(--border-highlight)' }} />
      <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', background: 'var(--bg-secondary)', padding: '6px', borderRadius: '50%', border: '1px solid var(--border-subtle)' }}>
        <Shield size={20} style={{ color: 'var(--accent-primary)', fill: 'rgba(22, 163, 74, 0.1)' }} />
      </div>
      <div style={{ position: 'absolute', top: '-4px', right: '-12px', background: 'var(--accent-primary)', color: 'var(--text-inverse)', fontSize: '10px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '99px' }}>
        ISO
      </div>
    </div>
  </div>
);

const VisualPrivacy = () => (
  <div style={{ height: '140px', width: '100%', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ position: 'relative' }}>
        <Database size={48} style={{ color: 'var(--border-highlight)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Lock size={20} style={{ color: 'var(--accent-primary)' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: 'var(--accent-primary)', background: 'rgba(22, 163, 74, 0.1)', padding: '2px 6px', borderRadius: '99px', border: '1px solid rgba(22, 163, 74, 0.2)' }}>
          <Check size={10} /> Local
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: 'var(--accent-primary)', background: 'rgba(22, 163, 74, 0.1)', padding: '2px 6px', borderRadius: '99px', border: '1px solid rgba(22, 163, 74, 0.2)' }}>
          <Check size={10} /> Secure
        </div>
      </div>
    </div>
  </div>
);

const problems = [
  {
    visual: VisualPlatform,
    title: "Limited Platform Support",
    problem: "CUAs typically struggle with cross-platform compatibility.",
    solution: "Universal compatibility across Android, Windows, MacOS, iOS and Linux.",
    highlight: "var(--accent-primary)"
  },
  {
    visual: VisualIntegration,
    title: "Integration Complexity",
    problem: "Complex configuration makes CUA models hard to deploy.",
    solution: "Simple SDK and CLI for seamless model integration in minutes.",
    highlight: "var(--accent-primary)"
  },
  {
    visual: VisualReliability,
    title: "Production Reliability",
    problem: "Inconsistent performance prevents production use.",
    solution: "Optimized infrastructure for consistent, fast, and reliable performance.",
    highlight: "var(--accent-primary)"
  },
  {
    visual: VisualBarriers,
    title: "Technical Barriers",
    problem: "Non-technical users are locked out of automation.",
    solution: "Caesr app provides an intuitive chat interface for everyone.",
    highlight: "var(--accent-primary)"
  },
  {
    visual: VisualEnterprise,
    title: "Enterprise Readiness",
    problem: "Lack of security and compliance features.",
    solution: "ISO27001 certified with on-premise deployment support.",
    highlight: "var(--accent-primary)"
  },
  {
    visual: VisualPrivacy,
    title: "Privacy Concerns",
    problem: "Risks around data sovereignty and vendor lock-in.",
    solution: "Bring-your-own-model with complete data sovereignty.",
    highlight: "var(--accent-primary)"
  }
];

const Problems = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <h2 className="section-title">
            Solving the <br />
            <span className="text-accent">Hardest Problems</span> in Automation
          </h2>
          <p className="section-subtitle">
            We've built the infrastructure to make computer use agents enterprise-ready, reliable, and accessible.
          </p>
        </div>

        <div className="grid-3">
          {problems.map((item, index) => (
            <div key={index} className="glass-panel group" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <item.visual />
              
              <div style={{ padding: 'var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-md)', color: 'var(--text-primary)', transition: 'color 0.2s' }} className="group-hover:text-accent">
                  {item.title}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', flex: 1 }}>
                  <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-tertiary)', marginTop: '8px', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item.problem}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.highlight, marginTop: '8px', flexShrink: 0, boxShadow: `0 0 8px ${item.highlight}` }} />
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 500 }}>
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s ease' }} className="group-hover:opacity-100 group-hover:translate-y-0">
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solved with AskUI</span>
                  <ArrowRight size={16} style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
