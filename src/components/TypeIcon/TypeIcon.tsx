import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GrassIcon from "@mui/icons-material/Grass";
import WaterIcon from "@mui/icons-material/Water";
import PestControlIcon from "@mui/icons-material/PestControl";
import AdjustIcon from "@mui/icons-material/Adjust";
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
      default:
        return <AdjustIcon fontSize="large" className="text-blue-500" />;
    }
  };
  return <div className="flex justify-center">{generateTypeIcon(type)}</div>;
};

export default TypeIcon;
