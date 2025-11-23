import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, MessageSquare, Terminal, Monitor, Code, Cloud, Shield, Zap, Rocket, Briefcase, Landmark, ShoppingCart, Heart, Phone, Factory, Car, Cpu, AppWindow, Layers, Github, LayoutDashboard } from "lucide-react";
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
              <NavigationMenu delayDuration={100}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="text-sm font-medium bg-transparent"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[900px] p-0 bg-background overflow-hidden rounded-lg shadow-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)' }}>
                        <div className="grid grid-cols-12 min-h-[320px]">
                          {/* Column 1: Platform (Highlighted) */}
                          <div className="col-span-3 p-6 bg-muted/30 border-r border-border/50" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">Platform</div>
                            <div className="grid gap-3">
                              <NavigationMenuLink asChild>
                                <a href="https://www.caesr.ai" target="_blank" rel="noopener noreferrer" className="block group">
                                  <div className="flex items-center gap-2 mb-1">
                                    <MessageSquare className="h-4 w-4 text-primary" />
                                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Caesr Chat</div>
                                  </div>
                                  <div className="text-xs text-muted-foreground line-clamp-2" style={{ color: 'var(--text-secondary)' }}>Universal chat assistant</div>
                                </a>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/enterprise" className="block group">
                                  <div className="flex items-center gap-2 mb-1">
                                    <LayoutDashboard className="h-4 w-4 text-primary" />
                                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Caesr Desktop</div>
                                  </div>
                                  <div className="text-xs text-muted-foreground line-clamp-2" style={{ color: 'var(--text-secondary)' }}>Desktop control center</div>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/enterprise" className="block group">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Monitor className="h-4 w-4 text-primary" />
                                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Agent OS</div>
                                  </div>
                                  <div className="text-xs text-muted-foreground line-clamp-2" style={{ color: 'var(--text-secondary)' }}>Headless infrastructure</div>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <a href="https://github.com/askui/vision-agent" target="_blank" rel="noopener noreferrer" className="block group">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Terminal className="h-4 w-4 text-primary" />
                                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>CLI & SDK</div>
                                  </div>
                                  <div className="text-xs text-muted-foreground line-clamp-2" style={{ color: 'var(--text-secondary)' }}>For developers</div>
                                </a>
                              </NavigationMenuLink>
                            </div>
                          </div>

                          {/* Column 2: By Use Case */}
                          <div className="col-span-3 p-6 border-r border-border/50">
                            <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">By Use Case</div>
                            <div className="grid gap-4 mb-8">
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/software-testing" className="flex items-start gap-3 group">
                                  <Shield className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Software Testing</div>
                                    <div className="text-xs text-muted-foreground mt-0.5" style={{ color: 'var(--text-secondary)' }}>QA automation</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/automation-teams" className="flex items-start gap-3 group">
                                  <Zap className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Automation Teams</div>
                                    <div className="text-xs text-muted-foreground mt-0.5" style={{ color: 'var(--text-secondary)' }}>RPA & Workflows</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/agent-startups" className="flex items-start gap-3 group">
                                  <Rocket className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Agent Startups</div>
                                    <div className="text-xs text-muted-foreground mt-0.5" style={{ color: 'var(--text-secondary)' }}>Build with AskUI</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </div>

                            <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">Technologies</div>
                            <div className="grid gap-4">
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/citrix" className="flex items-start gap-3 group">
                                  <AppWindow className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Citrix Automation</div>
                                    <div className="text-xs text-muted-foreground mt-0.5" style={{ color: 'var(--text-secondary)' }}>Visual automation</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/sap" className="flex items-start gap-3 group">
                                  <Layers className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>SAP Automation</div>
                                    <div className="text-xs text-muted-foreground mt-0.5" style={{ color: 'var(--text-secondary)' }}>GUI & Fiori</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </div>

                          {/* Column 3: Industries (Wide) */}
                          <div className="col-span-6 p-6">
                            <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">Industries</div>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/finance" className="flex items-center gap-3 group">
                                  <Landmark className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Banking & Finance</span>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/retail" className="flex items-center gap-3 group">
                                  <ShoppingCart className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Retail & E-commerce</span>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/healthcare" className="flex items-center gap-3 group">
                                  <Heart className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Healthcare</span>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/telecom" className="flex items-center gap-3 group">
                                  <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Telecom</span>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/manufacturing" className="flex items-center gap-3 group">
                                  <Factory className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Manufacturing</span>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/consumer-electronics" className="flex items-center gap-3 group">
                                  <Cpu className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Consumer Electronics</span>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link to="/solutions/automotive" className="flex items-center gap-3 group">
                                  <Car className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>Automotive</span>
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          </div>
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
            <a href="https://github.com/askui/vision-agent" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors mx-2">
              <Github className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} />
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
            <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors p-2" style={{ color: 'var(--text-primary)' }}>
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-4 pl-4">
                {/* Platform Section */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-muted-foreground px-2 mb-2 uppercase tracking-wider">Platform</div>
                  <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <MessageSquare className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>AskUI Caesr</span>
                  </a>
                  <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <LayoutDashboard className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Caesr Desktop</span>
                  </a>
                  <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Monitor className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Agent OS</span>
                  </a>
                  <a href="/#products" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Terminal className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>CLI & SDK</span>
                  </a>
                </div>

                {/* Use Case Section */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-muted-foreground px-2 mb-2 uppercase tracking-wider">By Use Case</div>
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
                </div>

                {/* Technologies Section */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-muted-foreground px-2 mb-2 uppercase tracking-wider">Technologies</div>
                  <Link to="/solutions/citrix" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <AppWindow className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Citrix Automation</span>
                  </Link>
                  <Link to="/solutions/sap" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Layers className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>SAP Automation</span>
                  </Link>
                </div>

                {/* Industries Section */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-muted-foreground px-2 mb-2 uppercase tracking-wider">Industries</div>
                  <Link to="/solutions/finance" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Landmark className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Banking & Finance</span>
                  </Link>
                  <Link to="/solutions/retail" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <ShoppingCart className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Retail & E-commerce</span>
                  </Link>
                  <Link to="/solutions/healthcare" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Heart className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Healthcare</span>
                  </Link>
                  <Link to="/solutions/telecom" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Phone className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Telecom</span>
                  </Link>
                  <Link to="/solutions/manufacturing" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Factory className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Manufacturing</span>
                  </Link>
                  <Link to="/solutions/consumer-electronics" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Cpu className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Consumer Electronics</span>
                  </Link>
                  <Link to="/solutions/automotive" className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5">
                    <Car className="h-4 w-4" style={{ color: 'var(--text-secondary)' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Automotive</span>
                  </Link>
                </div>
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
