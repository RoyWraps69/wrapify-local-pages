
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ServicesBreadcrumbProps {
  currentPage: string;
  parentPage?: {
    name: string;
    path: string;
  };
}

const ServicesBreadcrumb: React.FC<ServicesBreadcrumbProps> = ({ 
  currentPage,
  parentPage 
}) => {
  return (
    <nav className="flex py-3 px-4 text-sm text-wrap-grey" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="inline-flex items-center" itemScope itemType="https://schema.org/ListItem">
          <Link to="/" className="inline-flex items-center hover:text-wrap-blue transition-colors" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        
        <li aria-hidden="true">
          <ChevronRight className="w-4 h-4 mx-1" />
        </li>
        
        {parentPage ? (
          <>
            <li itemScope itemType="https://schema.org/ListItem">
              <Link to={parentPage.path} className="inline-flex items-center hover:text-wrap-blue transition-colors" itemProp="item">
                <span itemProp="name">{parentPage.name}</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 mx-1" />
            </li>
            
            <li aria-current="page" itemScope itemType="https://schema.org/ListItem">
              <span className="text-wrap-blue" itemProp="name">{currentPage}</span>
              <meta itemProp="position" content="3" />
            </li>
          </>
        ) : (
          <li aria-current="page" itemScope itemType="https://schema.org/ListItem">
            <span className="text-wrap-blue" itemProp="name">{currentPage}</span>
            <meta itemProp="position" content="2" />
          </li>
        )}
      </ol>
    </nav>
  );
};

export default ServicesBreadcrumb;
