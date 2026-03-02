import { Mail, Clock, MessageSquare } from "lucide-react";
import ContentPageLayout from "@/components/shared/ContentPageLayout";

export default function ContactPage() {
  return (
    <ContentPageLayout
      title="Contact Us"
      subtitle="Have questions, feedback, or partnership inquiries? We'd love to hear from you."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
            <Mail className="h-5 w-5 text-indigo-600" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-900">Email</h2>
          <p className="mt-2 text-sm text-gray-600">
            For general inquiries, feedback, and support.
          </p>
          <a
            href="mailto:contact@chatreplica.com"
            className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            contact@chatreplica.com
          </a>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
            <MessageSquare className="h-5 w-5 text-indigo-600" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            Feedback
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Have a feature request or found a bug? Let us know and we&apos;ll
            look into it.
          </p>
          <a
            href="mailto:contact@chatreplica.com?subject=Feedback"
            className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            Send feedback
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <p className="text-sm leading-relaxed text-amber-800">
          We typically respond within 1-2 business days. For urgent matters,
          please include &quot;Urgent&quot; in the subject line.
        </p>
      </div>
    </ContentPageLayout>
  );
}
