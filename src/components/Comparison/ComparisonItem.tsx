import TypeIcon from "../TypeIcon/TypeIcon";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { PokemonDetails } from "../../shared/types";
import { generateImageURL } from "../../shared/utils";

const ComparisonItem = ({
  name,
  weight,
  height,
  types,
  abilities,
}: PokemonDetails) => (
  <div className="mr-4 sm:mr-8 xl:mr-12 last:mr-0">
    <h5 className="text-center first-letter:uppercase font-normal">{name}</h5>
    <div className="bg-white p-2 rounded mb-6 relative">
      <img
        src={generateImageURL(name)}
        alt={name}
        className="mx-auto my-0 w-28 h-28 sm:w-44 sm:h-44 xl:w-56 xl:h-56 object-contain max-w-none"
      />
    </div>
    <TypeIcon type={types[0].type.name} />
    <div className="flex mb-2 mr-6 mt-2">
      <div className="w-8">
        <HeightIcon fontSize="small" />
      </div>
      <p className="mb-0">{height / 10} m </p>
    </div>
    <div className="flex mb-2">
      <div className="w-8">
        <ScaleIcon fontSize="small" />
      </div>
      <p className="mb-0">{weight / 10} kg</p>
    </div>
    <div className="flex mb-2">
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

export default ComparisonItem;
