"use client";

import Link from "next/link";
import {
  ArrowRight,
  Package,
  Truck,
  Globe,
  ShieldCheck,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[550px] w-[550px] rounded-full bg-blue-100 blur-3xl opacity-60" />

      <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-cyan-100 blur-3xl opacity-60" />

      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 py-24 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚚 Africa's Smart Freight Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">

            Ship
            <span className="text-blue-600">
              {" "}Smarter.
            </span>

            <br />

            Deliver
            <span className="text-blue-600">
              {" "}Faster.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

            Connect shippers with verified transporters,
            automate freight matching,
            and manage logistics across Africa from one platform.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/register"
              className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Start Free

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/login"
              className="rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </Link>

          </div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-bold text-blue-600">
                5K+
              </h2>

              <p className="mt-2 text-slate-500">
                Shipments
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-blue-600">
                1.2K
              </h2>

              <p className="mt-2 text-slate-500">
                Transporters
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-blue-600">
                98%
              </h2>

              <p className="mt-2 text-slate-500">
                Success Rate
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          {/* Main Card */}

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Live Shipment
                </p>

                <h3 className="text-2xl font-bold">
                  Dakar → Abidjan
                </h3>

              </div>

              <div className="rounded-2xl bg-blue-600 p-4 text-white">
                <Truck size={30} />
              </div>

            </div>

            <div className="space-y-6">

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">

                <div className="flex items-center gap-4">

                  <MapPin className="text-blue-600" />

                  <div>

                    <p className="font-semibold">
                      Origin
                    </p>

                    <p className="text-sm text-slate-500">
                      Dakar
                    </p>

                  </div>

                </div>

                <Package className="text-blue-600" />

              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">

                <div className="flex items-center gap-4">

                  <Globe className="text-green-600" />

                  <div>

                    <p className="font-semibold">
                      Destination
                    </p>

                    <p className="text-sm text-slate-500">
                      Abidjan
                    </p>

                  </div>

                </div>

                <TrendingUp className="text-green-600" />

              </div>

              <div className="rounded-2xl bg-blue-600 p-6 text-white">

                <div className="flex items-center gap-3">

                  <ShieldCheck />

                  Verified Transporter Found

                </div>

                <p className="mt-4 text-blue-100">

                  Match probability

                </p>

                <h2 className="mt-2 text-5xl font-bold">
                  96%
                </h2>

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-10 -left-10 hidden rounded-3xl bg-white p-6 shadow-2xl lg:block">

            <p className="text-sm text-slate-500">
              Monthly Growth
            </p>

            <h2 className="mt-2 text-4xl font-bold text-green-600">
              +38%
            </h2>

          </div>

          {/* Floating Card */}

          <div className="absolute -right-8 -top-8 hidden rounded-3xl bg-white p-6 shadow-2xl lg:block">

            <p className="text-sm text-slate-500">
              Active Matches
            </p>

            <h2 className="mt-2 text-4xl font-bold text-blue-600">
              184
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}