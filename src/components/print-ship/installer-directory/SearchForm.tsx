
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CartButton from '../shopping-cart/CartButton';

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch
}) => {
  return (
    <div className="mb-5 border-b border-gray-200 pb-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-wrap-blue flex items-center">
          <MapPin className="mr-2 h-4 w-4 text-wrap-red" />
          Find Installers Near You
        </h3>
        <CartButton />
      </div>
      
      <form onSubmit={handleSearch} className="max-w-lg mx-auto">
        <div className="flex gap-2 relative">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by city or state (e.g., Chicago, IL)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 focus:border-wrap-blue focus:ring-1 focus:ring-wrap-blue/30"
            />
          </div>
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-wrap-blue to-wrap-blue/80 hover:from-wrap-blue/90 hover:to-wrap-blue text-white shadow-sm"
          >
            <Search className="mr-2 h-4 w-4" /> 
            Find Installers
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
