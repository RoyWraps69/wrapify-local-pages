
import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface Installer {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  specialties: string[];
  isOurShop?: boolean;
}

// Updated installers data with correct information for Wrapping The World Chicago
const installers: Installer[] = [
  {
    id: 1,
    name: "Wrapping The World Chicago",
    city: "Chicago",
    state: "IL",
    address: "4711 N. Lamon Ave, Chicago, IL 60630",
    phone: "(312) 597-1286",
    email: "info@wrappingtheworld.com",
    website: "wrappingtheworld.com",
    specialties: ["Commercial Fleet", "Color Change", "PPF", "Ceramic Coating"],
    isOurShop: true
  },
  {
    id: 2,
    name: "NYC Vehicle Wrapping",
    city: "New York",
    state: "NY",
    address: "127 W 26th St, New York, NY 10001",
    phone: "(212) 555-6789",
    email: "info@nycvehiclewrapping.com",
    website: "nycvehiclewrapping.com",
    specialties: ["Luxury Vehicles", "Commercial Fleet", "Ceramic Coating"]
  },
  {
    id: 3,
    name: "LA Wrap Kings",
    city: "Los Angeles",
    state: "CA",
    address: "7825 Santa Monica Blvd, Los Angeles, CA 90046",
    phone: "(323) 555-4321",
    email: "hello@lawrapkings.com",
    website: "lawrapkings.com",
    specialties: ["Custom Designs", "High-End Vehicles", "PPF"]
  },
  {
    id: 4,
    name: "Houston Wraps & Graphics",
    city: "Houston",
    state: "TX",
    address: "5120 Westheimer Rd, Houston, TX 77056",
    phone: "(713) 555-7890",
    email: "contact@houstonwraps.com",
    website: "houstonwraps.com",
    specialties: ["Fleet Graphics", "Commercial Vehicles", "Rust Protection"]
  },
  {
    id: 5,
    name: "Phoenix Auto Films",
    city: "Phoenix",
    state: "AZ",
    address: "2501 E Camelback Rd, Phoenix, AZ 85016",
    phone: "(602) 555-3456",
    email: "info@phoenixautofilms.com",
    website: "phoenixautofilms.com",
    specialties: ["Heat-Resistant Wraps", "Commercial Fleet", "Ceramic Coating"]
  },
  {
    id: 6,
    name: "Philly Vehicle Graphics",
    city: "Philadelphia",
    state: "PA",
    address: "1218 Chestnut St, Philadelphia, PA 19107",
    phone: "(215) 555-8901",
    email: "info@phillyvehiclegraphics.com",
    website: "phillyvehiclegraphics.com",
    specialties: ["Fleet Branding", "Color Change", "PPF"]
  },
  {
    id: 7,
    name: "San Antonio Wraps",
    city: "San Antonio",
    state: "TX",
    address: "9910 San Pedro Ave, San Antonio, TX 78216",
    phone: "(210) 555-2345",
    email: "info@sanantoniowraps.com",
    website: "sanantoniowraps.com",
    specialties: ["Commercial Vehicles", "Custom Designs", "PPF"]
  },
  {
    id: 8,
    name: "San Diego Auto Styling",
    city: "San Diego",
    state: "CA",
    address: "7710 Balboa Ave, San Diego, CA 92111",
    phone: "(619) 555-6789",
    email: "info@sdautostyling.com",
    website: "sdautostyling.com",
    specialties: ["Marine Wraps", "Commercial Fleet", "Ceramic Coating"]
  },
  {
    id: 9,
    name: "Dallas Vehicle Wraps",
    city: "Dallas",
    state: "TX",
    address: "1845 Woodall Rodgers Fwy, Dallas, TX 75201",
    phone: "(214) 555-0123",
    email: "info@dallasvehiclewraps.com",
    website: "dallasvehiclewraps.com",
    specialties: ["Commercial Vehicles", "Color Change", "PPF"]
  },
  {
    id: 10,
    name: "San Jose Auto Films",
    city: "San Jose",
    state: "CA",
    address: "1701 Junction Ct, San Jose, CA 95112",
    phone: "(408) 555-4567",
    email: "info@sanjoseautofilms.com",
    website: "sanjoseautofilms.com",
    specialties: ["Tech Fleet Branding", "Commercial Vehicles", "Ceramic Coating"]
  },
  {
    id: 11,
    name: "Austin Vehicle Graphics",
    city: "Austin",
    state: "TX",
    address: "2900 S Congress Ave, Austin, TX 78704",
    phone: "(512) 555-8901",
    email: "info@austinvehiclegraphics.com",
    website: "austinvehiclegraphics.com",
    specialties: ["Custom Design", "Commercial Fleet", "PPF"]
  },
  {
    id: 12,
    name: "Jacksonville Wraps",
    city: "Jacksonville",
    state: "FL",
    address: "9735 Gate Pkwy N, Jacksonville, FL 32246",
    phone: "(904) 555-2345",
    email: "info@jacksonvillewraps.com",
    website: "jacksonvillewraps.com",
    specialties: ["Marine Wraps", "Commercial Vehicles", "PPF"]
  },
  {
    id: 13,
    name: "Columbus Auto Styling",
    city: "Columbus",
    state: "OH",
    address: "3900 Morse Rd, Columbus, OH 43219",
    phone: "(614) 555-6789",
    email: "info@columbusautostyling.com",
    website: "columbusautostyling.com",
    specialties: ["Fleet Graphics", "Color Change", "Ceramic Coating"]
  },
  {
    id: 14,
    name: "Charlotte Vehicle Wraps",
    city: "Charlotte",
    state: "NC",
    address: "6201 Fairview Rd, Charlotte, NC 28210",
    phone: "(704) 555-0123",
    email: "info@charlottevehiclewraps.com",
    website: "charlottevehiclewraps.com",
    specialties: ["Commercial Fleet", "Custom Designs", "PPF"]
  },
  {
    id: 15,
    name: "Seattle Auto Films",
    city: "Seattle",
    state: "WA",
    address: "601 Westlake Ave N, Seattle, WA 98109",
    phone: "(206) 555-4567",
    email: "info@seattleautofilms.com",
    website: "seattleautofilms.com",
    specialties: ["Commercial Vehicles", "Marine Wraps", "Ceramic Coating"]
  },
];

const InstallerDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInstallers, setFilteredInstallers] = useState<Installer[]>(installers);
  const [selectedInstaller, setSelectedInstaller] = useState<Installer | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setFilteredInstallers(installers);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = installers.filter(
      installer => 
        installer.city.toLowerCase().includes(query) || 
        installer.state.toLowerCase().includes(query)
    );
    
    setFilteredInstallers(results);
  };

  const handleSelectInstaller = (installer: Installer) => {
    setSelectedInstaller(installer);
    // Pre-fill message with installer name
    setFormData({
      ...formData,
      message: `I would like to inquire about installation services for vehicle wraps from ${installer.name}.`
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    toast({
      title: "Request Sent",
      description: `Your inquiry has been sent to ${selectedInstaller?.name}. They will contact you shortly.`,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    setSelectedInstaller(null);
  };

  return (
    <div className="py-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-3">
          Find Local Wrap Installers
        </h3>
        <p className="text-wrap-grey max-w-3xl mx-auto">
          Professional installation rates vary by location. Connect with top-rated wrap installers in major cities across the USA.
        </p>
      </div>

      {!selectedInstaller ? (
        <>
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search by city or state (e.g., Chicago, IL)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" /> Find
              </Button>
            </div>
          </form>

          {/* Installers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstallers.map(installer => (
              <div 
                key={installer.id} 
                className={`bg-white rounded-lg shadow-md border ${
                  installer.isOurShop 
                    ? "border-wrap-red shadow-lg" 
                    : "border-gray-200"
                } p-5 hover:shadow-lg transition-shadow`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg text-wrap-blue">{installer.name}</h4>
                  {installer.isOurShop && (
                    <span className="bg-wrap-red text-white text-xs px-2 py-1 rounded-full">
                      Our Shop
                    </span>
                  )}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-wrap-red mt-1 flex-shrink-0 mr-2" />
                    <span className="text-sm text-wrap-grey">{installer.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
                    <a href={`tel:${installer.phone}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
                      {installer.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
                    <a href={`mailto:${installer.email}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
                      {installer.email}
                    </a>
                  </div>
                  {installer.website && (
                    <div className="flex items-center">
                      <ExternalLink className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
                      <a 
                        href={`https://${installer.website}`} 
                        className="text-sm text-wrap-grey hover:text-wrap-blue"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {installer.website}
                      </a>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {installer.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className={`text-xs ${
                        installer.isOurShop 
                          ? "bg-wrap-red/10 text-wrap-red" 
                          : "bg-gray-100 text-wrap-grey"
                      } px-2 py-1 rounded-full`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <Button 
                  variant={installer.isOurShop ? "default" : "outline"}
                  className="w-full"
                  onClick={() => handleSelectInstaller(installer)}
                >
                  Contact Installer
                </Button>
              </div>
            ))}
          </div>

          {filteredInstallers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-wrap-grey">No installers found for "{searchQuery}". Try another city or state.</p>
            </div>
          )}
        </>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="mb-6">
            <button 
              onClick={() => setSelectedInstaller(null)} 
              className="text-wrap-blue hover:text-wrap-red text-sm flex items-center"
            >
              ← Back to installer list
            </button>
          </div>
          
          <h4 className="text-xl font-semibold text-wrap-blue mb-4">Contact {selectedInstaller.name}</h4>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-wrap-red mt-1 flex-shrink-0 mr-2" />
                <span className="text-sm text-wrap-grey">{selectedInstaller.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
                <a href={`tel:${selectedInstaller.phone}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
                  {selectedInstaller.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
                <a href={`mailto:${selectedInstaller.email}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
                  {selectedInstaller.email}
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                required
              />
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full">
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default InstallerDirectory;
