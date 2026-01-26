import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <div className="rounded-r-lg border-l-4 border-amber-500 bg-amber-50 p-4">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm leading-relaxed text-amber-800">
            <strong>Disclaimer:</strong> ChatReplica is designed purely for
            entertainment, educational, and creative purposes. Do not use
            generated screenshots to deceive, defame, harass, or mislead anyone.
            Misuse of this tool may violate applicable laws. We are not
            responsible for any misuse. By using this tool, you agree to use it
            responsibly and ethically.
          </p>
        </div>
      </div>
    </div>
  );
}
