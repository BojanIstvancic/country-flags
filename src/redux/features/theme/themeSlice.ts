import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { Theme } from "../../../shared/types";

export interface ThemeSliceProps {
  theme: Theme.DARK | Theme.LIGHT;
}

const initialState: ThemeSliceProps = {
  theme: Theme.DARK,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme;

export default themeSlice.reducer;
