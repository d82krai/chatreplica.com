import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free WhatsApp Fake Chat Generator - Create Realistic Screenshots",
  description:
    "Generate pixel-perfect fake WhatsApp chat screenshots with blue ticks, custom timestamps, profile photos, and realistic message bubbles. Free online tool, no sign-up needed.",
  keywords: [
    "whatsapp fake chat generator",
    "whatsapp chat screenshot",
    "fake whatsapp conversation",
    "whatsapp blue tick generator",
    "whatsapp dummy chat",
  ],
  alternates: {
    canonical: "https://chatreplica.com/whatsapp",
  },
  openGraph: {
    title: "Free WhatsApp Fake Chat Generator | ChatReplica",
    description:
      "Create realistic WhatsApp chat screenshots with blue ticks, timestamps, and profile photos.",
    url: "https://chatreplica.com/whatsapp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Fake Chat Generator | ChatReplica",
    description:
      "Generate realistic WhatsApp screenshots with blue ticks and custom timestamps.",
  },
};

export default function WhatsAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
