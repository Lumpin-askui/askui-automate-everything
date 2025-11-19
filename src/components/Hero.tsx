import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, MessageSquare, Check, Play, FileText } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";
import intelLogo from "@/assets/clients/intel.png";
import "./Hero.css";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'cli' | 'chat'>('cli');

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
                Infrastructure for <span className="text-accent-gradient">AI Agents</span> on Any Device
              </h1>
              
              <p className="hero-subtitle">
                The only platform that lets AI agents control operating systems like a human. Windows, macOS, Linux, Android, and iOS—fully automated.
              </p>

              <div className="hero-actions">
                <a href="/enterprise" className="btn-primary">
                  Book a Demo
                  <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
                </a>
                <a href="https://www.caesr.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Try Caesr
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
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="control-dot" style={{ background: '#FF5F56' }} />
                    <div className="control-dot" style={{ background: '#FFBD2E' }} />
                    <div className="control-dot" style={{ background: '#27C93F' }} />
                  </div>
                  <div style={{ marginLeft: 'auto', marginRight: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: '12px', fontFamily: 'monospace' }}>
                    askui-agent — bash
                  </div>
                </div>

                <div className="terminal-body">
                  {/* Custom Tabs */}
                  <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '4px' }}>
                      <button 
                        onClick={() => setActiveTab('cli')}
                        style={{ 
                          background: activeTab === 'cli' ? 'var(--accent-primary)' : 'transparent',
                          color: activeTab === 'cli' ? '#fff' : 'rgba(255,255,255,0.6)',
                          border: 'none',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontWeight: 600
                        }}
                      >
                        <Terminal size={14} /> CLI
                      </button>
                      <button 
                        onClick={() => setActiveTab('chat')}
                        style={{ 
                          background: activeTab === 'chat' ? 'var(--accent-primary)' : 'transparent',
                          color: activeTab === 'chat' ? '#fff' : 'rgba(255,255,255,0.6)',
                          border: 'none',
                          padding: '4px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontWeight: 600
                        }}
                      >
                        <MessageSquare size={14} /> Chat
                      </button>
                    </div>
                  </div>

                  <div style={{ padding: '24px', height: '320px', overflow: 'hidden' }}>
                    {activeTab === 'cli' ? (
                      <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '4px', lineHeight: '1.4' }}>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ color: 'var(--accent-primary)' }}>➜</span>
                          <span>askui-runner help</span>
                        </div>
                        
                        <div style={{ color: 'rgba(255,255,255,0.6)' }}>Available Commands</div>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '4px', paddingTop: '4px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px', fontWeight: 'bold', color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>
                            <span>Command</span>
                            <span>Description</span>
                          </div>
                          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginBottom: '8px' }}></div>
                          
                          {[
                            ["run", "Execute test cases from a CSV file."],
                            ["ui", "Launch the Web/Desktop UI."],
                            ["init", "Create a sample test suite in current dir."],
                            ["add-tool", "Enable a tool in the configuration."],
                            ["remove-tool", "Disable a tool in the configuration."],
                            ["set-prompt", "Set the system prompt."],
                            ["config-model", "Configure the AI model."],
                            ["list-devices", "List connected displays/devices."],
                            ["connect-device", "Connect to a remote device."],
                            ["cache-steps", "Enable/disable step caching."]
                          ].map(([cmd, desc]) => (
                            <div key={cmd} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px', marginBottom: '4px' }}>
                              <span style={{ color: '#4ade80' }}>{cmd}</span>
                              <span style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</span>
                            </div>
                          ))}
                          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '16px' }}>
                            <span style={{ color: '#4ade80' }}>help</span>
                            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Show this list of commands.</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                          <div style={{ background: 'var(--accent-primary)', color: '#fff', borderRadius: '16px 16px 0 16px', padding: '12px 16px', fontSize: '14px', fontWeight: 500, maxWidth: '85%' }}>
                            Check if the login page loads correctly on iPhone 15 and Pixel 8.
                          </div>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>You</div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), #4ade80)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>AI</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ background: '#1e1e24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0 16px 16px 16px', padding: '16px', fontSize: '14px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent-primary)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                                <Play size={14} fill="currentColor" /> 
                                <span>Execution Started</span>
                              </div>
                              
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>iPhone 15 Pro</span>
                                  <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', background: 'rgba(74, 222, 128, 0.1)', padding: '2px 8px', borderRadius: '99px' }}>
                                    <Check size={12} /> Pass
                                  </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>Pixel 8</span>
                                  <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', background: 'rgba(74, 222, 128, 0.1)', padding: '2px 8px', borderRadius: '99px' }}>
                                    <Check size={12} /> Pass
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section style={{ padding: 'var(--space-2xl) 0', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
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
