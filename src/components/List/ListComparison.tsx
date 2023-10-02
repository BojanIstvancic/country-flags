import { Tooltip } from "@mui/material";
import { PokemonDetails, Theme } from "../../shared/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/features/theme/themeSlice";
import {
  addPokemon,
  removePokemon,
  selectPokemons,
} from "../../redux/features/comparison/comparisonSlice";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";

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
  const items = useAppSelector(selectPokemons);

  const [addedForComparison, setAddedForComparison] = useState<boolean>(() => {
    const itemIsAdded = items.find((item) => item.id === id);

    return itemIsAdded ? true : false;
  });

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
    setAddedForComparison(true);
  };

  const handleRemoveComparisonPokemon = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();

    dispatch(removePokemon(id));
    setAddedForComparison(false);
  };

  return (
    <div
      className={`absolute right-1 top-1 p-1 cursor-pointer ${
        theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"
      }`}
    >
      {addedForComparison && (
        <Tooltip title="Remove pokemon" onClick={handleRemoveComparisonPokemon}>
          <RemoveCircleOutlineIcon />
        </Tooltip>
      )}

      {!addedForComparison && (
        <Tooltip title="Compare pokemon" onClick={handleAddComparisonPokemon}>
          <CompareArrowsIcon />
        </Tooltip>
      )}
    </div>
  );
};

export default ListComparison;
