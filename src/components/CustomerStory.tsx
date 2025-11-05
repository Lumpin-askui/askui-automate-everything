import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";

const CustomerStory = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Customer Success Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how enterprises transform their testing with AskUI
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
                  Transportation & Logistics
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Deutsche Bahn
                </h3>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Challenge
                  </h4>
                  <p className="text-foreground">
                    Complex HMI testing across railway infrastructure with multiple legacy systems requiring extensive manual testing effort.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-foreground">
                    Implemented AskUI Suite for automated testing of railway control systems and passenger information displays across their infrastructure.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-muted/30 border border-border/50 mb-8">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-lg italic mb-4">
                  "AskUI has transformed how we approach testing in our railway infrastructure. The ability to automate complex HMI interactions has been game-changing."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Klaus Müller</div>
                  <div className="text-muted-foreground">Head of Quality Assurance</div>
                </div>
              </div>

              <Button asChild>
                <a href="/case-studies">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Right Column - Results */}
            <div className="p-8 lg:p-12 bg-accent/5">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
                    Key Results
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">80% reduction in manual testing time</div>
                        <div className="text-sm text-muted-foreground">Automated complex workflows across systems</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">95% test coverage achieved</div>
                        <div className="text-sm text-muted-foreground">Comprehensive testing across all HMI systems</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">50% faster deployment cycles</div>
                        <div className="text-sm text-muted-foreground">Rapid testing enables quicker releases</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold mb-1">Zero critical bugs in production</div>
                        <div className="text-sm text-muted-foreground">Early detection and prevention</div>
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
                      <div className="text-3xl font-bold text-accent mb-1">80%</div>
                      <div className="text-xs text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background">
                      <div className="text-3xl font-bold text-accent mb-1">95%</div>
                      <div className="text-xs text-muted-foreground">Coverage</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-background">
                      <div className="text-3xl font-bold text-accent mb-1">300%</div>
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
  );
};

export default CustomerStory;
