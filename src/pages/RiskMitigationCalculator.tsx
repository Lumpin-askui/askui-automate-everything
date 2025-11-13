import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Shield, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";

const RiskMitigationCalculator = () => {
  const [avgBugCost, setAvgBugCost] = useState(5000);
  const [bugsMonthly, setBugsMonthly] = useState(10);
  const [bugReductionPercent, setBugReductionPercent] = useState(60);

  // Calculate Annual Bug Cost Avoidance
  const bugAvoidance = avgBugCost * bugsMonthly * 12 * (bugReductionPercent / 100);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Risk Mitigation Calculator
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Calculate the cost avoidance by shifting bug detection left—catching high-severity issues before they reach production.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    Input Variables
                  </CardTitle>
                  <CardDescription>
                    Adjust the values below to calculate your potential risk mitigation savings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avg Bug Cost */}
                  <div className="space-y-2">
                    <Label htmlFor="bug-cost">
                      Average Bug Cost (per production bug)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="bug-cost"
                        type="number"
                        value={avgBugCost}
                        onChange={(e) => setAvgBugCost(Number(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">$</span>
                    </div>
                    <Slider
                      value={[avgBugCost]}
                      onValueChange={(value) => setAvgBugCost(value[0])}
                      min={500}
                      max={50000}
                      step={500}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: $500 - $50,000 (includes engineering time, downtime, reputation risk)
                    </p>
                  </div>

                  {/* Bugs Monthly */}
                  <div className="space-y-2">
                    <Label htmlFor="bugs-monthly">
                      High-Severity Production Bugs (Monthly)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="bugs-monthly"
                        type="number"
                        value={bugsMonthly}
                        onChange={(e) => setBugsMonthly(Number(e.target.value))}
                        className="flex-1"
                        min={0}
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">bugs</span>
                    </div>
                    <Slider
                      value={[bugsMonthly]}
                      onValueChange={(value) => setBugsMonthly(value[0])}
                      min={0}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: 0 - 100 bugs/month
                    </p>
                  </div>

                  {/* Bug Reduction % */}
                  <div className="space-y-2">
                    <Label htmlFor="bug-reduction">
                      Bug Reduction % (Estimated reduction from AskUI automation)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="bug-reduction"
                        type="number"
                        value={bugReductionPercent}
                        onChange={(e) => setBugReductionPercent(Number(e.target.value))}
                        className="flex-1"
                        min={0}
                        max={100}
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">%</span>
                    </div>
                    <Slider
                      value={[bugReductionPercent]}
                      onValueChange={(value) => setBugReductionPercent(value[0])}
                      min={0}
                      max={100}
                      step={5}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: 0% - 100%
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Results Panel */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Calculated Results
                  </CardTitle>
                  <CardDescription>
                    Your potential annual risk mitigation savings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Bug Avoidance */}
                  <div className="p-6 rounded-lg bg-background border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Annual Bug Cost Avoidance
                      </span>
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      ${bugAvoidance.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Cost avoided by catching bugs before production
                    </p>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <div className="text-xs text-muted-foreground mb-1">
                        Bugs Avoided (Annual)
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {Math.round(bugsMonthly * 12 * (bugReductionPercent / 100))}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <div className="text-xs text-muted-foreground mb-1">
                        Avg Cost per Bug
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        ${avgBugCost.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Formula Display */}
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Calculation Formula
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-foreground">
                        <strong>Bug Avoidance</strong> = Avg. Bug Cost × Bugs Monthly × 12 × (Bug Reduction %)
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        This calculates the cost avoided by shifting bug detection left and catching issues before they reach production.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How This Calculator Works</CardTitle>
                <CardDescription>
                  Understanding the Risk Mitigation calculation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What is Risk Mitigation?</h4>
                  <p className="text-muted-foreground">
                    This module calculates the cost avoidance by shifting bug detection left—catching high-severity issues 
                    before they reach production. By improving automation coverage with AskUI, you can detect and fix bugs 
                    earlier in the development cycle, avoiding the higher costs associated with production issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Variables Explained</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li><strong>Average Bug Cost:</strong> Estimated internal and external cost of fixing one production bug (including engineering time, downtime, and reputation risk)</li>
                    <li><strong>Bugs Monthly:</strong> Average number of high-severity production bugs currently reported per month</li>
                    <li><strong>Bug Reduction %:</strong> Estimated percentage reduction in production bugs due to improved automation coverage from AskUI</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Why Production Bugs Cost More</p>
                      <p className="text-xs text-muted-foreground">
                        Production bugs require hotfixes, emergency deployments, customer communication, potential rollbacks, 
                        and can damage brand reputation. Catching bugs earlier in the development cycle significantly reduces these costs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Reduce Production Bugs?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book a demo to see how AskUI can help you catch bugs earlier and reduce production risk
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/enterprise">
                  Book a Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
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

export default RiskMitigationCalculator;

