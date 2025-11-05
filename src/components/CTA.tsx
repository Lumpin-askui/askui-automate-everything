import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 md:p-16">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
          
          <div className="relative max-w-3xl mx-auto text-center" id="contact">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Deploy
              <span className="block text-accent">Enterprise AI Agents?</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join industry leaders using AskUI to automate workflows across all platforms with enterprise security and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-glow" asChild>
                <a href="/enterprise">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                <a href="https://github.com/askui/vision-agent" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Explore SDK
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Open source SDK
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Enterprise support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
