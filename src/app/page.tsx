"use client";
import { Suspense } from "react";
import ClientComponent from "./components/ClientComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Page() {
  const user = useSelector((state: RootState) => state.user.user);

  console.log(user);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent />
      {user?.name}
    </Suspense>
  );
}
