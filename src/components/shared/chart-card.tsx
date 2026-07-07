import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function ChartCard({
  title,
  caption,
  children,
  className,
}: {
  title: string;
  caption: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(91,58,142,0.04)] sm:p-8",
        className
      )}
    >
      <h3 className="text-lg font-serif font-medium text-ink sm:text-xl">
        {title}
      </h3>
      <div className="mt-6">{children}</div>
      <p className="mt-6 font-serif text-sm leading-relaxed text-caption border-t border-line pt-4">
        {caption}
      </p>
    </div>
  );
}
