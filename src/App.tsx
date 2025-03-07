
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import TownPage from './pages/TownPage';
import RegionPage from './pages/regions/RegionPage';
import ServicePage from './pages/ServicePage';
import Services from './pages/Services';
import Shopping from './pages/Shopping';
import ShoppingProduct from './pages/ShoppingProduct';
import PrintShip from './pages/PrintShip';
import TrainingClasses from './pages/TrainingClasses';
import Login from './pages/Login';
import Register from './pages/Register';
import Gallery from './pages/Gallery';
import WrapInsurance from './pages/WrapInsurance';
import WarrantyInformation from './pages/WarrantyInformation';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Locations from './pages/Locations';
import SEOWrapper from './components/SEOWrapper';
import { Toaster } from 'sonner';
import DefaultPage from './pages/DefaultPage';

function App() {
  console.log('App component rendering');
  
  // This will help identify if the App component is mounting but routes aren't working
  console.log('Current pathname:', window.location.pathname);
  
  return (
    <SEOWrapper>
      <BrowserRouter>
        <div className="app-container">
          <Toaster position="top-right" richColors closeButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:townSlug" element={<TownPage />} />
            <Route path="/regions/:regionName" element={<RegionPage />} />
            <Route path="/services/:serviceType" element={<ServicePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/shopping/:productId" element={<ShoppingProduct />} />
            <Route path="/print-ship" element={<PrintShip />} />
            <Route path="/training-classes" element={<TrainingClasses />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/wrap-insurance" element={<WrapInsurance />} />
            <Route path="/warranty-information" element={<WarrantyInformation />} />
            <Route path="/debug" element={<DefaultPage />} />
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SEOWrapper>
  );
}

export default App;
