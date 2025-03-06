
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
  );
};

export default SearchForm;
