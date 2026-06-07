"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardHome() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome {session.user?.email}
      </h1>

      <p className="text-gray-600 mt-2">
        Role: {(session.user as any)?.role}
      </p>
    </div>
  );
}