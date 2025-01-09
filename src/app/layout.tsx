import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import { TRPCProvider } from "@/trpc/client";

export const metadata: Metadata = {
  title: "My App",
  description: "Learning Redux Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
