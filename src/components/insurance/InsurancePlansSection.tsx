
import React from 'react';
import { Shield, ShieldCheck, ShieldPlus } from 'lucide-react';
import InsurancePlanCard, { InsurancePlan } from './InsurancePlanCard';

const getInsurancePlans = (): InsurancePlan[] => [
  {
    id: 'silver',
    name: 'Silver',
    icon: <Shield className="w-8 h-8 mb-2" />,
    price: '$14.99',
    color: 'bg-gray-200 text-gray-700',
    timeframe: '7-10 Days',
    removalGuarantee: 'Up to $1,500 removal cost covered',
    features: [
      'Basic wrap damage coverage',
      'Up to $500 in damage repair',
      'Standard removal guarantee',
      'Email support',
      '7-10 day response time'
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    icon: <ShieldCheck className="w-8 h-8 mb-2" />,
    price: '$29.99',
    color: 'bg-yellow-400 text-yellow-800',
    timeframe: '72 Hours',
    removalGuarantee: 'Up to $750 removal cost covered',
    features: [
      'Enhanced wrap damage coverage',
      'Up to $1,000 in damage repair',
      'Premium removal guarantee',
      'Email and phone support',
      '72-hour response time',
      'One free touch-up per year'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    icon: <ShieldPlus className="w-8 h-8 mb-2" />,
    price: '$49.99',
    color: 'bg-gray-800 text-white',
    timeframe: '24 Hours',
    removalGuarantee: 'Free wrap removal included',
    features: [
      'Comprehensive wrap damage coverage',
      'Unlimited damage repair',
      'Priority removal guarantee',
      'VIP support with dedicated agent',
      '24-hour response time',
      'Two free touch-ups per year',
      'Coverage for extreme weather damage',
      'Pro-rated refund for early removal'
    ]
  }
];

interface InsurancePlansSectionProps {
  selectedPlan: string;
  setSelectedPlan: (id: string) => void;
}

const InsurancePlansSection: React.FC<InsurancePlansSectionProps> = ({ 
  selectedPlan, 
  setSelectedPlan 
}) => {
  const insurancePlans = getInsurancePlans();
  
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
      {insurancePlans.map((plan) => (
        <InsurancePlanCard
          key={plan.id}
          plan={plan}
          selectedPlan={selectedPlan}
          onSelect={setSelectedPlan}
        />
      ))}
    </div>
  );
};

export default InsurancePlansSection;
