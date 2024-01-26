import Cards from "@/app/components/Tailwind/cards";
import Header from "@/app/components/Header";
import SearchBar from "@/app/components/Tailwind/search";
import { useDispatch, useSelector } from "react-redux";
import { fnAllBlogEntries } from "@/app/redux/actions/blogEntrie";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.login);
  const { allBlogEntries } = useSelector((state) => state.blogEntrie);

  const handleSearch = (query) => {
    console.log(`Realizar búsqueda con query: ${query}`);
  };

  const handleFilter = (filter) => {
    console.log(`Aplicar filtro por: ${filter}`);
  };

  useEffect(() => {
    dispatch(fnAllBlogEntries());
  }, []);

  return (
    <>
      <Header profile={profile} />
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <Cards data={allBlogEntries} />
    </>
  );
}
