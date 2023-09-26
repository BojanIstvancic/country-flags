import { PokemonDetails } from "../../shared/types";
import TypeIcon from "../TypeIcon/TypeIcon";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const ListItemDetails = ({
  name,
  weight,
  height,
  types,
  abilities,
}: PokemonDetails) => (
  <div>
    <h3 className="text-center first-letter:uppercase">{name}</h3>
    <div className="bg-white p-2 rounded mb-6 relative">
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
        className="mx-auto my-0 w-64 h-64 md:w-96 object-contain max-w-none"
      />
      <div className="absolute right-1 bottom-1">
        <TypeIcon type={types[0].type.name} />
      </div>
    </div>
    <div className="flex items-center mb-2 mr-6">
      <div className="w-8">
        <HeightIcon fontSize="small" />
      </div>
      <p className="mb-0">Height: {height / 10} m </p>
    </div>
    <div className="flex items-center mb-2">
      <div className="w-8">
        <ScaleIcon fontSize="small" />
      </div>
      <p className="mb-0">Weight: {weight / 10} kg</p>
    </div>
    <div className="flex items-center mb-2">
      <div className="w-8">
        <AutoFixHighIcon fontSize="small" />
      </div>
      <p className="mb-0 font-bold">Abilities</p>
    </div>
    <ul>
      {abilities.map((ability) => (
        <li
          className="first-letter:uppercase border-b-2 py-2"
          key={ability.ability.name}
        >
          {ability.ability.name}
        </li>
      ))}
    </ul>
  </div>
);

export default ListItemDetails;
