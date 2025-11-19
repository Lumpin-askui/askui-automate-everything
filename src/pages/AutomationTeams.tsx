import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Workflow, Clock, Database, Cpu, ArrowRight, Quote, BarChart } from "lucide-react";
import bankCitrixLogo from "@/assets/clients/bank-citrix.svg";

import CTA from "@/components/CTA";

const AutomationTeams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Next-Gen RPA for Enterprise Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Automate complex workflows across legacy systems with AI-powered visual automation. No more brittle scripts that break with every UI update.
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
              RPA That Actually Works with Legacy Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Automate workflows traditional RPA tools can't handle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Workflow, title: "Visual Process Automation", desc: "Automate any application—legacy, modern, or cloud—using computer vision. Works where traditional automation fails." },
              { icon: Clock, title: "10x Faster Bot Development", desc: "Build automation workflows in hours, not weeks. Natural language commands replace complex scripting." },
              { icon: Database, title: "Zero Integration APIs Needed", desc: "Automate systems without APIs or database access. Work directly with the UI layer just like humans do." },
              { icon: Cpu, title: "Self-Healing Automation", desc: "Bots automatically adapt to UI changes. Reduce maintenance from days to minutes with AI-powered recovery." },
              { icon: BarChart, title: "Real-Time Analytics", desc: "Monitor automation performance, identify bottlenecks, and optimize workflows with comprehensive dashboards." },
              { icon: CheckCircle, title: "Enterprise Orchestration", desc: "Manage thousands of bots from a centralized platform. Schedule, monitor, and scale automation across teams." }
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

      {/* Case Study */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How a Leading Financial Institution Automated 40,000 Hours of Manual Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Financial services leader transforms operations with intelligent automation
            </p>
          </div>

          <Card className="overflow-hidden border-border shadow-lg max-w-6xl mx-auto bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Story */}
              <div className="p-8 lg:p-12 bg-background">
                <div className="mb-6">
                  <img 
                    src={bankCitrixLogo} 
                    alt="Financial Institution"
                    className="h-12 object-contain mb-4"
                  />
                  <div className="text-sm text-muted-foreground mb-2">
                    Financial Services • 1,200+ Employees
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Leading Financial Institution
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Challenge
                    </h4>
                    <p className="text-foreground">
                      Processing transaction data across 15 different legacy systems required extensive manual data entry. Their team spent 40,000+ hours annually on repetitive tasks that couldn't be automated with traditional RPA due to constantly changing vendor portals.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground">
                      Implemented AskUI's visual automation to interact with vendor portals, extract transaction data, and sync with internal systems. Built 50+ automation workflows that adapt to UI changes automatically.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-secondary/50 border border-border mb-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg italic mb-4 text-foreground">
                    "Traditional RPA broke every time a vendor updated their portal. AskUI's visual automation just works, saving us countless hours of bot maintenance."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">VP of Operations</div>
                    <div className="text-muted-foreground">Leading Financial Institution</div>
                  </div>
                </div>

                <Button asChild>
                  <a href="/case-studies/large-bank-automates-85-of-citrix-application-testing">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
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
                        { text: "40,000 hours automated annually", sub: "Equivalent to 20 full-time employees reassigned to strategic work" },
                        { text: "92% reduction in processing errors", sub: "From ~8% error rate to less than 0.5%" },
                        { text: "3-day average bot development time", sub: "Down from 3-4 weeks with traditional RPA" },
                        { text: "85% less maintenance overhead", sub: "Self-healing bots adapt to UI changes automatically" },
                        { text: "$2.4M annual cost savings", sub: "Including labor and error reduction costs" }
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
                        <div className="text-3xl font-bold text-primary mb-1">40K</div>
                        <div className="text-xs text-muted-foreground">Hours Saved</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">92%</div>
                        <div className="text-xs text-muted-foreground">Fewer Errors</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background border border-border">
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

      <CTA />

      <Footer />
    </div>
  );
};

export default AutomationTeams;
