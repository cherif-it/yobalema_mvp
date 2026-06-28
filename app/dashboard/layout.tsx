import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">
        <h1 className="font-bold mb-6">🚚 Yobalema</h1>

        <nav className="space-y-2 text-sm">
          <a href="/dashboard">Home</a>
          <a href="/dashboard/shipments">Shipments</a>
          <a href="/dashboard/availabilities">Availabilities</a>
          <a href="/dashboard/bookings">Bookings</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}