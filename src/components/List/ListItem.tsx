import {
  Pokemon,
  useGetPokemonDataQuery,
} from "../../redux/services/pokemon/pokemonAPI";
import TypeIcon from "../TypeIcon/TypeIcon";
import { useInView } from "react-intersection-observer";

interface ListItemProps {
  item: Pokemon;
  id: number;
}

const ListItem = ({ item, id }: ListItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { data } = useGetPokemonDataQuery(id, {
    skip: !inView,
  });

  return (
    <div
      ref={ref}
      className={`${inView ? "opacioty-100" : "opacity-0"} transition-all `}
    >
      <div className="bg-white p-2 rounded mb-2 relative">
        <img
          src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
          alt={item.name}
          className="w-full h-28 object-contain md:h-36 lg:h-48"
        />
        <div className="absolute right-1 bottom-1">
          <TypeIcon type={data?.types[0].type.name} />
        </div>
      </div>
      <p className="text-lg first-letter:uppercase text-center mb-0">
        {item.name}
      </p>
    </div>
  );
};

export default ListItem;
