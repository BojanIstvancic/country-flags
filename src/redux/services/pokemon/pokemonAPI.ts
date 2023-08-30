import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// POKEMON_IMAGE_URL=https://img.pokemondb.net/artwork/large/bulbasaur.jpg

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  tagTypes: ["Pokemons"],
  endpoints: (builder) => ({
    getAllPokemons: builder.query<PokemonResponse, void>({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetAllPokemonsQuery } = pokemonApi;

export type Pokemon = {
  name: string;
  url: string;
};

type PokemonResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: Pokemon[];
};
