
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SEOWrapper } from "./components/SEOSchema";
import Index from "./pages/Index";
import TownPage from "./pages/TownPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
              <Route path="/locations/:townSlug" element={<TownPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SEOWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
