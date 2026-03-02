import Link from "next/link";
import ContentPageLayout from "@/components/shared/ContentPageLayout";

export default function PrivacyPage() {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      subtitle="Last updated: March 1, 2026"
    >
      <section>
        <h2 className="text-xl font-semibold text-gray-900">Introduction</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
          operates the website{" "}
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            chatreplica.com
          </Link>
          . This Privacy Policy explains how we handle information when you use
          our chat mockup screenshot generator. We are committed to protecting
          your privacy and being transparent about our practices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Information We Collect
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          <strong>We do not collect personal data.</strong> ChatReplica is a
          client-side application. All chat mockup generation, image processing,
          and screenshot creation happens entirely in your web browser. No
          messages, names, profile photos, or conversation data are ever sent to
          our servers.
        </p>
        <p className="mt-3 leading-relaxed text-gray-600">
          Specifically, we do <strong>not</strong> collect:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>Messages or conversation content you create</li>
          <li>Profile names or photos you upload</li>
          <li>Screenshots you generate or download</li>
          <li>Email addresses, phone numbers, or other personal identifiers</li>
          <li>Account credentials (we have no accounts)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Cookies &amp; Analytics
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          We may use basic analytics (such as Cloudflare Web Analytics) to
          understand aggregate traffic patterns like page views and visitor
          counts. These analytics are privacy-focused, do not use cookies, and
          do not track individual users. No personally identifiable information
          is collected through analytics.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Third-Party Services
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Our website is hosted on Cloudflare. Cloudflare may process standard
          web request data (IP addresses, browser type) as part of delivering
          the website to you. Please refer to{" "}
          <span className="text-indigo-600">
            Cloudflare&apos;s Privacy Policy
          </span>{" "}
          for details on their data handling practices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Local Storage
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica may use your browser&apos;s local storage to save
          preferences (such as premium tier status). This data is stored
          locally on your device and is never transmitted to our servers. You
          can clear this data at any time through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Data Retention
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Since we do not collect personal data, there is nothing to retain or
          delete. All content you create exists only in your browser session
          and is lost when you close or refresh the page (unless saved locally
          by your browser).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Children&apos;s Privacy
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica does not knowingly collect any personal information from
          children under the age of 13. Since our tool does not collect any
          personal data at all, there is no risk of children&apos;s data being
          stored or processed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Changes to This Policy
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated &quot;Last updated&quot; date.
          We encourage you to review this policy periodically.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          If you have any questions about this Privacy Policy, please{" "}
          <Link
            href="/contact"
            className="text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            contact us
          </Link>
          .
        </p>
      </section>
    </ContentPageLayout>
  );
}
