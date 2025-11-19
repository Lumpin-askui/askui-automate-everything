import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Code, Zap, Globe, Layers } from "lucide-react";
import ficusLogo from "@/assets/clients/ficus.svg";
import { Quote } from "lucide-react";

const AgentStartups = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Infrastructure for Building AI Agent Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ship AI agents that can interact with any software—from legacy desktop apps to modern web platforms. Focus on your AI logic, we handle the execution layer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/enterprise">
                  Book a Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.caesr.ai" target="_blank" rel="noopener noreferrer">
                  Try Caesr
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The Complete Agent Execution Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build production-ready AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Rocket, title: "Ship Faster", desc: "Launch your AI agent in weeks, not months. Pre-built infrastructure for UI interaction, orchestration, and scaling." },
              { icon: Code, title: "Developer-First APIs", desc: "Simple REST APIs and SDKs for Python, TypeScript, and JavaScript. Integrate agent capabilities in minutes." },
              { icon: Globe, title: "Universal Compatibility", desc: "Control any application—web, desktop, mobile, or legacy. One API to rule them all." },
              { icon: Zap, title: "Cloud or Self-Hosted", desc: "Start with our cloud infrastructure, scale with self-hosted deployment. Full control when you need it." },
              { icon: Layers, title: "Visual Grounding", desc: "State-of-the-art computer vision for UI understanding. Your agents see and interact like humans." },
              { icon: CheckCircle, title: "Production-Ready Reliability", desc: "99.9% uptime SLA, automatic failover, and comprehensive monitoring. Built for enterprise scale." }
            ].map((feature, index) => (
              <Card key={index} className="border-border shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Build Any Kind of AI Agent
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Startups use AskUI to power diverse agent applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 border-border shadow-sm bg-background">
              <h3 className="text-xl font-bold mb-3 text-foreground">Customer Support Agents</h3>
              <p className="text-muted-foreground mb-4">
                Automate tier-1 support by having agents navigate internal tools, CRMs, and ticketing systems to resolve issues.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Access customer data from multiple systems",
                  "Execute actions in admin panels",
                  "Handle 10x more tickets per agent"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-border shadow-sm bg-background">
              <h3 className="text-xl font-bold mb-3 text-foreground">Data Collection Agents</h3>
              <p className="text-muted-foreground mb-4">
                Extract structured data from any website or application at scale, even when APIs don't exist.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Navigate complex multi-step workflows",
                  "Handle dynamic content and pagination",
                  "Adapt to UI changes automatically"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-border shadow-sm bg-background">
              <h3 className="text-xl font-bold mb-3 text-foreground">Research Agents</h3>
              <p className="text-muted-foreground mb-4">
                Automate research workflows by gathering information across multiple sources and compiling insights.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Access data behind login walls",
                  "Cross-reference multiple sources",
                  "Generate structured reports"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-border shadow-sm bg-background">
              <h3 className="text-xl font-bold mb-3 text-foreground">Workflow Automation Agents</h3>
              <p className="text-muted-foreground mb-4">
                Create agents that orchestrate complex business processes across multiple applications.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Connect disparate systems without APIs",
                  "Handle exceptions intelligently",
                  "Scale to thousands of parallel tasks"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              FICUS Health Automates Rehab Documentation with AskUI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How a healthcare startup uses AskUI to write directly into legacy hospital systems
            </p>
          </div>

          <Card className="overflow-hidden border-border shadow-lg max-w-6xl mx-auto bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Story */}
              <div className="p-8 lg:p-12 bg-background">
                <div className="mb-6">
                  <img 
                    src={ficusLogo} 
                    alt="FICUS Health"
                    className="h-12 object-contain mb-4"
                  />
                  <div className="text-sm text-muted-foreground mb-2">
                    Healthcare & Rehabilitation • AI Documentation Platform
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    FICUS Health
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Challenge
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      Clinics loved FICUS Health's AI-generated discharge reports, but staff still had to copy the results into fragmented hospital information systems. Manual re-entry slowed reimbursement-critical documentation and limited product adoption.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      FICUS integrated AskUI Vision Agents to operate every legacy UI like a human operator. AskUI launches the correct hospital app, navigates to the discharge module, and writes structured notes plus billing codes directly into the system.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-secondary/50 border border-border mb-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg italic mb-4 text-foreground">
                    "AskUI gave us an execution layer that works with every hospital interface we encounter. Our customers finally have automated documentation that lands in their legacy systems without manual effort."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Lena Hoffmann</div>
                    <div className="text-muted-foreground">Head of Product, FICUS Health</div>
                  </div>
                </div>

                <Button asChild>
                  <a href="/case-studies/ficus-health-streamlines-rehab-documentation-with-askui">
                    Read Full Case Study
                  </a>
                </Button>
              </div>

              {/* Right Column - Results */}
              <div className="p-8 lg:p-12 bg-secondary/30 border-l border-border">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
                      Results Achieved
                    </h4>
                    <ul className="space-y-4">
                      {[
                        { text: "70% reduction in documentation time", sub: "Discharge reports flow automatically into hospital software" },
                        { text: "Zero manual copy-and-paste", sub: "AskUI handles every UI interaction end-to-end" },
                        { text: "100% DRV-compliant documentation", sub: "Structured outputs validated before submission" },
                        { text: "12 hours saved per clinic per week", sub: "Staff focus on patient care instead of retyping notes" },
                        { text: "Implementation without IT changes", sub: "No APIs required—AskUI works at the UI layer" }
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold mb-1 text-foreground">{item.text}</div>
                            <div className="text-sm text-muted-foreground">{item.sub}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                      Impact Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">70%</div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">100%</div>
                        <div className="text-xs text-muted-foreground">Compliant</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">250%</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Build Your AI Agent?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join innovative startups building the future of AI agents on AskUI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/enterprise">
                  Book a Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.caesr.ai" target="_blank" rel="noopener noreferrer">
                  Try Caesr
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentStartups;
