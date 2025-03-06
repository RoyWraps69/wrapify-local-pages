
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SEOWrapper } from "./components/SEOSchema";
import Index from "./pages/Index";
import TownPage from "./pages/TownPage";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import PrintShip from "./pages/PrintShip";
import WrapInsurance from "./pages/WrapInsurance";
import Shopping from "./pages/Shopping";
import useScrollToTop from "./hooks/useScrollToTop";

// Resource Pages
import VinylWrapCareGuide from "./pages/resources/VinylWrapCareGuide";
import CeramicCoatingFAQ from "./pages/resources/CeramicCoatingFAQ";
import DesignTemplateLibrary from "./pages/resources/DesignTemplateLibrary";

// Industry Pages
import Construction from "./pages/industries/Construction";
import FoodBeverage from "./pages/industries/FoodBeverage";
import RealEstate from "./pages/industries/RealEstate";

// Support Pages
import WarrantyInformation from "./pages/support/WarrantyInformation";
import WrapInstallationProcess from "./pages/support/WrapInstallationProcess";
import PaymentOptions from "./pages/support/PaymentOptions";

// About Pages
import OurTeam from "./pages/about/OurTeam";
import Careers from "./pages/about/Careers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// ScrollToTop component that uses the hook
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => {
  console.log("App component rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SEOWrapper>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceType" element={<ServicePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/print-ship" element={<PrintShip />} />
              <Route path="/wrap-insurance" element={<WrapInsurance />} />
              
              {/* Town Pages */}
              <Route path="/locations/:townSlug" element={<TownPage />} />
              
              {/* Resource Pages */}
              <Route path="/vinyl-wrap-care-guide" element={<VinylWrapCareGuide />} />
              <Route path="/ceramic-coating-faq" element={<CeramicCoatingFAQ />} />
              <Route path="/design-template-library" element={<DesignTemplateLibrary />} />
              
              {/* Industry Pages */}
              <Route path="/industries/construction" element={<Construction />} />
              <Route path="/industries/food-beverage" element={<FoodBeverage />} />
              <Route path="/industries/real-estate" element={<RealEstate />} />
              
              {/* Support Pages */}
              <Route path="/warranty-information" element={<WarrantyInformation />} />
              <Route path="/wrap-installation-process" element={<WrapInstallationProcess />} />
              <Route path="/payment-options" element={<PaymentOptions />} />
              
              {/* About Pages */}
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/careers" element={<Careers />} />
              
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
