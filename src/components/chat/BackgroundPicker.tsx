"use client";

import { useRef } from "react";
import { ImagePlus, X } from "lucide-react";
import { ChatAction } from "@/lib/types";

interface BackgroundPickerProps {
  customBackground: string | null;
  dispatch: React.Dispatch<ChatAction>;
}

export default function BackgroundPicker({ customBackground, dispatch }: BackgroundPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      dispatch({ type: "SET_CUSTOM_BACKGROUND", payload: result });
    };
    reader.readAsDataURL(file);
    // Reset input so the same file can be re-selected
    e.target.value = "";
  };

  const handleReset = () => {
    dispatch({ type: "SET_CUSTOM_BACKGROUND", payload: null });
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Chat Background
      </h3>

      <div className="flex items-center gap-2">
        <button
          onClick={() => inputRef.current?.click()}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:border-indigo-400 hover:text-indigo-600"
        >
          <ImagePlus className="h-4 w-4" />
          {customBackground ? "Change Background" : "Upload Background"}
        </button>

        {customBackground && (
          <button
            onClick={handleReset}
            title="Reset to default"
            className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:border-red-200 hover:text-red-500"
          >
            <X className="h-4 w-4" />
            Reset
          </button>
        )}
      </div>

      {customBackground && (
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <img
            src={customBackground}
            alt="Custom background preview"
            className="h-16 w-full object-cover"
          />
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
