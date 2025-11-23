import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Settings, MessageSquare, Monitor, Users } from "lucide-react";
import "@/styles/design-system.css";
import dashboardImg from "@/assets/screenshots/dashboard.png";
import agentsImg from "@/assets/screenshots/agent-overview.png";
import devicesImg from "@/assets/screenshots/device-config.png";
import jiraImg from "@/assets/screenshots/task-source.png";
import promptsImg from "@/assets/screenshots/prompts.png";

const ProductShowcase = () => {
  return (
    <section id="product-showcase" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <h2 className="section-title">
            The Control Center for <span className="text-accent-gradient">Agent OS</span>
          </h2>
          <p className="section-subtitle">
            Manage your entire automation infrastructure from a single, powerful desktop application.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-xl overflow-hidden">
          <Tabs defaultValue="dashboard" className="w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar / Tabs List */}
              <div className="w-full lg:w-1/4">
                <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-2 p-0 items-start">
                  <TabsTrigger 
                    value="dashboard" 
                    className="w-full justify-start px-4 py-3 text-left data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 rounded-lg transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <LayoutDashboard size={18} />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">Dashboard</span>
                        <span className="text-xs text-muted-foreground font-normal">Monitor execution health</span>
                      </div>
                    </div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="agents" 
                    className="w-full justify-start px-4 py-3 text-left data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 rounded-lg transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Users size={18} />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">Agents</span>
                        <span className="text-xs text-muted-foreground font-normal">Manage automations</span>
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger 
                    value="devices" 
                    className="w-full justify-start px-4 py-3 text-left data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 rounded-lg transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Monitor size={18} />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">Device Management</span>
                        <span className="text-xs text-muted-foreground font-normal">Multi-device configuration</span>
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger 
                    value="jira" 
                    className="w-full justify-start px-4 py-3 text-left data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 rounded-lg transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Settings size={18} />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">Integrations</span>
                        <span className="text-xs text-muted-foreground font-normal">Connect Jira & more</span>
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger 
                    value="prompts" 
                    className="w-full justify-start px-4 py-3 text-left data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 rounded-lg transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare size={18} />
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">Prompts & Templates</span>
                        <span className="text-xs text-muted-foreground font-normal">Customize behavior</span>
                      </div>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Content Area / Screenshots */}
              <div className="w-full lg:w-3/4 bg-background/50 rounded-lg border border-border/50 overflow-hidden min-h-[500px] relative shadow-2xl">
                
                <TabsContent value="dashboard" className="m-0 h-full animate-in fade-in zoom-in-95 duration-300">
                  <img 
                    src={dashboardImg} 
                    alt="Caesr Desktop Dashboard" 
                    className="w-full h-full object-cover object-top"
                  />
                </TabsContent>

                <TabsContent value="agents" className="m-0 h-full animate-in fade-in zoom-in-95 duration-300">
                  <img 
                    src={agentsImg} 
                    alt="Agents overview" 
                    className="w-full h-full object-cover object-top"
                  />
                </TabsContent>

                <TabsContent value="devices" className="m-0 h-full animate-in fade-in zoom-in-95 duration-300">
                  <img 
                    src={devicesImg} 
                    alt="Device Configuration" 
                    className="w-full h-full object-cover object-top"
                  />
                </TabsContent>

                <TabsContent value="jira" className="m-0 h-full animate-in fade-in zoom-in-95 duration-300">
                  <img 
                    src={jiraImg} 
                    alt="Jira Integration" 
                    className="w-full h-full object-cover object-top"
                  />
                </TabsContent>

                <TabsContent value="prompts" className="m-0 h-full animate-in fade-in zoom-in-95 duration-300">
                  <img 
                    src={promptsImg} 
                    alt="Prompts and Templates" 
                    className="w-full h-full object-cover object-top"
                  />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
