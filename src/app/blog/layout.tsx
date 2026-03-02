import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - ChatReplica",
  description:
    "Tips, tutorials, and guides on creating chat mockups for design, marketing, education, and creative projects.",
  keywords: [
    "chat mockup tips",
    "conversation screenshot guide",
    "chat generator tutorials",
    "ui mockup blog",
  ],
  alternates: {
    canonical: "https://chatreplica.com/blog",
  },
  openGraph: {
    title: "Blog | ChatReplica",
    description:
      "Tips, tutorials, and guides on creating chat mockups for design, marketing, and education.",
    url: "https://chatreplica.com/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
