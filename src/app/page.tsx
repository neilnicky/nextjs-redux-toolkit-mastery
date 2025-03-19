import { Suspense } from "react";
import { fetchData } from "@/lib/api";
import ClientComponent from "./components/ClientComponent";

export default async function Page() {
  const data = await fetchData(); // Fetch data on the server
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent serverData={data} />
    </Suspense>
  );
}
