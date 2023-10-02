import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { PokemonDetails } from "../../../shared/types";

export interface ComparisonSliceProps {
  items: PokemonDetails[];
}

const initialState: ComparisonSliceProps = {
  items: [],
};

export const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonDetails>) => {
      const addedPokemons = localStorage.getItem("comparison");

      let updatedPokemons: PokemonDetails[] = [];

      if (addedPokemons) {
        updatedPokemons.push(...JSON.parse(addedPokemons));
      }

      updatedPokemons.push(action.payload);

      localStorage.setItem("comparison", JSON.stringify(updatedPokemons));
      state.items.push(action.payload);
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      const addedPokemons = localStorage.getItem("comparison");
      let updatedPokemons: PokemonDetails[] = [];

      if (addedPokemons) {
        updatedPokemons = JSON.parse(addedPokemons).filter(
          (item: PokemonDetails) => item.id !== action.payload
        );
      }

      localStorage.setItem("comparison", JSON.stringify(updatedPokemons));
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    getAddedPokemons: (state) => {
      const addedPokemons = localStorage.getItem("comparison");

      if (addedPokemons) {
        state.items = JSON.parse(addedPokemons);
      }
    },
  },
});

export const { addPokemon, removePokemon, getAddedPokemons } =
  comparisonSlice.actions;

export const selectAmountOfPokemons = (state: AppState) =>
  state.comparison.items.length;

export const selectPokemons = (state: AppState) => state.comparison.items;

export default comparisonSlice.reducer;
