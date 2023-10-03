import { selectPokemons } from "../../redux/features/comparison/comparisonSlice";
import { useAppSelector } from "../../redux/hooks";
import { PokemonDetails } from "../../shared/types";
import CompareListItem from "./CompareListItem";

const CompareList = () => {
  const items = useAppSelector(selectPokemons);

  return (
    <div className="absolute right-0 top-full p-4 text-white border-2 border-white">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-700 opacity-90" />

      <div className="relative">
        {!!items.length && (
          <>
            {items.map((item: PokemonDetails) => (
              <CompareListItem name={item.name} key={item.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CompareList;
