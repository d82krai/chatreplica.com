export type DeviceFrameType =
  | "none"
  | "iphone-16-pro"
  | "iphone-14"
  | "samsung-s25"
  | "pixel-9";

export interface DeviceConfig {
  id: DeviceFrameType;
  label: string;
  brand: "Apple" | "Samsung" | "Google";
  frameColor: string;
  frameWidth: number;
  outerRadius: number;
  innerRadius: number;
  cutout: "none" | "notch" | "dynamic-island" | "punch-hole";
}

export const DEVICE_CONFIGS: Record<DeviceFrameType, DeviceConfig> = {
  none: {
    id: "none",
    label: "No Frame",
    brand: "Apple",
    frameColor: "#E5E7EB",
    frameWidth: 1,
    outerRadius: 16,
    innerRadius: 12,
    cutout: "none",
  },
  "iphone-16-pro": {
    id: "iphone-16-pro",
    label: "iPhone 16 Pro",
    brand: "Apple",
    frameColor: "#8E8E93",
    frameWidth: 10,
    outerRadius: 54,
    innerRadius: 46,
    cutout: "dynamic-island",
  },
  "iphone-14": {
    id: "iphone-14",
    label: "iPhone 14",
    brand: "Apple",
    frameColor: "#1C1C1E",
    frameWidth: 10,
    outerRadius: 46,
    innerRadius: 38,
    cutout: "notch",
  },
  "samsung-s25": {
    id: "samsung-s25",
    label: "Galaxy S25",
    brand: "Samsung",
    frameColor: "#1C1C1C",
    frameWidth: 8,
    outerRadius: 44,
    innerRadius: 38,
    cutout: "punch-hole",
  },
  "pixel-9": {
    id: "pixel-9",
    label: "Pixel 9",
    brand: "Google",
    frameColor: "#1C1C1E",
    frameWidth: 8,
    outerRadius: 40,
    innerRadius: 34,
    cutout: "punch-hole",
  },
};

export const DEVICE_LIST: DeviceConfig[] = Object.values(DEVICE_CONFIGS);
