import { PokemonDetails } from "../../shared/types";
import TypeIcon from "../TypeIcon/TypeIcon";

const ListItemDetails = ({
  name,
  weight,
  height,
  types,
  abilities,
}: PokemonDetails) => (
  <div>
    <div className="bg-white p-2 rounded mb-2 relative">
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
        className="w-96 h-64 object-contain md:h-36 lg:h-48 group-hover:scale-105 transition-all"
      />
      <div className="absolute right-1 bottom-1">
        <TypeIcon type={types[0].type.name} />
      </div>
    </div>
    <p>Height: {height}</p>
    <p>Weight {weight}</p>
    <p>Abilities</p>
    {abilities.map((ability) => (
      <p>{ability.ability.name}</p>
    ))}
  </div>
);

export default ListItemDetails;
