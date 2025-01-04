"use client";

import { RootState } from "@/store";
import { decrement, increment } from "@/store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
