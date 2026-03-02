import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-indigo-400" />
              <span className="text-lg font-bold text-white">ChatReplica</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Free online chat mockup generator. Create pixel-perfect
              conversation mockups for WhatsApp, Messenger, Instagram &amp; X.
            </p>
          </div>

          {/* Generators */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Generators
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/whatsapp" className="text-sm text-gray-400 transition-colors hover:text-green-400">
                  WhatsApp Chat Generator
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="text-sm text-gray-400 transition-colors hover:text-blue-400">
                  Facebook Messenger Generator
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="text-sm text-gray-400 transition-colors hover:text-pink-400">
                  Instagram DM Generator
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-sm text-gray-400 transition-colors hover:text-sky-400">
                  X (Twitter) DM Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-400 transition-colors hover:text-indigo-400">
                  Blog
                </Link>
              </li>
              <li className="text-sm text-gray-400">100% Free &amp; No Sign-up</li>
              <li className="text-sm text-gray-400">All Processing in Browser</li>
              <li className="text-sm text-gray-400">High Quality PNG Export</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ChatReplica.com. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/privacy" className="transition-colors hover:text-gray-300">Privacy Policy</Link>
            {" · "}
            <Link href="/terms" className="transition-colors hover:text-gray-300">Terms of Service</Link>
            {" · "}
            Not affiliated with WhatsApp, Meta, Instagram, or X.
          </p>
        </div>
      </div>
    </footer>
  );
}
