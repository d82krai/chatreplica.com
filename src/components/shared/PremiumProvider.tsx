"use client";

import { createContext, useContext } from "react";
import { PremiumFeatures, PREMIUM_FEATURES } from "@/lib/premium";

interface PremiumContextType {
  isPremium: boolean;
  features: PremiumFeatures;
  openUpgradeModal: () => void;
  closeUpgradeModal: () => void;
  showUpgradeModal: boolean;
  activatePremium: (subscriptionId: string) => void;
}

const PremiumContext = createContext<PremiumContextType>({
  isPremium: true,
  features: PREMIUM_FEATURES,
  openUpgradeModal: () => {},
  closeUpgradeModal: () => {},
  showUpgradeModal: false,
  activatePremium: () => {},
});

export function PremiumProvider({ children }: { children: React.ReactNode }) {
  return (
    <PremiumContext.Provider
      value={{
        isPremium: true,
        features: PREMIUM_FEATURES,
        openUpgradeModal: () => {},
        closeUpgradeModal: () => {},
        showUpgradeModal: false,
        activatePremium: () => {},
      }}
    >
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
