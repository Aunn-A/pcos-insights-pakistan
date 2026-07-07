import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import { NAV_LINKS } from "@/lib/nav";

const RESOURCE_LINKS = [
  { label: "Learn About PCOS", href: "/learn" },
  { label: "Insights Dashboard", href: "/dashboard" },
  { label: "Voices Behind the Data", href: "/voices" },
];

const INVOLVEMENT_LINKS = [
  { label: "National Survey", href: "/survey" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "About the Initiative", href: "/about" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-soft">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="PCOS Insights Pakistan"
                width={34}
                height={34}
                className="rounded-full"
              />
              <span className="font-serif text-base font-medium text-ink">
                PCOS Insights Pakistan
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              A student-led public health research initiative examining how
              PCOS affects adolescent girls and young women across Pakistan.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:contact@pcosinsightspk.org"
                className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm text-slate transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" aria-hidden />
                contact@pcosinsightspk.org
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.1em] text-caption uppercase">
              Resources
            </h3>
            <ul className="mt-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-sm text-slate transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.1em] text-caption uppercase">
              Participate
            </h3>
            <ul className="mt-2">
              {INVOLVEMENT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-sm text-slate transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.1em] text-caption uppercase">
              Sitemap
            </h3>
            <ul className="mt-2">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-sm text-slate transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-caption">
            © {new Date().getFullYear()} PCOS Insights Pakistan. A
            student-led research initiative. Not a substitute for
            professional medical advice.
          </p>
          <p className="text-xs text-caption">
            Illustrative data used throughout this site is for demonstration
            only.
          </p>
        </div>
      </Container>
    </footer>
  );
}
