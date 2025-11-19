import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, MessageSquare, Terminal, Monitor, Code, Cloud, Shield, Zap, Rocket } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import askuiLogo from "@/assets/askui-logo.svg";
import { Link } from "react-router-dom";
import "@/styles/design-system.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'rgba(255,255,255,0.9)' }}>
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center">
              <img src={askuiLogo} alt="AskUI" className="h-8" />
            </a>

            {/* Desktop Navigation - Left Aligned */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <NavigationMenu disableHover delayDuration={100}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="text-sm font-medium bg-transparent"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] p-4 bg-background" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                        <div className="grid gap-2">
                          <NavigationMenuLink asChild>
                            <a href="/#products" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <MessageSquare className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>AskUI Caesr</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Chat interface for automation</div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="/#products" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <Terminal className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>AskUI CLI</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Command-line orchestration</div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="/#products" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <Monitor className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>AskUI Suite</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Universal device infrastructure</div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="/#products" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <Code className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>AskUI SDK</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Open source developer library</div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="/#products" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <Cloud className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>AskUI Cloud</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Hosted inference & scaling</div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="text-sm font-medium bg-transparent"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] p-4 bg-background" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                        <div className="grid gap-2">
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/software-testing" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <Shield className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Software Testing</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Automated testing at scale</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/automation-teams" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <Zap className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Automation Teams</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>RPA and workflow automation</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link to="/solutions/agent-startups" className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                              <div className="mt-1 p-1.5 bg-muted rounded-md group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <Rocket className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} />
                              </div>
                              <div>
                                <div className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Agent Startups</div>
                                <div className="text-sm text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Build AI agent products</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Link to="/case-studies" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ color: 'var(--text-secondary)' }}>
                Customers
              </Link>
              <Link to="/pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ color: 'var(--text-secondary)' }}>
                Pricing
              </Link>
              <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ color: 'var(--text-secondary)' }}>
                Blog
              </Link>
              <a href="https://docs.askui.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ color: 'var(--text-secondary)' }}>
                Docs
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons - Right Aligned */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <a href="https://app.caesr.ai" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground hover:bg-accent/10" style={{ color: 'var(--text-primary)' }}>
                Log in
              </Button>
            </a>
            <Link to="/enterprise">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-accent font-semibold shadow-[0_0_15px_rgba(117,255,101,0.3)] hover:shadow-[0_0_20px_rgba(117,255,101,0.5)] transition-all" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)', boxShadow: 'none' }}>
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: 'var(--text-primary)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/40 mt-4 animate-in slide-in-from-top-5 duration-200" style={{ borderColor: 'var(--border-subtle)' }}>
            <Collapsible open={productsOpen} onOpenChange={setProductsOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors p-2" style={{ color: 'var(--text-primary)' }}>
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 pl-4">
                <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <MessageSquare className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>AskUI Caesr</span>
                </a>
                <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <Terminal className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>AskUI CLI</span>
                </a>
                <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <Monitor className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>AskUI Suite</span>
                </a>
                <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <Code className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>AskUI SDK</span>
                </a>
                <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <Cloud className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>AskUI Cloud</span>
                </a>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors p-2" style={{ color: 'var(--text-primary)' }}>
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 pl-4">
                <Link to="/solutions/software-testing" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <Shield className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Software Testing</span>
                </Link>
                <Link to="/solutions/automation-teams" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <Zap className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Automation Teams</span>
                </Link>
                <Link to="/solutions/agent-startups" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                  <Rocket className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Agent Startups</span>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <div className="space-y-2 pt-2 border-t border-border/40" style={{ borderColor: 'var(--border-subtle)' }}>
              <Link to="/case-studies" className="block p-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-accent/5 rounded-md" style={{ color: 'var(--text-secondary)' }}>
                Customers
              </Link>
              <Link to="/pricing" className="block p-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-accent/5 rounded-md" style={{ color: 'var(--text-secondary)' }}>
                Pricing
              </Link>
              <Link to="/blog" className="block p-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-accent/5 rounded-md" style={{ color: 'var(--text-secondary)' }}>
                Blog
              </Link>
              <a href="https://docs.askui.com" target="_blank" rel="noopener noreferrer" className="block p-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:bg-accent/5 rounded-md" style={{ color: 'var(--text-secondary)' }}>
                Docs
              </a>
            </div>
            
            <div className="pt-4 space-y-2">
              <a href="https://app.caesr.ai" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" size="sm" className="w-full justify-center" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}>
                  Log in
                </Button>
              </a>
              <Link to="/enterprise" className="block">
                <Button variant="default" size="sm" className="w-full justify-center bg-primary hover:bg-primary/90 text-accent font-bold" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
                  Book Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
