"use client";

import { Download, Smartphone, Crown } from "lucide-react";
import { captureScreenshot } from "@/lib/screenshot";
import { Platform } from "@/lib/types";
import { usePremium } from "@/components/shared/PremiumProvider";

interface ScreenshotButtonProps {
  previewRef: React.RefObject<HTMLDivElement | null>;
  platform: Platform;
  showPhoneFrame: boolean;
  onToggleFrame: () => void;
}

export default function ScreenshotButton({
  previewRef,
  platform,
  showPhoneFrame,
  onToggleFrame,
}: ScreenshotButtonProps) {
  const { features, isPremium, openUpgradeModal } = usePremium();

  const handleDownload = async () => {
    if (!previewRef.current) return;
    await captureScreenshot(previewRef.current, platform, features);
  };

  const handleHDDownload = () => {
    if (!isPremium) {
      openUpgradeModal();
      return;
    }
    handleDownload();
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Export
        </h3>
        {!isPremium && (
          <button
            onClick={openUpgradeModal}
            className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-200"
          >
            <Crown className="h-3 w-3" />
            Upgrade to PRO
          </button>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700"
        >
          <Download className="h-4 w-4" />
          Download PNG
        </button>

        {!isPremium && (
          <button
            onClick={handleHDDownload}
            className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm font-medium text-amber-700 transition-colors hover:bg-amber-100"
          >
            <Crown className="h-4 w-4" />
            HD 4x
          </button>
        )}

        <button
          onClick={onToggleFrame}
          className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
            showPhoneFrame
              ? "border-indigo-200 bg-indigo-50 text-indigo-700"
              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Smartphone className="h-4 w-4" />
          Frame
        </button>
      </div>

      {!isPremium && (
        <p className="text-xs text-gray-400">
          Free downloads include a small watermark.{" "}
          <button
            onClick={openUpgradeModal}
            className="text-indigo-600 hover:underline"
          >
            Upgrade
          </button>{" "}
          to remove.
        </p>
      )}
    </div>
  );
}
