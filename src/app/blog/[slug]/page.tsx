import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import type { Metadata } from "next";
import ChatMockupsForDesign from "@/components/blog/ChatMockupsForDesign";
import ChatScreenshotsForSocialMedia from "@/components/blog/ChatScreenshotsForSocialMedia";
import ChatMockupsForEducation from "@/components/blog/ChatMockupsForEducation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: [
      "chat mockup",
      "conversation screenshot",
      "chat generator",
      post.category.toLowerCase(),
    ],
    alternates: {
      canonical: `https://chatreplica.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://chatreplica.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const articleComponents: Record<string, React.ComponentType> = {
  "chat-mockups-for-ui-ux-design": ChatMockupsForDesign,
  "chat-screenshots-for-social-media": ChatScreenshotsForSocialMedia,
  "chat-mockups-for-education": ChatMockupsForEducation,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const ArticleContent = articleComponents[slug];
  if (!ArticleContent) notFound();

  return (
    <article className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
          <span className="rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium text-indigo-700">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-10 space-y-8">
          <ArticleContent />
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
          <h2 className="text-lg font-semibold text-indigo-900">
            Try ChatReplica for Free
          </h2>
          <p className="mt-2 text-indigo-700">
            Create pixel-perfect chat mockups in seconds. No sign-up required.
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
        </div>
      </div>
    </article>
  );
}
