import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, MessageSquare, Monitor, Users, RefreshCw, Play, Pause, Check, Search, Plus, Calendar, Clock, Terminal, Code, ChevronRight, MoreHorizontal, CircleCheck, CircleX, Laptop, Smartphone, Tablet } from "lucide-react";
import "@/styles/design-system.css";

// --- Mock Data & Components ---

const DashboardView = () => (
  <div className="p-6 space-y-6">
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Total Agents</div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900">1</span>
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">configured</Badge>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Total Executions</div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900">53</span>
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">10 recent</Badge>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Success Rate</div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900">98%</span>
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">overall</Badge>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Email Monitors</div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900">1</span>
          <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50">active</Badge>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-6 h-[300px]">
      <div className="col-span-2 bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
        <h4 className="font-semibold text-slate-900 mb-4">Recent Activity</h4>
        <div className="flex-1 overflow-auto pr-2 space-y-3">
          {[
            { id: '20251123_180254', status: 'Fail', time: 'Nov 23, 18:02', duration: '0.0s', color: 'text-red-500', bg: 'bg-red-50' },
            { id: '20251122_211734', status: 'Pass', time: 'Nov 22, 21:17', duration: '200.5s', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { id: '20251122_210129', status: 'Pass', time: 'Nov 22, 21:01', duration: '125.5s', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { id: '20251122_204626', status: 'Pass', time: 'Nov 22, 20:46', duration: '6.6s', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { id: '20251122_204345', status: 'Fail', time: 'Nov 22, 20:43', duration: '7.6s', color: 'text-red-500', bg: 'bg-red-50' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full ${item.bg} flex items-center justify-center`}>
                  {item.status === 'Pass' ? <CircleCheck size={14} className={item.color} /> : <CircleX size={14} className={item.color} />}
                </div>
                <div>
                  <div className="font-medium text-slate-900">{item.id} • {item.status}</div>
                  <div className="text-xs text-slate-500">Unknown • {item.time}</div>
                </div>
              </div>
              <div className="text-xs text-slate-400 font-mono">{item.duration}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col">
        <h4 className="font-semibold text-slate-900 mb-4">Top Performing Agents</h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-slate-700">Unknown</span>
              <span className="text-slate-500">51%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-slate-900 h-1.5 rounded-full" style={{ width: '51%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AgentsView = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [schedule, setSchedule] = useState("Manual");

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-900">My Agents</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2" onClick={() => setSchedule(schedule === "CI/CD" ? "Manual" : "CI/CD")}>
            <Calendar size={14} />
            {schedule === "CI/CD" ? "Scheduled (CI/CD)" : "Run Manually"}
          </Button>
          <Button size="sm" className="gap-2 bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? <Pause size={14} /> : <Play size={14} />}
            {isRunning ? "Stop Agent" : "Run Agent"}
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
          <Search size={16} className="text-slate-400" />
          <input type="text" placeholder="Search agents..." className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400" />
        </div>
        <div>
          {[
            { name: "Invoice Processing", env: "Windows 11", lastRun: "2m ago", status: "Active" },
            { name: "User Onboarding", env: "macOS Ventura", lastRun: "1h ago", status: "Idle" },
            { name: "Regression Test", env: "Ubuntu 22.04", lastRun: "1d ago", status: "Scheduled" },
          ].map((agent, i) => (
            <div key={i} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                  <Code size={18} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">{agent.name}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{agent.env}</span> • <span>{agent.lastRun}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className={agent.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : ''}>
                  {agent.status}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal size={16} className="text-slate-400" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DeviceManagementView = () => {
  const [selected, setSelected] = useState("win");

  const devices = [
    { id: "win", name: "Windows 11", icon: Monitor, status: "Connected", ip: "192.168.1.10" },
    { id: "mac", name: "macOS Ventura", icon: Laptop, status: "Available", ip: "192.168.1.15" },
    { id: "lin", name: "Ubuntu 22.04", icon: Terminal, status: "Offline", ip: "-" },
    { id: "and", name: "Android 14", icon: Smartphone, status: "Available", ip: "192.168.1.22" },
    { id: "ios", name: "iOS 17", icon: Tablet, status: "Available", ip: "192.168.1.23" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Device Management</h3>
          <p className="text-sm text-slate-500">Select an environment for automation</p>
        </div>
        <Button size="sm" variant="outline" className="gap-2">
          <Plus size={14} /> Add Device
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {devices.map((device) => (
          <div 
            key={device.id}
            onClick={() => setSelected(device.id)}
            className={`
              relative p-4 rounded-xl border cursor-pointer transition-all
              ${selected === device.id 
                ? 'border-emerald-500 bg-emerald-50/30 ring-1 ring-emerald-500' 
                : 'border-slate-200 bg-white hover:border-emerald-200 hover:shadow-md'
              }
            `}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selected === device.id ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                <device.icon size={20} />
              </div>
              <div className={`w-2.5 h-2.5 rounded-full ${device.status === 'Offline' ? 'bg-slate-300' : device.status === 'Connected' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
            </div>
            <div className="font-medium text-slate-900">{device.name}</div>
            <div className="text-xs text-slate-500 mt-1 flex justify-between">
              <span>{device.status}</span>
              <span className="font-mono opacity-70">{device.ip}</span>
            </div>
            
            {selected === device.id && (
              <div className="absolute top-2 right-2">
                <CircleCheck size={16} className="text-emerald-500" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-600">
        <div className="font-medium mb-2 flex items-center gap-2">
          <Terminal size={14} /> 
          Console Output - {devices.find(d => d.id === selected)?.name}
        </div>
        <div className="font-mono text-xs space-y-1 opacity-80">
          <div>&gt; Connecting to device...</div>
          <div>&gt; Handshake successful.</div>
          <div className="text-emerald-600">&gt; Ready for instructions.</div>
        </div>
      </div>
    </div>
  );
};

const IntegrationsView = () => {
  const [connected, setConnected] = useState<Set<string>>(new Set(["jira", "slack"]));

  const toggle = (id: string) => {
    const next = new Set(connected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setConnected(next);
  };

  const apps = [
    { id: "jira", name: "Jira Software", desc: "Sync tasks & bug reports", icon: "🔷" },
    { id: "github", name: "GitHub", desc: "Trigger workflows from PRs", icon: "⚫" },
    { id: "slack", name: "Slack", desc: "Notifications & approvals", icon: "🟣" },
    { id: "linear", name: "Linear", desc: "Issue tracking sync", icon: "⭕" },
    { id: "notion", name: "Notion", desc: "Documentation export", icon: "⬜" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">Integrations</h3>
        <p className="text-sm text-slate-500">Connect your tools to automate workflows</p>
      </div>

      <div className="space-y-3">
        {apps.map((app) => (
          <div key={app.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-xl">
                {app.icon}
              </div>
              <div>
                <div className="font-medium text-slate-900">{app.name}</div>
                <div className="text-xs text-slate-500">{app.desc}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {connected.has(app.id) && (
                <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                  <Check size={12} /> Connected
                </span>
              )}
              <Switch 
                checked={connected.has(app.id)} 
                onCheckedChange={() => toggle(app.id)} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PromptsView = () => {
  return (
    <div className="p-6 space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Prompt Designer</h3>
          <p className="text-sm text-slate-500">Natural language to automation logic</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Save Template</Button>
          <Button size="sm" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
            <Play size={14} /> Test Run
          </Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex-1 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col">
            <div className="text-xs font-medium text-slate-500 mb-2">PROMPT CONTEXT</div>
            <textarea 
              className="flex-1 w-full resize-none outline-none text-sm font-mono text-slate-800 leading-relaxed placeholder:text-slate-300"
              placeholder="Describe the task..."
              defaultValue={`You are an expert QA Automation Agent.

Goal: Verify the checkout flow on the staging environment.

Steps:
1. Open Chrome and navigate to "staging.store.com"
2. Add "Premium Plan" to cart.
3. Proceed to checkout.
4. Fill shipping info with dummy data.
5. Assert that the final price is $99.00.

If any error occurs, take a screenshot and log it to Jira.`}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
            <div className="text-xs font-bold text-slate-500 mb-3 uppercase">Variables</div>
            <div className="space-y-2">
              {['{{url}}', '{{username}}', '{{password}}', '{{environment}}'].map(v => (
                <div key={v} className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-600 cursor-pointer hover:border-emerald-300 hover:text-emerald-700 transition-colors">
                  {v}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
            <div className="text-xs font-bold text-slate-500 mb-3 uppercase">Templates</div>
            <div className="space-y-2">
              {['E-commerce Checkout', 'Login Flow', 'Data Extraction', 'PDF Report Gen'].map(t => (
                <div key={t} className="text-xs bg-white px-2 py-2 rounded border border-slate-200 text-slate-700 cursor-pointer hover:border-emerald-300 transition-colors flex items-center justify-between group">
                  {t}
                  <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", sub: "Monitor execution health" },
    { id: "agents", icon: Users, label: "Agents", sub: "Manage automations" },
    { id: "devices", icon: Monitor, label: "Device Management", sub: "Multi-device configuration" },
    { id: "jira", icon: Settings, label: "Integrations", sub: "Connect Jira & more" },
    { id: "prompts", icon: MessageSquare, label: "Prompts & Templates", sub: "Customize behavior" },
  ];

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

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full justify-start px-4 py-3 text-left rounded-lg transition-all flex items-center gap-3 border
                  ${activeTab === tab.id 
                    ? 'bg-white text-emerald-600 border-emerald-100 shadow-sm' 
                    : 'bg-transparent text-slate-600 border-transparent hover:bg-white/50'
                  }
                `}
              >
                <tab.icon size={18} className={activeTab === tab.id ? 'text-emerald-600' : 'text-slate-400'} />
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-sm">{tab.label}</span>
                  <span className="text-xs text-slate-500 font-normal">{tab.sub}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive App Frame */}
          <div className="w-full lg:w-3/4 bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[600px]">
            {/* App Title Bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500"></div>
                </div>
                <span className="text-xs font-medium text-slate-500">AskUI Runner Enterprise</span>
              </div>
              <div className="flex items-center gap-2">
                 <Button variant="ghost" size="sm" className="h-6 text-xs text-slate-500">
                   <RefreshCw size={12} className="mr-1" /> Refresh
                 </Button>
              </div>
            </div>

            {/* App Sidebar & Content */}
            <div className="flex-1 flex overflow-hidden bg-slate-50">
              {/* Inner Sidebar */}
              <div className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
                <div className="p-4 flex items-center gap-2 text-white font-bold text-lg tracking-tight">
                   <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full"></div>
                   </div>
                   AskUI
                </div>
                <div className="px-2 py-2 space-y-1">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Main Menu</div>
                  {tabs.map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)} 
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center gap-3 transition-colors ${activeTab === tab.id ? 'bg-slate-800 text-white' : 'hover:bg-slate-800/50'}`}
                    >
                      <tab.icon size={16} /> {tab.label}
                    </button>
                  ))}
                </div>
                <div className="mt-auto p-4 border-t border-slate-800">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-700">JD</div>
                     <div>
                       <div className="text-sm font-medium text-white">John Doe</div>
                       <div className="text-xs text-slate-500">Admin Workspace</div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Inner Content Area */}
              <div className="flex-1 bg-white flex flex-col overflow-hidden relative">
                {/* Content Header */}
                <div className="h-16 border-b border-slate-100 flex items-center px-6 justify-between shrink-0">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 capitalize">
                      {activeTab === 'dashboard' && 'Dashboard Overview'}
                      {activeTab === 'agents' && 'Agent Management'}
                      {activeTab === 'devices' && 'Device Fleet'}
                      {activeTab === 'jira' && 'Integrations Hub'}
                      {activeTab === 'prompts' && 'Prompt Engineering'}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {activeTab === 'dashboard' && 'Monitor real execution health across your workspace.'}
                      {activeTab === 'agents' && 'Configure and schedule your autonomous agents.'}
                      {activeTab === 'devices' && 'Manage connected environments and runners.'}
                      {activeTab === 'jira' && 'Connect external tools and data sources.'}
                      {activeTab === 'prompts' && 'Design and test natural language instructions.'}
                    </p>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-auto">
                  {activeTab === 'dashboard' && <DashboardView />}
                  {activeTab === 'agents' && <AgentsView />}
                  {activeTab === 'devices' && <DeviceManagementView />}
                  {activeTab === 'jira' && <IntegrationsView />}
                  {activeTab === 'prompts' && <PromptsView />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
