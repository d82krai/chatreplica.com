import { UserPlus, MessageCircle, Download } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Set Up Profiles",
    description: "Add names and upload photos for the sender and receiver. Customize online status and handles.",
  },
  {
    icon: MessageCircle,
    title: "Add Messages",
    description: "Type your conversation, set timestamps, choose read receipts, and reorder messages freely.",
  },
  {
    icon: Download,
    title: "Download Screenshot",
    description: "Preview your chat in real-time and download a pixel-perfect PNG screenshot instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Create your chat mockup screenshot in three simple steps.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100">
                <step.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="mt-2 text-sm font-bold text-indigo-600">
                Step {i + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
