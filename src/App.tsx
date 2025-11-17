import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enterprise from "./pages/Enterprise";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import Benchmarks from "./pages/Benchmarks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import SoftwareTesting from "./pages/SoftwareTesting";
import AutomationTeams from "./pages/AutomationTeams";
import AgentStartups from "./pages/AgentStartups";
import RoiCalculator from "./pages/RoiCalculator";
import AgileTestingDaysEvent from "./pages/AgileTestingDaysEvent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-posts/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/benchmarks" element={<Benchmarks />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/solutions/software-testing" element={<SoftwareTesting />} />
          <Route path="/solutions/automation-teams" element={<AutomationTeams />} />
          <Route path="/solutions/agent-startups" element={<AgentStartups />} />
          <Route path="/roi-calculator" element={<RoiCalculator />} />
          <Route path="/event/agile-testing-days" element={<AgileTestingDaysEvent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
