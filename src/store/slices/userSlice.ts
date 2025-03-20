import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const { initializeUser, setData } = userSlice.actions;
export default userSlice.reducer;
