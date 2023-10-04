import { Tooltip } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useAppDispatch } from "../../redux/hooks";
import { removePokemon } from "../../redux/features/comparison/comparisonSlice";
import { generateImageURL } from "../../shared/utils";

interface CompareListItemProps {
  name: string;
  id: number;
}

const CompareListItem = ({ name, id }: CompareListItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveComparisonPokemon = () => {
    dispatch(removePokemon(id));
  };

  return (
    <div className="flex items-center mb-2">
      <div className="w-12 h-12 bg-white">
        <img
          src={generateImageURL(name)}
          alt={name}
          className="w-12 h-12  object-contain"
        />
      </div>
      <p className="mx-5 mb-0 flex-1">{name}</p>
      <Tooltip
        title="Remove pokemon"
        className="cursor-pointer"
        onClick={handleRemoveComparisonPokemon}
      >
        <RemoveCircleOutlineIcon />
      </Tooltip>
    </div>
  );
};

export default CompareListItem;
