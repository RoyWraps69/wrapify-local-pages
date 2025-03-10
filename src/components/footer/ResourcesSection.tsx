
import React from 'react';
import { Link } from 'react-router-dom';

type ResourceColumnProps = {
  title: string;
  links: Array<{
    to: string;
    label: string;
    isDownload?: boolean;
  }>;
};

const ResourceColumn = ({ title, links }: ResourceColumnProps) => (
  <div>
    <h5 className="font-medium mb-3 text-sm">{title}</h5>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {link.isDownload ? (
            <a 
              href={link.to} 
              className="text-wrap-light/70 text-sm hover:text-wrap-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {link.label}
            </a>
          ) : (
            <Link to={link.to} className="text-wrap-light/70 text-sm hover:text-wrap-red transition-colors">
              {link.label}
            </Link>
          )}
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
        { to: "/resources/vinyl-wrap-care-guide", label: "Vinyl Wrap Care Guide" },
        { to: "/resources/vinyl-wrap-care-guide.pdf", label: "Download Care Guide PDF", isDownload: true },
        { to: "/resources/ceramic-coating-faq", label: "Ceramic Coating FAQ" },
        { to: "/resources/design-template-library", label: "Design Template Library" },
        { to: "/wrap-insurance", label: "Wrap Insurance" },
        { to: "/support/wrap-installation-process", label: "Installation Process" },
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
        { to: "/support/wrap-installation-process", label: "Installation Process" },
        { to: "/support/payment-options", label: "Payment Options" },
      ]
    },
    {
      title: "About Us",
      links: [
        { to: "/about", label: "About Us" },
        { to: "/about/our-team", label: "Our Team" },
        { to: "/about/careers", label: "Careers" },
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
