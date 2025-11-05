import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { cms } from "@/services/cms";

const CaseStudies = () => {
  const caseStudies = cms.getAllCaseStudies();
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Customer Success Stories
              <span className="block text-accent text-2xl md:text-3xl font-normal mt-4">Real Results from Industry Leaders</span>
            </h1>
            
            <p className="mb-8 text-lg text-white/80">
              See how enterprises are transforming their testing and automation with AskUI
            </p>

            <div className="flex flex-wrap gap-8 justify-center text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-1">70%</div>
                <div className="text-sm text-white/80">Average Time Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-1">90%</div>
                <div className="text-sm text-white/80">Test Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-1">300%</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden border-border/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Left Column */}
                  <div>
                    <div className="mb-6">
                      <img 
                        src={study.logo} 
                        alt={study.company}
                        className="h-12 object-contain mb-4"
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Building2 className="h-4 w-4" />
                        {study.industry}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{study.company}</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Challenge
                        </h3>
                        <p className="text-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Solution
                        </h3>
                        <p className="text-foreground">{study.solution}</p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 pt-4">
                        <div className="text-center p-4 rounded-lg bg-accent/10">
                          <div className="text-2xl font-bold text-accent mb-1">{study.metrics.timeSaved}</div>
                          <div className="text-xs text-muted-foreground">Time Saved</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-accent/10">
                          <div className="text-2xl font-bold text-accent mb-1">{study.metrics.coverage}</div>
                          <div className="text-xs text-muted-foreground">Coverage</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-accent/10">
                          <div className="text-2xl font-bold text-accent mb-1">{study.metrics.roi}</div>
                          <div className="text-xs text-muted-foreground">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Key Results
                      </h3>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-lg bg-muted/30 border border-border/50">
                      <div className="text-lg italic mb-4">"{study.quote}"</div>
                      <div className="text-sm">
                        <div className="font-semibold">{study.author}</div>
                        <div className="text-muted-foreground">{study.company}</div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/case-studies/${study.slug}`}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Testing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join these industry leaders and see similar results in your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/enterprise">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Contact Sales
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

export default CaseStudies;
