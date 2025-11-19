import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Terminal, MessageSquare, Cloud, Code, Monitor, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Flexible Pricing for Every Stage
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From individual developers to enterprise automation teams. Choose the plan that scales with your needs.
          </p>
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
            
            {/* AskUI Caesr */}
            <Card className="flex flex-col border-border shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">AskUI Caesr</CardTitle>
                <CardDescription>For individuals & professionals</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Agentic chat interface for automation. Perfect for non-technical users to automate tasks through conversation.
                  </p>
                  <div className="text-3xl font-bold">Free <span className="text-sm font-normal text-muted-foreground">/ basic usage</span></div>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Agentic chat interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Configure models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Device management</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://app.caesr.ai" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* AskUI Cloud (The main priced item) */}
            <Card className="flex flex-col border-primary shadow-xl relative scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">AskUI Cloud</CardTitle>
                <CardDescription>Hosted inference & scaling</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Managed cloud infrastructure for running computer use agents without managing your own models.
                  </p>
                  <div className="text-3xl font-bold">€29.00 <span className="text-sm font-normal text-muted-foreground">/ month</span></div>
                  <p className="text-xs text-muted-foreground mt-1">Starts at 1,500 credits</p>
                </div>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span>Professional</span>
                      <span className="font-bold">€29</span>
                    </div>
                    <div className="text-xs text-muted-foreground">1,500 credits/mo</div>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span>Starter</span>
                      <span className="font-bold">€94</span>
                    </div>
                    <div className="text-xs text-muted-foreground">5,000 credits/mo</div>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span>Business</span>
                      <span className="font-bold">€549</span>
                    </div>
                    <div className="text-xs text-muted-foreground">30,000 credits/mo</div>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span>Scale</span>
                      <span className="font-bold">€1,000</span>
                    </div>
                    <div className="text-xs text-muted-foreground">100,000 credits/mo</div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://app.askui.com/register" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* AskUI Suite / Enterprise */}
            <Card className="flex flex-col border-border shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">AskUI Suite</CardTitle>
                <CardDescription>For Enterprise Teams</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    The complete platform for managing your digital workforce at scale. Unified control plane, user management, and analytics.
                  </p>
                  <div className="text-3xl font-bold">Custom</div>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Everything in Cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">SSO & SAML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dedicated Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">On-premise Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">AskUI CLI & SDK included</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/enterprise">
                    Contact Sales
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Tools Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Developer Tools</h2>
            <p className="text-muted-foreground">Build powerful automations with our developer-first ecosystem</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Terminal className="h-6 w-6 text-primary" />
                  <CardTitle>AskUI CLI</CardTitle>
                </div>
                <CardDescription>Automation as Code</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Integrate automation into your CI/CD pipelines. Configure environments, manage runners, and execute headless workflows from your terminal.
                </p>
                <div className="p-4 bg-secondary rounded-md font-mono text-xs mb-6 text-foreground/80 overflow-hidden relative">
                  <div className="flex items-center gap-2 mb-3 text-primary/70 border-b border-border/50 pb-2">
                    <Terminal size={12} />
                    <span>askui-runner</span>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-1">
                    <span className="text-primary">run</span>
                    <span className="text-muted-foreground">Execute test cases</span>
                    <span className="text-primary">init</span>
                    <span className="text-muted-foreground">Create test suite</span>
                    <span className="text-primary">ui</span>
                    <span className="text-muted-foreground">Launch Controller</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://docs.askui.com/docs/general/Cli/GettingStarted" target="_blank" rel="noopener noreferrer">
                    Read Docs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-6 w-6 text-primary" />
                  <CardTitle>AskUI SDK</CardTitle>
                </div>
                <CardDescription>Open Source Library</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  The core building block for your agents. Typescript & Python libraries to control operating systems via vision.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Open Source</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>MIT License</span>
                  </div>
                </div>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://github.com/askui/vision-agent" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
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
