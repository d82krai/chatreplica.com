import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ChatReplica",
  description:
    "ChatReplica privacy policy. Learn how we handle your data — all processing happens in your browser with zero data collection.",
  alternates: {
    canonical: "https://chatreplica.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | ChatReplica",
    description:
      "ChatReplica privacy policy. All processing happens in your browser with zero data collection.",
    url: "https://chatreplica.com/privacy",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
