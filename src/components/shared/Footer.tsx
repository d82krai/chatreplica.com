import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-indigo-400" />
              <span className="text-lg font-bold text-white">ChatReplica</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Free online fake chat screenshot generator. Create pixel-perfect
              dummy conversations for WhatsApp, Messenger, Instagram &amp; X.
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

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Information
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-400">100% Free &amp; No Sign-up</li>
              <li className="text-sm text-gray-400">All Processing in Browser</li>
              <li className="text-sm text-gray-400">No Data Stored on Servers</li>
              <li className="text-sm text-gray-400">No Watermarks</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ChatReplica.com. All rights reserved.</p>
          <p className="mt-1">
            Not affiliated with WhatsApp, Meta, Instagram, or X.
          </p>
        </div>
      </div>
    </footer>
  );
}
