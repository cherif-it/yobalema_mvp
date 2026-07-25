"use client";

import Link from "next/link";
import { ArrowRight, Package, Truck, MapPinned } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-20 lg:flex-row">

        {/* LEFT */}
        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚚 Smart Freight Matching Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Move Freight
            <br />
            <span className="text-blue-600">
              Faster.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Yobalema connects shippers and transporters through intelligent
            freight matching. Create shipments, discover available transporters
            and book deliveries across Africa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Started

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </Link>

          </div>

          {/* STATS */}

          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>

              <h2 className="text-3xl font-bold text-blue-600">
                5K+
              </h2>

              <p className="text-slate-500">
                Shipments
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-blue-600">
                2K+
              </h2>

              <p className="text-slate-500">
                Transporters
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-blue-600">
                98%
              </h2>

              <p className="text-slate-500">
                Match Success
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="mt-16 flex flex-1 justify-center lg:mt-0">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <div className="mb-6 flex items-center gap-3">

              <Package className="text-blue-600" />

              <h3 className="text-xl font-bold">
                Create Shipment
              </h3>

            </div>

            <div className="space-y-4">

              <input
                placeholder="Origin"
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder="Destination"
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder="Weight (kg)"
                className="w-full rounded-xl border p-3"
              />

              <button className="w-full rounded-xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700">
                Search Transporters
              </button>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-slate-100 p-4">

                <Truck className="mb-2 text-blue-600" />

                <p className="font-semibold">
                  Live Transporters
                </p>

              </div>

              <div className="rounded-xl bg-slate-100 p-4">

                <MapPinned className="mb-2 text-blue-600" />

                <p className="font-semibold">
                  Smart Matching
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}