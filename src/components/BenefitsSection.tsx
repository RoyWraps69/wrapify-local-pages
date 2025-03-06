
import React from 'react';
import { ShieldCheck, Truck, Palette } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  townName?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ townName = 'Chicago' }) => {
  const benefits: Benefit[] = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-wrap-red" />,
      title: "Protect Your Paint",
      description: `A good car wrap protects your car's paint from scratches, chips, and sun damage.`
    },
    {
      icon: <Truck className="h-10 w-10 text-wrap-red" />,
      title: "Mobile Advertising",
      description: `Turn your vehicles into moving billboards that get seen throughout ${townName}.`
    },
    {
      icon: <Palette className="h-10 w-10 text-wrap-red" />,
      title: "Custom Designs",
      description: `From simple color changes to eye-catching graphics, make your vehicle stand out.`
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-12 text-center">
          Benefits of Car Wraps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="feature-card h-full"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-wrap-red/10">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">
                {benefit.title}
              </h3>
              <p className="text-wrap-grey">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
