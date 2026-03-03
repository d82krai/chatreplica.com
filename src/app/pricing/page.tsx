import { Check } from "lucide-react";
import Link from "next/link";

const features = [
  "All 4 messaging platforms (WhatsApp, Messenger, Instagram, X)",
  "Real-time preview",
  "Custom timestamps & read receipts",
  "Phone frame option",
  "4x Ultra HD PNG export",
  "No watermark on exports",
  "Unlimited messages per chat",
];

export default function PricingPage() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          100% Free. No Catch.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Every feature is completely free — no account, no subscription, no watermark.
        </p>

        <div className="mt-10 rounded-2xl border-2 border-indigo-200 bg-white p-8 text-left shadow-sm">
          <div className="text-center">
            <span className="text-5xl font-bold text-gray-900">$0</span>
            <span className="ml-1 text-gray-500">forever</span>
          </div>

          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-gray-700">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/whatsapp"
            className="mt-8 block w-full rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Start Creating — It&apos;s Free
          </Link>
        </div>
      </div>
    </div>
  );
}
