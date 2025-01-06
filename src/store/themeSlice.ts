import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  mode: "dark" | "light";
};

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setDarkMode: (state) => {
      state.mode = "dark";
    },
    setLightMode: (state) => {
      state.mode = "light";
    },
  },
});

export const { toggleTheme,setDarkMode,setLightMode } = themeSlice.actions;
export default themeSlice.reducer;
