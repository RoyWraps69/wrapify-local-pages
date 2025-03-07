
import React from 'react';
import { Search } from 'lucide-react';
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
    <div className="mb-5 border-b border-gray-100 pb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-wrap-blue">Find Installers</h3>
        <CartButton />
      </div>
      
      <form onSubmit={handleSearch} className="max-w-lg mx-auto">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search by city or state (e.g., Chicago, IL)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-wrap-red hover:bg-wrap-red/90">
            <Search className="mr-2 h-4 w-4" /> Find
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
