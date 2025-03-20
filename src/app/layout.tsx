import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";
import { TRPCProvider } from "@/trpc/client";
import { fetchData } from "@/lib/api";

export const metadata: Metadata = {
  title: "My App",
  description: "Learning Redux Toolkit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await fetchData();

  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          <StoreProvider user={user}>{children}</StoreProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
