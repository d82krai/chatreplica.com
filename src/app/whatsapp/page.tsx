"use client";

import { useRef } from "react";
import Link from "next/link";
import { useChatState } from "@/hooks/useChatState";
import GeneratorLayout from "@/components/shared/GeneratorLayout";
import ChatEditor from "@/components/chat/ChatEditor";
import WhatsAppPreview from "@/components/previews/WhatsAppPreview";

export default function WhatsAppPage() {
  const { state, dispatch, addMessage } = useChatState("whatsapp");
  const previewRef = useRef<HTMLDivElement>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chatreplica.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "WhatsApp Chat Generator",
        item: "https://chatreplica.com/whatsapp",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <GeneratorLayout
        editor={
          <ChatEditor
            state={state}
            dispatch={dispatch}
            platform="whatsapp"
            previewRef={previewRef}
            onAddMessage={addMessage}
          />
        }
        preview={<WhatsAppPreview state={state} />}
        previewRef={previewRef}
      />

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Free WhatsApp Chat Mockup Generator
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Create realistic WhatsApp chat screenshots with our free online generator.
          Features include blue double-tick read receipts, the iconic WhatsApp
          doodle background, last seen / online status, and authentic green &amp;
          white message bubbles with tails. Perfect for presentations, social media
          content, and creative projects.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-gray-900">
          Features of our WhatsApp Chat Generator
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Authentic WhatsApp UI with dark green header</li>
          <li>Blue double-tick read receipts (sent, delivered, read)</li>
          <li>WhatsApp-style doodle pattern background</li>
          <li>Custom profile photos for sender and receiver</li>
          <li>Auto-generated timestamps with manual override</li>
          <li>Online status, last seen, and offline indicators</li>
          <li>Download as high-resolution PNG (2x retina)</li>
          <li>Optional phone frame for realistic screenshots</li>
        </ul>

        {/* Related generators */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Try Other Generators
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/facebook"
              className="rounded-lg bg-[#0084FF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#006acc]"
            >
              Facebook Messenger
            </Link>
            <Link
              href="/instagram"
              className="rounded-lg bg-[#E1306C] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c91357]"
            >
              Instagram DM
            </Link>
            <Link
              href="/twitter"
              className="rounded-lg bg-[#1D9BF0] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0d8cde]"
            >
              X (Twitter) DM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
