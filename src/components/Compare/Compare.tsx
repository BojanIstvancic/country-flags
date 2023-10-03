import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { selectAmountOfPokemons } from "../../redux/features/comparison/comparisonSlice";
import { useAppSelector } from "../../redux/hooks";
import CompareList from "./CompareList";

const Compare = () => {
  const amountOfComparisonPokemons = useAppSelector(selectAmountOfPokemons);
  return (
    <div className="relative">
      <div className="cursor-pointer mr-2">
        <CompareArrowsIcon />
        {!!amountOfComparisonPokemons && (
          <div
            className="absolute top-0 left-0 px-2 py-1 text-xs text-white -translate-x-1/2 -translate-y-1/2 bg-slate-900"
            style={{ padding: "1px 4px" }}
          >
            {amountOfComparisonPokemons}
          </div>
        )}
      </div>
      <CompareList />
    </div>
  );
};

export default Compare;
