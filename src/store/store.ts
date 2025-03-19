import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import todoReducer from "./slices/todoSlice";
import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      product: productReducer,
      auth: authReducer,
      todo: todoReducer,
      counter: counterReducer,
      theme: themeReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// store setup
// initializeUser action that can set the userSlice
// also makeStore function to that creates fresh store
