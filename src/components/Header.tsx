import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import askuiLogo from "@/assets/askui-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#products" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#customers" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Customers
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#docs" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Docs
            </a>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-accent">
              Get Started
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
          <div className="md:hidden py-4 space-y-4">
            <a href="#products" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#solutions" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#customers" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Customers
            </a>
            <a href="#blog" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#docs" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Docs
            </a>
            <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90 text-accent">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
