"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-950 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">🚚 Yobalema</h1>

          <nav className="space-y-3">
            <Link href="/dashboard" className="block p-2 rounded bg-blue-800">
              📊 Dashboard
            </Link>

            <Link href="/dashboard/shipments" className="block p-2 rounded hover:bg-blue-800">
              📦 Shipments
            </Link>

            <Link href="/dashboard/matches" className="block p-2 rounded hover:bg-blue-800">
              🤝 Matches
            </Link>

            <Link href="/dashboard/bookings" className="block p-2 rounded hover:bg-blue-800">
              📅 Bookings
            </Link>

            <Link href="/dashboard/availabilities" className="block p-2 rounded hover:bg-blue-800">
              🚛 Availabilities
            </Link>
          </nav>
        </div>

        {/* USER */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full" />
          <span className="text-sm">User</span>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-2">
          📊 Dashboard
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to your logistics platform
        </p>

        {/* STATS CARDS */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-4 rounded shadow">
            📦 Shipments
          </div>

          <div className="bg-white p-4 rounded shadow">
            🤝 Matches
          </div>

          <div className="bg-white p-4 rounded shadow">
            📅 Bookings
          </div>

          <div className="bg-white p-4 rounded shadow">
            🚛 Availabilities
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="space-y-3">
          <Link
            href="/dashboard/shipments/new"
            className="block bg-blue-600 text-white p-3 rounded"
          >
            ➕ Create Shipment
          </Link>

          <Link
            href="/dashboard/availabilities/new"
            className="block bg-green-600 text-white p-3 rounded"
          >
            🚛 Add Availability
          </Link>

          <Link
            href="/dashboard/matches"
            className="block bg-black text-white p-3 rounded"
          >
            🤝 View Matches
          </Link>
        </div>

      </main>
    </div>
  );
}