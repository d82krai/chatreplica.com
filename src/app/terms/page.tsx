import Link from "next/link";
import ContentPageLayout from "@/components/shared/ContentPageLayout";

export default function TermsPage() {
  return (
    <ContentPageLayout
      title="Terms of Service"
      subtitle="Last updated: March 1, 2026"
    >
      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Acceptance of Terms
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          By accessing and using ChatReplica (
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            chatreplica.com
          </Link>
          ), you agree to be bound by these Terms of Service. If you do not
          agree to these terms, please do not use the service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Description of Service
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica is a free online chat mockup screenshot generator that
          allows users to create realistic-looking conversation mockups for
          popular messaging platforms. The tool is intended for creative,
          educational, and professional purposes including UI/UX design,
          content creation, and training materials.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Acceptable Use</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          You may use ChatReplica for the following purposes:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>UI/UX design prototyping and mockups</li>
          <li>Educational and training materials</li>
          <li>Creative content for social media, blogs, and presentations</li>
          <li>Film, video, and media production</li>
          <li>Personal entertainment and humor</li>
          <li>Marketing and product demonstration mockups</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Prohibited Uses
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          You may <strong>not</strong> use ChatReplica to:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
          <li>
            Deceive, defraud, or mislead any person or organization
          </li>
          <li>
            Defame, harass, bully, threaten, or intimidate others
          </li>
          <li>
            Impersonate any person or falsely represent a conversation as real
          </li>
          <li>
            Create false evidence or fabricate communications for legal
            proceedings
          </li>
          <li>
            Engage in any activity that violates applicable local, state,
            national, or international laws
          </li>
          <li>
            Distribute generated content in a manner intended to cause harm
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Intellectual Property
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica and its original content, features, and functionality are
          owned by ChatReplica. The messaging platform UIs replicated in our
          tool (WhatsApp, Facebook Messenger, Instagram, X) are trademarks of
          their respective owners. ChatReplica is not affiliated with, endorsed
          by, or sponsored by any of these companies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Disclaimer of Warranties
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          ChatReplica is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without any warranties of any kind, either
          express or implied. We do not guarantee that the service will be
          uninterrupted, error-free, or that generated mockups will be
          perfectly accurate representations of any messaging platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Limitation of Liability
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          To the fullest extent permitted by law, ChatReplica shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of the
          service. We are not responsible for any misuse of generated mockup
          screenshots by users.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">
          Modifications to Terms
        </h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          We reserve the right to modify these Terms of Service at any time.
          Changes will be posted on this page with an updated date. Your
          continued use of ChatReplica after changes are posted constitutes
          acceptance of the modified terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          If you have questions about these Terms of Service, please{" "}
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
