"use client";

import { Check, X as XIcon, Crown } from "lucide-react";
import { usePremium } from "@/components/shared/PremiumProvider";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started",
    cta: "Get Started",
    ctaHref: "/whatsapp",
    highlighted: false,
    features: [
      { label: "All 4 messaging platforms", included: true },
      { label: "Real-time preview", included: true },
      { label: "Custom timestamps & read receipts", included: true },
      { label: "Phone frame option", included: true },
      { label: "2x Retina PNG export", included: true },
      { label: "Small watermark on exports", included: true },
      { label: "Up to 20 messages per chat", included: true },
      { label: "4x Ultra HD export", included: false },
      { label: "Watermark-free downloads", included: false },
      { label: "Batch export", included: false },
      { label: "Custom backgrounds", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/month",
    lifetimePrice: "$29.99 one-time",
    description: "For power users and professionals",
    cta: "Upgrade to Premium",
    highlighted: true,
    features: [
      { label: "All 4 messaging platforms", included: true },
      { label: "Real-time preview", included: true },
      { label: "Custom timestamps & read receipts", included: true },
      { label: "Phone frame option", included: true },
      { label: "4x Ultra HD PNG export", included: true },
      { label: "No watermark on exports", included: true },
      { label: "Unlimited messages per chat", included: true },
      { label: "Batch export all platforms", included: true },
      { label: "Custom backgrounds", included: true },
      { label: "Priority access to new features", included: true },
    ],
  },
];

export default function PricingPage() {
  const { openUpgradeModal } = usePremium();

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border-2 p-8 ${
                plan.highlighted
                  ? "border-amber-300 bg-white shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  <Crown className="h-3 w-3" />
                  MOST POPULAR
                </div>
              )}

              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {"lifetimePrice" in plan && plan.lifetimePrice && (
                <p className="mt-1 text-sm text-gray-500">
                  or {plan.lifetimePrice}
                </p>
              )}

              {plan.highlighted ? (
                <button
                  onClick={openUpgradeModal}
                  className="mt-6 w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-lg"
                >
                  {plan.cta}
                </button>
              ) : (
                <a
                  href={plan.ctaHref}
                  className="mt-6 block w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  {plan.cta}
                </a>
              )}

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    {f.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    ) : (
                      <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
                    )}
                    <span
                      className={
                        f.included ? "text-sm text-gray-700" : "text-sm text-gray-400"
                      }
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Payment integration coming soon. All premium features will be
          available once payment is set up.
        </p>
      </div>
    </div>
  );
}
