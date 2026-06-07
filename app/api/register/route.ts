import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      return Response.json(
        { error: "Email déjà utilisé" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(
      body.password,
      10
    );

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        role: body.role || "EXPEDITOR",
      },
    });

    return Response.json(user);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}