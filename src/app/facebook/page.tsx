"use client";

import { useRef } from "react";
import Link from "next/link";
import { useChatState } from "@/hooks/useChatState";
import GeneratorLayout from "@/components/shared/GeneratorLayout";
import ChatEditor from "@/components/chat/ChatEditor";
import FacebookPreview from "@/components/previews/FacebookPreview";
import DevicePicker from "@/components/chat/DevicePicker";

export default function FacebookPage() {
  const { state, dispatch, addMessage } = useChatState("facebook");
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
        name: "Facebook Messenger Chat Generator",
        item: "https://chatreplica.com/facebook",
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
            platform="facebook"
            previewRef={previewRef}
            onAddMessage={addMessage}
          />
        }
        preview={<FacebookPreview state={state} />}
        previewRef={previewRef}
        previewControls={
          <DevicePicker deviceFrame={state.deviceFrame} dispatch={dispatch} />
        }
      />

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Free Facebook Messenger Chat Mockup Generator
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Generate realistic Facebook Messenger chat screenshots with our free
          online tool. Features authentic blue pill-shaped sent bubbles, seen
          indicator with receiver&apos;s avatar, active now status, and the
          classic Messenger styling. No sign-up required.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-gray-900">
          Features of our Messenger Chat Generator
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Authentic Messenger UI with blue sent bubbles</li>
          <li>Seen indicator with receiver&apos;s profile avatar</li>
          <li>Active now green dot and last active status</li>
          <li>Pill-shaped message bubbles with proper spacing</li>
          <li>Custom profile photos and names</li>
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
