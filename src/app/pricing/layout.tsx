import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - ChatReplica",
  description:
    "ChatReplica pricing plans. Free tier with all essential features. Premium tier with HD exports, no watermark, and batch export.",
  alternates: {
    canonical: "https://chatreplica.com/pricing",
  },
  openGraph: {
    title: "Pricing | ChatReplica",
    description:
      "Compare ChatReplica Free and Premium plans. Upgrade for HD exports and watermark-free downloads.",
    url: "https://chatreplica.com/pricing",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
