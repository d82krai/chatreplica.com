"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface GeneratorLayoutProps {
  editor: React.ReactNode;
  preview: React.ReactNode;
  previewRef: React.RefObject<HTMLDivElement | null>;
}

export default function GeneratorLayout({
  editor,
  preview,
  previewRef,
}: GeneratorLayoutProps) {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile tab bar */}
      <div className="sticky top-[57px] z-40 flex border-b border-gray-200 bg-white lg:hidden">
        <button
          onClick={() => setActiveTab("edit")}
          className={cn(
            "flex-1 py-3 text-center text-sm font-medium transition-colors",
            activeTab === "edit"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          Edit
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={cn(
            "flex-1 py-3 text-center text-sm font-medium transition-colors",
            activeTab === "preview"
              ? "border-b-2 border-indigo-600 text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          Preview
        </button>
      </div>

      {/* Editor Panel */}
      <div
        className={cn(
          "custom-scrollbar w-full overflow-y-auto border-r border-gray-200 bg-gray-50 p-4 lg:block lg:w-[420px] lg:p-6",
          activeTab === "edit" ? "block" : "hidden"
        )}
        style={{ maxHeight: "calc(100vh - 57px)" }}
      >
        {editor}
      </div>

      {/* Preview Panel */}
      <div
        className={cn(
          "flex flex-1 flex-col items-center justify-start bg-gray-100 p-4 lg:block lg:p-8",
          activeTab === "preview" ? "block" : "hidden"
        )}
        style={{ minHeight: "calc(100vh - 57px)" }}
      >
        <div className="flex w-full flex-col items-center">
          <div ref={previewRef}>{preview}</div>
        </div>
      </div>
    </div>
  );
}
