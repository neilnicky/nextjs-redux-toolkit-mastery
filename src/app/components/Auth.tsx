"use client"

import { RootState } from "@/store";
import { login, logout } from "@/store/slices/authSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <span>
          Please{" "}
          <button
            onClick={() =>
              dispatch(
                login({
                  name: "Neil Nicky",
                  email: "neilnicholask@gmail.com",
                })
              )
            }
          >
            log in
          </button>
          .
        </span>
      )}
    </div>
  );
}
