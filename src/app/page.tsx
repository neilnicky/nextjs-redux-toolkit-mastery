"use client";

import { Suspense } from "react";
import { useSelector } from "react-redux";
import ClientComponent from "./components/ClientComponent";
import { RootState } from "@/store/store";

export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);

  console.log(user);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent />
    </Suspense>
  );
}
