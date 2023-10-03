import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { selectAmountOfPokemons } from "../../redux/features/comparison/comparisonSlice";
import { useAppSelector } from "../../redux/hooks";
import CompareList from "./CompareList";
import { useState } from "react";

const Compare = () => {
  const amountOfComparisonPokemons = useAppSelector(selectAmountOfPokemons);
  const [isOpen, setIsOpen] = useState(false);

  const openListHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen((prev) => !prev);

    event.stopPropagation();
  };

  return (
    <div className="relative">
      <div className="cursor-pointer mr-2" onClick={openListHandler}>
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
      {isOpen && !!amountOfComparisonPokemons && (
        <CompareList isOpenHandler={setIsOpen} />
      )}
    </div>
  );
};

export default Compare;
