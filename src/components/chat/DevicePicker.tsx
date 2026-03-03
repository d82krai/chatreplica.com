"use client";

import { ChatAction } from "@/lib/types";
import { DeviceFrameType, DEVICE_CONFIGS } from "@/lib/devices";

interface DevicePickerProps {
  deviceFrame: DeviceFrameType;
  dispatch: React.Dispatch<ChatAction>;
}

const DEVICE_GROUPS = [
  {
    brand: "No Frame",
    devices: [DEVICE_CONFIGS["none"]],
  },
  {
    brand: "Apple",
    devices: [DEVICE_CONFIGS["iphone-16-pro"], DEVICE_CONFIGS["iphone-14"]],
  },
  {
    brand: "Samsung",
    devices: [DEVICE_CONFIGS["samsung-s25"]],
  },
  {
    brand: "Google",
    devices: [DEVICE_CONFIGS["pixel-9"]],
  },
];

export default function DevicePicker({ deviceFrame, dispatch }: DevicePickerProps) {
  return (
    <div className="space-y-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
        Device Frame
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {DEVICE_GROUPS.map((group) => (
          <div key={group.brand} className="flex items-center gap-2">
            {group.brand !== "No Frame" && (
              <span className="text-[11px] font-medium text-gray-400">{group.brand}</span>
            )}
            {group.devices.map((device) => (
              <button
                key={device.id}
                onClick={() =>
                  dispatch({ type: "SET_DEVICE_FRAME", payload: device.id })
                }
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  deviceFrame === device.id
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {device.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
