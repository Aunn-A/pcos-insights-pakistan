import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-32 sm:py-40">
      <Container className="text-center">
        <p className="font-mono text-sm font-medium text-primary">404</p>
        <h1 className="mt-4 text-3xl font-serif font-medium tracking-tight text-ink sm:text-4xl">
          This page isn&apos;t part of the dataset.
        </h1>
        <p className="prose-measure mx-auto mt-4 text-base leading-relaxed text-slate">
          The page you&apos;re looking for may have moved or no longer exists.
          Here are a few places to pick back up.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              Back to home
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/dashboard">Explore the dashboard</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
