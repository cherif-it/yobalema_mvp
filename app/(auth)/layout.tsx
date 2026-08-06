import type { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-slate-50">

      {/* Partie gauche */}
      <section className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-sky-600 via-blue-700 to-slate-900 text-white p-14">

        <div>

          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
          >
            🚚 Yobalema
          </Link>

          <p className="mt-6 text-sky-100 text-lg leading-8 max-w-md">
            La plateforme logistique qui connecte expéditeurs et
            transporteurs partout en Afrique.
          </p>

        </div>

        <div>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-xl">
                📦 Publiez vos expéditions
              </h3>

              <p className="text-sky-100 mt-2">
                Trouvez rapidement un transporteur fiable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                🚚 Valorisez vos trajets
              </h3>

              <p className="text-sky-100 mt-2">
                Rentabilisez vos déplacements en transportant des colis.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                🤝 Matching intelligent
              </h3>

              <p className="text-sky-100 mt-2">
                Notre moteur rapproche automatiquement les offres et les besoins.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Partie droite */}
      <section className="flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-xl">
          {children}
        </div>

      </section>

    </main>
  );
}