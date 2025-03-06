
import React from 'react';
import { TruckIcon, Car, Palette, Building2, Shield } from 'lucide-react';
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
      description: `Transform your business vehicles into mobile billboards with our premium fleet wrapping services in ${townName}. Increase brand visibility and leave a lasting impression.`,
      link: "/services/commercial-fleet-wraps",
    },
    {
      icon: <Car className="h-12 w-12 text-wrap-red" />,
      title: "Color Change Wraps",
      description: `Change the look of your vehicle without affecting its resale value. Our color change wraps in ${townName} offer protection while giving your car a stunning new appearance.`,
      link: "/services/color-change-wraps",
    },
    {
      icon: <Palette className="h-12 w-12 text-wrap-red" />,
      title: "Custom Vehicle Graphics",
      description: `Stand out with custom-designed graphics tailored to your specifications. Our ${townName} design team creates eye-catching visuals that capture attention.`,
      link: "/services/vehicle-graphics",
    },
    {
      icon: <Building2 className="h-12 w-12 text-wrap-red" />,
      title: "Partial Vehicle Wraps",
      description: `Make an impact with partial wraps that highlight your key messaging. An affordable alternative for ${townName} businesses looking to enhance their vehicle's appearance.`,
      link: "/services/partial-wraps",
    },
    {
      icon: <Shield className="h-12 w-12 text-wrap-red" />,
      title: "Paint Protection Film",
      description: `Protect your vehicle's original paint from chips, scratches and road debris. Our premium paint protection films offer ${townName} drivers invisible defense for their investment.`,
      link: "/services/paint-protection-film",
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
            Premium Vehicle Wrapping Services in {townName}
          </h2>
          <p className="section-subtitle">
            From commercial fleet wraps to custom color changes, we offer a comprehensive range of vehicle wrapping solutions to meet your needs.
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
