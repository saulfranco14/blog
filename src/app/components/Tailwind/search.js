import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    onFilter(filter);
  };

  return (
    <div className="flex items-center space-x-2 justify-center w-1/2 m-auto ">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-lg w-96"
      />
      <button
        onClick={()=> handleSearch()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
      <div className="space-x-2">
        <button
          onClick={() => handleFilter('all')}
          className={`${
            selectedFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          } px-4 py-2 rounded-lg flex items-center`}
        >
          <FunnelIcon className="h-5 w-5 mr-2" />
          Filtros
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
