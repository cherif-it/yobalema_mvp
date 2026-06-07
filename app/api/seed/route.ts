export const runtime = "nodejs";

import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.upsert({
    where: {
      email: "test@yobalema.com",
    },
    update: {},
    create: {
      name: "Test User",
      email: "test@yobalema.com",
      password: "123456",
      role: "EXPEDITOR",
    },
  });

  return Response.json(user);
}