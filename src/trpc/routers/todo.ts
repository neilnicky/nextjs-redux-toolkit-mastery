import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

export const todoRouter = createTRPCRouter({
  addTodo: baseProcedure.input(z.object({
    
  })),
});
