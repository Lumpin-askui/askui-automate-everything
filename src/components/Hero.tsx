import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Terminal, MessageSquare } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";
import intelLogo from "@/assets/clients/intel.png";

const Hero = () => {
  const customers = [
    { name: "Deutsche Bahn", logo: dbLogo },
    { name: "SEW Eurodrive", logo: sewLogo },
    { name: "Zucchetti", logo: zucchettiLogo },
    { name: "Solute", logo: soluteLogo },
    { name: "Intel Software", logo: intelLogo }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Tagline */}
            <div className="text-center mb-16">
              <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                #1 in Android World & OSWorld Benchmarks
              </div>
              
              <h1 className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Production-Ready
                <span className="block text-accent mt-2">Computer Use Agents</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-16">
                Automate workflows across Windows, MacOS, Linux, iOS, and Android. Enterprise-grade security built in.
              </p>
            </div>

            {/* Demo Tabs */}
            <div className="max-w-5xl mx-auto">
              
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-white/5 border border-white/10">
                  <TabsTrigger value="cli" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                    <Terminal className="mr-2 h-4 w-4" />
                    CLI for Developers
                  </TabsTrigger>
                  <TabsTrigger value="chat" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat for Teams
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cli" className="mt-0">
                  <div className="rounded-xl border border-white/20 bg-[#1e1e1e] p-6 text-left overflow-x-auto shadow-lg">
                    <div className="flex items-center gap-2 mb-4 text-white/60 text-xs">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 font-mono">terminal</span>
                    </div>
                    <pre className="font-mono text-sm text-white/90 leading-relaxed">
                      <code>{`$ askui-cli run ./tasks --devices playwright://chrome

AskUI CLI runs task

Conversion-ID: a3f4b2c1-9d8e-4a2f-b1c3-d4e5f6a7b8c9
Chat API: http://localhost:8080/chat

We are now starting to Execute:
✓ Connecting to Chrome browser
✓ Loading task: test-login-flow.txt
✓ Vision model initialized
✓ Executing automation steps...
  → Navigate to login page
  → Enter credentials
  → Click login button
✓ Task completed successfully

Results: ./output/test-results.json`}</code>
                    </pre>
                  </div>
                  <p className="text-white/70 text-center mt-6 text-base">
                    Command-line automation for CI/CD pipelines and DevOps workflows.
                  </p>
                </TabsContent>

                <TabsContent value="chat" className="mt-0">
                  <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur p-8 shadow-lg max-w-3xl mx-auto">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 font-semibold text-white">
                          You
                        </div>
                        <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4 text-white max-w-md">
                          Automate testing our app on all platforms
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">AI</span>
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-sm p-5 flex-1 shadow-sm text-primary">
                          <p className="mb-4 font-medium">I can help you automate across all platforms. Which would you like to start with?</p>
                          <div className="grid grid-cols-2 gap-2">
                            <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium text-left text-foreground">
                              🪟 Windows
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium text-left text-foreground">
                              🍎 MacOS
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium text-left text-foreground">
                              🌐 Web
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium text-left text-foreground">
                              🤖 Android
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium text-left text-foreground">
                              🐧 Linux
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium text-left text-foreground">
                              📱 iOS
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <div className="inline-flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-glow" asChild>
                    <a href="/enterprise">
                      Book a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                    <a href="#contact">
                      Try Caesr
                    </a>
                  </Button>
                </div>
                
                {/* Security Badges */}
                <div className="flex flex-wrap gap-4 justify-center mt-6">
                  <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                    ISO27001 Certified
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                    On-Premise Available
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                    BYOM Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
