import Cards from "@/app/components/Tailwind/cards";
import Header from "@/app/components/Header";
import SearchBar from "@/app/components/Tailwind/search";

export default function Home() {
  const handleSearch = (query) => {
    console.log(`Realizar búsqueda con query: ${query}`);
  };

  const handleFilter = (filter) => {
    console.log(`Aplicar filtro por: ${filter}`);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <Cards />
    </>
  );
}
