
import React, { useState } from 'react';
import WarrantyAccordionItem from './WarrantyAccordionItem';
import VehicleWrapsContent from './content/VehicleWrapsContent';
import CeramicCoatingContent from './content/CeramicCoatingContent';
import PPFContent from './content/PPFContent';
import WarrantyClaimsContent from './content/WarrantyClaimsContent';

const WarrantyAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>("vehicle-wraps");
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <div className="space-y-4 mb-12">
      <WarrantyAccordionItem
        id="vehicle-wraps"
        title="Vehicle Wraps Warranty"
        isOpen={openSection === "vehicle-wraps"}
        onToggle={toggleSection}
      >
        <VehicleWrapsContent />
      </WarrantyAccordionItem>
      
      <WarrantyAccordionItem
        id="ceramic-coating"
        title="Ceramic Coating Warranty"
        isOpen={openSection === "ceramic-coating"}
        onToggle={toggleSection}
      >
        <CeramicCoatingContent />
      </WarrantyAccordionItem>
      
      <WarrantyAccordionItem
        id="ppf"
        title="Paint Protection Film Warranty"
        isOpen={openSection === "ppf"}
        onToggle={toggleSection}
      >
        <PPFContent />
      </WarrantyAccordionItem>
      
      <WarrantyAccordionItem
        id="warranty-claims"
        title="How to File a Warranty Claim"
        isOpen={openSection === "warranty-claims"}
        onToggle={toggleSection}
      >
        <WarrantyClaimsContent />
      </WarrantyAccordionItem>
    </div>
  );
};

export default WarrantyAccordion;
