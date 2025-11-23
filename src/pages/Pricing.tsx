import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Terminal, Users, Building, Laptop, Calculator, Cloud, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    {
      title: "Developer",
      description: "Core Engine (Community)",
      price: "€0",
      period: "",
      features: [
        "AskUI Core (SDK & CLI)",
        "500 Inference Credits/month",
        "Local Execution",
        "Community Support"
      ],
      cta: "Start Building",
      link: "https://docs.askui.com/docs/general/Cli/GettingStarted",
      variant: "outline",
      popular: false
    },
    {
      title: "Professional",
      description: "Neural Cloud & Co-Pilot",
      price: isYearly ? "€278" : "€29",
      period: isYearly ? "/year" : "/month",
      pricePrefix: "from ",
      features: isYearly ? [
        "Usage based pricing:",
        "18.000 credits/year → € 278,00",
        "60.000 credits/year → € 900,00",
        "360.000 credits/year → € 5.500,00",
        "1.200.000 credits/year → € 10.000,00",
        "Access to AskUI Neural Cloud",
        "Caesr Copilot (Prompt-to-Agent)"
      ] : [
        "Usage based pricing:",
        "1.500 credits/month → € 29,00",
        "5.000 credits/month → € 94,00",
        "30.000 credits/month → € 549,00",
        "100.000 credits/month → € 1.000,00",
        "Access to AskUI Neural Cloud",
        "Caesr Copilot (Prompt-to-Agent)"
      ],
      cta: "Automate without limits",
      link: "https://app.askui.com/register",
      variant: "default",
      popular: true
    },
    {
      title: "Enterprise",
      description: "Control Plane",
      price: "Custom",
      period: "",
      features: [
        "AgentOS (Orchestrator)",
        "Private Inference (BYOM)",
        "VPC / On-Premise",
        "Self-Healing Agents",
        "SSO & Audit Logs"
      ],
      cta: "Book Demo",
      link: "/enterprise",
      variant: "outline",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            The LAM Infrastructure for <span className="text-accent-gradient">Agentic Automation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Move beyond brittle RPA. Build Vision Agents that see and interact with any screen—Mobile, Citrix, Canvas—just like a human.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn("text-sm font-medium", !isYearly ? "text-primary" : "text-muted-foreground")}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 rounded-full bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <div
                className={cn(
                  "absolute top-1 left-1 w-4 h-4 rounded-full bg-primary transition-transform duration-200",
                  isYearly ? "translate-x-6" : "translate-x-0"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", isYearly ? "text-primary" : "text-muted-foreground")}>
              Yearly
            </span>
          </div>
        </div>
      </section>

      {/* ROI Lead Magnet - Moved to Top */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-sm mb-6">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Automation ROI</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Not sure which plan is right for you? See how much you can save by automating your manual workflows with AskUI.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link to="/roi-calculator">
                  Open ROI Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Pricing Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={cn(
                "flex flex-col border-border shadow-lg hover:shadow-xl transition-all",
                tier.popular ? "border-primary relative scale-105 z-10" : ""
              )}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    {index === 0 ? <Terminal className="h-6 w-6 text-primary" /> : 
                     index === 1 ? <Users className="h-6 w-6 text-primary" /> : 
                     <Building className="h-6 w-6 text-primary" />}
                  </div>
                  <CardTitle className="text-2xl">{tier.title}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="text-3xl font-bold">
                      {tier.pricePrefix && <span className="text-xl font-normal text-muted-foreground">{tier.pricePrefix}</span>}
                      {tier.price} <span className="text-sm font-normal text-muted-foreground">{tier.period}</span>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        {feature.includes("Usage based pricing:") ? (
                          <span className="text-sm font-semibold mt-1">{feature}</span>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {tier.link.startsWith("http") ? (
                     <Button className={cn("w-full", tier.variant === "default" ? "bg-primary hover:bg-primary/90" : "")} variant={tier.variant as "default" | "outline"} asChild>
                      <a href={tier.link} target="_blank" rel="noopener noreferrer">
                        {tier.cta}
                      </a>
                    </Button>
                  ) : (
                    <Button className={cn("w-full", tier.variant === "default" ? "bg-primary hover:bg-primary/90" : "")} variant={tier.variant as "default" | "outline"} asChild>
                      <Link to={tier.link}>
                        {tier.cta}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* The Optimized Product Suite */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Optimized Product Suite</h2>
            <p className="text-muted-foreground">Platform Layer (Infrastructure) & Application Layer (User Experience)</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Layer A: Core Engine */}
            <Card className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-6 w-6 text-primary" />
                  <CardTitle>Layer A: The Core Engine</CardTitle>
                </div>
                <CardDescription>Developer & Runtime Infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Terminal size={16} className="text-primary" /> AskUI Core (SDK & CLI)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The open-source "eyes and hands" of the platform. Python/Node.js libraries that allow developers to write code like <code className="bg-muted px-1 py-0.5 rounded">await aui.click('Sign In')</code>.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Cloud size={16} className="text-primary" /> AskUI Neural Cloud
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The brain. Processes screenshots via computer vision to identify elements and return coordinates. Supports "Private Inference" (BYOM) for regulated industries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Layer B: Enterprise Control Plane */}
            <Card className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building className="h-6 w-6 text-primary" />
                  <CardTitle>Layer B: Enterprise Control Plane</CardTitle>
                </div>
                <CardDescription>Orchestration & User Experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Laptop size={16} className="text-primary" /> AgentOS & Controllers
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The "UiPath Orchestrator" Killer. Centralized dashboard with lightweight controllers on target machines. Features self-healing capabilities to adjust workflows automatically.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users size={16} className="text-primary" /> AskUI Studio & Copilot
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Visual flow builder and "Prompt-to-Agent" generator. Type a request, and the system generates the automation script instantly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
            <p className="text-muted-foreground">Find the right fit for your automation needs</p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                  <th className="text-left p-4 font-semibold text-foreground">Developer</th>
                  <th className="text-left p-4 font-semibold text-primary">Professional</th>
                  <th className="text-left p-4 font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-4 text-sm font-medium">Inference Engine</td>
                  <td className="p-4 text-sm text-muted-foreground">500 Credits / month</td>
                  <td className="p-4 text-sm text-foreground">Usage Based</td>
                  <td className="p-4 text-sm text-muted-foreground">Volume Discounts</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 text-sm font-medium">Environment</td>
                  <td className="p-4 text-sm text-muted-foreground">Localhost</td>
                  <td className="p-4 text-sm text-foreground">Cloud Inference</td>
                  <td className="p-4 text-sm text-muted-foreground">VPC / On-Premise</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 text-sm font-medium">Orchestration</td>
                  <td className="p-4 text-sm text-muted-foreground">Local Runner</td>
                  <td className="p-4 text-sm text-foreground">Managed Controllers</td>
                  <td className="p-4 text-sm text-muted-foreground">AgentOS (Self-Healing)</td>
                </tr>
                 <tr className="border-b border-border/50">
                  <td className="p-4 text-sm font-medium">Support</td>
                  <td className="p-4 text-sm text-muted-foreground">Community</td>
                  <td className="p-4 text-sm text-foreground">Email</td>
                  <td className="p-4 text-sm text-muted-foreground">Dedicated & SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our enterprise team can help you design a custom automation strategy, including on-premise deployment and dedicated support.
          </p>
          <Button size="lg" variant="outline" className="bg-background" asChild>
            <Link to="/enterprise">
              Book a Demo
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
