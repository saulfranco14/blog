import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { filterOptions } from "@/app/utils/Filters";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fnVerifyLogin } from "@/app/redux/actions/login";

const SearchBar = ({ onSearch, onFilter, clearFilters, searchQuery }) => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [showFilters, setShowFilters] = useState(false);

  const { profile, login } = useSelector((state) => state.login);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    onFilter(filter.value);
    setShowFilters(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const token = login || sessionStorage.getItem("login");
    if (token) dispatch(fnVerifyLogin(token));
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full m-auto space-y-2 sm:space-y-0 p-4 space-x-0 sm:space-x-2">
        <div className="flex w-full sm:w-auto">
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="border p-2 rounded-l-lg w-full sm:w-80"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg flex items-center"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="relative w-full flex-col gap-0 sm:w-auto sm:flex-row flex sm:gap-5">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-indigo-500 px-4 py-2 my-4 rounded-lg flex items-center text-white w-full sm:w-auto"
          >
            <selectedFilter.Icon className="h-5 w-5 mr-2 text-white" />
            {selectedFilter.label}
          </button>
          {showFilters && (
            <div className="absolute w-50 top-full mt-2 py-2 bg-white border rounded shadow-xl">
              {filterOptions.map((filter) => (
                <div
                  key={filter.value}
                  className={`flex px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer ${
                    selectedFilter.value === filter.value
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => handleFilterSelect(filter)}
                >
                  <filter.Icon className="h-5 w-5 mr-2" />
                  {filter.label}
                </div>
              ))}
            </div>
          )}
          {searchQuery && (
            <button
              onClick={clearFilters}
              className="bg-indigo-500 px-4 py-2 my-4 rounded-lg flex items-center text-white w-full sm:w-auto"
              >
              Limpiar filtros
            </button>
          )}
          {Object.keys(profile).length > 0 && (
            <Link
              href="/blog/create"
              className="bg-indigo-500 px-4 py-2 my-4 rounded-lg flex items-center text-white w-full sm:w-auto"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Crear Contenido
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
