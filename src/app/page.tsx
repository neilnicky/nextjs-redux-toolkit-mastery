"use client";
import { RootState } from "@/store";
import { toggleTheme } from "@/store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import { ClientGreeting } from "./components/client-greeting";

export default function Home() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const themeClass =
    themeMode === "dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={`h-screen grid place-items-center ${themeClass}`}>
      <ClientGreeting />
      <Auth />
      <Counter />
      <div>
        <h1 className="text-center">Current Theme: {themeMode}</h1>
        <button onClick={() => dispatch(toggleTheme())} className="mt-4">
          Toggle Theme
        </button>
      </div>
      <Todos />
    </div>
  );
}
