import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { cms } from "@/services/cms";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? cms.getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/30 border-b border-border">
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground hover:bg-secondary/50 -ml-4" asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>

            <div className="flex items-center gap-3 text-muted-foreground text-sm mb-6 font-medium">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="uppercase tracking-wide">{study.industry}</span>
            </div>

            <div className="mb-8">
              <div className="inline-block p-6 bg-white rounded-xl shadow-sm border border-border/50">
                <img 
                  src={study.logo} 
                  alt={study.company}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {study.company} Case Study
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {study.content && (
                  <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <BlogContent content={study.content} />
                  </div>
                )}

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <div className="w-1 h-8 bg-primary rounded-full"></div>
                      The Challenge
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <div className="w-1 h-8 bg-primary rounded-full"></div>
                      The Solution
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Key Results
                  </h3>
                  <ul className="space-y-4">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90 text-lg">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Metrics */}
                <Card className="p-6 border-border shadow-sm">
                  <h3 className="text-lg font-bold mb-6 text-foreground">Impact at a Glance</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="text-3xl font-bold text-primary mb-1">{study.metrics.timeSaved}</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Time Saved</div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="text-3xl font-bold text-primary mb-1">{study.metrics.coverage}</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Coverage</div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="text-3xl font-bold text-primary mb-1">{study.metrics.roi}</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">ROI</div>
                    </div>
                  </div>
                </Card>

                {/* Quote */}
                <Card className="p-8 bg-primary text-primary-foreground border-none shadow-lg">
                  <div className="text-xl italic mb-6 font-medium leading-relaxed">"{study.quote}"</div>
                  <div>
                    <div className="font-bold text-lg">{study.author}</div>
                    <div className="text-primary-foreground/80">{study.company}</div>
                  </div>
                </Card>

                {/* CTA */}
                <div className="p-6 rounded-2xl bg-secondary border border-border text-center">
                  <h3 className="font-bold text-lg mb-2">Ready to achieve similar results?</h3>
                  <p className="text-sm text-muted-foreground mb-6">Get a custom demo for your team.</p>
                  <Button className="w-full" size="lg" asChild>
                    <a href="/enterprise">
                      Book a Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-foreground">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cms.getAllCaseStudies()
                .filter(s => s.id !== study.id)
                .slice(0, 2)
                .map((relatedStudy) => (
                  <Link
                    key={relatedStudy.id}
                    to={`/case-studies/${relatedStudy.slug}`}
                    className="block p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/20 transition-all group"
                  >
                    <img 
                      src={relatedStudy.logo} 
                      alt={relatedStudy.company}
                      className="h-10 object-contain mb-4"
                    />
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {relatedStudy.company}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {relatedStudy.challenge}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-200">
                      Read Story
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
