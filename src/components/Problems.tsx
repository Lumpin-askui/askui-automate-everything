import { Shield, Zap, Users, Lock, Server, Boxes } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Server,
    title: "Limited Platform Support",
    problem: "CUAs can't run on Android, Windows, MacOS, iOS and Linux",
    solution: "Universal compatibility across all major platforms and devices"
  },
  {
    icon: Boxes,
    title: "Integration Complexity",
    problem: "Difficult to interact with and configure CUA models",
    solution: "Simple SDK and CLI for seamless model integration"
  },
  {
    icon: Zap,
    title: "Production Reliability",
    problem: "CUA models lack speed and reliability for production use",
    solution: "Optimized infrastructure for consistent, fast performance"
  },
  {
    icon: Users,
    title: "Technical Barriers",
    problem: "CUA models inaccessible for non-technical users",
    solution: "Caesr app provides intuitive chat interface for everyone"
  },
  {
    icon: Shield,
    title: "Enterprise Readiness",
    problem: "Missing security, compliance, and deployment options",
    solution: "ISO27001 certified with on-premise deployment support"
  },
  {
    icon: Lock,
    title: "Privacy Concerns",
    problem: "Data security and vendor lock-in risks",
    solution: "Bring-your-own-model with complete data sovereignty"
  }
];

const Problems = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making computer use agents enterprise-ready with production-grade infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#962C5D]/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-[#962C5D]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.problem}</p>
                  <p className="text-sm font-medium text-foreground">→ {item.solution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
