"use client";

import { RootState } from "@/store/store";
import { login, logout } from "@/store/slices/authSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Welcome, {user?.name}
          </h2>
          <button
            type="submit"
            className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => dispatch(logout())}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Login
          </h2>
          <form className="space-y-5">
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() =>
                dispatch(
                  login({
                    name: name,
                    email: "neilnicholask@gmail.com",
                  })
                )
              }
            >
              Sign in
            </button>
            <div className="text-center">
              <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
