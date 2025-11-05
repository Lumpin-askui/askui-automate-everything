import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={askuiLogo} alt="AskUI" className="h-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-background">
                      <div className="space-y-3">
                        <NavigationMenuLink asChild>
                          <a href="#products" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">AskUI Caesr</div>
                            <div className="text-sm text-muted-foreground">Chat interface for automation</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#products" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">AskUI CLI</div>
                            <div className="text-sm text-muted-foreground">Command-line orchestration</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#products" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">AskUI Suite</div>
                            <div className="text-sm text-muted-foreground">Universal device infrastructure</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#products" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">AskUI SDK</div>
                            <div className="text-sm text-muted-foreground">Open source developer library</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#products" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">AskUI Cloud</div>
                            <div className="text-sm text-muted-foreground">Hosted inference</div>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-background">
                      <div className="space-y-3">
                        <NavigationMenuLink asChild>
                          <Link to="/solutions/software-testing" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">Software Testing & Infrastructure Teams</div>
                            <div className="text-sm text-muted-foreground">Automated testing and quality assurance at scale</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/solutions/automation-teams" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">Automation Teams</div>
                            <div className="text-sm text-muted-foreground">RPA and workflow automation solutions</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/solutions/agent-startups" className="block p-3 rounded-md hover:bg-accent/10 transition-colors">
                            <div className="font-semibold mb-1">Agent Startups</div>
                            <div className="text-sm text-muted-foreground">Infrastructure for building AI agent products</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/case-studies" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Customers
            </Link>
            <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Blog
            </Link>
            <a href="https://docs.askui.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Docs
            </a>
            <Link to="/enterprise">
              <Button variant="outline" size="sm">
                Enterprise
              </Button>
            </Link>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-accent">
              Book Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/40 mt-4">
            <Collapsible open={productsOpen} onOpenChange={setProductsOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 pl-4">
                <a href="#products" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">AskUI Caesr</div>
                  <div className="text-xs">Chat interface for automation</div>
                </a>
                <a href="#products" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">AskUI CLI</div>
                  <div className="text-xs">Command-line orchestration</div>
                </a>
                <a href="#products" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">AskUI Suite</div>
                  <div className="text-xs">Universal device infrastructure</div>
                </a>
                <a href="#products" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">AskUI SDK</div>
                  <div className="text-xs">Open source developer library</div>
                </a>
                <a href="#products" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">AskUI Cloud</div>
                  <div className="text-xs">Hosted inference</div>
                </a>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 pl-4">
                <Link to="/solutions/software-testing" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">Software Testing & Infrastructure Teams</div>
                  <div className="text-xs">Automated testing and quality assurance at scale</div>
                </Link>
                <Link to="/solutions/automation-teams" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">Automation Teams</div>
                  <div className="text-xs">RPA and workflow automation solutions</div>
                </Link>
                <Link to="/solutions/agent-startups" className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <div className="font-semibold mb-0.5">Agent Startups</div>
                  <div className="text-xs">Infrastructure for building AI agent products</div>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Link to="/case-studies" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Customers
            </Link>
            <Link to="/blog" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Blog
            </Link>
            <a href="https://docs.askui.com" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Docs
            </a>
            <Link to="/enterprise" className="block">
              <Button variant="outline" size="sm" className="w-full">
                Enterprise
              </Button>
            </Link>
            <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90 text-accent">
              Book Demo
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
