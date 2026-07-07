import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { ArrowRight } from "lucide-react";

export function CtaSection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="rounded-3xl bg-primary px-8 py-16 text-center sm:px-16 sm:py-20">
          {eyebrow ? (
            <p className="mb-3 font-sans text-xs font-semibold tracking-[0.14em] text-lavender uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mx-auto max-w-2xl text-3xl font-serif font-medium text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-lavender sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="xl"
              className="bg-paper text-primary hover:bg-paper/90"
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-lavender/40 bg-transparent text-primary-foreground hover:bg-primary-d hover:text-primary-foreground"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
