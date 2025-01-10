'use client';

import { trpc } from "@/trpc/client";


export function ClientGreeting() {

  const greeting = trpc.hello.useQuery({ text: "jacky" });
  if (!greeting.data) return <div>Loading...</div>;

  return <div>{greeting.data.greeting}</div>;
}