import { Helmet } from "react-helmet-async";
import { useGetAllPokemonsQuery } from "../redux/services/pokemon/pokemonAPI";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const { data, isLoading, isError } = useGetAllPokemonsQuery();

  return (
    <>
      <Helmet>
        <title>Pokemons | Home</title>
        <meta
          name="description"
          content="All the Pokemon data you'll ever need in one place"
        />
      </Helmet>
      <div className="py-4">
        <h1>Pokemons</h1>
        {data && <p>Test</p>}
        {isLoading && <Loading />}
        {isError && <p>Error</p>}
      </div>
    </>
  );
};

export default Home;
