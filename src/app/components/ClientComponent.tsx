"use client";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function ClientComponent() {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
