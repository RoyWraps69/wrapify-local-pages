
import React from 'react';
import { ShieldCheck, Truck, Lightbulb, Palette, DollarSign, Clock } from 'lucide-react';

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
      title: "Protect Your Original Paint",
      description: `A quality vehicle wrap acts as a protective layer for your car's paint, shielding it from minor scratches, stone chips, and UV damage in ${townName}'s varied weather conditions.`
    },
    {
      icon: <Truck className="h-10 w-10 text-wrap-red" />,
      title: "Mobile Advertising",
      description: `Turn your company vehicles into moving billboards that generate thousands of impressions daily as you drive through ${townName} and surrounding areas.`
    },
    {
      icon: <Palette className="h-10 w-10 text-wrap-red" />,
      title: "Endless Design Options",
      description: `From subtle color changes to eye-catching graphics, vehicle wraps offer unlimited customization possibilities to make your vehicle stand out in ${townName}.`
    },
    {
      icon: <DollarSign className="h-10 w-10 text-wrap-red" />,
      title: "Cost-Effective Branding",
      description: `Vehicle wraps provide one of the lowest cost-per-impression advertising methods available to ${townName} businesses, with long-lasting impact.`
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-wrap-red" />,
      title: "Maintain Resale Value",
      description: `Preserve your vehicle's original paint and potentially increase its resale value. Wraps can be removed without damage, returning your vehicle to its original condition.`
    },
    {
      icon: <Clock className="h-10 w-10 text-wrap-red" />,
      title: "Quick Turnaround",
      description: `Our efficient process means minimal downtime for your vehicle. Most wraps in ${townName} can be completed within 3-5 business days.`
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Why Choose Vehicle Wraps
          </span>
          <h2 className="section-title">
            Benefits of Vehicle Wraps in {townName}
          </h2>
          <p className="section-subtitle">
            Discover the advantages of choosing professional vehicle wraps for your personal or business vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
