import { useEffect, useRef } from "react";
import {
  Pokemon,
  useGetPokemonDataQuery,
} from "../../redux/services/pokemon/pokemonAPI";
import TypeIcon from "../TypeIcon/TypeIcon";

interface ListItemProps {
  item: Pokemon;
  id: number;
}

const ListItem = ({ item, id }: ListItemProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { data } = useGetPokemonDataQuery(id);

  console.log(data);

  useEffect(() => {
    let observerRefValue: any = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
          } else {
            entry.target.classList.remove("opacity-100");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} className="opacity-0 transition-all">
      <div className="bg-white p-2 rounded mb-2 relative">
        <img
          src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
          alt={item.name}
          className="w-full h-28 object-contain md:h-36 lg:h-48"
        />
        <div className="absolute right-1 bottom-1">
          <TypeIcon />
        </div>
      </div>
      <p className="text-lg first-letter:uppercase text-center mb-0">
        {item.name}
      </p>
    </div>
  );
};

export default ListItem;
