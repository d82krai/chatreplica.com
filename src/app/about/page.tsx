import Link from "next/link";
import ContentPageLayout from "@/components/shared/ContentPageLayout";

export default function AboutPage() {
  return (
    <ContentPageLayout
      title="About ChatReplica"
      subtitle="The free chat mockup generator built for designers, educators, and content creators."
    >
      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          What is ChatReplica?
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica is a free online tool that lets you create realistic chat
          mockup screenshots for popular messaging platforms including WhatsApp,
          Facebook Messenger, Instagram DMs, and X (Twitter) DMs. Every mockup
          is generated entirely in your browser — no data ever leaves your
          device.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Who Is It For?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>
            <strong>UI/UX Designers</strong> — Prototype messaging interfaces
            and create realistic mockups for client presentations and portfolios.
          </li>
          <li>
            <strong>Content Creators</strong> — Generate engaging chat-style
            content for social media, blogs, and video thumbnails.
          </li>
          <li>
            <strong>Educators &amp; Trainers</strong> — Create conversation
            examples for digital literacy courses, cyberbullying awareness
            programs, and communication training.
          </li>
          <li>
            <strong>Filmmakers &amp; Authors</strong> — Build realistic phone
            screen props for films, shows, and book illustrations.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Legitimate Use Cases
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica is designed for creative, educational, and professional
          purposes. Common use cases include:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>UI/UX prototyping and design presentations</li>
          <li>Social media content and storytelling</li>
          <li>Educational materials and training scenarios</li>
          <li>Marketing mockups and product demos</li>
          <li>Film and video production phone screen props</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Privacy Commitment
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Your privacy is our top priority. ChatReplica processes everything
          entirely in your browser using client-side JavaScript. No messages,
          images, or personal data are ever sent to our servers. We don&apos;t
          require sign-ups, don&apos;t track your conversations, and don&apos;t
          store any user data. Read our full{" "}
          <Link
            href="/privacy"
            className="text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Technology</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica is built with modern web technologies including Next.js,
          React, and Tailwind CSS. Screenshots are generated using html2canvas
          at retina quality (2x resolution) and downloaded as PNG files. The
          entire application is a static site deployed on Cloudflare&apos;s
          global edge network for fast loading anywhere in the world.
        </p>
      </section>

      <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <h2 className="text-lg font-semibold text-indigo-900">
          Ready to get started?
        </h2>
        <p className="mt-2 text-indigo-700">
          Choose a platform and create your first chat mockup in seconds.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
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
            Messenger
          </Link>
          <Link
            href="/instagram"
            className="rounded-lg bg-[#E1306C] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c91357]"
          >
            Instagram
          </Link>
          <Link
            href="/twitter"
            className="rounded-lg bg-[#1D9BF0] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0d8cde]"
          >
            X (Twitter)
          </Link>
        </div>
      </section>
    </ContentPageLayout>
  );
}
