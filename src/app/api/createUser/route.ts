import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log("Error creating user", error);
    return new Response("Failed to create user", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
