"use client";

import {
  MapPin,
  ArrowRight,
  Truck,
  Globe,
} from "lucide-react";

const routes = [
  {
    from: "Dakar",
    to: "Bamako",
    progress: "92%",
  },
  {
    from: "Abidjan",
    to: "Accra",
    progress: "87%",
  },
  {
    from: "Lagos",
    to: "Douala",
    progress: "95%",
  },
  {
    from: "Nairobi",
    to: "Kampala",
    progress: "89%",
  },
];

export default function AfricaNetwork() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            AFRICAN NETWORK
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Connecting Africa
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            Yobalema builds intelligent logistics corridors connecting
            transporters and shippers throughout Africa.
          </p>

        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          {/* Carte */}

          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl">

            <div className="absolute inset-0 opacity-10">

              <div className="absolute left-10 top-10 h-72 w-72 rounded-full border border-white"></div>

              <div className="absolute right-12 bottom-10 h-48 w-48 rounded-full border border-white"></div>

            </div>

            <div className="relative">

              <div className="flex items-center gap-3">

                <Globe size={32} />

                <h3 className="text-3xl font-bold">
                  Africa Logistics Network
                </h3>

              </div>

              <div className="mt-14 space-y-8">

                {routes.map((route) => (
                  <div
                    key={route.from}
                    className="rounded-2xl bg-white/10 p-5 backdrop-blur"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <MapPin />

                        {route.from}

                      </div>

                      <ArrowRight />

                      <div className="flex items-center gap-3">

                        {route.to}

                        <Truck />

                      </div>

                    </div>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">

                      <div
                        className="h-full rounded-full bg-green-400"
                        style={{
                          width: route.progress,
                        }}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="grid gap-8">

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="text-5xl font-bold text-blue-600">
                12
              </h3>

              <p className="mt-3 text-xl text-slate-600">
                Countries Connected
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="text-5xl font-bold text-green-600">
                250+
              </h3>

              <p className="mt-3 text-xl text-slate-600">
                Daily Transport Offers
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="text-5xl font-bold text-cyan-600">
                98%
              </h3>

              <p className="mt-3 text-xl text-slate-600">
                Successful Matches
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="text-5xl font-bold text-orange-500">
                24/7
              </h3>

              <p className="mt-3 text-xl text-slate-600">
                Platform Availability
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}