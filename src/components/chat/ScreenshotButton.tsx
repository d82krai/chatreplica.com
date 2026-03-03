"use client";

import { Download, Smartphone, Keyboard, Moon } from "lucide-react";
import { captureScreenshot } from "@/lib/screenshot";
import { Platform } from "@/lib/types";

interface ScreenshotButtonProps {
  previewRef: React.RefObject<HTMLDivElement | null>;
  platform: Platform;
  showPhoneFrame: boolean;
  onToggleFrame: () => void;
  showKeyboard?: boolean;
  onToggleKeyboard?: () => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export default function ScreenshotButton({
  previewRef,
  platform,
  showPhoneFrame,
  onToggleFrame,
  showKeyboard,
  onToggleKeyboard,
  darkMode,
  onToggleDarkMode,
}: ScreenshotButtonProps) {
  const handleDownload = async () => {
    if (!previewRef.current) return;
    await captureScreenshot(previewRef.current, platform);
  };

  const activeClass = "border-indigo-200 bg-indigo-50 text-indigo-700";
  const inactiveClass = "border-gray-200 bg-white text-gray-600 hover:bg-gray-50";

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Export
      </h3>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700"
        >
          <Download className="h-4 w-4" />
          Download HD PNG
        </button>

        <button
          onClick={onToggleFrame}
          className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
            showPhoneFrame ? activeClass : inactiveClass
          }`}
        >
          <Smartphone className="h-4 w-4" />
          Frame
        </button>

        {onToggleDarkMode && (
          <button
            onClick={onToggleDarkMode}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
              darkMode ? activeClass : inactiveClass
            }`}
          >
            <Moon className="h-4 w-4" />
            Dark
          </button>
        )}

        {onToggleKeyboard && (
          <button
            onClick={onToggleKeyboard}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
              showKeyboard ? activeClass : inactiveClass
            }`}
          >
            <Keyboard className="h-4 w-4" />
            Keyboard
          </button>
        )}
      </div>
    </div>
  );
}
