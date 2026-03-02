"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  PremiumTier,
  PremiumFeatures,
  getFeatures,
} from "@/lib/premium";

interface PremiumContextType {
  tier: PremiumTier;
  features: PremiumFeatures;
  isPremium: boolean;
  showUpgradeModal: boolean;
  openUpgradeModal: () => void;
  closeUpgradeModal: () => void;
  activatePremium: (subscriptionId: string) => void;
}

const PremiumContext = createContext<PremiumContextType>({
  tier: "free",
  features: getFeatures("free"),
  isPremium: false,
  showUpgradeModal: false,
  openUpgradeModal: () => {},
  closeUpgradeModal: () => {},
  activatePremium: () => {},
});

export function PremiumProvider({ children }: { children: React.ReactNode }) {
  const [tier, setTier] = useState<PremiumTier>("free");
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chatreplica_tier");
    if (stored === "premium") setTier("premium");
  }, []);

  const openUpgradeModal = useCallback(() => setShowUpgradeModal(true), []);
  const closeUpgradeModal = useCallback(() => setShowUpgradeModal(false), []);

  const activatePremium = useCallback((subscriptionId: string) => {
    localStorage.setItem("chatreplica_tier", "premium");
    localStorage.setItem("chatreplica_subscription_id", subscriptionId);
    setTier("premium");
    setShowUpgradeModal(false);
  }, []);

  const features = getFeatures(tier);

  return (
    <PremiumContext.Provider
      value={{
        tier,
        features,
        isPremium: tier === "premium",
        showUpgradeModal,
        openUpgradeModal,
        closeUpgradeModal,
        activatePremium,
      }}
    >
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
