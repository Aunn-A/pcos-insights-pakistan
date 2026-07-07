import type { LucideIcon } from "lucide-react";

export function PillarCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-line bg-card p-7 transition-all duration-[240ms] hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(91,58,142,0.1)]">
      <div className="flex size-11 items-center justify-center rounded-xl bg-paper-soft text-primary transition-colors duration-[240ms] group-hover:bg-lavender/50">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-serif font-medium text-ink">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}
