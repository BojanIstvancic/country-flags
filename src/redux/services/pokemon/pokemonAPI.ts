import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonDetails } from "../../../shared/types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  tagTypes: ["Pokemons"],
  endpoints: (builder) => ({
    getAllPokemons: builder.query<getAllPokemonsResponse, void>({
      query: () => "pokemon/?limit=500",
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

interface getPokemonDataResponse extends PokemonDetails {}
