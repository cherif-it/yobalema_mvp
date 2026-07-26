import Link from "next/link";
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                <Truck />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Yobalema
                </h2>

                <p className="text-sm text-slate-400">
                  Smart Freight Platform
                </p>
              </div>

            </div>

            <p className="leading-7 text-slate-400">
              Connecting shippers and transporters across Africa with a
              modern logistics marketplace powered by intelligent freight
              matching.
            </p>

          </div>

          {/* Platform */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Platform
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  href="/register"
                  className="hover:text-white"
                >
                  Create Account
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="hover:text-white"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white"
                >
                  Dashboard
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#routes" className="hover:text-white">
                  Popular Routes
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                contact@yobalema.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +221 77 000 00 00
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Dakar, Senegal
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Send size={18} />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} Yobalema — Smart Freight Platform.
          All rights reserved.

        </div>

      </div>
    </footer>
  );
}