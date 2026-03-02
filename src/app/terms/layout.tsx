import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ChatReplica",
  description:
    "ChatReplica terms of service. Understand the acceptable use policy and guidelines for using our chat mockup generator.",
  alternates: {
    canonical: "https://chatreplica.com/terms",
  },
  openGraph: {
    title: "Terms of Service | ChatReplica",
    description:
      "ChatReplica terms of service and acceptable use policy.",
    url: "https://chatreplica.com/terms",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
