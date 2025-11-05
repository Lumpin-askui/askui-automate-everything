import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Leading in Android World & OSWorld Benchmarks
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Production-Ready
            <span className="block text-accent">Computer Use Agents</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-4">
              Across All Platforms
            </span>
          </h1>
          
          <p className="mb-10 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
            Deploy AI agents on Windows, MacOS, Linux, iOS, and Android with enterprise-grade security, reliability, and compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-glow" asChild>
              <a href="#contact">Book a Demo</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
              <a href="https://github.com/askui/vision-agent" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">5+</div>
              <div className="text-sm text-white/70 mt-1">Platforms</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">ISO27001</div>
              <div className="text-sm text-white/70 mt-1">Certified</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">#1</div>
              <div className="text-sm text-white/70 mt-1">Android Benchmark</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
