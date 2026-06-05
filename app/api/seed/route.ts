export const runtime = "nodejs";

import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.create({
    data: {
      name: "Test User",
      email: "test@yobalema.com",
      password: "123456",
      role: "EXPEDITOR",
    },
  });

  return Response.json(user);
}