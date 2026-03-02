interface ContentPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ContentPageLayout({
  title,
  subtitle,
  children,
}: ContentPageLayoutProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        )}
        <div className="mt-10 space-y-8">{children}</div>
      </div>
    </div>
  );
}
