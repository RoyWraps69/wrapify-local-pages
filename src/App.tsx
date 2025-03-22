
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Training from './pages/TrainingClasses';
import VinylWrapTraining from './pages/VinylWrapTraining';
import PrintShip from './pages/PrintShip';
import NotFound from './pages/NotFound';
import Regional from './pages/regions/RegionPage';
import Register from './pages/Register';
import Login from './pages/Login';
import MemberDashboard from './pages/MemberDashboard';
import Locations from './pages/Locations';
import WrapInsurance from './pages/WrapInsurance';
import Blog from './pages/Blog';
import CustomDomainSetup from './pages/CustomDomainSetup';
import { ChatbotProvider } from './components/chatbot/ChatbotProvider';
import ChatbotWithSchema from './components/chatbot/ChatbotWithSchema';
import { ShoppingCartProvider } from './components/print-ship/shopping-cart/ShoppingCart';
import { Toaster } from '@/components/ui/toaster';
import { RetargetingPixels } from './components/leads';
import { LeadCapturePopup } from './components/leads';

function App() {
  const helmetContext = {}; // Create a single context object

  return (
    <HelmetProvider context={helmetContext}>
      <RetargetingPixels>
        <div className="App">
          {/* Add lead capture popup - it will automatically manage when to display */}
          <LeadCapturePopup 
            delay={15000} 
            exitIntentOnly={false} 
            scrollDepth={40}
          />
          
          <Toaster />
          <ShoppingCartProvider>
            <Router>
              <ChatbotProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/vinyl-wrap-training" element={<VinylWrapTraining />} />
                  <Route path="/print-ship" element={<PrintShip />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/wrap-insurance" element={<WrapInsurance />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<Blog />} />
                  <Route path="/regional/:regionName" element={<Regional />} />
                  <Route path="/regions/:regionName" element={<Regional />} />
                  <Route path="/locations/:townName" element={<Regional />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/member-dashboard" element={<MemberDashboard />} />
                  <Route path="/custom-domain-setup" element={<CustomDomainSetup />} />
                  <Route 
                    path="/deployment-guide" 
                    element={<Navigate to="/DEPLOYMENT.md" replace />} 
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <ChatbotWithSchema />
              </ChatbotProvider>
            </Router>
          </ShoppingCartProvider>
        </div>
      </RetargetingPixels>
    </HelmetProvider>
  );
}

export default App;
