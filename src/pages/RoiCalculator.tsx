import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Users, DollarSign, TrendingUp, Zap, Shield, Info } from "lucide-react";

const RoiCalculator = () => {
  // Fixed AskUI capabilities (not user-editable)
  const ASKUI_REDUCTION_PERCENT = 70; // AskUI can automate 70% of manual regression testing
  const ASKUI_BUG_REDUCTION_PERCENT = 60; // AskUI can reduce production bugs by 60%

  // FTE Cost Savings State
  const [qaSalary, setQaSalary] = useState(100000);
  const [qaCount, setQaCount] = useState(5);
  const [regressionPercent, setRegressionPercent] = useState(60);

  // Developer Velocity State
  const [devSalary, setDevSalary] = useState(120000);
  const [deploymentsPerYear, setDeploymentsPerYear] = useState(12);
  const [manualTestHoursPerDeployment, setManualTestHoursPerDeployment] = useState(40);
  const [devTeamSize, setDevTeamSize] = useState(10);

  // Risk Mitigation State
  const [avgBugCost, setAvgBugCost] = useState(5000);
  const [bugsMonthly, setBugsMonthly] = useState(10);

  // FTE Cost Savings Calculations
  const fteSaved = qaCount * (regressionPercent / 100) * (ASKUI_REDUCTION_PERCENT / 100);
  const annualCostSavings = fteSaved * qaSalary;

  // Developer Velocity Calculations
  // With AskUI automation, tests run faster - assume 80% time reduction per deployment
  const hoursSavedPerDeployment = manualTestHoursPerDeployment * 0.8;
  const recoupedHours = deploymentsPerYear * hoursSavedPerDeployment * devTeamSize;
  const valueRecouped = recoupedHours * (devSalary / 2080);

  // Risk Mitigation Calculations
  const bugAvoidance = avgBugCost * bugsMonthly * 12 * (ASKUI_BUG_REDUCTION_PERCENT / 100);

  // Total ROI
  const totalROI = annualCostSavings + valueRecouped + bugAvoidance;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ROI Calculator
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Calculate the return on investment for AskUI automation across three key areas: cost savings, developer velocity, and risk mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Tabs */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="fte" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="fte" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  FTE Cost Savings
                </TabsTrigger>
                <TabsTrigger value="velocity" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Developer Velocity
                </TabsTrigger>
                <TabsTrigger value="risk" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Risk Mitigation
                </TabsTrigger>
              </TabsList>

              {/* FTE Cost Savings Tab */}
              <TabsContent value="fte">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-primary" />
                        Input Variables
                      </CardTitle>
                      <CardDescription>
                        Enter your current QA team metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
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

                      <div className="space-y-2">
                        <Label htmlFor="qa-count">
                          QA Team Size (Total Full-Time QA Testers)
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

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="regression-percent">
                            Regression Testing Time (% of Total QA Time)
                          </Label>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50 border border-border/50 mb-2">
                          <p className="text-xs text-muted-foreground">
                            What percentage of your QA team's time is spent on repetitive, manual regression testing? 
                            This includes running the same tests repeatedly before each release.
                          </p>
                        </div>
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

                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold text-primary">AskUI Automation Capability</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          AskUI can automate <strong>{ASKUI_REDUCTION_PERCENT}%</strong> of your manual regression testing effort. 
                          This is based on AskUI's proven capability to handle visual UI automation across web, desktop, and mobile platforms.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

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

                      <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Calculation Formula
                        </p>
                        <div className="space-y-1 text-sm">
                          <p className="text-foreground">
                            <strong>FTE Saved</strong> = QA Count × (Regression Time %) × ({ASKUI_REDUCTION_PERCENT}% AskUI Reduction)
                          </p>
                          <p className="text-foreground">
                            <strong>Cost Savings</strong> = FTE Saved × QA Salary
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Developer Velocity Tab */}
              <TabsContent value="velocity">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-primary" />
                        Input Variables
                      </CardTitle>
                      <CardDescription>
                        Enter your current development metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
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

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="manual-hours">
                            Manual Test Execution Time per Deployment
                          </Label>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50 border border-border/50 mb-2">
                          <p className="text-xs text-muted-foreground">
                            Total hours your team currently spends manually executing tests before each deployment. 
                            This includes regression testing, smoke tests, and validation.
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Input
                            id="manual-hours"
                            type="number"
                            value={manualTestHoursPerDeployment}
                            onChange={(e) => setManualTestHoursPerDeployment(Number(e.target.value))}
                            className="flex-1"
                            min={0}
                          />
                          <span className="text-sm text-muted-foreground min-w-[3rem]">hours</span>
                        </div>
                        <Slider
                          value={[manualTestHoursPerDeployment]}
                          onValueChange={(value) => setManualTestHoursPerDeployment(value[0])}
                          min={0}
                          max={200}
                          step={5}
                          className="mt-2"
                        />
                        <p className="text-xs text-muted-foreground">
                          Range: 0 - 200 hours
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dev-team-size">
                          Development Team Size
                        </Label>
                        <div className="p-3 rounded-lg bg-muted/50 border border-border/50 mb-2">
                          <p className="text-xs text-muted-foreground">
                            Number of developers who benefit from faster test feedback cycles.
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Input
                            id="dev-team-size"
                            type="number"
                            value={devTeamSize}
                            onChange={(e) => setDevTeamSize(Number(e.target.value))}
                            className="flex-1"
                            min={1}
                          />
                          <span className="text-sm text-muted-foreground min-w-[3rem]">developers</span>
                        </div>
                        <Slider
                          value={[devTeamSize]}
                          onValueChange={(value) => setDevTeamSize(value[0])}
                          min={1}
                          max={100}
                          step={1}
                          className="mt-2"
                        />
                        <p className="text-xs text-muted-foreground">
                          Range: 1 - 100 developers
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold text-primary">AskUI Time Savings</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          With AskUI automation, test execution time is reduced by <strong>80%</strong>. 
                          Automated tests run in parallel and provide immediate feedback, eliminating waiting periods.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

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
                      <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            Hours Saved per Deployment
                          </span>
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-primary">
                          {hoursSavedPerDeployment.toFixed(1)}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Developer hours saved per deployment cycle
                        </p>
                      </div>

                      <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            Total Engineering Hours Recouped Annually
                          </span>
                          <TrendingUp className="h-5 w-5 text-primary" />
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

                      <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Calculation Formula
                        </p>
                        <div className="space-y-1 text-sm">
                          <p className="text-foreground">
                            <strong>Hours Saved</strong> = Manual Test Hours × 80% (AskUI reduction)
                          </p>
                          <p className="text-foreground">
                            <strong>Recouped Hours</strong> = Deployments × Hours Saved × Team Size
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
              </TabsContent>

              {/* Risk Mitigation Tab */}
              <TabsContent value="risk">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-primary" />
                        Input Variables
                      </CardTitle>
                      <CardDescription>
                        Enter your current production bug metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="bug-cost">
                          Average Bug Cost (per production bug)
                        </Label>
                        <div className="p-3 rounded-lg bg-muted/50 border border-border/50 mb-2">
                          <p className="text-xs text-muted-foreground">
                            Total cost of fixing one production bug, including engineering time for hotfixes, 
                            deployment overhead, potential downtime, customer communication, and reputation impact.
                          </p>
                        </div>
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
                          Range: $500 - $50,000
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bugs-monthly">
                          High-Severity Production Bugs (Monthly)
                        </Label>
                        <div className="p-3 rounded-lg bg-muted/50 border border-border/50 mb-2">
                          <p className="text-xs text-muted-foreground">
                            Average number of high-severity bugs that currently reach production each month. 
                            These are bugs that require immediate attention and hotfixes.
                          </p>
                        </div>
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

                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold text-primary">AskUI Bug Reduction Capability</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          AskUI can reduce production bugs by <strong>{ASKUI_BUG_REDUCTION_PERCENT}%</strong> by catching 
                          issues earlier in the development cycle through improved test coverage and faster feedback loops.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

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
                      <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            Bugs Avoided (Annual)
                          </span>
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-primary">
                          {Math.round(bugsMonthly * 12 * (ASKUI_BUG_REDUCTION_PERCENT / 100))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          High-severity bugs prevented from reaching production
                        </p>
                      </div>

                      <div className="p-6 rounded-lg bg-background border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            Annual Bug Cost Avoidance
                          </span>
                          <DollarSign className="h-5 w-5 text-primary" />
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

                      <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Calculation Formula
                        </p>
                        <div className="space-y-1 text-sm">
                          <p className="text-foreground">
                            <strong>Bug Avoidance</strong> = Avg. Bug Cost × Bugs Monthly × 12 × ({ASKUI_BUG_REDUCTION_PERCENT}% Reduction)
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            This calculates the cost avoided by shifting bug detection left and catching issues before they reach production.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Total ROI Summary */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Total Estimated Annual ROI</p>
                  <div className="text-5xl font-bold text-primary mb-2">
                    ${totalROI.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Combined savings from FTE reduction, developer velocity, and risk mitigation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AskUI Benefits Callout */}
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">How AskUI Delivers These Savings</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    AskUI's AI-powered visual automation platform enables these ROI gains through:
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="p-6 rounded-lg bg-background border border-border/50 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mb-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">70% Automation Capability</h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${annualCostSavings.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Annual FTE Cost Savings</p>
                    <p className="text-sm text-muted-foreground">
                      AskUI's visual automation eliminates {ASKUI_REDUCTION_PERCENT}% of manual regression testing, freeing up QA resources
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-background border border-border/50 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mb-3">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">80% Faster Execution</h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${valueRecouped.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Annual Developer Velocity Value</p>
                    <p className="text-sm text-muted-foreground">
                      Parallel test execution and immediate feedback save developer time, accelerating release cycles
                    </p>
                  </div>
                  <div className="p-6 rounded-lg bg-background border border-border/50 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mb-3">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">60% Bug Reduction</h4>
                    <div className="text-2xl font-bold text-primary mb-2">
                      ${bugAvoidance.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Annual Risk Mitigation Savings</p>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive test coverage catches issues earlier, preventing {ASKUI_BUG_REDUCTION_PERCENT}% of production bugs
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <p className="text-sm text-muted-foreground">
                      Ready to achieve these savings with AskUI?
                    </p>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-accent" asChild>
                      <a href="/enterprise">
                        Book a Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Understanding the ROI Calculation</CardTitle>
                <CardDescription>
                  How each calculator contributes to your total ROI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    FTE Cost Savings
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Measures the quantifiable savings from reducing manual regression testing. By automating repetitive tests, 
                    you free up QA bandwidth for strategic work like exploratory testing and quality improvements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Developer Velocity Gain
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Quantifies the value of faster test feedback cycles. Automated tests provide immediate results, 
                    reducing developer waiting time and enabling faster iteration cycles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Risk Mitigation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Calculates cost avoidance by catching bugs earlier in the development cycle. Production bugs are 
                    significantly more expensive to fix than bugs caught during development.
                  </p>
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
              Book a demo to see how AskUI can help you reduce costs, accelerate development, and mitigate risk
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

export default RoiCalculator;

