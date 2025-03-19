// Initialize the Redux store once with useRef.
// takes server fetched data as prop
// dispatches the initiazileuser to populate the store
// wraps the children components

"use client";

import { AppStore, initializeUser, makeStore, User } from "@/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeUser(user));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
