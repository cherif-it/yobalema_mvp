import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">📊 Dashboard</h1>
        <p className="text-gray-500">
          Welcome to your logistics platform
        </p>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/create-shipment"
          className="p-4 bg-black text-white rounded"
        >
          ➕ Create Shipment
        </Link>

        <Link
          href="/create-availability"
          className="p-4 bg-gray-800 text-white rounded"
        >
          🚚 Add Availability
        </Link>

        <Link
          href="/dashboard/matches"
          className="p-4 bg-gray-200 rounded"
        >
          🤝 View Matches
        </Link>
      </div>

      {/* INFO CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Shipments</p>
          <p className="text-xl font-bold">--</p>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Bookings</p>
          <p className="text-xl font-bold">--</p>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Matches</p>
          <p className="text-xl font-bold">--</p>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm text-gray-500">Availabilities</p>
          <p className="text-xl font-bold">--</p>
        </div>
      </div>
    </div>
  );
}