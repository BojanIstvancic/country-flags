import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonType } from "../../../shared/types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  tagTypes: ["Pokemons"],
  endpoints: (builder) => ({
    getAllPokemons: builder.query<getAllPokemonsResponse, void>({
      query: () => "pokemon",
    }),
    getPokemonData: builder.query<getPokemonDataResponse, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonDataQuery } = pokemonApi;

export type Pokemon = {
  name: string;
  url: string;
};

type getAllPokemonsResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Pokemon[];
};

type Type = {
  slot: number;
  type: {
    name:
      | PokemonType.WATER
      | PokemonType.FIRE
      | PokemonType.GRASS
      | PokemonType.BUG
      | PokemonType.NORMAL;
    url: string;
  };
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type getPokemonDataResponse = {
  name: string;
  weight: number;
  height: number;
  types: Type[];
  stats: Stat[];
  abilities: Ability[];
};
