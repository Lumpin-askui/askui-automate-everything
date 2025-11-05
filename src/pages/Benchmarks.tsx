import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, TrendingUp, Award, CheckCircle } from "lucide-react";
import { cms } from "@/services/cms";

const Benchmarks = () => {
  const benchmarkPosts = cms.getBlogPostsByCategory("Benchmarks");

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Trophy className="mr-2 h-4 w-4" />
              Industry-Leading Performance
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Benchmark Results
              <span className="block text-accent text-2xl md:text-3xl font-normal mt-4">#1 in Android World & OSWorld</span>
            </h1>
            
            <p className="mb-8 text-lg text-white/80">
              Proven performance across industry-standard benchmarks. See how AskUI delivers superior results in computer use agent technology.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">#1</div>
              <div className="text-sm text-muted-foreground mb-2">Android World Benchmark</div>
              <p className="text-xs text-muted-foreground">Top performance in mobile automation testing</p>
            </Card>

            <Card className="p-8 text-center border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">#1</div>
              <div className="text-sm text-muted-foreground mb-2">OSWorld Benchmark</div>
              <p className="text-xs text-muted-foreground">Leading results in cross-platform automation</p>
            </Card>

            <Card className="p-8 text-center border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">95%+</div>
              <div className="text-sm text-muted-foreground mb-2">Test Accuracy</div>
              <p className="text-xs text-muted-foreground">Consistent reliability across all platforms</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benchmark Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Benchmark Analysis</h2>
            
            <div className="space-y-8">
              {/* Android World */}
              <Card className="p-8 border-border/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Android World Benchmark</h3>
                    <p className="text-muted-foreground">
                      Comprehensive testing framework for mobile device automation and interaction capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-accent mb-1">#1</div>
                    <div className="text-sm text-muted-foreground">Overall Ranking</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-accent mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Top performance in complex UI interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Superior accuracy in gesture recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Fastest execution time across test scenarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Consistent performance across Android versions</span>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* OSWorld */}
              <Card className="p-8 border-border/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">OSWorld Benchmark</h3>
                    <p className="text-muted-foreground">
                      Cross-platform automation benchmark evaluating performance across Windows, MacOS, and Linux.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-accent mb-1">#1</div>
                    <div className="text-sm text-muted-foreground">Cross-Platform Ranking</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-accent mb-1">96%</div>
                    <div className="text-sm text-muted-foreground">Task Completion Rate</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Leading performance on Windows, MacOS, and Linux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Optimized image recognition algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Enhanced action execution engine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Improved error handling and recovery</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      {benchmarkPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Deep Dives & Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benchmarkPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 group cursor-pointer h-full">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Award className="h-4 w-4 text-accent" />
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm font-medium text-accent">
                        Read analysis
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to See These Results in Your Organization?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with AskUI and experience benchmark-leading performance for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/enterprise">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/blog">
                  Read Full Analysis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Benchmarks;

