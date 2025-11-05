import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Workflow, Clock, Database, Cpu, ArrowRight, Quote, BarChart } from "lucide-react";
import soluteLogo from "@/assets/clients/solute.png";

const AutomationTeams = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Next-Gen RPA for Enterprise Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Automate complex workflows across legacy systems with AI-powered visual automation. No more brittle scripts that break with every UI update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-accent">
                Book Automation Audit
              </Button>
              <Button size="lg" variant="outline">
                View Demo
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
              RPA That Actually Works with Legacy Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Automate workflows traditional RPA tools can't handle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Workflow className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Visual Process Automation</CardTitle>
                <CardDescription>
                  Automate any application—legacy, modern, or cloud—using computer vision. Works where traditional automation fails.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-accent mb-4" />
                <CardTitle>10x Faster Bot Development</CardTitle>
                <CardDescription>
                  Build automation workflows in hours, not weeks. Natural language commands replace complex scripting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Zero Integration APIs Needed</CardTitle>
                <CardDescription>
                  Automate systems without APIs or database access. Work directly with the UI layer just like humans do.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Self-Healing Automation</CardTitle>
                <CardDescription>
                  Bots automatically adapt to UI changes. Reduce maintenance from days to minutes with AI-powered recovery.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Real-Time Analytics</CardTitle>
                <CardDescription>
                  Monitor automation performance, identify bottlenecks, and optimize workflows with comprehensive dashboards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Enterprise Orchestration</CardTitle>
                <CardDescription>
                  Manage thousands of bots from a centralized platform. Schedule, monitor, and scale automation across teams.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Solute Automated 40,000 Hours of Manual Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              E-commerce leader transforms operations with intelligent automation
            </p>
          </div>

          <Card className="overflow-hidden border-border/50 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Story */}
              <div className="p-8 lg:p-12 bg-background">
                <div className="mb-6">
                  <img 
                    src={soluteLogo} 
                    alt="Solute"
                    className="h-12 object-contain mb-4"
                  />
                  <div className="text-sm text-muted-foreground mb-2">
                    E-Commerce & Retail • 1,200+ Employees
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Solute GmbH
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Challenge
                    </h4>
                    <p className="text-foreground">
                      Processing product data across 15 different legacy systems required extensive manual data entry. Their team spent 40,000+ hours annually on repetitive tasks that couldn't be automated with traditional RPA due to constantly changing vendor portals.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground">
                      Implemented AskUI's visual automation to interact with vendor portals, extract product data, and sync with internal systems. Built 50+ automation workflows that adapt to UI changes automatically.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border/50 mb-8">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-lg italic mb-4">
                    "Traditional RPA broke every time a vendor updated their portal. AskUI's visual automation just works, saving us countless hours of bot maintenance."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Michael Schmidt</div>
                    <div className="text-muted-foreground">VP of Operations, Solute GmbH</div>
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
                          <div className="font-semibold mb-1">40,000 hours automated annually</div>
                          <div className="text-sm text-muted-foreground">Equivalent to 20 full-time employees reassigned to strategic work</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">92% reduction in processing errors</div>
                          <div className="text-sm text-muted-foreground">From ~8% error rate to less than 0.5%</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">3-day average bot development time</div>
                          <div className="text-sm text-muted-foreground">Down from 3-4 weeks with traditional RPA</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">85% less maintenance overhead</div>
                          <div className="text-sm text-muted-foreground">Self-healing bots adapt to UI changes automatically</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">$2.4M annual cost savings</div>
                          <div className="text-sm text-muted-foreground">Including labor and error reduction costs</div>
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
                        <div className="text-3xl font-bold text-primary mb-1">40K</div>
                        <div className="text-xs text-muted-foreground">Hours Saved</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <div className="text-3xl font-bold text-primary mb-1">92%</div>
                        <div className="text-xs text-muted-foreground">Fewer Errors</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <div className="text-3xl font-bold text-primary mb-1">650%</div>
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
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale Your Automation?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Discover what processes you can automate with a free automation audit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Book Automation Audit
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationTeams;
