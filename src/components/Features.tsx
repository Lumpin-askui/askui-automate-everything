import { Card } from "@/components/ui/card";
import { Shield, Lock, Server, GitBranch, Plug, FileSpreadsheet } from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "CSV/Jira Test Execution",
    description: "Execute test cases directly from CSV files or Jira tickets with zero code"
  },
  {
    icon: Server,
    title: "Universal Platform Support",
    description: "Works seamlessly on HMI, Android, iOS, Windows, MacOS, and Linux"
  },
  {
    icon: Plug,
    title: "MCP Integration",
    description: "Integrates with MCP servers for DLT and other SDKs/libraries"
  },
  {
    icon: GitBranch,
    title: "Model Agnostic",
    description: "Compatible with any LLM - bring your own model or use ours"
  },
  {
    icon: Shield,
    title: "Bring Your Own Model",
    description: "Complete data sovereignty with BYOM architecture"
  },
  {
    icon: Lock,
    title: "On-Premise Deployment",
    description: "Deploy in your infrastructure for maximum security and compliance"
  }
];

const Features = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Enterprise Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for security, compliance, and seamless integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Privacy & Security First
            </h3>
            <p className="text-white/80 mb-6">
              ISO27001 certified with complete data sovereignty. Deploy on-premise or bring your own models for maximum control.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                ISO27001 Certified
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                On-Premise Available
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                BYOM Support
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                SOC 2 Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
