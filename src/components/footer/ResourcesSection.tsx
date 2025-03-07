
import React from 'react';
import { Link } from 'react-router-dom';

type ResourceColumnProps = {
  title: string;
  links: Array<{
    to: string;
    label: string;
  }>;
};

const ResourceColumn = ({ title, links }: ResourceColumnProps) => (
  <div>
    <h5 className="font-medium mb-3 text-sm">{title}</h5>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to} className="text-wrap-light/70 text-sm hover:text-wrap-red transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ResourcesSection = () => {
  const resourcesData = [
    {
      title: "Resources",
      links: [
        { to: "/vinyl-wrap-care-guide", label: "Vinyl Wrap Care Guide" },
        { to: "/ceramic-coating-faq", label: "Ceramic Coating FAQ" },
        { to: "/design-template-library", label: "Design Template Library" },
        { to: "/wrap-installation-process", label: "Installation Process" },
      ]
    },
    {
      title: "Industries",
      links: [
        { to: "/industries/construction", label: "Construction" },
        { to: "/industries/food-beverage", label: "Food & Beverage" },
        { to: "/industries/real-estate", label: "Real Estate" },
      ]
    },
    {
      title: "Support",
      links: [
        { to: "/warranty-information", label: "Warranty Information" },
        { to: "/wrap-installation-process", label: "Installation Process" },
        { to: "/payment-options", label: "Payment Options" },
      ]
    },
    {
      title: "About Us",
      links: [
        { to: "/our-team", label: "Our Team" },
        { to: "/careers", label: "Careers" },
        { to: "/testimonials", label: "Testimonials" },
      ]
    }
  ];

  return (
    <div className="border-t border-white/10 pt-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {resourcesData.map((column, index) => (
          <ResourceColumn key={index} title={column.title} links={column.links} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
