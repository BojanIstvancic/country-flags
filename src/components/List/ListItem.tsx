import { Pokemon } from "../../redux/services/pokemon/pokemonAPI";

interface ListItemProps {
  item: Pokemon;
}

const ListItem = ({ item }: ListItemProps) => (
  <div>
    <div className="bg-white p-2 rounded mb-2">
      <img
        src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
        alt={item.name}
        className="w-full h-28 object-contain md:h-36 lg:h-48"
      />
    </div>
    <p className="text-lg first-letter:uppercase text-center mb-0">
      {item.name}
    </p>
  </div>
);

export default ListItem;
