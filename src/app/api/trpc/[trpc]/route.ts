import { createTRPCContext } from "@/trpc/init";
import { authRouter } from "@/trpc/routers/auth";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: authRouter,
    createContext: createTRPCContext,
  });
export { handler as GET, handler as POST };
