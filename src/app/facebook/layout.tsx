import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Facebook Messenger Fake Chat Generator - Create Screenshots",
  description:
    "Generate realistic fake Facebook Messenger chat screenshots with seen receipts, blue bubbles, profile photos, and custom timestamps. Free online, no watermark.",
  keywords: [
    "facebook messenger fake chat",
    "messenger chat generator",
    "fake facebook conversation",
    "messenger screenshot generator",
  ],
  alternates: {
    canonical: "https://chatreplica.com/facebook",
  },
  openGraph: {
    title: "Free Facebook Messenger Fake Chat Generator | ChatReplica",
    description:
      "Create realistic Messenger chat screenshots with seen receipts and blue bubbles.",
    url: "https://chatreplica.com/facebook",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Messenger Fake Chat Generator | ChatReplica",
    description: "Generate realistic Facebook Messenger screenshots.",
  },
};

export default function FacebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
