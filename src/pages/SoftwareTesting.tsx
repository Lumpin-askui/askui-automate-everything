import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TestTube, Zap, Shield, TrendingUp, ArrowRight, Quote } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";

const SoftwareTesting = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Automated Testing for Modern Software Teams
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Scale your QA operations with AI-powered visual testing that works across web, desktop, and mobile platforms. Reduce testing time by 80% while improving coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-accent">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
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
              Built for Testing Teams at Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate complex testing workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <TestTube className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Cross-Platform Testing</CardTitle>
                <CardDescription>
                  Test web, desktop, and mobile applications with a single unified framework. No more juggling multiple tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Visual UI Automation</CardTitle>
                <CardDescription>
                  AI-powered element detection works even when selectors fail. Test complex UIs without brittle XPath or CSS selectors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Self-Healing Tests</CardTitle>
                <CardDescription>
                  Tests automatically adapt to UI changes, reducing maintenance overhead by up to 70% compared to traditional automation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Parallel Execution</CardTitle>
                <CardDescription>
                  Run hundreds of tests simultaneously across multiple devices and environments. Scale testing without scaling infrastructure costs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <CardTitle>CI/CD Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrate with Jenkins, GitLab, GitHub Actions, and all major CI/CD platforms for continuous testing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  ISO27001 certified with on-premise deployment options. Your test data never leaves your infrastructure.
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
              How Deutsche Bahn Transformed Their Testing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how Europe's largest railway operator automated complex HMI testing
            </p>
          </div>

          <Card className="overflow-hidden border-border/50 max-w-6xl mx-auto">
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Deutsche Bahn
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Challenge
                    </h4>
                    <p className="text-foreground">
                      Managing over 300 legacy railway control systems with different HMI interfaces required extensive manual testing. Their QA team spent 70% of time on regression testing, leaving little room for exploratory testing or new features.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground">
                      Deployed AskUI Suite across 50+ testing stations with visual automation for railway control systems, passenger displays, and mobile apps. Automated 85% of regression test suite within 6 months.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border/50 mb-8">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-lg italic mb-4">
                    "AskUI's visual automation eliminated our dependency on fragile selectors. We can now test legacy systems that were previously impossible to automate."
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold">Klaus Müller</div>
                    <div className="text-muted-foreground">Head of Quality Assurance, Deutsche Bahn</div>
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
                          <div className="font-semibold mb-1">80% reduction in manual testing time</div>
                          <div className="text-sm text-muted-foreground">From 2 weeks to 3 days for full regression suite</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">95% test coverage across 300+ systems</div>
                          <div className="text-sm text-muted-foreground">Including previously untestable legacy interfaces</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">50% faster deployment cycles</div>
                          <div className="text-sm text-muted-foreground">Quarterly to bi-monthly releases</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">Zero critical production bugs in 18 months</div>
                          <div className="text-sm text-muted-foreground">Early detection prevents customer impact</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">70% reduction in test maintenance</div>
                          <div className="text-sm text-muted-foreground">Self-healing tests adapt to UI changes automatically</div>
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
                        <div className="text-3xl font-bold text-primary mb-1">80%</div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <div className="text-3xl font-bold text-primary mb-1">95%</div>
                        <div className="text-xs text-muted-foreground">Coverage</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Testing?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join leading software teams who trust AskUI for automated testing at scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareTesting;
