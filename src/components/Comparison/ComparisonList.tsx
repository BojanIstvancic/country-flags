import { selectPokemons } from "../../redux/features/comparison/comparisonSlice";
import { useAppSelector } from "../../redux/hooks";
import { PokemonDetails } from "../../shared/types";
import ComparisonItem from "./ComparisonItem";

const ComparisonList = () => {
  const items = useAppSelector(selectPokemons);

  return (
    <>
      <div className="max-w-full flex justify-center">
        <div className="overflow-x-auto flex">
          {items.map((item: PokemonDetails) => (
            <ComparisonItem
              key={item.id}
              id={item.id}
              name={item.name}
              types={item.types}
              height={item.height}
              weight={item.weight}
              abilities={item.abilities}
            />
          ))}
        </div>
      </div>
      {!items.length && <h6>No pokemons selected for comparison</h6>}
    </>
  );
};

export default ComparisonList;
