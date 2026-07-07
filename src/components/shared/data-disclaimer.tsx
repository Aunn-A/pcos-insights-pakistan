import { Info } from "lucide-react";

export function DataDisclaimer({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border border-line bg-paper-soft px-4 py-3 text-sm text-slate ${className ?? ""}`}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
      <p>
        Illustrative data. These figures are placeholders for demonstration and
        will be replaced with verified findings once national survey data
        collection and analysis are complete.
      </p>
    </div>
  );
}
