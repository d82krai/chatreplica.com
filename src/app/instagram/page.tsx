"use client";

import { useRef } from "react";
import Link from "next/link";
import { useChatState } from "@/hooks/useChatState";
import GeneratorLayout from "@/components/shared/GeneratorLayout";
import ChatEditor from "@/components/chat/ChatEditor";
import InstagramPreview from "@/components/previews/InstagramPreview";

export default function InstagramPage() {
  const { state, dispatch, addMessage } = useChatState("instagram");
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
        name: "Instagram DM Chat Generator",
        item: "https://chatreplica.com/instagram",
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
            platform="instagram"
            previewRef={previewRef}
            onAddMessage={addMessage}
          />
        }
        preview={<InstagramPreview state={state} />}
        previewRef={previewRef}
      />

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Free Instagram DM Chat Mockup Generator
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Create realistic Instagram Direct Message screenshots with our free
          generator. Features authentic Instagram DM styling with blue sent
          bubbles, &quot;Seen&quot; text indicator, active now status, and
          clean minimal interface. No sign-up or download required.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-gray-900">
          Features of our Instagram DM Generator
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Authentic Instagram DM interface</li>
          <li>&quot;Seen&quot; text indicator for read messages</li>
          <li>Blue sent bubbles with proper border radius</li>
          <li>Active now green dot indicator</li>
          <li>Custom profile photos and display names</li>
          <li>Auto-generated timestamps with manual override</li>
          <li>High-resolution PNG download (2x retina)</li>
          <li>Optional iPhone phone frame</li>
        </ul>

        {/* Related generators */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Try Other Generators
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/whatsapp"
              className="rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1da851]"
            >
              WhatsApp
            </Link>
            <Link
              href="/facebook"
              className="rounded-lg bg-[#0084FF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#006acc]"
            >
              Facebook Messenger
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
