"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Chargement...</div>;
  }

  if (!session) {
    return <div>Non connecté</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Connecté : {session.user?.email}
      </p>
    </div>
  );
}