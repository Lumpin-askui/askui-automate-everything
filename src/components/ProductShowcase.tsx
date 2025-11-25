import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Check,
  FileSpreadsheet, 
  Trello, 
  ArrowRight,
  Cloud,
  RefreshCw,
  CheckCircle2,
  Slack,
  Watch,
  Car,
  Smartphone,
  Laptop,
  Monitor,
  Settings,
  Sparkles,
  Shield,
  Zap,
  FileText,
  AlertTriangle,
  Wrench,
  Eye,
  Target,
  Bot,
  CircleCheck,
  Loader2,
  ChevronRight
} from "lucide-react";
import "@/styles/design-system.css";
import { Link } from "react-router-dom";

const ProductShowcase = () => {
  const [source, setSource] = useState("jira");
  const [target, setTarget] = useState("windows_vm");
  const [step, setStep] = useState<'configure' | 'running' | 'complete'>('configure');
  const [runProgress, setRunProgress] = useState(0);
  const [currentAction, setCurrentAction] = useState("");
  const [healingEvent, setHealingEvent] = useState(false);

  const sources = [
    { id: "jira", name: "Jira", icon: <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-[11px] text-white font-bold">J</div> },
    { id: "excel", name: "Excel/CSV", icon: <FileSpreadsheet size={20} className="text-emerald-600" /> },
    { id: "trello", name: "Trello", icon: <div className="w-6 h-6 rounded bg-blue-400 flex items-center justify-center text-white"><Trello size={14} /></div> },
    { id: "slack", name: "Slack", icon: <Slack size={20} className="text-purple-500" /> },
    { id: "testrail", name: "TestRail", icon: <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-[10px] text-white font-bold">TR</div> },
    { id: "xray", name: "Xray", icon: <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">X</div> },
  ];

  const targets = [
    { id: "windows_vm", name: "Windows", icon: <Monitor size={18} className="text-blue-600" />, color: "blue" },
    { id: "android", name: "Android", icon: <Smartphone size={18} className="text-green-500" />, color: "green" },
    { id: "iphone", name: "iOS", icon: <Smartphone size={18} className="text-slate-800" />, color: "slate" },
    { id: "macbook", name: "macOS", icon: <Laptop size={18} className="text-slate-600" />, color: "slate" },
    { id: "citrix", name: "Citrix", icon: <Cloud size={18} className="text-sky-500" />, color: "sky" },
    { id: "automotive", name: "Automotive", icon: <Car size={18} className="text-red-500" />, color: "red" },
    { id: "smartwatch", name: "Wearable", icon: <Watch size={18} className="text-purple-500" />, color: "purple" },
  ];

  const runActions = [
    "Connecting to device...",
    "Launching application...",
    "Reading test case from " + sources.find(s => s.id === source)?.name + "...",
    "Executing step 1: Navigate to login...",
    "Executing step 2: Enter credentials...",
    "⚡ UI changed - Auto-healing...",
    "✓ Element relocated successfully",
    "Executing step 3: Submit form...",
    "Capturing screenshot...",
    "Executing step 4: Verify dashboard...",
    "Generating report...",
    "Complete!"
  ];

  useEffect(() => {
    if (step === 'running') {
      const interval = setInterval(() => {
        setRunProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep('complete'), 500);
            return 100;
          }
          const newProgress = prev + 8;
          const actionIndex = Math.floor((newProgress / 100) * runActions.length);
          setCurrentAction(runActions[Math.min(actionIndex, runActions.length - 1)]);
          
          // Trigger healing animation at specific point
          if (actionIndex === 5) {
            setHealingEvent(true);
            setTimeout(() => setHealingEvent(false), 1500);
          }
          
          return newProgress;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [step, source]);

  const handleRun = () => {
    setStep('running');
    setRunProgress(0);
    setCurrentAction(runActions[0]);
  };

  const handleReset = () => {
    setStep('configure');
    setRunProgress(0);
    setHealingEvent(false);
  };

  return (
    <section id="product-showcase" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-6">
            <Bot size={16} />
            Agentic Automation
          </div>
          <h2 className="section-title">
            Connect. Configure. <span className="text-accent-gradient">Let It Run.</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            No scripts. No maintenance. Just tell your agent what to test, and it figures out the rest—even when the UI changes.
          </p>
        </div>

        {/* Main Interactive Demo */}
        <div className="max-w-5xl mx-auto">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${step === 'configure' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'configure' ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-white'}`}>1</div>
              Configure
            </div>
            <ChevronRight size={16} className="text-slate-300" />
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${step === 'running' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'running' ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-white'}`}>2</div>
              Agent Runs
            </div>
            <ChevronRight size={16} className="text-slate-300" />
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${step === 'complete' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'complete' ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-white'}`}>3</div>
              Reports Ready
            </div>
          </div>

          {/* Configuration View */}
          {step === 'configure' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                
                {/* Left: Task Source */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Target size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Task Source</h3>
                      <p className="text-sm text-slate-500">Where do your test cases live?</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {sources.map((s) => (
                      <button 
                        key={s.id}
                        onClick={() => setSource(s.id)}
                        className={`
                          p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all
                          ${source === s.id 
                            ? 'border-emerald-500 bg-emerald-50 shadow-sm' 
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }
                        `}
                      >
                        {s.icon}
                        <span className="text-xs font-medium text-slate-700">{s.name}</span>
                        {source === s.id && <Check size={14} className="text-emerald-500" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Target Device */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                      <Monitor size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Target Device</h3>
                      <p className="text-sm text-slate-500">Where should the agent run?</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {targets.map((t) => (
                      <button 
                        key={t.id}
                        onClick={() => setTarget(t.id)}
                        className={`
                          px-4 py-3 rounded-xl border-2 flex items-center gap-2 transition-all
                          ${target === t.id 
                            ? 'border-emerald-500 bg-emerald-50 shadow-sm' 
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }
                        `}
                      >
                        {t.icon}
                        <span className="text-sm font-medium text-slate-700">{t.name}</span>
                        {target === t.id && <Check size={14} className="text-emerald-500" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Run Button */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-500" />
                    AI-powered execution
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield size={16} className="text-emerald-500" />
                    Auto-healing enabled
                  </span>
                </div>
                <Button 
                  onClick={handleRun}
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 px-8"
                >
                  <Play size={18} />
                  Run Agent
                </Button>
              </div>
            </div>
          )}

          {/* Running View */}
          {step === 'running' && (
            <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-sm text-slate-400 font-mono">askui-agent — {targets.find(t => t.id === target)?.name}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <Loader2 size={14} className="animate-spin" />
                  Running...
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[300px]">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Progress</span>
                    <span>{Math.round(runProgress)}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-300"
                      style={{ width: `${runProgress}%` }}
                    />
                  </div>
                </div>

                {/* Current Action */}
                <div className={`p-4 rounded-lg mb-4 transition-all ${healingEvent ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-slate-800/50'}`}>
                  <div className="flex items-center gap-3">
                    {healingEvent ? (
                      <Wrench size={18} className="text-amber-400 animate-pulse" />
                    ) : (
                      <Bot size={18} className="text-emerald-400" />
                    )}
                    <span className={healingEvent ? 'text-amber-300' : 'text-slate-300'}>
                      {currentAction}
                    </span>
                  </div>
                </div>

                {/* Auto-healing highlight */}
                {healingEvent && (
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4 animate-pulse">
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={18} className="text-amber-400 mt-0.5" />
                      <div>
                        <p className="text-amber-300 font-medium">UI Change Detected</p>
                        <p className="text-amber-200/70 text-xs mt-1">
                          Button moved from (120, 340) → (145, 380). Agent is re-locating element using visual context...
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Log entries */}
                <div className="space-y-2 text-slate-500 text-xs">
                  <p><span className="text-slate-600">[INFO]</span> Connected to {targets.find(t => t.id === target)?.name} device</p>
                  <p><span className="text-slate-600">[INFO]</span> Loaded test case from {sources.find(s => s.id === source)?.name}</p>
                  <p><span className="text-emerald-500">[AGENT]</span> Interpreting natural language instructions...</p>
                  <p><span className="text-emerald-500">[AGENT]</span> No selectors needed — using vision-based detection</p>
                </div>
              </div>
            </div>
          )}

          {/* Complete View */}
          {step === 'complete' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Test Complete</h3>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                  Your agent successfully ran <strong>12 steps</strong> on <strong>{targets.find(t => t.id === target)?.name}</strong> with <strong>1 auto-heal</strong> event.
                </p>

                {/* Results Summary */}
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <CircleCheck size={24} className="text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-700">12/12</div>
                    <div className="text-xs text-emerald-600">Steps Passed</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <Wrench size={24} className="text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-700">1</div>
                    <div className="text-xs text-amber-600">Auto-Healed</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <FileText size={24} className="text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700">3</div>
                    <div className="text-xs text-blue-600">Reports Generated</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    variant="outline"
                    onClick={handleReset}
                    className="gap-2"
                  >
                    <RefreshCw size={16} />
                    Run Again
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 px-8"
                    asChild
                  >
                    <Link to="/enterprise">
                      Scale with Enterprise
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <Eye size={24} className="text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Vision-Based Detection</h4>
              <p className="text-sm text-slate-500">
                No brittle selectors or XPaths. The agent sees the UI like a human and adapts to changes automatically.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <Wrench size={24} className="text-amber-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Self-Healing Tests</h4>
              <p className="text-sm text-slate-500">
                UI changed? No problem. The agent re-locates elements using visual context—zero maintenance required.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Instant Reports</h4>
              <p className="text-sm text-slate-500">
                Get detailed execution logs, screenshots, and pass/fail reports delivered to your inbox or CI/CD pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
