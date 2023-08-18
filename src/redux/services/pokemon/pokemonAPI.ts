import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_NOT_SECRET_CODE}`,
  }),
  tagTypes: ["Pokemons"],
  endpoints: (builder) => ({
    getAllPokemons: builder.query<Pokemon[], void>({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetAllPokemonsQuery } = pokemonApi;

type Pokemon = {
  name: string;
  url: string;
};
