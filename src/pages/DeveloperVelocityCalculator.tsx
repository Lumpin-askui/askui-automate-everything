import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Clock, DollarSign, TrendingUp, Zap } from "lucide-react";

const DeveloperVelocityCalculator = () => {
  const [devSalary, setDevSalary] = useState(120000);
  const [deploymentsPerYear, setDeploymentsPerYear] = useState(12);
  const [hoursSavedPerDeployment, setHoursSavedPerDeployment] = useState(8);
  const [qaCount, setQaCount] = useState(5);

  // Calculate Total Engineering Hours Recouped Annually
  const recoupedHours = deploymentsPerYear * hoursSavedPerDeployment * qaCount;
  
  // Calculate Monetary Value of Recouped Time
  // 2080 is standard annual working hours
  const valueRecouped = recoupedHours * (devSalary / 2080);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Developer Velocity Gain Calculator
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Quantify the value of saving developer time. Faster, reliable testing reduces waiting periods for feedback and minimizes time spent debugging.
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
                    Adjust the values below to calculate your potential velocity gains
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Dev Salary */}
                  <div className="space-y-2">
                    <Label htmlFor="dev-salary">
                      Developer Salary (Annual, Fully Loaded)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="dev-salary"
                        type="number"
                        value={devSalary}
                        onChange={(e) => setDevSalary(Number(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">$</span>
                    </div>
                    <Slider
                      value={[devSalary]}
                      onValueChange={(value) => setDevSalary(value[0])}
                      min={70000}
                      max={250000}
                      step={5000}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: $70,000 - $250,000
                    </p>
                  </div>

                  {/* Deployments per Year */}
                  <div className="space-y-2">
                    <Label htmlFor="deployments">
                      Deployments per Year
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="deployments"
                        type="number"
                        value={deploymentsPerYear}
                        onChange={(e) => setDeploymentsPerYear(Number(e.target.value))}
                        className="flex-1"
                        min={1}
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">releases</span>
                    </div>
                    <Slider
                      value={[deploymentsPerYear]}
                      onValueChange={(value) => setDeploymentsPerYear(value[0])}
                      min={1}
                      max={52}
                      step={1}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: 1 - 52 deployments/year
                    </p>
                  </div>

                  {/* Hours Saved per Deployment */}
                  <div className="space-y-2">
                    <Label htmlFor="hours-saved">
                      Hours Saved per Deployment (per team member)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="hours-saved"
                        type="number"
                        value={hoursSavedPerDeployment}
                        onChange={(e) => setHoursSavedPerDeployment(Number(e.target.value))}
                        className="flex-1"
                        min={0}
                      />
                      <span className="text-sm text-muted-foreground min-w-[3rem]">hours</span>
                    </div>
                    <Slider
                      value={[hoursSavedPerDeployment]}
                      onValueChange={(value) => setHoursSavedPerDeployment(value[0])}
                      min={0}
                      max={40}
                      step={1}
                      className="mt-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Range: 0 - 40 hours
                    </p>
                  </div>

                  {/* QA Count */}
                  <div className="space-y-2">
                    <Label htmlFor="qa-count">
                      QA Count (Team size multiplier)
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
                    Your potential annual velocity gains
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Recouped Hours */}
                  <div className="p-6 rounded-lg bg-background border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Total Engineering Hours Recouped Annually
                      </span>
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {recoupedHours.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Developer hours saved per year
                    </p>
                  </div>

                  {/* Value Recouped */}
                  <div className="p-6 rounded-lg bg-background border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Monetary Value of Recouped Time
                      </span>
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      ${valueRecouped.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Annual value of developer time saved
                    </p>
                  </div>

                  {/* Formula Display */}
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Calculation Formula
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-foreground">
                        <strong>Recouped Hours</strong> = Deployments per Year × Hours Saved per Deployment × QA Count
                      </p>
                      <p className="text-foreground">
                        <strong>Value Recouped</strong> = Recouped Hours × (Dev Salary ÷ 2080)
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Note: 2080 is the standard calculation for annual working hours
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
                  Understanding the Developer Velocity Gain calculation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What is Developer Velocity Gain?</h4>
                  <p className="text-muted-foreground">
                    This module quantifies the value of saving developer time. Faster, reliable testing reduces waiting periods 
                    for feedback and minimizes time spent debugging non-reproducible errors. By accelerating your testing cycles, 
                    developers can iterate faster and deliver features to market sooner.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Variables Explained</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li><strong>Developer Salary:</strong> Average fully loaded annual salary for a Developer/Engineer</li>
                    <li><strong>Deployments per Year:</strong> How frequently major releases or deployments occur</li>
                    <li><strong>Hours Saved per Deployment:</strong> Average developer hours saved per team member per deployment cycle (due to faster testing/feedback)</li>
                    <li><strong>QA Count:</strong> Total QA team size (used as a multiplier to scale the impact across the engineering team)</li>
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
              Ready to Accelerate Your Development Velocity?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book a demo to see how AskUI can help you ship faster with reliable automated testing
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

export default DeveloperVelocityCalculator;

