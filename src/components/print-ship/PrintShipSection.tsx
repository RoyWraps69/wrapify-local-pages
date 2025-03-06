
import React, { useState, useEffect } from 'react';
import { Package, Calculator, Send, InfoIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  vehicleSizes, 
  wrapMaterials, 
  designOptions, 
  shippingOptions, 
  calculateWrapPrice,
  VehicleSize,
  WrapMaterial,
  DesignOption,
  ShippingOption
} from '@/utils/vehiclePricingData';

const PrintShipSection: React.FC = () => {
  // State for selected options
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSize>(vehicleSizes[1]);
  const [selectedMaterial, setSelectedMaterial] = useState<WrapMaterial>(wrapMaterials[0]);
  const [selectedDesign, setSelectedDesign] = useState<DesignOption>(designOptions[0]);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption>(shippingOptions[0]);
  const [coverage, setCoverage] = useState(1); // 100% coverage by default
  const [price, setPrice] = useState({ 
    subtotal: 0, 
    designFee: 0, 
    shippingFee: 0, 
    total: 0,
    pricePerSqFt: 0,
    totalSqFt: 0
  });

  // Calculate price when options change
  useEffect(() => {
    const newPrice = calculateWrapPrice(
      selectedVehicle,
      selectedMaterial,
      selectedDesign,
      selectedShipping,
      coverage
    );
    setPrice(newPrice);
  }, [selectedVehicle, selectedMaterial, selectedDesign, selectedShipping, coverage]);

  return (
    <section className="py-16 bg-white" id="print-ship">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Print & Ship Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Premium Wraps Delivered Nationwide
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            High-quality vehicle wraps designed and printed in Chicago, shipped directly to you or your installer anywhere in the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Pricing Calculator */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="text-wrap-red w-6 h-6" />
              <h3 className="text-2xl font-semibold text-wrap-blue">Wrap Pricing Calculator</h3>
            </div>
            
            <div className="space-y-6">
              {/* Vehicle Size Selection */}
              <div>
                <label className="block text-wrap-blue font-medium mb-2">Vehicle Size</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={selectedVehicle.category}
                  onChange={(e) => {
                    const selected = vehicleSizes.find(v => v.category === e.target.value);
                    if (selected) setSelectedVehicle(selected);
                  }}
                >
                  {vehicleSizes.map((vehicle) => (
                    <option key={vehicle.category} value={vehicle.category}>
                      {vehicle.category} - {vehicle.examples}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-600 mt-1">{selectedVehicle.description} (~{selectedVehicle.squareFeet} sq ft)</p>
              </div>
              
              {/* Material Selection */}
              <div>
                <label className="block text-wrap-blue font-medium mb-2">Wrap Material</label>
                <div className="grid grid-cols-1 gap-3">
                  {wrapMaterials.map((material) => (
                    <div 
                      key={material.id}
                      className={`border ${selectedMaterial.id === material.id ? 'border-wrap-red bg-wrap-red/5' : 'border-gray-200'} rounded-md p-3 cursor-pointer transition-colors`}
                      onClick={() => setSelectedMaterial(material)}
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{material.name}</span>
                        <span className="font-medium">${material.pricePerSqFt.toFixed(2)}/sq ft</span>
                      </div>
                      <p className="text-sm text-gray-600">{material.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Coverage Slider */}
              <div>
                <label className="block text-wrap-blue font-medium mb-2">
                  Coverage: {Math.round(coverage * 100)}%
                </label>
                <input 
                  type="range" 
                  min="0.25" 
                  max="1" 
                  step="0.05" 
                  value={coverage}
                  onChange={(e) => setCoverage(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Partial (25%)</span>
                  <span>Half (50%)</span>
                  <span>Full (100%)</span>
                </div>
              </div>
              
              {/* Design Options */}
              <div>
                <label className="block text-wrap-blue font-medium mb-2">Design Package</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={selectedDesign.id}
                  onChange={(e) => {
                    const selected = designOptions.find(d => d.id === e.target.value);
                    if (selected) setSelectedDesign(selected);
                  }}
                >
                  {designOptions.map((design) => (
                    <option key={design.id} value={design.id}>
                      {design.name} {design.priceAdjustment > 0 ? `(+$${design.priceAdjustment})` : '(Included)'}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-600 mt-1">{selectedDesign.description}</p>
              </div>
              
              {/* Shipping Options */}
              <div>
                <label className="block text-wrap-blue font-medium mb-2">Shipping Method</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  value={selectedShipping.id}
                  onChange={(e) => {
                    const selected = shippingOptions.find(s => s.id === e.target.value);
                    if (selected) setSelectedShipping(selected);
                  }}
                >
                  {shippingOptions.map((shipping) => (
                    <option key={shipping.id} value={shipping.id}>
                      {shipping.name} - ${shipping.price} ({shipping.estimatedDays})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Right column - Price Summary and CTA */}
          <div>
            <div className="bg-wrap-blue text-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6">Your Custom Quote</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Material Cost ({price.totalSqFt.toFixed(0)} sq ft)</span>
                  <span>${price.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Design Fee</span>
                  <span>${price.designFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Shipping</span>
                  <span>${price.shippingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total Price</span>
                  <span>${price.total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="block w-full py-3 text-center bg-wrap-red hover:bg-red-600 text-white font-medium rounded-md transition-colors"
              >
                Request Detailed Quote
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <InfoIcon className="text-wrap-blue w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-wrap-blue">Print & Ship Benefits</h4>
                  <p className="text-sm text-wrap-grey">Our print and ship service allows you to receive professional-grade vehicle wraps anywhere in the country.</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wrap-red text-xs">✓</span>
                  </div>
                  <span className="text-sm text-wrap-grey">Chicago-quality design and printing, nationwide delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wrap-red text-xs">✓</span>
                  </div>
                  <span className="text-sm text-wrap-grey">Perfect for DIY installers or local wrap shops</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wrap-red text-xs">✓</span>
                  </div>
                  <span className="text-sm text-wrap-grey">Comprehensive installation instructions included</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-wrap-red text-xs">✓</span>
                  </div>
                  <span className="text-sm text-wrap-grey">Installer referrals available in most major cities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Ready to Transform Your Vehicle?</h3>
          <p className="text-wrap-grey mb-6 max-w-2xl mx-auto">
            Whether you need vehicle wraps for your nationwide business locations or a single custom wrap shipped to your door, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-wrap-red text-white font-medium rounded-md hover:bg-red-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Get Started
            </Link>
            <Link 
              to="/gallery" 
              className="px-6 py-3 bg-gray-100 text-wrap-blue font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintShipSection;
