import { DeviceFrameType, DEVICE_CONFIGS } from "@/lib/devices";

interface PhoneFrameProps {
  children: React.ReactNode;
  deviceFrame: DeviceFrameType;
}

function TopCutout({ type }: { type: "none" | "notch" | "dynamic-island" | "punch-hole" }) {
  if (type === "dynamic-island") {
    return (
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 126,
          height: 34,
          backgroundColor: "#000000",
          borderRadius: 20,
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    );
  }
  if (type === "notch") {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 154,
          height: 28,
          backgroundColor: "#000000",
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    );
  }
  if (type === "punch-hole") {
    return (
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 12,
          height: 12,
          backgroundColor: "#000000",
          borderRadius: "50%",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
    );
  }
  return null;
}

function HomeIndicator({ brand }: { brand: "Apple" | "Samsung" | "Google" }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 6,
        left: "50%",
        transform: "translateX(-50%)",
        width: brand === "Apple" ? 134 : 80,
        height: 5,
        backgroundColor: "rgba(255,255,255,0.35)",
        borderRadius: 3,
        zIndex: 20,
        pointerEvents: "none",
      }}
    />
  );
}

export default function PhoneFrame({ children, deviceFrame }: PhoneFrameProps) {
  if (deviceFrame === "none") {
    return (
      <div className="w-[375px] overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
        {children}
      </div>
    );
  }

  const config = DEVICE_CONFIGS[deviceFrame];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Power button — right */}
      <div
        style={{
          position: "absolute",
          right: -config.frameWidth - 2,
          top: 140,
          width: 3,
          height: 70,
          backgroundColor: config.frameColor,
          borderRadius: "0 2px 2px 0",
        }}
      />
      {/* Volume up — left */}
      <div
        style={{
          position: "absolute",
          left: -config.frameWidth - 2,
          top: 100,
          width: 3,
          height: 50,
          backgroundColor: config.frameColor,
          borderRadius: "2px 0 0 2px",
        }}
      />
      {/* Volume down — left */}
      <div
        style={{
          position: "absolute",
          left: -config.frameWidth - 2,
          top: 165,
          width: 3,
          height: 50,
          backgroundColor: config.frameColor,
          borderRadius: "2px 0 0 2px",
        }}
      />

      {/* Main frame */}
      <div
        style={{
          width: 375,
          maxHeight: 812,
          borderRadius: config.outerRadius,
          border: `${config.frameWidth}px solid ${config.frameColor}`,
          overflow: "hidden",
          position: "relative",
          background: "#000",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            borderRadius: config.innerRadius,
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <TopCutout type={config.cutout} />
          {children}
          <HomeIndicator brand={config.brand} />
        </div>
      </div>
    </div>
  );
}
