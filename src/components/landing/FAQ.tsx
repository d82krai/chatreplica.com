"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is ChatReplica completely free?",
    a: "Yes! ChatReplica is 100% free to use. There are no hidden fees, no sign-ups, and no watermarks on your screenshots.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. All processing happens entirely in your browser. No messages, images, or data are sent to any server. Your conversations stay on your device.",
  },
  {
    q: "What platforms are supported?",
    a: "ChatReplica currently supports WhatsApp, Facebook Messenger, Instagram DMs, and X (Twitter) DMs. Each generator replicates the exact UI of the platform.",
  },
  {
    q: "Can I customize timestamps and read receipts?",
    a: "Yes. Timestamps are auto-generated but you can manually override the date and time for each message. Each platform has its own read receipt indicators (blue ticks, seen avatars, etc.).",
  },
  {
    q: "What image format are screenshots?",
    a: "Screenshots are downloaded as PNG files at 2x retina resolution for crisp, clear images. There are no watermarks added.",
  },
  {
    q: "Is it legal to use ChatReplica?",
    a: "ChatReplica is designed for entertainment, educational, and creative purposes only. Using generated screenshots to deceive, defame, or harass others may violate applicable laws. Please use responsibly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
              >
                {faq.q}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-gray-500 transition-transform",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
