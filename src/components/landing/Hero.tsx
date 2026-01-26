import Link from "next/link";
import { MessageSquare } from "lucide-react";

const platforms = [
  { href: "/whatsapp", label: "WhatsApp", color: "bg-[#25D366] hover:bg-[#1da851]" },
  { href: "/facebook", label: "Messenger", color: "bg-[#0084FF] hover:bg-[#006acc]" },
  { href: "/instagram", label: "Instagram", color: "bg-[#E1306C] hover:bg-[#c91357]" },
  { href: "/twitter", label: "X (Twitter)", color: "bg-[#1D9BF0] hover:bg-[#0d8cde]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
          <MessageSquare className="h-4 w-4" />
          100% Free &mdash; No Sign-up Required
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Create Realistic Fake
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Chat Screenshots
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Generate pixel-perfect fake chat conversations for WhatsApp, Facebook
          Messenger, Instagram DMs, and X (Twitter) DMs. Download as PNG
          instantly.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {platforms.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`${p.color} rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg sm:px-6 sm:text-base`}
            >
              {p.label}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          No watermarks &middot; No data stored &middot; Works on all devices
        </p>
      </div>
    </section>
  );
}
