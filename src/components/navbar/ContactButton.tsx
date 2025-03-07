
import React from 'react';
import { Phone } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center">
      <a
        href="tel:+13125971286"
        className="flex items-center gap-2 bg-wrap-red text-white px-4 py-2 rounded-md hover:bg-wrap-red/90 transition-colors"
      >
        <Phone size={18} />
        <span>312-597-1286</span>
      </a>
    </div>
  );
};

export default ContactButton;
