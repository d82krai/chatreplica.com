import html2canvas from "html2canvas-pro";
import type { PremiumFeatures } from "@/lib/premium";

export async function captureScreenshot(
  element: HTMLElement,
  platform: string,
  features?: PremiumFeatures
): Promise<void> {
  const scale = features?.exportScale ?? 2;

  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    logging: false,
  });

  // Add watermark for free tier
  if (features?.showWatermark !== false) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.save();
      const fontSize = 11 * scale;
      ctx.font = `${fontSize}px Inter, system-ui, sans-serif`;
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.textAlign = "center";
      ctx.fillText(
        "chatreplica.com",
        canvas.width / 2,
        canvas.height - 8 * scale
      );
      ctx.restore();
    }
  }

  const date = new Date().toISOString().split("T")[0];
  const link = document.createElement("a");
  link.download = `chatreplica-${platform}-${date}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
