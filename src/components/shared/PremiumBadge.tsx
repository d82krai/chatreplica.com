"use client";

import { Crown } from "lucide-react";
import { usePremium } from "./PremiumProvider";

export default function PremiumBadge() {
  const { isPremium, openUpgradeModal } = usePremium();

  if (isPremium) return null;

  return (
    <button
      onClick={openUpgradeModal}
      className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-200"
    >
      <Crown className="h-3 w-3" />
      PRO
    </button>
  );
}
