
import React from 'react';
import { TruckIcon, Car, Palette, Building2, Shield, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

interface ServicesSectionProps {
  townName?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ townName = 'Chicago' }) => {
  const services: Service[] = [
    {
      icon: <TruckIcon className="h-12 w-12 text-wrap-red" />,
      title: "Business Fleet Wraps",
      description: `Turn your work cars into moving billboards with our top-quality fleet wraps in ${townName}. Get more people to see your brand and make thousands of impressions every day with eye-catching car ads.`,
      link: "/services/commercial-fleet-wraps",
    },
    {
      icon: <Car className="h-12 w-12 text-wrap-red" />,
      title: "Color Change Wraps",
      description: `Change how your car looks without hurting its resale value. Our high-quality color change wraps in ${townName} protect your car while giving it a great new look with strong, removable vinyl films.`,
      link: "/services/color-change-wraps",
    },
    {
      icon: <Droplets className="h-12 w-12 text-wrap-red" />,
      title: "Ceramic Coatings",
      description: `Protect your car's finish with our advanced ceramic coating in ${townName}. Our water-repelling technology shields against sun rays, bird poop, road salt, and dirt for years.`,
      link: "/services/ceramic-coatings",
    },
    {
      icon: <Shield className="h-12 w-12 text-wrap-red" />,
      title: "Paint Protection Film",
      description: `Shield your car from road debris, stone chips, and scratches with our self-healing paint protection film. Our clear shields in ${townName} give invisible defense for the most hit areas of your car.`,
      link: "/services/paint-protection-film",
    },
    {
      icon: <Palette className="h-12 w-12 text-wrap-red" />,
      title: "Custom Car Graphics",
      description: `Stand out with custom-made car graphics made just for you. Our ${townName} design team creates eye-catching visuals that grab attention and boost your mobile advertising.`,
      link: "/services/vehicle-graphics",
    },
    {
      icon: <Building2 className="h-12 w-12 text-wrap-red" />,
      title: "Partial Car Wraps",
      description: `Make an impact with cost-effective partial wraps that highlight your key messages. An affordable choice for ${townName} businesses wanting to boost their car advertising without paying for a full wrap.`,
      link: "/services/partial-wraps",
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="section-title">
            Top Car Wrapping & Protection Services in {townName}
          </h2>
          <p className="section-subtitle">
            From business fleet wraps to ceramic coatings, paint protection film and custom color changes, we offer many car enhancement and protection options to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="feature-card flex flex-col h-full group"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">
                {service.title}
              </h3>
              <p className="text-wrap-grey mb-6 flex-grow">
                {service.description}
              </p>
              <Link 
                to={service.link} 
                className="mt-auto inline-flex items-center text-wrap-blue group-hover:text-wrap-red transition-colors"
              >
                <span>Learn more</span>
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
