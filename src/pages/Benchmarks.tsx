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
              <span className="block text-accent text-2xl md:text-3xl font-normal mt-4">
                Leading Android World Benchmark
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-white/80">
              Proven performance across industry-standard benchmarks. See how AskUI delivers superior results in computer use agent technology.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a 
                href="https://docs.google.com/spreadsheets/d/1cchzP9dlTZ3WXQTfYNhh3avxoLipqHN75v1Tb86uhHo/edit?gid=0#gid=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
              >
                View Official Leaderboard →
              </a>
              <span className="text-white/40">•</span>
              <Link 
                to="/blog-posts/askui-vision-agent-achieves-2nd-place-on-androidworld-benchmark"
                className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
              >
                Read Analysis →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#962C5D]/10 mb-4">
                <Award className="h-8 w-8 text-[#962C5D]" />
              </div>
              <div className="text-4xl font-bold text-[#962C5D] mb-2">#2</div>
              <div className="text-sm text-muted-foreground mb-2">Android World Benchmark</div>
              <p className="text-xs text-muted-foreground">Ranked #2 globally among AI agents</p>
            </Card>

            <Card className="p-8 text-center border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#962C5D]/10 mb-4">
                <TrendingUp className="h-8 w-8 text-[#962C5D]" />
              </div>
              <div className="text-4xl font-bold text-[#962C5D] mb-2">94.8%</div>
              <div className="text-sm text-muted-foreground mb-2">Success Rate (pass@1)</div>
              <p className="text-xs text-muted-foreground">Industry-leading task completion on first attempt</p>
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
                  <div className="w-12 h-12 rounded-lg bg-[#962C5D]/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-[#962C5D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Android World Benchmark</h3>
                    <p className="text-muted-foreground">
                      Comprehensive testing framework for mobile device automation and interaction capabilities. AskUI's AndroidVisionA agent achieved #2 ranking globally with a 94.8% success rate on first-attempt task completion.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-[#962C5D] mb-1">#2</div>
                    <div className="text-sm text-muted-foreground">Global Ranking</div>
                    <div className="text-xs text-muted-foreground mt-1">Among all AI agents</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold text-[#962C5D] mb-1">94.8%</div>
                    <div className="text-sm text-muted-foreground">Success Rate (pass@1)</div>
                    <div className="text-xs text-muted-foreground mt-1">First-attempt completion</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#962C5D] flex-shrink-0 mt-0.5" />
                      <span>Ranked #2 globally in Android World leaderboard (as of October 2025)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#962C5D] flex-shrink-0 mt-0.5" />
                      <span>94.8% success rate on first-attempt task completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#962C5D] flex-shrink-0 mt-0.5" />
                      <span>AI agent architecture with advanced vision and action capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#962C5D] flex-shrink-0 mt-0.5" />
                      <span>Outperforms human baseline performance (80.0%) by significant margin</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">About the Benchmark:</strong> Android World is a comprehensive benchmark for evaluating AI agents on mobile device automation tasks. Results are based on the official Android World leaderboard last updated October 22, 2025. AskUI's AndroidVisionA agent is classified as an AI agent with advanced vision capabilities.
                  </p>
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
                  <Link key={post.id} to={`/blog-posts/${post.slug}`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 group cursor-pointer h-full">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Award className="h-4 w-4 text-[#962C5D]" />
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-[#962C5D] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm font-medium text-[#962C5D]">
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
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
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

export default Benchmarks;

