import { Helmet } from "react-helmet-async";
import { useGetAllPokemonsQuery } from "../redux/services/pokemon/pokemonAPI";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllPokemonsQuery();

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
        <Link to="/asdas">didi</Link>
      </div>
    </>
  );
};

export default Home;
