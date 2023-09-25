import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GrassIcon from "@mui/icons-material/Grass";
import WaterIcon from "@mui/icons-material/Water";
import PestControlIcon from "@mui/icons-material/PestControl";
import AdjustIcon from "@mui/icons-material/Adjust";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ScienceIcon from "@mui/icons-material/Science";
import TerrainIcon from "@mui/icons-material/Terrain";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { PokemonType } from "../../shared/types";

interface TypeIconProps {
  type?: string;
}

const TypeIcon = ({ type }: TypeIconProps) => {
  const generateTypeIcon = (type: string | undefined) => {
    switch (type) {
      case PokemonType.FIRE:
        return (
          <LocalFireDepartmentIcon
            fontSize="large"
            className="text-orange-500"
          />
        );
      case PokemonType.GRASS:
        return <GrassIcon fontSize="large" className="text-green-500" />;
      case PokemonType.WATER:
        return <WaterIcon fontSize="large" className="text-blue-500" />;
      case PokemonType.BUG:
        return <PestControlIcon fontSize="large" className="text-orange-950" />;
      case PokemonType.ELECTRIC:
        return (
          <ElectricBoltIcon fontSize="large" className="text-yellow-500" />
        );
      case PokemonType.POISON:
        return <ScienceIcon fontSize="large" className="text-green-500" />;
      case PokemonType.GROUND:
        return <TerrainIcon fontSize="large" className="text-orange-500" />;
      case PokemonType.FAIRY:
        return <AutoFixHighIcon fontSize="large" className="text-blue-500" />;
      case PokemonType.FIGHTING:
        return <SportsMmaIcon fontSize="large" className="text-orange-950" />;
      case PokemonType.PSYCHIC:
        return (
          <PsychologyAltIcon fontSize="large" className="text-yellow-500" />
        );
      default:
        return <AdjustIcon fontSize="large" className="text-blue-500" />;
    }
  };
  return <div className="flex justify-center">{generateTypeIcon(type)}</div>;
};

export default TypeIcon;
