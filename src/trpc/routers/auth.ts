import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
  addUser: baseProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const user = await prisma.user.create({
          data: {
            name: input.name,
            email: input.email,
          },
        });
        return user;
      } catch (error) {
        throw new TRPCError({
          message: `Failed to create user, ${error}`,
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
});
export type AppRouter = typeof authRouter;
