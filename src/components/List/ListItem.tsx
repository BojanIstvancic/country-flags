import { useRef } from "react";
import {
  Pokemon,
  useGetPokemonDataQuery,
} from "../../redux/services/pokemon/pokemonAPI";
import TypeIcon from "../TypeIcon/TypeIcon";
import { useInView } from "react-intersection-observer";
import Modal, { ModalRefType } from "../Modal/Modal";
import ListItemDetails from "./ListItemDetails";

interface ListItemProps {
  item: Pokemon;
  id: number;
}

const ListItem = ({ item, id }: ListItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { data } = useGetPokemonDataQuery(id, {
    skip: !inView,
  });

  const modalRef = useRef<ModalRefType>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };

  return (
    <div
      ref={ref}
      className={`${inView ? "opacity-100" : "opacity-0"} transition-all`}
    >
      <div
        className="bg-white p-2 rounded mb-2 relative cursor-pointer group"
        onClick={openModal}
      >
        <img
          src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
          alt={item.name}
          className="w-full h-28 object-contain md:h-36 lg:h-48 group-hover:scale-105 transition-all"
        />
        <div className="absolute right-1 bottom-1">
          <TypeIcon type={data?.types[0].type.name} />
        </div>
      </div>
      <p className="text-lg first-letter:uppercase text-center mb-0">
        {item.name}
      </p>
      {data && (
        <Modal ref={modalRef}>
          <ListItemDetails
            id={data.id}
            name={item.name}
            types={data.types}
            height={data.height}
            weight={data.weight}
            abilities={data.abilities}
          />
        </Modal>
      )}
    </div>
  );
};

export default ListItem;
