"use client";

import { RootState } from "@/store";
import { login, logout } from "@/store/authSlice";
import { decrement, increment, reset } from "@/store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="h-screen grid place-items-center ">
      <div>
        <h1 className="text-center">Count: {count}</h1>
        <div className="gap-4 flex text-center text-5xl">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <div className="gap-4 flex text-center">
          <button onClick={() => dispatch(login("Neil Nicky"))}>Login</button>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
        {user && <h1>Logged in as {user}</h1>}
      </div>
    </div>
  );
}
