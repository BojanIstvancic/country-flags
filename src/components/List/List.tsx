import {
  Pokemon,
  useGetAllPokemonsQuery,
} from "../../redux/services/pokemon/pokemonAPI";
import Loading from "../Loading/Loading";
import ListItem from "./ListItem";

const List = () => {
  const { data, isLoading, isError } = useGetAllPokemonsQuery();

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {data &&
          data.results.map((item: Pokemon) => (
            <ListItem item={item} key={item.name} />
          ))}
        {isLoading && <Loading />}
        {isError && <p>Error</p>}
      </div>
    </>
  );
};

export default List;
