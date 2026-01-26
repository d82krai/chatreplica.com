import Hero from "@/components/landing/Hero";
import PlatformCards from "@/components/landing/PlatformCards";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ChatReplica",
    url: "https://chatreplica.com",
    description:
      "Free fake chat screenshot generator for WhatsApp, Facebook Messenger, Instagram DMs, and X (Twitter) DMs.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PlatformCards />
      <HowItWorks />
      <Features />
      <FAQ />
    </>
  );
}
