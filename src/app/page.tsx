"use client";

import { RootState } from "@/store";
import { decrement, increment, reset } from "@/store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
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
    </div>
  );
}
