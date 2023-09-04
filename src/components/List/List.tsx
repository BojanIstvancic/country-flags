import {
  Pokemon,
  useGetAllPokemonsQuery,
} from "../../redux/services/pokemon/pokemonAPI";
import Loading from "../Loading/Loading";
import ListItem from "./ListItem";

const List = () => {
  const { data, isLoading, isError } = useGetAllPokemonsQuery();

  console.log(data);
  return (
    <>
      <h1>All pokemons</h1>
      {data && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {data.results.map((item: Pokemon) => (
            <ListItem item={item} key={item.name} />
          ))}
        </div>
      )}
      {isLoading && <Loading />}
      {isError && <h3 className="text-center">Server error</h3>}
    </>
  );
};

export default List;
