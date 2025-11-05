import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Code, Zap, Globe, ArrowRight, Quote, Layers } from "lucide-react";
import intelLogo from "@/assets/clients/intel.png";

const AgentStartups = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Infrastructure for Building AI Agent Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ship AI agents that can interact with any software—from legacy desktop apps to modern web platforms. Focus on your AI logic, we handle the execution layer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-accent">
                Start Building Free
              </Button>
              <Button size="lg" variant="outline">
                Explore API Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Complete Agent Execution Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build production-ready AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Rocket className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Ship Faster</CardTitle>
                <CardDescription>
                  Launch your AI agent in weeks, not months. Pre-built infrastructure for UI interaction, orchestration, and scaling.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Developer-First APIs</CardTitle>
                <CardDescription>
                  Simple REST APIs and SDKs for Python, TypeScript, and JavaScript. Integrate agent capabilities in minutes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Universal Compatibility</CardTitle>
                <CardDescription>
                  Control any application—web, desktop, mobile, or legacy. One API to rule them all.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Cloud or Self-Hosted</CardTitle>
                <CardDescription>
                  Start with our cloud infrastructure, scale with self-hosted deployment. Full control when you need it.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Visual Grounding</CardTitle>
                <CardDescription>
                  State-of-the-art computer vision for UI understanding. Your agents see and interact like humans.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Production-Ready Reliability</CardTitle>
                <CardDescription>
                  99.9% uptime SLA, automatic failover, and comprehensive monitoring. Built for enterprise scale.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build Any Kind of AI Agent
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Startups use AskUI to power diverse agent applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Customer Support Agents</h3>
              <p className="text-muted-foreground mb-4">
                Automate tier-1 support by having agents navigate internal tools, CRMs, and ticketing systems to resolve issues.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Access customer data from multiple systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Execute actions in admin panels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Handle 10x more tickets per agent</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Data Collection Agents</h3>
              <p className="text-muted-foreground mb-4">
                Extract structured data from any website or application at scale, even when APIs don't exist.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Navigate complex multi-step workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Handle dynamic content and pagination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Adapt to UI changes automatically</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Research Agents</h3>
              <p className="text-muted-foreground mb-4">
                Automate research workflows by gathering information across multiple sources and compiling insights.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Access data behind login walls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Cross-reference multiple sources</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Generate structured reports</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Workflow Automation Agents</h3>
              <p className="text-muted-foreground mb-4">
                Create agents that orchestrate complex business processes across multiple applications.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Connect disparate systems without APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Handle exceptions intelligently</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Scale to thousands of parallel tasks</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Intel Built AI Agents for Semiconductor Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Global tech leader deploys intelligent agents across factory operations
            </p>
          </div>

          <Card className="overflow-hidden border-border/50 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Story */}
              <div className="p-8 lg:p-12 bg-background">
                <div className="mb-6">
                  <img 
                    src={intelLogo} 
                    alt="Intel"
                    className="h-12 object-contain mb-4"
                  />
                  <div className="text-sm text-muted-foreground mb-2">
                    Semiconductor Manufacturing • 130,000+ Employees
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Intel Corporation
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Challenge
                    </h4>
                    <p className="text-foreground">
                      Manufacturing operations relied on hundreds of proprietary desktop applications with no API access. Engineers spent significant time navigating different systems to monitor production, quality metrics, and equipment status.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground">
                      Built AI agents using AskUI's infrastructure to monitor manufacturing systems, detect anomalies, and trigger automated responses. Agents interact with legacy desktop apps that were previously impossible to automate.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border/50 mb-8">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-lg italic mb-4">
                    "AskUI gave us the execution layer we needed to deploy AI agents across our manufacturing operations. What used to take months of custom development now takes days."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Dr. Sarah Chen</div>
                    <div className="text-muted-foreground">Director of AI Innovation, Intel</div>
                  </div>
                </div>

                <Button asChild>
                  <a href="/case-studies">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Right Column - Results */}
              <div className="p-8 lg:p-12 bg-accent/5">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
                      Results Achieved
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">75% faster incident response</div>
                          <div className="text-sm text-muted-foreground">Agents detect and respond to issues in real-time</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">200+ legacy systems automated</div>
                          <div className="text-sm text-muted-foreground">Including apps with no API or database access</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">3-week average agent development time</div>
                          <div className="text-sm text-muted-foreground">From concept to production deployment</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">$12M annual efficiency gains</div>
                          <div className="text-sm text-muted-foreground">Through reduced downtime and faster response</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">99.8% agent reliability</div>
                          <div className="text-sm text-muted-foreground">Production-grade stability at scale</div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                      Impact Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background">
                        <div className="text-3xl font-bold text-primary mb-1">75%</div>
                        <div className="text-xs text-muted-foreground">Faster Response</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <div className="text-3xl font-bold text-primary mb-1">200+</div>
                        <div className="text-xs text-muted-foreground">Systems</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <div className="text-3xl font-bold text-primary mb-1">$12M</div>
                        <div className="text-xs text-muted-foreground">Saved</div>
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
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your AI Agent?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join innovative startups building the future of AI agents on AskUI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Building Free
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Talk to Founders
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
