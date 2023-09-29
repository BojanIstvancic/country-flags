import { useRef } from "react";
import {
  Pokemon,
  useGetPokemonDataQuery,
} from "../../redux/services/pokemon/pokemonAPI";
import TypeIcon from "../TypeIcon/TypeIcon";
import { useInView } from "react-intersection-observer";
import Modal, { ModalRefType } from "../Modal/Modal";
import ListItemDetails from "./ListItemDetails";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/features/theme/themeSlice";
import { Theme } from "../../shared/types";
import Tooltip from "@mui/material/Tooltip";
import {
  addPokemon,
  removePokemon,
  selectAmountOfPokemons,
  selectPokemons,
} from "../../redux/features/comparison/comparisonSlice";

interface ListItemProps {
  item: Pokemon;
  id: number;
}

const ListItem = ({ item, id }: ListItemProps) => {
  const dispatch = useAppDispatch();

  const { theme } = useAppSelector(selectTheme);

  const amountOfComparisonPokemons = useAppSelector(selectAmountOfPokemons);
  const comparisonPokemons = useAppSelector(selectPokemons);

  // check another solution for this
  // all elements are refreshing
  // extract the tooltip component

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

  const handleAddComparisonPokemon = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    if (data) {
      const element = {
        id: data.id,
        name: item.name,
        types: data.types,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities,
      };

      dispatch(addPokemon(element));
    }
  };

  const handleRemoveComparisonPokemon = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    if (data) {
      const id = data.id;

      dispatch(removePokemon(id));
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
        <Tooltip title="Add pokemon" onClick={handleAddComparisonPokemon}>
          <div
            className={`absolute right-1 top-1 p-1 z-2 ${
              theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"
            }`}
          >
            <CompareArrowsIcon />
          </div>
        </Tooltip>
        <Tooltip title="Remove element" onClick={handleRemoveComparisonPokemon}>
          <div
            className={`absolute right-1 top-1 p-1 ${
              theme === Theme.DARK ? "bg-slate-700" : "bg-slate-300"
            }`}
          >
            <RemoveCircleOutlineIcon />
          </div>
        </Tooltip>
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
