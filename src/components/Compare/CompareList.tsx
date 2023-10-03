import { Link } from "react-router-dom";
import {
  removeAllPokemons,
  selectPokemons,
} from "../../redux/features/comparison/comparisonSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PokemonDetails } from "../../shared/types";
import CompareListItem from "./CompareListItem";

interface CompareListProps {
  isOpenHandler: (arg1: boolean) => void;
}

const CompareList = ({ isOpenHandler }: CompareListProps) => {
  const items = useAppSelector(selectPokemons);
  const dispatch = useAppDispatch();

  const handleRemoveAllComparisonPokemons = () => {
    dispatch(removeAllPokemons());
  };

  const handleCloseList = () => {
    isOpenHandler(false);
  };

  return (
    <div className="absolute right-0 top-full p-4 text-white border-2 border-white">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-700 opacity-90" />

      <div className="relative">
        {!!items.length && (
          <>
            {items.map((item: PokemonDetails) => (
              <CompareListItem name={item.name} id={item.id} key={item.id} />
            ))}
          </>
        )}
      </div>
      <div className="flex relative">
        <button
          className="w-32 mr-2 py-1 px-2 text-slate-900 bg-white font-bold rounded transition-all hover:bg-slate-100"
          onClick={handleRemoveAllComparisonPokemons}
        >
          Remove All
        </button>
        <Link to="/compare" onClick={handleCloseList}>
          <button className="py-1 px-2 text-slate-900 bg-white font-bold rounded transition-all hover:bg-slate-100">
            Compare
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompareList;
