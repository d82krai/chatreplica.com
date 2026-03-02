import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ChatReplica - Chat Mockup Generator",
  description:
    "Learn about ChatReplica, the free online chat mockup screenshot generator for WhatsApp, Messenger, Instagram, and X. Built for designers, educators, and content creators.",
  keywords: [
    "about chatreplica",
    "chat mockup generator",
    "chat screenshot tool",
  ],
  alternates: {
    canonical: "https://chatreplica.com/about",
  },
  openGraph: {
    title: "About ChatReplica | Chat Mockup Generator",
    description:
      "Learn about ChatReplica and how it helps designers, educators, and content creators.",
    url: "https://chatreplica.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
