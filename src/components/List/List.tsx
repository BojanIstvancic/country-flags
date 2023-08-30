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
      {data && (
        <div className="grid grid-cols-2 gap-4">
          {data.results.map((item: Pokemon) => (
            <ListItem item={item} key={item.name} />
          ))}
        </div>
      )}
      {isLoading && <Loading />}
      {isError && <p>Error</p>}
    </>
  );
};

export default List;
