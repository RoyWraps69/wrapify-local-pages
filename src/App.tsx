
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Locations from './pages/Locations';
import NotFound from './pages/NotFound';
import Testimonials from './pages/Testimonials';
import WarrantyInformation from './pages/WarrantyInformation';
import TownPage from './pages/TownPage';
import Towns from './pages/Towns';
import WrapInsurance from './pages/WrapInsurance';
import TrainingClasses from './pages/TrainingClasses';
import ThankYou from './pages/ThankYou';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/about/Careers';
import PrintShip from './pages/PrintShip';
import Shopping from './pages/Shopping';
import ShoppingProduct from './pages/ShoppingProduct';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import MemberDashboard from './pages/MemberDashboard';
import WrapInstallationProcess from './pages/support/WrapInstallationProcess';
import PaymentOptions from './pages/support/PaymentOptions';
import VinylWrapCareGuide from './pages/resources/VinylWrapCareGuide';
import CeramicCoatingFAQ from './pages/resources/CeramicCoatingFAQ';
import DesignTemplateLibrary from './pages/resources/DesignTemplateLibrary';
import Construction from './pages/industries/Construction';
import FoodBeverage from './pages/industries/FoodBeverage';
import RealEstate from './pages/industries/RealEstate';
import './App.css';
import RootSEO from './components/seo/RootSEO';
import RegionPage from './pages/regions/RegionPage';
import Illinois from './pages/regions/Illinois';
import Wisconsin from './pages/regions/Wisconsin';
import Indiana from './pages/regions/Indiana';
import Michigan from './pages/regions/Michigan';
import { ChatbotProvider } from './components/chatbot/ChatbotProvider';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  // Get the base URL from Vite
  const basename = import.meta.env.BASE_URL;
  
  return (
    <HelmetProvider>
      <Router basename={basename}>
        <RootSEO />
        <ScrollToTop />
        <ChatbotProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/regions" element={<RegionPage />} />
            <Route path="/regions/illinois" element={<Illinois />} />
            <Route path="/regions/wisconsin" element={<Wisconsin />} />
            <Route path="/regions/indiana" element={<Indiana />} />
            <Route path="/regions/michigan" element={<Michigan />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/warranty-information" element={<WarrantyInformation />} />
            <Route path="/wrap-insurance" element={<WrapInsurance />} />
            <Route path="/training-classes" element={<TrainingClasses />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/locations/:townSlug" element={<TownPage />} />
            <Route path="/towns" element={<Towns />} />
            <Route path="/print-ship" element={<PrintShip />} />
            <Route path="/shop" element={<Shopping />} />
            <Route path="/shop/:productId" element={<ShoppingProduct />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<MemberDashboard />} />
            <Route path="/support/wrap-installation-process" element={<WrapInstallationProcess />} />
            <Route path="/support/payment-options" element={<PaymentOptions />} />
            <Route path="/resources/vinyl-wrap-care-guide" element={<VinylWrapCareGuide />} />
            <Route path="/resources/ceramic-coating-faq" element={<CeramicCoatingFAQ />} />
            <Route path="/resources/design-template-library" element={<DesignTemplateLibrary />} />
            <Route path="/industries/construction" element={<Construction />} />
            <Route path="/industries/food-beverage" element={<FoodBeverage />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* App-wide toast notifications */}
          <Toaster />
          <SonnerToaster position="bottom-right" />
        </ChatbotProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
