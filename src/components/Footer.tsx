import { Github, X, Linkedin, Mail } from "lucide-react";
import askuiIcon from "@/assets/askui-icon.svg";
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
                { icon: Github, href: "https://github.com/askui" },
                { icon: X, href: "https://x.com/ask_ui" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/askui/" },
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

          {/* Links Sections */}
          {[
            {
              title: "Products",
              links: ["AskUI Caesr", "AskUI CLI", "AskUI Suite", "AskUI SDK", "AskUI Cloud"]
            },
            {
              title: "Resources",
              links: ["Documentation", "API Reference", "Blog", "Case Studies", "Benchmarks"]
            },
            {
              title: "Company",
              links: ["Careers", "Contact", "Privacy Policy", "Terms of Service", "Imprint"]
            }
          ].map((section) => (
            <div key={section.title}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-lg)' }}>
                {section.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>© 2025 AskUI. All rights reserved.</p>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            ISO27001 Certified
          </div>
        </div>
      </div>
      
      <style>{`
        .grid-5-custom {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-2xl);
        }
        @media (max-width: 768px) {
          .grid-5-custom {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
