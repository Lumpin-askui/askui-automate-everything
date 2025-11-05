import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enterprise from "./pages/Enterprise";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import SoftwareTesting from "./pages/SoftwareTesting";
import AutomationTeams from "./pages/AutomationTeams";
import AgentStartups from "./pages/AgentStartups";

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
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/solutions/software-testing" element={<SoftwareTesting />} />
          <Route path="/solutions/automation-teams" element={<AutomationTeams />} />
          <Route path="/solutions/agent-startups" element={<AgentStartups />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
