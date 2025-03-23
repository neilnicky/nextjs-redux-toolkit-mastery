"use client";

import { Suspense } from "react";
import { useSelector } from "react-redux";
import ClientComponent from "./components/ClientComponent";
import { RootState } from "@/store/store";
import ThemeToggleButton from "./components/ThemeToggleBtn";

export default function Home() {
  // const user = useSelector((state: RootState) => state.user.user);
  // console.log(user);

  const theme = useSelector((state: RootState) => state.theme.mode); // Read theme from Redux

  return (
    <div className={`h-screen ${theme === "dark" ? "bg-black" : "bg-white text-black"}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col items-center space-y-4 p-4">
          <ThemeToggleButton />
          <ClientComponent />
        </div>
      </Suspense>
    </div>
  );
}
