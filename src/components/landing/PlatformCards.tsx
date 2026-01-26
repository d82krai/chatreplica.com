import Link from "next/link";
import { ArrowRight } from "lucide-react";

const platforms = [
  {
    href: "/whatsapp",
    name: "WhatsApp",
    color: "#25D366",
    bg: "bg-green-50",
    border: "border-green-200",
    features: ["Blue double-tick read receipts", "WhatsApp doodle background", "Last seen / online status"],
  },
  {
    href: "/facebook",
    name: "Facebook Messenger",
    color: "#0084FF",
    bg: "bg-blue-50",
    border: "border-blue-200",
    features: ["Seen with avatar indicator", "Blue pill-shaped sent bubbles", "Active now / last active status"],
  },
  {
    href: "/instagram",
    name: "Instagram DM",
    color: "#E1306C",
    bg: "bg-pink-50",
    border: "border-pink-200",
    features: ["Seen text indicator", "Gradient-compatible styling", "Clean minimal interface"],
  },
  {
    href: "/twitter",
    name: "X (Twitter) DM",
    color: "#1D9BF0",
    bg: "bg-sky-50",
    border: "border-sky-200",
    features: ["Read receipt with avatar", "@handle display", "Blue sent message bubbles"],
  },
];

export default function PlatformCards() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Choose Your Platform
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Each generator replicates the exact UI of the platform for
          pixel-perfect screenshots.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`group rounded-2xl border ${p.border} ${p.bg} p-6 transition-all hover:-translate-y-1 hover:shadow-lg`}
            >
              <div
                className="mb-4 inline-block rounded-lg px-3 py-1.5 text-sm font-bold text-white"
                style={{ backgroundColor: p.color }}
              >
                {p.name}
              </div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: p.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 flex items-center gap-1 text-sm font-semibold transition-colors"
                style={{ color: p.color }}
              >
                Start Creating
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
