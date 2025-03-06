
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
      title: "Protect Your Paint",
      description: `A good car wrap acts as a shield for your car's paint. It protects from small scratches, stone chips, and sun damage in ${townName}'s changing weather.`
    },
    {
      icon: <Truck className="h-10 w-10 text-wrap-red" />,
      title: "Moving Ads",
      description: `Turn your work cars into moving billboards that thousands of people see every day as you drive around ${townName} and nearby areas.`
    },
    {
      icon: <Palette className="h-10 w-10 text-wrap-red" />,
      title: "Many Design Choices",
      description: `From simple color changes to eye-catching graphics, car wraps give you lots of ways to make your car stand out in ${townName}.`
    },
    {
      icon: <DollarSign className="h-10 w-10 text-wrap-red" />,
      title: "Cost-Effective Branding",
      description: `Car wraps give you one of the cheapest ways to advertise in ${townName}, and they last a long time.`
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-wrap-red" />,
      title: "Keep Car Value",
      description: `Save your car's original paint and maybe even increase its value. Wraps can be taken off without damage, returning your car to how it was.`
    },
    {
      icon: <Clock className="h-10 w-10 text-wrap-red" />,
      title: "Fast Turnaround",
      description: `Our quick process means little downtime for your car. Most wraps in ${townName} can be done in 3-5 work days.`
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Why Choose Car Wraps
          </span>
          <h2 className="section-title">
            Benefits of Car Wraps in {townName}
          </h2>
          <p className="section-subtitle">
            Find out why car wraps are great for your personal or business cars.
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
