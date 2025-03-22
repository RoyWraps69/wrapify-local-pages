
import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Page Imports
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import WrapInsurance from './pages/WrapInsurance';
import WarrantyInformation from './pages/WarrantyInformation';
import VinylWrapCareGuide from './pages/resources/VinylWrapCareGuide';
import CeramicCoatingFAQ from './pages/resources/CeramicCoatingFAQ';
import PaymentOptions from './pages/support/PaymentOptions';
import WrapInstallationProcess from './pages/support/WrapInstallationProcess';
import Login from './pages/Login';
import Register from './pages/Register';
import MemberDashboard from './pages/MemberDashboard';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blog from './pages/Blog';
import Locations from './pages/Locations';
import ThankYou from './pages/ThankYou';
import CustomDomainSetup from './pages/CustomDomainSetup';
import Illinois from './pages/regions/Illinois';
import Michigan from './pages/regions/Michigan';
import Indiana from './pages/regions/Indiana';
import Wisconsin from './pages/regions/Wisconsin';
import Iowa from './pages/regions/Iowa';
import Missouri from './pages/regions/Missouri';
import Ohio from './pages/regions/Ohio';
import RegionPage from './pages/regions/RegionPage';
import DesignTemplateLibrary from './pages/resources/DesignTemplateLibrary';
import RealEstate from './pages/industries/RealEstate';
import FoodBeverage from './pages/industries/FoodBeverage';
import Construction from './pages/industries/Construction';
import PrintShip from './pages/PrintShip';
import Checkout from './pages/Checkout';
import TownPage from './pages/TownPage';
import Towns from './pages/Towns';
import Shopping from './pages/Shopping';
import ShoppingProduct from './pages/ShoppingProduct';
import OurTeam from './pages/about/OurTeam';
import Careers from './pages/about/Careers';
import NotFound from './pages/NotFound';
import ServicePage from './pages/ServicePage';
import TrainingClasses from './pages/TrainingClasses';

// Additional imports
import ScrollToTop from './components/utils/ScrollToTop';
import VinylWrapTraining from './pages/VinylWrapTraining';

// Create a shared helmet context
const helmetContext = {};

// ToastProvider for global toast notifications
import { ToastProvider } from './components/ui/ToastProvider';

function App() {
  // Use this to check the current route for any route-specific logic
  const location = useLocation();

  return (
    <HelmetProvider context={helmetContext}>
      <ToastProvider>
        {/* ScrollToTop component to ensure pages start at the top */}
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceName" element={<ServicePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/wrap-insurance" element={<WrapInsurance />} />
          <Route path="/warranty-information" element={<WarrantyInformation />} />
          <Route path="/vinyl-wrap-care-guide" element={<VinylWrapCareGuide />} />
          <Route path="/ceramic-coating-faq" element={<CeramicCoatingFAQ />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/wrap-installation-process" element={<WrapInstallationProcess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/member-dashboard" element={<MemberDashboard />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/custom-domain-setup" element={<CustomDomainSetup />} />
          <Route path="/regions/illinois" element={<Illinois />} />
          <Route path="/regions/michigan" element={<Michigan />} />
          <Route path="/regions/indiana" element={<Indiana />} />
          <Route path="/regions/wisconsin" element={<Wisconsin />} />
          <Route path="/regions/iowa" element={<Iowa />} />
          <Route path="/regions/missouri" element={<Missouri />} />
          <Route path="/regions/ohio" element={<Ohio />} />
          <Route path="/regions/:regionName" element={<RegionPage />} />
          <Route path="/design-template-library" element={<DesignTemplateLibrary />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/food-beverage" element={<FoodBeverage />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/print-ship" element={<PrintShip />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/towns/:townName" element={<TownPage />} />
          <Route path="/towns" element={<Towns />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/shopping/:productId" element={<ShoppingProduct />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/training-classes" element={<TrainingClasses />} />
          <Route path="/vinyl-wrap-training" element={<VinylWrapTraining />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ToastProvider>
    </HelmetProvider>
  );
}

export default App;
