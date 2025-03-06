
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SEOWrapper } from "./components/SEOSchema";
import Index from "./pages/Index";
import TownPage from "./pages/TownPage";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const App = () => {
  console.log("App component rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SEOWrapper>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceType" element={<ServicePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/testimonials" element={<Testimonials />} />
              
              {/* Town Pages - Ensure these routes work correctly */}
              <Route path="/locations/:townSlug" element={<TownPage />} />
              
              {/* Explicit 404 route */}
              <Route path="/not-found" element={<NotFound />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
          </BrowserRouter>
        </SEOWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
