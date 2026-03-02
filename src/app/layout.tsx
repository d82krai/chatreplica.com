import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Disclaimer from "@/components/shared/Disclaimer";
import { PremiumProvider } from "@/components/shared/PremiumProvider";
import UpgradeModal from "@/components/shared/UpgradeModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chatreplica.com"),
  title: {
    default: "ChatReplica - Free Fake Chat Generator | WhatsApp, Messenger, Instagram & X",
    template: "%s | ChatReplica",
  },
  description:
    "Create realistic fake chat screenshots for WhatsApp, Facebook Messenger, Instagram DMs, and X (Twitter) DMs. Free, instant, no sign-up. Pixel-perfect UI with read receipts and timestamps.",
  keywords: [
    "fake chat generator",
    "dummy chat maker",
    "fake conversation screenshot",
    "chat screenshot generator",
    "whatsapp fake chat",
    "messenger fake chat",
    "instagram dm generator",
    "twitter dm generator",
  ],
  authors: [{ name: "ChatReplica" }],
  creator: "ChatReplica",
  publisher: "ChatReplica",
  openGraph: {
    title: "ChatReplica - Free Fake Chat Generator",
    description:
      "Create pixel-perfect fake chat screenshots for WhatsApp, Messenger, Instagram & X. Free, no sign-up required.",
    url: "https://chatreplica.com",
    siteName: "ChatReplica",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatReplica - Free Fake Chat Generator",
    description:
      "Create realistic fake chat screenshots for WhatsApp, Messenger, Instagram & X.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PremiumProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Disclaimer />
          <Footer />
          <UpgradeModal />
        </PremiumProvider>
      </body>
    </html>
  );
}
