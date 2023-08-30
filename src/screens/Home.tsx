import { Helmet } from "react-helmet-async";
import {
  Pokemon,
  useGetAllPokemonsQuery,
} from "../redux/services/pokemon/pokemonAPI";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const { data, isLoading, isError } = useGetAllPokemonsQuery();

  console.log(data);
  return (
    <>
      <Helmet>
        <title>Pokemons | Home</title>
        <meta
          name="description"
          content="All the Pokemon data you'll ever need in one place"
        />
      </Helmet>
      <div className="p-4">
        <h1>All pokemons</h1>
        {data && (
          <div className="grid grid-cols-2 gap-4">
            {data.results.map((item: Pokemon) => (
              <div key={item.name}>
                <div className="bg-white p-2 rounded mb-2">
                  <img
                    src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                    alt={item.name}
                    className="w-full h-28 object-contain"
                  />
                </div>
                <p className="text-lg first-letter:uppercase text-center mb-0">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {isLoading && <Loading />}
        {isError && <p>Error</p>}
      </div>
    </>
  );
};

export default Home;
