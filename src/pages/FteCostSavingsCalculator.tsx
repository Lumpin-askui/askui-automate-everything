import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Users, DollarSign, TrendingUp } from "lucide-react";

const FteCostSavingsCalculator = () => {
  const [qaSalary, setQaSalary] = useState(100000);
  const [qaCount, setQaCount] = useState(5);
  const [regressionPercent, setRegressionPercent] = useState(60);
  const [askuiReductionPercent, setAskuiReductionPercent] = useState(70);

  // Calculate FTE Saved
  const fteSaved = qaCount * (regressionPercent / 100) * (askuiReductionPercent / 100);
  
  // Calculate Annual QA Cost Savings
  const annualCostSavings = fteSaved * qaSalary;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              FTE Cost Savings Calculator
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Calculate quantifiable savings achieved by reducing repetitive manual testing, freeing up QA bandwidth for strategic work.
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
                    Adjust the values below to calculate your potential savings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* QA Salary */}
                  <div className="space-y-2">
                    <Label htmlFor="qa-salary">
                      QA Salary (Annual, Fully Loaded)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="qa-salary"
                        type="number"
                        value={qaSalary}
                        onChange={(e) => setQaSalary(Number(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">$</span>
                    </div>
                    <Slider
                      value={[qaSalary]}
                      onValueChange={(value) => setQaSalary(value[0])}
                      min={50000}
                      max={200000}
                      step={5000}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: $50,000 - $200,000
                    </p>
                  </div>

                  {/* QA Count */}
                  <div className="space-y-2">
                    <Label htmlFor="qa-count">
                      QA Count (Total Full-Time QA Testers)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="qa-count"
                        type="number"
                        value={qaCount}
                        onChange={(e) => setQaCount(Number(e.target.value))}
                        className="flex-1"
                        min={1}
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">FTEs</span>
                    </div>
                    <Slider
                      value={[qaCount]}
                      onValueChange={(value) => setQaCount(value[0])}
                      min={1}
                      max={50}
                      step={1}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: 1 - 50 FTEs
                    </p>
                  </div>

                  {/* Regression % */}
                  <div className="space-y-2">
                    <Label htmlFor="regression-percent">
                      Regression % (Time Spent on Repetitive Testing)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="regression-percent"
                        type="number"
                        value={regressionPercent}
                        onChange={(e) => setRegressionPercent(Number(e.target.value))}
                        className="flex-1"
                        min={0}
                        max={100}
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">%</span>
                    </div>
                    <Slider
                      value={[regressionPercent]}
                      onValueChange={(value) => setRegressionPercent(value[0])}
                      min={0}
                      max={100}
                      step={5}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: 0% - 100%
                    </p>
                  </div>

                  {/* Askui Reduction % */}
                  <div className="space-y-2">
                    <Label htmlFor="askui-reduction">
                      AskUI Reduction % (Estimated Manual Effort Reduction)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="askui-reduction"
                        type="number"
                        value={askuiReductionPercent}
                        onChange={(e) => setAskuiReductionPercent(Number(e.target.value))}
                        className="flex-1"
                        min={0}
                        max={100}
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">%</span>
                    </div>
                    <Slider
                      value={[askuiReductionPercent]}
                      onValueChange={(value) => setAskuiReductionPercent(value[0])}
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
                    Your potential annual savings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* FTE Saved */}
                  <div className="p-6 rounded-lg bg-background border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Annual FTE Saved
                      </span>
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {fteSaved.toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Full-time equivalents freed up for strategic work
                    </p>
                  </div>

                  {/* Annual Cost Savings */}
                  <div className="p-6 rounded-lg bg-background border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Annual QA Cost Savings
                      </span>
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      ${annualCostSavings.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Total annual savings from reduced manual testing
                    </p>
                  </div>

                  {/* Formula Display */}
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Calculation Formula
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-foreground">
                        <strong>FTE Saved</strong> = QA Count × (Regression %) × (AskUI Reduction %)
                      </p>
                      <p className="text-foreground">
                        <strong>Cost Savings</strong> = FTE Saved × QA Salary
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
                  Understanding the FTE Cost Savings calculation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What is FTE Cost Savings?</h4>
                  <p className="text-muted-foreground">
                    This module calculates the quantifiable savings achieved by reducing the percentage of repetitive, manual testing, 
                    freeing up QA bandwidth for more strategic work. By automating regression testing with AskUI, you can reallocate 
                    QA resources to higher-value activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Variables Explained</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li><strong>QA Salary:</strong> Average fully loaded annual salary for a QA Engineer (includes benefits, overhead, etc.)</li>
                    <li><strong>QA Count:</strong> Total number of full-time QA Testers on your team</li>
                    <li><strong>Regression %:</strong> Percentage of total QA time spent on repetitive regression testing</li>
                    <li><strong>AskUI Reduction %:</strong> Estimated percentage reduction in manual effort achieved through AskUI automation</li>
                  </ul>
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
              Ready to Achieve These Savings?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book a demo to see how AskUI can help you reduce manual testing and free up your QA team
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

export default FteCostSavingsCalculator;

