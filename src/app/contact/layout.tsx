import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - ChatReplica",
  description:
    "Get in touch with the ChatReplica team. Questions, feedback, or partnership inquiries welcome.",
  alternates: {
    canonical: "https://chatreplica.com/contact",
  },
  openGraph: {
    title: "Contact Us | ChatReplica",
    description:
      "Get in touch with the ChatReplica team for questions, feedback, or partnerships.",
    url: "https://chatreplica.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
