export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export function getDefaultAvatar(): string {
  return "data:image/svg+xml;base64," + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="50" fill="#BDBDBD"/>
      <circle cx="50" cy="38" r="16" fill="#FFFFFF"/>
      <ellipse cx="50" cy="75" rx="26" ry="20" fill="#FFFFFF"/>
    </svg>
  `);
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function getPlatformColor(platform: string): string {
  const colors: Record<string, string> = {
    whatsapp: "#25D366",
    facebook: "#0084FF",
    instagram: "#E1306C",
    twitter: "#1D9BF0",
  };
  return colors[platform] || "#6B7280";
}

export function getPlatformName(platform: string): string {
  const names: Record<string, string> = {
    whatsapp: "WhatsApp",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
    twitter: "X (Twitter)",
  };
  return names[platform] || platform;
}
