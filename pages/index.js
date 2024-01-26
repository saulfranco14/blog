import Cards from "@/app/components/Tailwind/cards";
import Header from "@/app/components/Header";
import SearchBar from "@/app/components/Tailwind/search";
import { useDispatch, useSelector } from "react-redux";
import { fnAllBlogEntries } from "@/app/redux/actions/blogEntrie";
import { useEffect, useState } from "react";
import { filterBlogEntries } from "@/app/utils/Filters";

export default function Home() {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.login);
  const { allBlogEntries } = useSelector((state) => state.blogEntrie);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("content");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setFilter("content");
  };

  useEffect(() => {
    dispatch(fnAllBlogEntries());
  }, []);

  const filteredBlogEntries = allBlogEntries.filter((entry) =>
    filterBlogEntries(entry, filter, searchQuery)
  );

  return (
    <>
      <Header profile={profile} />
      <SearchBar
        onSearch={handleSearch}
        onFilter={handleFilter}
        clearFilters={clearFilters}
        searchQuery={searchQuery}
      />
      <Cards data={filteredBlogEntries} />
    </>
  );
}
