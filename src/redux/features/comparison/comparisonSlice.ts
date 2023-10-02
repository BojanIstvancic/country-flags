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
      state.items.push(action.payload);
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = comparisonSlice.actions;

export const selectAmountOfPokemons = (state: AppState) =>
  state.comparison.items.length;

export const selectPokemons = (state: AppState) => state.comparison.items;

export default comparisonSlice.reducer;
