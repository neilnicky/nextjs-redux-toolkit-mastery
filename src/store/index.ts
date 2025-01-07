import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";
import logger from "redux-logger";
import { customLoggerMiddleware } from "./middleware/customLoggerMiddleware";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, customLoggerMiddleware, errorHandlingMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
