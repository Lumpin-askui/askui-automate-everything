import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TestTube, Zap, Shield, TrendingUp, ArrowRight, Quote } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";

import CTA from "@/components/CTA";

const SoftwareTesting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Automated Testing for Modern Software Teams
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Scale your QA operations with AI-powered visual testing that works across web, desktop, and mobile platforms. Reduce testing time by 80% while improving coverage.
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
              Built for Testing Teams at Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate complex testing workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: TestTube, title: "Cross-Platform Testing", desc: "Test web, desktop, and mobile applications with a single unified framework. No more juggling multiple tools." },
              { icon: Zap, title: "Visual UI Automation", desc: "AI-powered element detection works even when selectors fail. Test complex UIs without brittle XPath or CSS selectors." },
              { icon: Shield, title: "Self-Healing Tests", desc: "Tests automatically adapt to UI changes, reducing maintenance overhead by up to 70% compared to traditional automation." },
              { icon: TrendingUp, title: "Parallel Execution", desc: "Run hundreds of tests simultaneously across multiple devices and environments. Scale testing without scaling infrastructure costs." },
              { icon: CheckCircle, title: "CI/CD Integration", desc: "Seamlessly integrate with Jenkins, GitLab, GitHub Actions, and all major CI/CD platforms for continuous testing." },
              { icon: Shield, title: "Enterprise Security", desc: "ISO27001 certified with on-premise deployment options. Your test data never leaves your infrastructure." }
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
              How Deutsche Bahn Transformed Their Testing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how Europe's largest railway operator automated complex HMI testing
            </p>
          </div>

          <Card className="overflow-hidden border-border shadow-lg max-w-6xl mx-auto bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Story */}
              <div className="p-8 lg:p-12 bg-background">
                <div className="mb-6">
                  <img 
                    src={dbLogo} 
                    alt="Deutsche Bahn"
                    className="h-12 object-contain mb-4"
                  />
                  <div className="text-sm text-muted-foreground mb-2">
                    Transportation & Logistics • 340,000+ Employees
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Deutsche Bahn
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Challenge
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      Deutsche Bahn relied on manual QA to maintain mission-critical POS and control systems across hundreds of devices. Regression runs took days, coverage remained incomplete, and legacy interfaces resisted browser-based automation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      AskUI Vision Agents were integrated into the Azure DevOps pipeline to automate POS testing end-to-end. The team now executes visual flows that interact with every element exactly as a human would, across all Android devices and enterprise tools.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-secondary/50 border border-border mb-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg italic mb-4 text-foreground">
                    "Automation with AskUI ended up cutting the testing time by 80% compared to its competitors, significantly boosting efficiency and freeing up resources."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">Deutsche Bahn QA Team</div>
                    <div className="text-muted-foreground">Transportation & Logistics</div>
                  </div>
                </div>

                <Button asChild>
                  <a href="/case-studies/deutsche-bahn-boosts-efficiency-with-askui-test-automation">
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
                        { text: "80% reduction in testing time", sub: "Regression cycles now run inside Azure DevOps" },
                        { text: "Increased coverage across all systems", sub: "Legacy HMIs and Android devices under automated test" },
                        { text: "Successful enterprise deployment", sub: "AskUI integrated with GitLab, Artifactory, Jira, and Xray" },
                        { text: "Enhanced Android testing capability", sub: "Visual automation handles every supported device" },
                        { text: "Simplified test creation process", sub: "Teams replaced brittle Selenium flows with AskUI scripts" }
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
                        <div className="text-3xl font-bold text-primary mb-1">80%</div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">95%</div>
                        <div className="text-xs text-muted-foreground">Coverage</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">400%</div>
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

export default SoftwareTesting;
