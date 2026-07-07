import { Container } from "@/components/shared/container";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper-soft py-20 sm:py-28">
      <Container>
        <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-serif font-medium tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="prose-measure mt-5 text-lg leading-relaxed text-slate">
          {description}
        </p>
        {children}
      </Container>
    </section>
  );
}
