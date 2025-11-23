import { Github, X, Linkedin, Mail, Youtube } from "lucide-react";
import askuiIcon from "@/assets/askui-icon.svg";
import { Link } from "react-router-dom";
import "@/styles/design-system.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="container-custom">
        <div className="grid-5-custom">
          {/* Brand */}
          <div>
            <img src={askuiIcon} alt="AskUI" style={{ height: '40px', marginBottom: 'var(--space-md)' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: 'var(--space-lg)', maxWidth: '300px', lineHeight: 1.6 }}>
              Enterprise-ready computer use agent infrastructure for Windows, MacOS, Linux, iOS, and Android.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              {[
                { icon: Github, href: "https://github.com/askui/vision-agent" },
                { icon: X, href: "https://x.com/ask_ui" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/askui/" },
                { icon: Youtube, href: "https://www.youtube.com/@askui4398" },
                { icon: Mail, href: "mailto:sales@askui.com" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-highlight)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-primary)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-lg)' }}>
              Platform
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <li>
                <a href="/#products" className="footer-link">AskUI Caesr</a>
              </li>
              <li>
                <a href="/#products" className="footer-link">Agent OS</a>
              </li>
              <li>
                <a href="/#products" className="footer-link">CLI & SDK</a>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-lg)' }}>
              Use Cases
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <li>
                <Link to="/solutions/software-testing" className="footer-link">Software Testing</Link>
              </li>
              <li>
                <Link to="/solutions/automation-teams" className="footer-link">Automation Teams</Link>
              </li>
              <li>
                <Link to="/solutions/agent-startups" className="footer-link">Agent Startups</Link>
              </li>
            </ul>

            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
              Technologies
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <li>
                <Link to="/solutions/citrix" className="footer-link">Citrix Automation</Link>
              </li>
              <li>
                <Link to="/solutions/sap" className="footer-link">SAP Automation</Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-lg)' }}>
              Industries
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <li>
                <Link to="/solutions/finance" className="footer-link">Banking & Finance</Link>
              </li>
              <li>
                <Link to="/solutions/retail" className="footer-link">Retail & E-commerce</Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="footer-link">Healthcare</Link>
              </li>
              <li>
                <Link to="/solutions/telecom" className="footer-link">Telecom</Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing" className="footer-link">Manufacturing</Link>
              </li>
              <li>
                <Link to="/solutions/consumer-electronics" className="footer-link">Consumer Electronics</Link>
              </li>
              <li>
                <Link to="/solutions/automotive" className="footer-link">Automotive</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-lg)' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <li>
                <Link to="/blog" className="footer-link">Blog</Link>
              </li>
              <li>
                <Link to="/case-studies" className="footer-link">Customers</Link>
              </li>
              <li>
                <a href="https://docs.askui.com" target="_blank" rel="noopener noreferrer" className="footer-link">Documentation</a>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">Pricing</Link>
              </li>
              <li>
                <a href="https://trust.askui.com" target="_blank" rel="noopener noreferrer" className="footer-link">Trust Center</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>© 2025 AskUI. All rights reserved.</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
              <Link to="/imprint" className="footer-link" style={{ fontSize: '0.875rem' }}>Imprint</Link>
              <Link to="/privacy-policy" className="footer-link" style={{ fontSize: '0.875rem' }}>Privacy Policy</Link>
              <Link to="/terms-of-service" className="footer-link" style={{ fontSize: '0.875rem' }}>Terms of Service</Link>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', fontWeight: 500, borderLeft: '1px solid var(--border-subtle)', paddingLeft: 'var(--space-lg)' }}>
              ISO27001 Certified
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .grid-5-custom {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1fr 1fr 0.8fr;
          gap: var(--space-xl);
        }
        .footer-link {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--accent-primary);
        }
        @media (max-width: 1024px) {
          .grid-5-custom {
            grid-template-columns: repeat(3, 1fr);
          }
          .grid-5-custom > div:first-child {
            grid-column: span 3;
            margin-bottom: var(--space-xl);
          }
        }
        @media (max-width: 640px) {
          .grid-5-custom {
            grid-template-columns: 1fr 1fr;
          }
          .grid-5-custom > div:first-child {
            grid-column: span 2;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;