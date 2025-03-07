
import React from 'react';
import { Shield, ShieldCheck, ShieldPlus } from 'lucide-react';

export interface InsurancePlan {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  color: string;
  timeframe: string;
  removalGuarantee: string;
  features: string[];
}

interface InsurancePlanCardProps {
  plan: InsurancePlan;
  selectedPlan: string;
  onSelect: (id: string) => void;
}

const InsurancePlanCard: React.FC<InsurancePlanCardProps> = ({ 
  plan, 
  selectedPlan, 
  onSelect 
}) => {
  const isSelected = selectedPlan === plan.id;
  
  return (
    <div 
      className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
        isSelected ? 'border-wrap-red ring-2 ring-wrap-red ring-opacity-50' : 'border-gray-200'
      }`}
      onClick={() => onSelect(plan.id)}
    >
      <div className={`${plan.color} p-6 text-center`}>
        <div className="flex justify-center">
          {plan.icon}
        </div>
        <h3 className="text-xl font-bold mb-1">{plan.name} Plan</h3>
        <div className="text-3xl font-bold mb-1">{plan.price}</div>
        <p className="opacity-75 text-sm">per month, per vehicle</p>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col items-center justify-center gap-2 mb-4 border-b pb-4">
          <div className="flex items-center justify-center gap-2 font-medium">
            <span className="text-wrap-blue">Response Time:</span>
            <span className="text-wrap-red">{plan.timeframe}</span>
          </div>
          <div className="text-center mt-2">
            <span className="text-wrap-blue font-medium">Removal Guarantee:</span>
            <p className="text-sm text-wrap-red">{plan.removalGuarantee}</p>
          </div>
        </div>
        
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-wrap-red flex-shrink-0 mt-1">✓</span>
              <span className="text-wrap-grey text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-2 rounded-md font-medium transition-colors ${
            isSelected 
              ? 'bg-wrap-red text-white hover:bg-red-600' 
              : 'bg-gray-100 text-wrap-blue hover:bg-gray-200'
          }`}
        >
          {isSelected ? 'Selected' : 'Select Plan'}
        </button>
      </div>
    </div>
  );
};

export default InsurancePlanCard;
