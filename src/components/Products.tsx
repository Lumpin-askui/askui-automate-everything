import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, MessageSquare, Cloud, Boxes, Code } from "lucide-react";

const products = [
  {
    icon: MessageSquare,
    name: "AskUI Caesr",
    tagline: "Chat Interface for Automation",
    description: "Quick automations and test workflows through an intuitive chat interface. Perfect for non-technical users.",
    audience: "Software testers, prosumers, managers",
    features: ["No-code automation", "Visual workflow builder", "Test case management", "Dashboard & reporting"]
  },
  {
    icon: Terminal,
    name: "AskUI CLI",
    tagline: "Configuration & Orchestration",
    description: "Command-line tool to configure models, tools, environments and trigger automations.",
    audience: "DevOps engineers, QA automation teams",
    features: ["Multi-model support", "Tool integration", "Sandbox management", "Task orchestration"]
  },
  {
    icon: Boxes,
    name: "AskUI Suite",
    tagline: "Universal Device Infrastructure",
    description: "Infrastructure toolkit for making devices and machines available to computer use models across all platforms.",
    audience: "Platform engineers, infrastructure teams",
    features: ["Windows, MacOS, Linux, iOS, Android", "Sandbox environments", "Unicode char typing", "Credentials handling"]
  },
  {
    icon: Code,
    name: "AskUI SDK",
    tagline: "Developer Library",
    description: "Open source Python library for building agents and interacting with AskUI Suite.",
    audience: "Developers, QA engineers",
    features: ["Open source", "Python-first", "Extensive documentation", "Active community"]
  },
  {
    icon: Cloud,
    name: "AskUI Cloud",
    tagline: "Hosted Inference",
    description: "Managed cloud infrastructure for running computer use agents without managing your own models.",
    audience: "Teams without ML infrastructure",
    features: ["Managed inference", "Auto-scaling", "Pay-per-use", "Global availability"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Complete Product Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From SDKs for developers to no-code tools for business users
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {products.slice(0, 2).map((product, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 bg-card group">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <product.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-sm font-medium text-accent">{product.tagline}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">For: <span className="font-normal text-muted-foreground">{product.audience}</span></p>
              </div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <span className="mr-2 text-accent">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(2).map((product, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 bg-card group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors mb-4">
                <product.icon className="h-6 w-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-sm font-medium text-accent mb-3">{product.tagline}</p>
              
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              
              <div className="mb-4">
                <p className="text-xs font-semibold mb-2">For: <span className="font-normal text-muted-foreground">{product.audience}</span></p>
              </div>

              <ul className="space-y-1.5 mb-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs">
                    <span className="mr-2 text-accent">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="sm" className="w-full">Learn More</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
