
import React from 'react';
import { Layers, Shield, Check } from 'lucide-react';

interface AddOnOption {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

interface WrapAddOnsProps {
  selectedAddOns: string[];
  setSelectedAddOns: (addOns: string[]) => void;
}

const WrapAddOns: React.FC<WrapAddOnsProps> = ({ selectedAddOns, setSelectedAddOns }) => {
  
  const addOnOptions: AddOnOption[] = [
    {
      id: 'ceramic',
      title: 'Ceramic Coating',
      description: 'Add a layer of ceramic protection to your wrap for enhanced durability, UV resistance, and easier cleaning.',
      price: 299,
      icon: <Layers className="w-5 h-5 text-wrap-red" />
    },
    {
      id: 'ppf',
      title: 'Paint Protection Film',
      description: 'Apply transparent PPF over high-impact areas of your wrap for maximum protection against road debris and scratches.',
      price: 349,
      icon: <Shield className="w-5 h-5 text-wrap-red" />
    },
    {
      id: 'insurance',
      title: 'Wrap Insurance',
      description: 'Protect your investment with our wrap insurance that covers damage repair or removal. Available in Silver, Gold, or Platinum tiers.',
      price: 49.99,
      icon: <Shield className="w-5 h-5 text-wrap-red" />
    }
  ];

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(addOn => addOn !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  return (
    <div className="my-12">
      <h3 className="text-2xl font-semibold text-wrap-blue mb-6">Enhance Your Wrap with Add-Ons</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {addOnOptions.map((option) => (
          <div 
            key={option.id}
            className={`border rounded-lg p-5 cursor-pointer transition-all ${
              selectedAddOns.includes(option.id) 
                ? 'border-wrap-red bg-wrap-red/5 shadow-md' 
                : 'border-gray-200 hover:border-wrap-red/50'
            }`}
            onClick={() => toggleAddOn(option.id)}
          >
            <div className="flex items-center mb-3">
              {option.icon}
              <h4 className="text-lg font-medium text-wrap-blue ml-2">{option.title}</h4>
            </div>
            <p className="text-wrap-grey text-sm mb-4">{option.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-medium text-wrap-blue">${option.price.toFixed(2)}</span>
              {selectedAddOns.includes(option.id) && (
                <span className="flex items-center text-wrap-red text-sm">
                  <Check size={16} className="mr-1" />
                  Added
                </span>
              )}
            </div>
            {option.id === 'insurance' && (
              <div className="mt-2">
                <a href="/wrap-insurance" className="text-wrap-blue text-xs hover:text-wrap-red">View insurance options →</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrapAddOns;
