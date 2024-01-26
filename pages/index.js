import Cards from "@/app/components/Tailwind/cards";
import Header from "@/app/components/Header";
import SearchBar from "@/app/components/Tailwind/search";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fnVerifyLogin } from "@/app/redux/actions/login";

export default function Home() {
  
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.login);

  useEffect(() => {
    const token = login || sessionStorage.getItem("login");
    if (token) dispatch(fnVerifyLogin(token));
  }, [login]);

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
