import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Mail,
  Share2,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Ways to support PCOS Insights Pakistan — take the survey, share it, partner with us, or join the student research team.",
};

const WAYS_TO_HELP = [
  {
    icon: UserPlus,
    title: "Take the survey",
    description:
      "If you're between 13 and 25 and living in Pakistan, your response — diagnosed or not — directly strengthens the dataset.",
    action: { label: "Take the survey", href: "/survey" },
  },
  {
    icon: Share2,
    title: "Share it widely",
    description:
      "Forward the survey to your class, hostel, or community group. The more varied the respondents, the more representative the findings.",
    action: { label: "Read sharing guidance", href: "#share" },
  },
  {
    icon: Building2,
    title: "Partner with us",
    description:
      "Schools, clinics, and NGOs can help distribute the survey or host a findings session once results are published.",
    action: { label: "Start a partnership", href: "#partner" },
  },
  {
    icon: Sparkles,
    title: "Join the student team",
    description:
      "We periodically open roles for research assistants, translators, and data visualization volunteers.",
    action: { label: "See open roles", href: "#volunteer" },
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="This research is built by many hands."
        description="Whether you have eight minutes or eight hours to give, there is a way to strengthen this initiative."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              Ways to help
            </p>
            <h2 className="mt-3 text-2xl font-serif font-medium tracking-tight text-ink sm:text-3xl">
              Four ways to strengthen this research.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WAYS_TO_HELP.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-paper-soft text-primary">
                    <item.icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                  {item.action.href.startsWith("#") ? (
                    <a
                      href={item.action.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      {item.action.label}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </a>
                  ) : (
                    <Link
                      href={item.action.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      {item.action.label}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="share"
        className="border-t border-line bg-paper-soft py-24 sm:py-32"
      >
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Sharing guidance"
                title="A little context goes a long way."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <div className="space-y-5 text-base leading-relaxed text-slate">
                <p>
                  When you share the survey, a short introduction helps
                  people trust it: who is running it, that it&apos;s
                  anonymous, and roughly how long it takes.
                </p>
                <p className="rounded-xl border border-line bg-card px-5 py-4 font-mono text-sm text-ink">
                  &ldquo;A student-led research team is studying how PCOS
                  affects young women in Pakistan. It&apos;s an anonymous,
                  8-minute survey — open to anyone 13&ndash;25, diagnosed or
                  not.&rdquo;
                </p>
                <p>
                  Sharing it with people outside your immediate circle —
                  different cities, income levels, and education backgrounds
                  — is especially valuable, since those groups are often
                  under-represented in existing PCOS research.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="partner" className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="For organizations"
                title="Partner with the research team."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <div className="space-y-5 text-base leading-relaxed text-slate">
                <p>
                  Schools and universities can help by sharing the survey
                  with eligible students, or hosting a short session once
                  findings are published. Clinics and NGOs working in
                  adolescent or reproductive health are welcome to
                  collaborate on distribution or dissemination.
                </p>
                <p>
                  We are a small student team — every partnership is
                  reviewed individually to make sure it fits the scope and
                  ethics of the research.
                </p>
                <Button asChild variant="outline">
                  <a href="mailto:partnerships@pcosinsightspk.org">
                    <Mail className="size-4" aria-hidden />
                    partnerships@pcosinsightspk.org
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        id="volunteer"
        className="border-t border-line bg-paper-soft py-24 sm:py-32"
      >
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="For students"
                title="Join the research team."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <div className="space-y-5 text-base leading-relaxed text-slate">
                <p>
                  We periodically open a small number of volunteer roles for
                  students, including:
                </p>
                <ul className="space-y-2.5 text-slate">
                  {[
                    "Research assistants for survey design and analysis",
                    "Urdu/English translation for survey and outreach materials",
                    "Data visualization and dashboard development",
                    "Outreach, design, and community partnerships",
                  ].map((role) => (
                    <li key={role} className="flex gap-3">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline">
                  <a href="mailto:team@pcosinsightspk.org">
                    <Mail className="size-4" aria-hidden />
                    team@pcosinsightspk.org
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        eyebrow="Start here"
        title="The simplest way to help starts in the next 8 minutes."
        description="Take the survey, then pass it on to someone whose experience might otherwise go uncounted."
        primaryLabel="Take the National Survey"
        primaryHref="/survey"
      />
    </>
  );
}
