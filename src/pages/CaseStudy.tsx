import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, TrendingUp, CheckCircle } from "lucide-react";
import { cms } from "@/services/cms";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? cms.getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return <NotFound />;
  }

  // Format content
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        if (paragraph.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold mt-8 mb-4">${paragraph.replace("## ", "")}</h2>`;
        }
        if (paragraph.startsWith("### ")) {
          return `<h3 class="text-xl font-semibold mt-6 mb-3">${paragraph.replace("### ", "")}</h3>`;
        }
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").filter(item => item.startsWith("- "));
          const listItems = items.map(item => `<li class="ml-4">${item.replace("- ", "")}</li>`).join("");
          return `<ul class="list-disc space-y-2 my-4">${listItems}</ul>`;
        }
        return `<p class="mb-4 leading-relaxed">${paragraph}</p>`;
      })
      .join("");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6 text-white hover:text-white hover:bg-white/10" asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>

            <div className="flex items-center gap-3 text-white/80 text-sm mb-6">
              <Building2 className="h-5 w-5" />
              <span>{study.industry}</span>
            </div>

            <div className="mb-6">
              <img 
                src={study.logo} 
                alt={study.company}
                className="h-16 object-contain mb-4 bg-white p-4 rounded-lg"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {study.company} Case Study
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {study.content && (
                  <Card className="p-8">
                    <div 
                      className="prose prose-lg dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: formatContent(study.content) }}
                    />
                  </Card>
                )}

                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Challenge</h2>
                  <p className="text-foreground leading-relaxed">{study.challenge}</p>
                </Card>

                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Solution</h2>
                  <p className="text-foreground leading-relaxed">{study.solution}</p>
                </Card>

                <Card className="p-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
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
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Metrics */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 rounded-lg bg-accent/10">
                      <div className="text-3xl font-bold text-accent mb-1">{study.metrics.timeSaved}</div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-accent/10">
                      <div className="text-3xl font-bold text-accent mb-1">{study.metrics.coverage}</div>
                      <div className="text-sm text-muted-foreground">Coverage</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-accent/10">
                      <div className="text-3xl font-bold text-accent mb-1">{study.metrics.roi}</div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                    </div>
                  </div>
                </Card>

                {/* Quote */}
                <Card className="p-6 bg-muted/30 border-border/50">
                  <div className="text-lg italic mb-4">"{study.quote}"</div>
                  <div className="text-sm">
                    <div className="font-semibold">{study.author}</div>
                    <div className="text-muted-foreground">{study.company}</div>
                  </div>
                </Card>

                {/* CTA */}
                <Button className="w-full" size="lg" asChild>
                  <a href="/enterprise">
                    Request a Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cms.getAllCaseStudies()
                .filter(s => s.id !== study.id)
                .slice(0, 2)
                .map((relatedStudy) => (
                  <Link
                    key={relatedStudy.id}
                    to={`/case-studies/${relatedStudy.slug}`}
                    className="block p-6 rounded-lg border border-border hover:shadow-lg transition-all bg-card"
                  >
                    <img 
                      src={relatedStudy.logo} 
                      alt={relatedStudy.company}
                      className="h-12 object-contain mb-4 bg-white p-2 rounded"
                    />
                    <h3 className="font-semibold mb-2 hover:text-accent transition-colors">
                      {relatedStudy.company}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedStudy.challenge}
                    </p>
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

