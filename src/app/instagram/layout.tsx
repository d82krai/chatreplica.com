import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Instagram DM Fake Chat Generator - Create DM Screenshots",
  description:
    "Generate realistic fake Instagram Direct Message screenshots with seen indicators, custom avatars, timestamps, and authentic Instagram DM styling. Free, no sign-up.",
  keywords: [
    "instagram dm fake chat",
    "instagram dm generator",
    "fake instagram conversation",
    "instagram direct message screenshot",
  ],
  alternates: {
    canonical: "https://chatreplica.com/instagram",
  },
  openGraph: {
    title: "Free Instagram DM Fake Chat Generator | ChatReplica",
    description:
      "Create realistic Instagram DM screenshots with seen indicators and authentic styling.",
    url: "https://chatreplica.com/instagram",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram DM Fake Chat Generator | ChatReplica",
    description: "Generate realistic Instagram DM screenshots.",
  },
};

export default function InstagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
