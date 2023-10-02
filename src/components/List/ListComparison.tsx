import { Tooltip } from "@mui/material";
import { PokemonDetails, Theme } from "../../shared/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/features/theme/themeSlice";
import {
  addPokemon,
  removePokemon,
} from "../../redux/features/comparison/comparisonSlice";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ListComparison = ({
  id,
  name,
  weight,
  height,
  types,
  abilities,
}: PokemonDetails) => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(selectTheme);

  const handleAddComparisonPokemon = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();

    const element = {
      id,
      name,
      weight,
      height,
      types,
      abilities,
    };

    dispatch(addPokemon(element));
  };

  const handleRemoveComparisonPokemon = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    dispatch(removePokemon(id));
  };

  return (
    <div
      className={`absolute right-1 top-1 p-1 ${
        theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"
      }`}
    >
      <Tooltip title="Compare pokemon" onClick={handleAddComparisonPokemon}>
        <CompareArrowsIcon />
      </Tooltip>
      <Tooltip title="Remove pokemon" onClick={handleRemoveComparisonPokemon}>
        <RemoveCircleOutlineIcon />
      </Tooltip>
    </div>
  );
};

export default ListComparison;
