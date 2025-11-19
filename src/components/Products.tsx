import { Button } from "@/components/ui/button";
import { Terminal, MessageSquare, Cloud, Code, Monitor, Check } from "lucide-react";
import "@/styles/design-system.css";

// --- Visual Components ---

const VisualCaesr = () => (
  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '12px', right: '12px', width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899', boxShadow: '0 0 10px #ec4899' }} />
    <MessageSquare size={32} style={{ color: '#ec4899' }} />
  </div>
);

const VisualCLI = () => (
  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Terminal size={32} style={{ color: '#a855f7' }} />
  </div>
);

const VisualSuite = () => (
  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(249, 115, 22, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Monitor size={32} style={{ color: '#f97316' }} />
  </div>
);

const VisualSDK = () => (
  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Code size={32} style={{ color: '#3b82f6' }} />
  </div>
);

const VisualCloud = () => (
  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Cloud size={32} style={{ color: '#6366f1' }} />
  </div>
);

const products = [
  {
    visual: VisualCaesr,
    name: "AskUI Caesr",
    tagline: "Chat Interface for Automation",
    description: "Agentic chat interface for automation built on top of our core infrastructure. Perfect for non-technical users who want to automate tasks through conversation.",
    audience: "Software testers, prosumers, managers",
    features: ["Agentic chat interface", "Configure models", "Device management", "Infrastructure configuration"],
    accentColor: "#ec4899"
  },
  {
    visual: VisualCLI,
    name: "AskUI CLI",
    tagline: "Configuration & Orchestration",
    description: "Command-line tool to configure models, tools, environments and trigger automations.",
    audience: "DevOps engineers, QA automation teams",
    features: ["Multi-model support", "Tool integration", "Sandbox management", "Task orchestration"],
    accentColor: "#a855f7"
  },
  {
    visual: VisualSuite,
    name: "AskUI Suite",
    tagline: "Universal Device Infrastructure",
    description: "Infrastructure toolkit for making devices and machines available to computer use models across all platforms.",
    audience: "Platform engineers, infrastructure teams",
    features: ["Windows, MacOS, Linux, iOS, Android", "Sandbox environments", "Unicode char typing", "Credentials handling"],
    accentColor: "#f97316"
  },
  {
    visual: VisualSDK,
    name: "AskUI SDK",
    tagline: "Developer Library",
    description: "Open source Python library for building agents and interacting with AskUI Suite.",
    audience: "Developers, QA engineers",
    features: ["Open source", "Python-first", "Extensive documentation", "Active community"],
    accentColor: "#3b82f6"
  },
  {
    visual: VisualCloud,
    name: "AskUI Cloud",
    tagline: "Hosted Inference",
    description: "Managed cloud infrastructure for running computer use agents without managing your own models.",
    audience: "Teams without ML infrastructure",
    features: ["Managed inference", "Auto-scaling", "Pay-per-use", "Global availability"],
    accentColor: "#6366f1"
  }
];

const Products = () => {
  return (
    <section id="products" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <h2 className="section-title">
            Complete <span className="text-accent-gradient">Product Suite</span>
          </h2>
          <p className="section-subtitle">
            From SDKs for developers to no-code tools for business users
          </p>
        </div>

        {/* Featured Products */}
        <div className="grid-2" style={{ marginBottom: 'var(--space-xl)' }}>
          {products.slice(0, 2).map((product, index) => (
            <div key={index} className="glass-panel group" style={{ padding: 'var(--space-xl)', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-lg)', marginBottom: 'var(--space-lg)' }}>
                <product.visual />
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{product.name}</h3>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: product.accentColor }}>{product.tagline}</p>
                </div>
              </div>
              
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>{product.description}</p>
              
              <div style={{ marginBottom: 'var(--space-lg)', padding: 'var(--space-sm) var(--space-md)', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.875rem' }}>
                <span style={{ color: 'var(--text-tertiary)' }}>For:</span> <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{product.audience}</span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <Check size={16} style={{ color: product.accentColor }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-secondary" style={{ width: '100%', height: '48px', fontSize: '0.875rem' }}>Learn More</button>
            </div>
          ))}
        </div>

        {/* Other Products */}
        <div className="grid-3">
          {products.slice(2).map((product, index) => (
            <div key={index} className="glass-panel group" style={{ padding: 'var(--space-lg)', transition: 'all 0.3s ease' }}>
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <product.visual />
              </div>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>{product.name}</h3>
              <p style={{ fontSize: '0.75rem', fontWeight: 500, color: product.accentColor, marginBottom: 'var(--space-md)' }}>{product.tagline}</p>
              
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', minHeight: '60px' }}>{product.description}</p>
              
              <div style={{ marginBottom: 'var(--space-lg)', padding: 'var(--space-sm)', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.75rem', minHeight: '50px' }}>
                <span style={{ color: 'var(--text-tertiary)' }}>For:</span> <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{product.audience}</span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--space-lg)', minHeight: '100px' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    <Check size={14} style={{ color: product.accentColor }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-secondary" style={{ width: '100%', height: '40px', fontSize: '0.875rem' }}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
