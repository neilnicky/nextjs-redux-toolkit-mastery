"use client";

import { RootState } from "@/store";
import { login, logout } from "@/store/slices/authSlice";
import { trpc } from "@/trpc/client";
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

  const mutation = trpc.addUser.useMutation();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2 className="text-center text-3xl font-bold  text-blue-700">
            <span className="text-xl text-gray-800">Logged in as</span>{" "}
            {user?.name}
          </h2>
          <p className="mb-10 text-center text-gray-500"> {user?.email}</p>
          <button
            type="submit"
            className="w-full h-9 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => dispatch(logout())}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="w-[80%] mx-auto">
          <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
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
              onClick={async (e) => {
                e.preventDefault();
                if (name.trim() && email.trim()) {
                  try {
                    await mutation.mutate({
                      name: name,
                      email: email,
                    });

                    dispatch(
                      login({
                        name: name,
                        email: email,
                      })
                    );
                  } catch (error) {
                    alert(`Failed to create user ${error}`);
                  }
                } else {
                  alert("Please fill in both name and email");
                }
                setEmail("");
                setName("");
              }}
            >
              Sign in
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
