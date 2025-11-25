import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Shield, Lock, Server, Headphones, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import "@/styles/design-system.css";

// Extend Window interface for Cal
declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void;
      ns?: {
        [key: string]: {
          (action: string, ...args: unknown[]): void;
        };
      };
    };
  }
}

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  companySize: z.string().min(1, "Please select company size"),
  useCase: z.string().min(10, "Please describe your use case (minimum 10 characters)"),
  platform: z.string().min(1, "Please select a platform"),
  phone: z.string().optional(),
});

type EnterpriseFormValues = z.infer<typeof formSchema>;

// Zapier webhook URL - can be overridden via environment variable
const ZAPIER_WEBHOOK_URL = import.meta.env.VITE_ZAPIER_WEBHOOK_URL || "https://hooks.zapier.com/hooks/catch/19973952/uz7q4re/";

const Enterprise = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calLoaded, setCalLoaded] = useState(false);

  // Load Cal.com embed script
  useEffect(() => {
    // Check if already loaded
    if (window.Cal) {
      setCalLoaded(true);
      return;
    }

    // Cal.com embed initialization
    (function (C: Window, A: string, L: string) {
      const p = function (a: { q: unknown[] }, ar: unknown[]) { a.q.push(ar); };
      const d = C.document;
      
      const Cal = function (...args: unknown[]) {
        const cal = C.Cal as unknown as { 
          loaded?: boolean; 
          ns: Record<string, { q: unknown[]; (...args: unknown[]): void }>; 
          q: unknown[];
        };
        
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        
        if (args[0] === L) {
          const api = function (...apiArgs: unknown[]) { 
            p(api as unknown as { q: unknown[] }, apiArgs); 
          };
          const namespace = args[1] as string;
          (api as unknown as { q: unknown[] }).q = [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api as { q: unknown[]; (...args: unknown[]): void };
            p(cal.ns[namespace] as unknown as { q: unknown[] }, args as unknown[]);
            p(cal as unknown as { q: unknown[] }, ["initNamespace", namespace]);
          } else {
            p(cal as unknown as { q: unknown[] }, args as unknown[]);
          }
          return;
        }
        p(cal as unknown as { q: unknown[] }, args as unknown[]);
      };
      
      C.Cal = Cal as Window['Cal'];
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal with namespace
    if (window.Cal) {
      window.Cal("init", "30min", { origin: "https://app.cal.com" });
      
      // Configure UI
      setTimeout(() => {
        if (window.Cal?.ns?.["30min"]) {
          window.Cal.ns["30min"]("ui", {
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        }
        setCalLoaded(true);
      }, 1000);
    }
  }, []);

  // Function to open Cal.com booking
  const openCalBooking = (values: EnterpriseFormValues) => {
    if (window.Cal?.ns?.["30min"]) {
      // Open the calendar with prefilled data
      window.Cal.ns["30min"]("openModal", {
        calLink: "jonas-menesklou/30min",
        config: {
          layout: "month_view",
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          notes: `Company: ${values.company}\nJob Title: ${values.jobTitle}\nCompany Size: ${values.companySize}\nPlatform: ${values.platform}\n\nUse Case:\n${values.useCase}`,
        }
      });
    } else {
      // Fallback: open in new tab
      const calUrl = new URL("https://cal.com/jonas-menesklou/30min");
      calUrl.searchParams.set("name", `${values.firstName} ${values.lastName}`);
      calUrl.searchParams.set("email", values.email);
      window.open(calUrl.toString(), "_blank");
    }
  };

  const form = useForm<EnterpriseFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      useCase: "",
      platform: "",
      phone: "",
    },
  });

  const onSubmit = async (values: EnterpriseFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Build payload for Zapier
      const payload = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        jobTitle: values.jobTitle.trim(),
        companySize: values.companySize,
        platform: values.platform,
        phone: values.phone?.trim() || "",
        useCase: values.useCase.trim(),
        source: "enterprise-demo-request",
        timestamp: new Date().toISOString(),
      };

      // Submit to Zapier webhook
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      // Zapier returns opaque response with no-cors, so we check for network errors
      if (!response.ok && response.type !== "opaque") {
        throw new Error(`Webhook returned status ${response.status}`);
      }

      toast({
        title: "Request Submitted! 🎉",
        description: "Now let's schedule your demo call.",
      });

      // Open Cal.com booking modal
      setTimeout(() => {
        openCalBooking(values);
      }, 500);

      form.reset();
    } catch (error) {
      console.error("Failed to submit form", error);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section with Form */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', alignItems: 'start' }} className="enterprise-hero-grid">
            
            {/* Left Column - Title & Trust Badges */}
            <div>
              <h1 style={{ fontSize: '2.75rem', fontWeight: 700, lineHeight: 1.1, marginBottom: 'var(--space-md)', color: 'var(--text-primary)' }}>
                Book a Demo
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: 1.6 }}>
                Get personalized guidance on deploying AI agents across your organization with enterprise-grade support.
              </p>
              
              {/* Inline Trust Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <Shield size={20} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>ISO27001 Certified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <Lock size={20} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>On-Premise Available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <Server size={20} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Dedicated Infrastructure</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <Headphones size={20} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Column - Compact Form */}
            <div className="glass-panel" style={{ padding: 'var(--space-lg)', borderRadius: '12px' }}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-background h-9" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-background h-9" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Work Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@company.com" {...field} className="bg-background h-9" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Company *</FormLabel>
                          <FormControl>
                            <Input placeholder="Company Name" {...field} className="bg-background h-9" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Job Title *</FormLabel>
                          <FormControl>
                            <Input placeholder="VP of Engineering" {...field} className="bg-background h-9" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Company Size *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background h-9">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-50">1-50</SelectItem>
                              <SelectItem value="51-200">51-200</SelectItem>
                              <SelectItem value="201-1000">201-1,000</SelectItem>
                              <SelectItem value="1001-5000">1,001-5,000</SelectItem>
                              <SelectItem value="5001+">5,001+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="platform"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Platform *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background h-9">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="windows">Windows</SelectItem>
                              <SelectItem value="macos">MacOS</SelectItem>
                              <SelectItem value="linux">Linux</SelectItem>
                              <SelectItem value="android">Android</SelectItem>
                              <SelectItem value="ios">iOS</SelectItem>
                              <SelectItem value="multiple">Multiple</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="useCase"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">What do you want to automate? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your automation needs..."
                            className="min-h-[60px] bg-background text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 123-4567" {...field} className="bg-background h-9" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    style={{ backgroundColor: 'var(--accent-primary)', color: 'white', marginTop: 'var(--space-md)' }}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We'll reach out within 24 hours to schedule your call.
                  </p>
                  {!calLoaded && (
                    <p className="text-xs text-center text-amber-600">
                      Loading calendar...
                    </p>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Below the fold */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container-custom">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: 'var(--space-2xl)', color: 'var(--text-primary)' }}>
            Why Enterprise Teams Choose AskUI
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }} className="enterprise-grid">
            {/* Benefits */}
            <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-lg)', color: 'var(--text-primary)' }}>Enterprise Benefits</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>Custom SLAs</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — Tailored service agreements</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>Priority Support</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — Direct engineering access</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>Volume Licensing</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — Flexible pricing at scale</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>Custom Integrations</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — Connect to your tools</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-lg)', color: 'var(--text-primary)' }}>Security & Compliance</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>ISO27001 Certified</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — Security management</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>GDPR Compliant</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — EU data protection</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>Air-Gapped Options</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — Isolated environments</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span style={{ fontWeight: 600 }}>SOC 2 Type II</span>
                    <span style={{ color: 'var(--text-secondary)' }}> — Trust & compliance</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 1024px) {
          .enterprise-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .enterprise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Enterprise;
