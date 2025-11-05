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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Enterprise Solutions
              <span className="block text-accent mt-2">Built for Scale & Security</span>
            </h1>
            
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              Deploy computer use agents across your organization with enterprise-grade support, compliance, and dedicated infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-lg bg-background border border-border text-center">
              <Shield className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO27001 Certified</h3>
              <p className="text-sm text-muted-foreground">Enterprise security & compliance</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border text-center">
              <Lock className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">On-Premise Deployment</h3>
              <p className="text-sm text-muted-foreground">Full data sovereignty</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border text-center">
              <Server className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Dedicated Infrastructure</h3>
              <p className="text-sm text-muted-foreground">Private cloud options</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border text-center">
              <Headphones className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated success team</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Enterprise Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Custom SLAs</div>
                    <div className="text-sm text-muted-foreground">Tailored service level agreements for your business needs</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Priority Support</div>
                    <div className="text-sm text-muted-foreground">Direct access to engineering team and 24/7 support</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Volume Licensing</div>
                    <div className="text-sm text-muted-foreground">Flexible pricing for large deployments</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Custom Integrations</div>
                    <div className="text-sm text-muted-foreground">Integrate with your existing tools and workflows</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Security & Compliance</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">ISO27001 Certification</div>
                    <div className="text-sm text-muted-foreground">Information security management certified</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">SOC 2 Type II</div>
                    <div className="text-sm text-muted-foreground">Independently audited security controls</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">GDPR Compliant</div>
                    <div className="text-sm text-muted-foreground">Full European data protection compliance</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#962C5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Air-Gapped Options</div>
                    <div className="text-sm text-muted-foreground">Deploy in completely isolated environments</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request Enterprise Demo</h2>
              <p className="text-muted-foreground">
                Get personalized guidance on deploying AskUI in your organization
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
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
                          <Input placeholder="Doe" {...field} />
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
                        <Input type="email" placeholder="john.doe@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company *</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
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
                          <Input placeholder="VP of Engineering" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Size *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
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
                            <SelectTrigger>
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
                        <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
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
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
