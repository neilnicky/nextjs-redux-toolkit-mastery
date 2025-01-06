import { Middleware } from "@reduxjs/toolkit";

export const errorHandlingMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    try {
      return next(action);
    } catch (err) {
      console.error("Caught an exception:", err);
      storeAPI.dispatch({
        type: "error/handleError",
        payload: err instanceof Error ? err.message : String(err),
      });
      throw err;
    }
  };
