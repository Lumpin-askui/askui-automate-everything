import { useState } from "react";
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

const Enterprise = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Enterprise form submitted:", values);
    
    toast({
      title: "Request Submitted",
      description: "Our enterprise team will contact you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="section-title">
              Enterprise Solutions <br />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.6em', display: 'block', marginTop: '1rem', fontWeight: 400 }}>Built for Scale & Security</span>
            </h1>
            
            <p className="section-subtitle">
              Deploy computer use agents across your organization with enterprise-grade support, compliance, and dedicated infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Combined Features & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Features Grid */}
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-3xl)' }}>
            <div className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <Shield size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto', marginBottom: 'var(--space-md)' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>ISO27001 Certified</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Enterprise security & compliance</p>
            </div>
            <div className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <Lock size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto', marginBottom: 'var(--space-md)' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>On-Premise Deployment</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Full data sovereignty</p>
            </div>
            <div className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <Server size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto', marginBottom: 'var(--space-md)' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>Dedicated Infrastructure</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Private cloud options</p>
            </div>
            <div className="glass-panel" style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
              <Headphones size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto', marginBottom: 'var(--space-md)' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>24/7 Support</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Dedicated success team</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)' }} className="enterprise-grid">
            {/* Left Column - Benefits & Compliance */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-lg)', color: 'var(--text-primary)' }}>Enterprise Benefits</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                  <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '2px' }}>Custom SLAs</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Tailored service level agreements for your business needs</div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '2px' }}>Priority Support</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Direct access to engineering team and 24/7 support</div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '2px' }}>Volume Licensing</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Flexible pricing for large deployments</div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '2px' }}>Custom Integrations</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Integrate with your existing tools and workflows</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-panel" style={{ padding: 'var(--space-xl)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-lg)', color: 'var(--text-primary)' }}>Security & Compliance</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                  <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '2px' }}>ISO27001 Certification</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Information security management certified</div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '2px' }}>GDPR Compliant</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Full European data protection compliance</div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '2px' }}>Air-Gapped Options</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Deploy in completely isolated environments</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="glass-panel" style={{ padding: 'var(--space-xl)', height: 'fit-content' }}>
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-xs)', color: 'var(--text-primary)' }}>Request Demo</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Get personalized guidance on deploying AskUI in your organization
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-background" />
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
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-background" />
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
                        <FormLabel>Work Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@company.com" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company *</FormLabel>
                          <FormControl>
                            <Input placeholder="Company Name" {...field} className="bg-background" />
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
                          <FormLabel>Job Title *</FormLabel>
                          <FormControl>
                            <Input placeholder="VP of Engineering" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Size *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-50">1-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-1000">201-1,000 employees</SelectItem>
                              <SelectItem value="1001-5000">1,001-5,000 employees</SelectItem>
                              <SelectItem value="5001+">5,001+ employees</SelectItem>
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
                          <FormLabel>Primary Platform *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select platform" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="windows">Windows</SelectItem>
                              <SelectItem value="macos">MacOS</SelectItem>
                              <SelectItem value="linux">Linux</SelectItem>
                              <SelectItem value="android">Android</SelectItem>
                              <SelectItem value="ios">iOS</SelectItem>
                              <SelectItem value="multiple">Multiple Platforms</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 123-4567" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="useCase"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Use Case Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your automation needs, platforms, and goals..."
                            className="min-h-[100px] bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full btn-primary" disabled={isSubmitting} style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 1024px) {
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
