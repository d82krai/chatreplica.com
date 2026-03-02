export type PremiumTier = "free" | "premium";

export interface PremiumFeatures {
  exportScale: number;
  showWatermark: boolean;
  batchExport: boolean;
  customBackgrounds: boolean;
  maxMessages: number;
}

export const FREE_FEATURES: PremiumFeatures = {
  exportScale: 2,
  showWatermark: true,
  batchExport: false,
  customBackgrounds: false,
  maxMessages: 20,
};

export const PREMIUM_FEATURES: PremiumFeatures = {
  exportScale: 4,
  showWatermark: false,
  batchExport: true,
  customBackgrounds: true,
  maxMessages: 999,
};

export function getFeatures(tier: PremiumTier): PremiumFeatures {
  return tier === "premium" ? PREMIUM_FEATURES : FREE_FEATURES;
}
