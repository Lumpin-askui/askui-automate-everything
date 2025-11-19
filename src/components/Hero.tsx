import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, MessageSquare, Check, Play, FileText, Plus, Paperclip, Mic, ArrowUp, Monitor, Laptop, Cloud, Smartphone, Briefcase } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";
import intelLogo from "@/assets/clients/intel.png";
import "./Hero.css";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'cli'>('chat');
  const [chatInput, setChatInput] = useState("");

  const handleChatSubmit = () => {
    window.location.href = 'https://app.caesr.ai';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleChatSubmit();
    }
  };

  const devices = [
    { name: "Windows", icon: Monitor, x: 10, y: 15, color: '#0078D4' },
    { name: "macOS", icon: Laptop, x: 90, y: 15, color: '#333333' },
    { name: "Linux", icon: Terminal, x: 5, y: 50, color: '#FCC624' },
    { name: "Citrix", icon: Cloud, x: 95, y: 50, color: '#F37321' },
    { name: "Android", icon: Smartphone, x: 20, y: 85, color: '#3DDC84' },
    { name: "iOS", icon: Smartphone, x: 80, y: 85, color: '#555555' },
  ];

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

              {/* Toggle Tabs */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                padding: '6px',
                background: '#f1f5f9',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                marginBottom: '32px',
                marginTop: '12px',
                width: 'fit-content',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
              }}>
                <button 
                  onClick={() => setActiveTab('chat')}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    border: activeTab === 'chat' ? '1px solid rgba(0,0,0,0.04)' : '1px solid transparent',
                    background: activeTab === 'chat' ? '#fff' : 'transparent',
                    boxShadow: activeTab === 'chat' ? '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    color: activeTab === 'chat' ? '#0f172a' : '#64748b',
                    fontWeight: activeTab === 'chat' ? 700 : 500,
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
                    minWidth: '160px',
                    justifyContent: 'center'
                  }}
                >
                  <Briefcase size={18} className={activeTab === 'chat' ? "text-primary" : "opacity-70"} />
                  For Business
                </button>
                
                <button 
                  onClick={() => setActiveTab('cli')}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    border: activeTab === 'cli' ? '1px solid rgba(0,0,0,0.04)' : '1px solid transparent',
                    background: activeTab === 'cli' ? '#fff' : 'transparent',
                    boxShadow: activeTab === 'cli' ? '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    color: activeTab === 'cli' ? '#0f172a' : '#64748b',
                    fontWeight: activeTab === 'cli' ? 700 : 500,
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
                    minWidth: '160px',
                    justifyContent: 'center'
                  }}
                >
                  <Terminal size={18} className={activeTab === 'cli' ? "text-primary" : "opacity-70"} />
                  For Developers
                </button>
              </div>
              
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
              <div style={{ 
                height: '480px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* Background Connections */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                  <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--border-subtle)" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="var(--accent-primary)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="var(--border-subtle)" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    {devices.map((device, i) => (
                      <line 
                        key={i}
                        x1="50%" 
                        y1="55%" 
                        x2={`${device.x}%`} 
                        y2={`${device.y}%`} 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    ))}
                  </svg>
                  
                  {devices.map((device, i) => (
                    <div 
                      key={i}
                      style={{
                        position: 'absolute',
                        left: `${device.x}%`,
                        top: `${device.y}%`,
                        transform: 'translate(-50%, -50%)',
                        background: 'var(--bg-primary)',
                        padding: '8px 12px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        zIndex: 1
                      }}
                    >
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        background: `${device.color}15`,
                        borderRadius: '6px'
                      }}>
                        <device.icon size={14} style={{ color: device.color }} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>{device.name}</span>
                    </div>
                  ))}
                </div>

                <div style={{ width: '100%', maxWidth: '480px', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  
                  {activeTab === 'chat' ? (
                    <>
                      {/* Chat Widget */}
                      <div className="chat-input-container" style={{ minHeight: '140px' }}>
                        <textarea 
                          placeholder="Ask Caesr to automate a workflow..."
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyDown={handleKeyDown}
                          style={{ 
                            color: '#0f172a',
                            fontSize: '18px', 
                            marginBottom: '8px',
                            fontFamily: 'var(--font-sans)',
                            border: 'none',
                            background: 'transparent',
                            resize: 'none',
                            outline: 'none',
                            minHeight: '28px',
                            width: '100%',
                          }}
                          className="placeholder:text-slate-500"
                        />
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ 
                              width: '36px', 
                              height: '36px', 
                              borderRadius: '50%', 
                              border: '1px solid #e2e8f0',
                              background: '#fff',
                              color: '#94a3b8',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}>
                              <Plus size={18} />
                            </div>
                            <div style={{ 
                              padding: '0 16px', 
                              height: '36px', 
                              borderRadius: '18px', 
                              border: '1px solid #e2e8f0',
                              background: '#fff',
                              color: '#64748b',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '14px',
                              fontWeight: 500,
                              cursor: 'pointer'
                            }}>
                              <Paperclip size={16} /> Attach
                            </div>
                          </div>

                          <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ 
                              width: '36px', 
                              height: '36px', 
                              borderRadius: '50%', 
                              background: 'transparent',
                              color: '#94a3b8',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}>
                              <Mic size={20} />
                            </div>
                            <button 
                              onClick={handleChatSubmit}
                              style={{ 
                                width: '36px', 
                                height: '36px', 
                                borderRadius: '50%', 
                                background: 'var(--accent-primary)',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                boxShadow: '0 2px 4px rgba(22, 163, 74, 0.2)',
                                cursor: 'pointer'
                              }}
                            >
                              <ArrowUp size={20} strokeWidth={3} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* CLI Widget - Styled to match Chat Widget dimensions */
                    <div style={{
                      width: '100%',
                      minHeight: '140px',
                      background: '#1e1e24',
                      borderRadius: '20px',
                      padding: '20px',
                      color: '#fff',
                      fontFamily: 'monospace',
                      fontSize: '13px',
                      boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}>
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ color: '#22c55e' }}>➜</span> <span style={{ color: '#a1a1aa' }}>~</span> <span style={{ color: '#fff' }}>askui-runner ui</span>
                        </div>
                        <div style={{ color: '#a1a1aa', lineHeight: '1.6' }}>
                          Starting AskUI Controller...<br/>
                          <span style={{ color: '#22c55e' }}>✔</span> Connected to device: Localhost<br/>
                          <span style={{ color: '#22c55e' }}>✔</span> Vision Model: Loaded<br/>
                          Ready for commands.
                        </div>
                        <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: '#22c55e' }}>➜</span> <span style={{ width: '8px', height: '16px', background: '#fff', display: 'block' }} />
                        </div>
                      </div>
                    </div>
                  )}

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