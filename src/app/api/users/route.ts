import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log("Error fetching users", error);
    return new Response("Failed to fetch user", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}

export async function PUT(req: NextRequest) {
  const { id, name, email } = await req.json();
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const user = await prisma.user.delete({
      where: { id },
    });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}
