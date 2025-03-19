// store setup
// initializeUser action that can set the userSlice
// also makeStore function to that creates fresh store

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  user: User | null;
}

const initialState: UsersState = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    initializeUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { initializeUser } = userSlice.actions;

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
