import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free X (Twitter) DM Fake Chat Generator - Create DM Screenshots",
  description:
    "Generate realistic fake X (Twitter) Direct Message screenshots with seen indicators, blue bubbles, profile photos, and custom timestamps. Free online tool.",
  keywords: [
    "twitter dm fake chat",
    "x dm generator",
    "fake twitter conversation",
    "twitter dm screenshot generator",
  ],
  alternates: {
    canonical: "https://chatreplica.com/twitter",
  },
  openGraph: {
    title: "Free X (Twitter) DM Fake Chat Generator | ChatReplica",
    description:
      "Create realistic X (Twitter) DM screenshots with seen indicators and blue bubbles.",
    url: "https://chatreplica.com/twitter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X (Twitter) DM Fake Chat Generator | ChatReplica",
    description: "Generate realistic X (Twitter) DM screenshots.",
  },
};

export default function TwitterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
