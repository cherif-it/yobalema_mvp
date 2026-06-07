import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-xl font-bold mb-6">
          🚚 Yobalema
        </h1>

        <nav className="flex flex-col gap-3">
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/shipments">Shipments</Link>
          <Link href="/dashboard/availability">Availability</Link>
          <Link href="/dashboard/matches">Matches</Link>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}