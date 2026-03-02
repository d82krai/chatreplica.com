"use client";

import { useState } from "react";
import { X, Check, Crown, CheckCircle } from "lucide-react";
import { usePremium } from "./PremiumProvider";
import PayPalButton from "./PayPalButton";

const features = [
  { label: "Export resolution", free: "2x Retina", premium: "4x Ultra HD" },
  { label: "Watermark", free: "Small watermark", premium: "No watermark" },
  { label: "Messages per chat", free: "Up to 20", premium: "Unlimited" },
  { label: "All 4 platforms", free: true, premium: true },
  { label: "Phone frame option", free: true, premium: true },
  { label: "Custom timestamps", free: true, premium: true },
  { label: "Batch export", free: false, premium: true },
  { label: "Custom backgrounds", free: false, premium: true },
  { label: "Priority new features", free: false, premium: true },
];

export default function UpgradeModal() {
  const { showUpgradeModal, closeUpgradeModal, activatePremium } =
    usePremium();
  const [success, setSuccess] = useState(false);

  if (!showUpgradeModal) return null;

  const handleSubscriptionApproved = (subscriptionId: string) => {
    activatePremium(subscriptionId);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setSuccess(false);
            closeUpgradeModal();
          }}
        />
        <div className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Welcome to Premium!
          </h2>
          <p className="mt-2 text-gray-600">
            Your account has been upgraded. Enjoy HD exports, no watermarks, and
            all premium features.
          </p>
          <button
            onClick={() => {
              setSuccess(false);
              closeUpgradeModal();
            }}
            className="mt-6 w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Start Creating
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeUpgradeModal}
      />

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-amber-500" />
            <h2 className="text-lg font-bold text-gray-900">
              Upgrade to Premium
            </h2>
          </div>
          <button
            onClick={closeUpgradeModal}
            className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <p className="text-gray-600">
            Unlock HD exports, remove watermarks, and access premium features.
          </p>

          {/* Feature comparison */}
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-gray-600">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-gray-600">
                    Free
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-amber-700">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={f.label}
                    className={
                      i < features.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }
                  >
                    <td className="px-4 py-2.5 text-gray-700">{f.label}</td>
                    <td className="px-4 py-2.5 text-center">
                      {typeof f.free === "boolean" ? (
                        f.free ? (
                          <Check className="mx-auto h-4 w-4 text-green-500" />
                        ) : (
                          <span className="text-gray-300">&mdash;</span>
                        )
                      ) : (
                        <span className="text-gray-500">{f.free}</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      {typeof f.premium === "boolean" ? (
                        f.premium ? (
                          <Check className="mx-auto h-4 w-4 text-amber-500" />
                        ) : (
                          <span className="text-gray-300">&mdash;</span>
                        )
                      ) : (
                        <span className="font-medium text-amber-700">
                          {f.premium}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing + PayPal */}
          <div className="mt-6 rounded-xl border-2 border-amber-200 bg-amber-50 p-5">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                $4.99
                <span className="text-base font-normal text-gray-500">
                  /month
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                Cancel anytime. No commitment.
              </p>
            </div>

            <div className="mt-4">
              <PayPalButton
                onSubscriptionApproved={handleSubscriptionApproved}
              />
            </div>

            <p className="mt-3 text-center text-xs text-gray-500">
              Secure payment via PayPal. Cancel anytime from your PayPal
              account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
