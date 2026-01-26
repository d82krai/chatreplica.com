"use client";

import { Download, Smartphone } from "lucide-react";
import { captureScreenshot } from "@/lib/screenshot";
import { Platform } from "@/lib/types";

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
  const handleDownload = async () => {
    if (!previewRef.current) return;
    await captureScreenshot(previewRef.current, platform);
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Export
      </h3>

      <div className="flex gap-2">
        <button
          onClick={handleDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700"
        >
          <Download className="h-4 w-4" />
          Download PNG
        </button>

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
    </div>
  );
}
