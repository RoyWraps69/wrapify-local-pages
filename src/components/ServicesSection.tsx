
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
      title: "Commercial Fleet Wraps",
      description: `Transform your business vehicles into mobile billboards with our premium fleet wrapping services in ${townName}. Increase brand visibility and generate thousands of impressions daily with eye-catching vehicle advertising.`,
      link: "/services/commercial-fleet-wraps",
    },
    {
      icon: <Car className="h-12 w-12 text-wrap-red" />,
      title: "Color Change Wraps",
      description: `Change the look of your vehicle without affecting its resale value. Our premium color change wraps in ${townName} offer protection while giving your car a stunning new appearance with durable, removable vinyl films.`,
      link: "/services/color-change-wraps",
    },
    {
      icon: <Droplets className="h-12 w-12 text-wrap-red" />,
      title: "Ceramic Coatings",
      description: `Protect your vehicle's finish with our advanced nano-ceramic coating services in ${townName}. Our hydrophobic technology provides superior protection against UV rays, bird droppings, road salt, and environmental contaminants for years.`,
      link: "/services/ceramic-coatings",
    },
    {
      icon: <Shield className="h-12 w-12 text-wrap-red" />,
      title: "Paint Protection Film",
      description: `Shield your vehicle from road debris, stone chips, and scratches with our self-healing paint protection film. Our clear bra installations in ${townName} provide invisible defense for high-impact areas of your vehicle.`,
      link: "/services/paint-protection-film",
    },
    {
      icon: <Palette className="h-12 w-12 text-wrap-red" />,
      title: "Custom Vehicle Graphics",
      description: `Stand out with custom-designed vehicle graphics tailored to your specifications. Our ${townName} design team creates eye-catching visuals that capture attention and enhance your mobile advertising strategy.`,
      link: "/services/vehicle-graphics",
    },
    {
      icon: <Building2 className="h-12 w-12 text-wrap-red" />,
      title: "Partial Vehicle Wraps",
      description: `Make an impact with cost-effective partial wraps that highlight your key messaging. An affordable alternative for ${townName} businesses looking to enhance their vehicle advertising without a full wrap investment.`,
      link: "/services/partial-wraps",
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="section-title">
            Premium Vehicle Wrapping & Protection Services in {townName}
          </h2>
          <p className="section-subtitle">
            From commercial fleet wraps to ceramic coatings, paint protection film and custom color changes, we offer a comprehensive range of vehicle enhancement and protection solutions to meet your needs.
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
