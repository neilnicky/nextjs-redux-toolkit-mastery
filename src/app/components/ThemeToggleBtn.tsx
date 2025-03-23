"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
import { RootState } from "@/store/store";
import { MoonStar, Sun } from "lucide-react";

export default function ThemeToggleButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "dark" ? <Sun /> : <MoonStar />}
    </button>
  );
}
