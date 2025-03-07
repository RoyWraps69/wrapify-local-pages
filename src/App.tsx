
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import TownPage from './pages/TownPage';
import RegionPage from './pages/regions/RegionPage';
import ServicePage from './pages/ServicePage';
import Services from './pages/Services';
import Shopping from './pages/Shopping';
import ShoppingProduct from './pages/ShoppingProduct';
import PrintShip from './pages/PrintShip';
import Login from './pages/Login';
import Register from './pages/Register';
import Gallery from './pages/Gallery';
import WrapInsurance from './pages/WrapInsurance';
import WarrantyInformation from './pages/WarrantyInformation';
import SEOWrapper from './components/SEOWrapper';
import { Toaster } from 'sonner';

function App() {
  return (
    <SEOWrapper>
      <BrowserRouter>
        <Toaster position="top-right" richColors closeButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/locations/:townSlug" element={<TownPage />} />
          <Route path="/regions/:regionName" element={<RegionPage />} />
          <Route path="/services/:serviceType" element={<ServicePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/shopping/:productId" element={<ShoppingProduct />} />
          <Route path="/print-ship" element={<PrintShip />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/wrap-insurance" element={<WrapInsurance />} />
          <Route path="/warranty-information" element={<WarrantyInformation />} />
        </Routes>
      </BrowserRouter>
    </SEOWrapper>
  );
}

export default App;
