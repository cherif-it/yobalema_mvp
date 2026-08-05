"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [role, setRole] = useState<"EXPEDITOR" | "TRANSPORTER">("EXPEDITOR");

  return (
    <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-slate-200 p-10">

      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-slate-900">
          🚚 Yobalema
        </h1>

        <p className="mt-3 text-slate-500">
          Créez votre compte gratuitement
        </p>

      </div>

      <form className="space-y-6">

        <div>

          <label className="block mb-2 font-medium">
            Nom complet
          </label>

          <input
            type="text"
            className="w-full rounded-xl border p-4"
            placeholder="Votre nom"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            className="w-full rounded-xl border p-4"
            placeholder="email@exemple.com"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">
            Mot de passe
          </label>

          <input
            type="password"
            className="w-full rounded-xl border p-4"
            placeholder="********"
          />

        </div>

        <div>

          <label className="block mb-4 font-medium">
            Je suis
          </label>

          <div className="grid grid-cols-2 gap-4">

            <button
              type="button"
              onClick={() => setRole("EXPEDITOR")}
              className={`rounded-2xl border p-6 transition ${
                role === "EXPEDITOR"
                  ? "border-sky-600 bg-sky-50"
                  : "border-slate-200"
              }`}
            >
              <div className="text-3xl mb-3">📦</div>

              <h3 className="font-semibold">
                Expéditeur
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Je publie des colis
              </p>

            </button>

            <button
              type="button"
              onClick={() => setRole("TRANSPORTER")}
              className={`rounded-2xl border p-6 transition ${
                role === "TRANSPORTER"
                  ? "border-sky-600 bg-sky-50"
                  : "border-slate-200"
              }`}
            >
              <div className="text-3xl mb-3">🚚</div>

              <h3 className="font-semibold">
                Transporteur
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Je publie mes trajets
              </p>

            </button>

          </div>

        </div>

        <button
          className="w-full rounded-xl bg-sky-600 hover:bg-sky-700 text-white py-4 font-semibold transition"
        >
          Créer mon compte
        </button>

      </form>

      <div className="text-center mt-8 text-sm text-slate-500">

        Déjà inscrit ?

        <a
          href="/login"
          className="text-sky-600 ml-2 font-medium"
        >
          Se connecter
        </a>

      </div>

    </div>
  );
}