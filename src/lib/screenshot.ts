import html2canvas from "html2canvas-pro";

export async function captureScreenshot(
  element: HTMLElement,
  platform: string
): Promise<void> {
  const canvas = await html2canvas(element, {
    scale: 4,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    logging: false,
  });

  const date = new Date().toISOString().split("T")[0];
  const link = document.createElement("a");
  link.download = `chatreplica-${platform}-${date}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
