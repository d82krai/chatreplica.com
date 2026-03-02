import {
  Smartphone,
  Shield,
  Zap,
  Image,
  Clock,
  CheckCheck,
  Globe,
  Palette,
} from "lucide-react";

const features = [
  { icon: Smartphone, title: "Phone Frame", desc: "Optional iPhone-style frame for realistic screenshots" },
  { icon: Shield, title: "Privacy First", desc: "Everything runs in your browser — no data leaves your device" },
  { icon: Zap, title: "Instant Preview", desc: "See changes in real-time as you build your conversation" },
  { icon: Image, title: "Retina Quality", desc: "2x resolution PNG downloads for crisp, clear images" },
  { icon: Clock, title: "Custom Timestamps", desc: "Auto-generated or manually set date and time for each message" },
  { icon: CheckCheck, title: "Read Receipts", desc: "Platform-specific delivery and read indicators" },
  { icon: Globe, title: "Free to Start", desc: "No sign-up required. Create and download mockups instantly" },
  { icon: Palette, title: "Pixel-Perfect", desc: "Exact UI replication of each messaging platform" },
];

export default function Features() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Why Choose ChatReplica?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Everything you need to create perfect chat mockup screenshots.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-5 transition-colors hover:border-indigo-200 hover:bg-indigo-50"
            >
              <f.icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 text-sm font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
