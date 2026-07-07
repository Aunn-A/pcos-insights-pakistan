import { Quote } from "lucide-react";

export function QuoteCard({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 shadow-[0_1px_2px_rgba(91,58,142,0.04)] transition-shadow duration-[240ms] hover:shadow-[0_12px_28px_rgba(91,58,142,0.09)]">
      <Quote className="size-6 text-lavender" aria-hidden />
      <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink italic">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 font-mono text-xs tracking-wide text-caption uppercase">
        {attribution}
      </figcaption>
    </figure>
  );
}
