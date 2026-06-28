"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-950 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">🚚 Yobalema</h1>

          <nav className="space-y-3">
            <Link href="/dashboard" className="block hover:bg-blue-800 p-2 rounded">
              📊 Dashboard
            </Link>

            <Link href="/dashboard/shipments" className="block hover:bg-blue-800 p-2 rounded">
              📦 Shipments
            </Link>

            <Link href="/dashboard/matches" className="block hover:bg-blue-800 p-2 rounded">
              🤝 Matches
            </Link>

            <Link href="/dashboard/bookings" className="block hover:bg-blue-800 p-2 rounded">
              📅 Bookings
            </Link>

            <Link href="/dashboard/availabilities" className="block hover:bg-blue-800 p-2 rounded">
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
      <main className="flex-1 relative">

        {/* MAP BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* CONTENT */}
        <div className="relative p-10">

          <h1 className="text-3xl font-bold mb-2">
            Get your freight quote now
          </h1>

          <p className="text-gray-700 mb-6">
            Connect shipments to transporters instantly across Africa.
          </p>

          {/* SEARCH BOX */}
          <div className="bg-sky-250 p-4 rounded-xl shadow-lg flex gap-3 items-center text-slate-800">
            <input
              placeholder="Origin"
              className="border p-2 rounded w-40"
            />

            <input
              placeholder="Destination"
              className="border p-2 rounded w-40"
            />

            <select className="border p-2 rounded">
              <option>Cargo Type</option>
              <option>Food</option>
              <option>Electronics</option>
              <option>Furniture</option>
            </select>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>

          {/* ROUTES */}
          <div className="mt-10">
            <h2 className="font-bold mb-4">Popular routes</h2>

            <div className="grid grid-cols-3 gap-3 bg-sky-250 p-3">
              {[
                "Paris → DAKAR",
                "LYON → DAKAR",
                "BORDEAUX → DAKAR",
                "Dakar → PARIS",
                "DAKAR → Lyon",
                "DAKAR → BORDEAUX",
              ].map((route) => (
                <div
                  key={route}
                  className="g-sky-300 p-3 rounded shadow hover:bg-gray-50 cursor-pointer"
                >
                  {route}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}