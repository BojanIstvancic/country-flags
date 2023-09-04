import { useEffect, useRef } from "react";
import { Pokemon } from "../../redux/services/pokemon/pokemonAPI";

interface ListItemProps {
  item: Pokemon;
}

const ListItem = ({ item }: ListItemProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
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

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return (
    <div ref={containerRef} className="opacity-0 transition-all">
      <div className="bg-white p-2 rounded mb-2">
        <img
          src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
          alt={item.name}
          className="w-full h-28 object-contain md:h-36 lg:h-48"
        />
      </div>
      <p className="text-lg first-letter:uppercase text-center mb-0">
        {item.name}
      </p>
    </div>
  );
};

export default ListItem;
