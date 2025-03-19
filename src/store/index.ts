import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  data: any;
}

const initialState: InitialState = { data: null };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;