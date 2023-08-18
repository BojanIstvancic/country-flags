import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeSlice from "./features/theme/themeSlice";
import { pokemonApi } from "./services/pokemon/pokemonAPI";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([pokemonApi.middleware]),
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
