import { Helmet } from "react-helmet-async";
import { useGetAllPokemonsQuery } from "../redux/services/pokemon/pokemonAPI";

function Home() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllPokemonsQuery();

  console.log(data);
  return (
    <>
      <Helmet>
        <title>Pokemons | Home</title>
        <meta
          name="description"
          content="All the Pokémon data you'll ever need in one place"
        />
      </Helmet>
      <div className="Home">
        <p>Home Page</p>
      </div>
    </>
  );
}

export default Home;
