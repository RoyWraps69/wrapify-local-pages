
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface WarrantyAccordionItemProps {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}

const WarrantyAccordionItem: React.FC<WarrantyAccordionItemProps> = ({
  id,
  title,
  isOpen,
  onToggle,
  children
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-medium text-wrap-blue text-xl">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-wrap-blue" />
        ) : (
          <ChevronDown className="h-5 w-5 text-wrap-blue" />
        )}
      </button>
      
      <div 
        className={`bg-white p-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default WarrantyAccordionItem;
