import Link from "next/link";
import { ArrowRight, Database, MapPin, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { StatCounter } from "@/components/shared/stat-counter";
import { PillarCard } from "@/components/shared/pillar-card";
import { ChartCard } from "@/components/shared/chart-card";
import { QuoteCard } from "@/components/shared/quote-card";
import { CtaSection } from "@/components/shared/cta-section";
import { DataDisclaimer } from "@/components/shared/data-disclaimer";
import { DiagnosisJourneyChart } from "@/components/charts/diagnosis-journey-chart";
import { HealthcareAccessChart } from "@/components/charts/healthcare-access-chart";

const PILLARS = [
  {
    icon: Database,
    title: "Evidence over assumption",
    description:
      "Every insight traces back to data collected directly from adolescent girls and young women, not anecdote.",
  },
  {
    icon: Users,
    title: "Youth-centered research",
    description:
      "Designed and led by students who understand what it means to navigate PCOS during school and university years.",
  },
  {
    icon: MapPin,
    title: "National in scope",
    description:
      "Reaching respondents across provinces, in both urban and rural communities, not a single clinic or city.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by design",
    description:
      "Every response is collected anonymously and reported only in aggregate, never individually identifiable.",
  },
];

const STATS = [
  { value: 20, suffix: "%", label: "estimated prevalence among adolescent girls, by some clinical estimates" },
  { value: 4.2, decimals: 1, suffix: " yrs", label: "average reported time from symptom onset to diagnosis" },
  { value: 62, suffix: "%", label: "report limited access to a specialist within their district" },
  { value: 1000, suffix: "+", label: "young women invited to participate in the national survey" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-paper-soft py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                A National Research Initiative
              </p>
              <h1 className="mt-5 text-4xl font-serif font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
                Understanding the reality behind the diagnosis.
              </h1>
              <p className="prose-measure mx-auto mt-6 text-lg leading-relaxed text-slate sm:text-xl">
                PCOS Insights Pakistan is a student-led public health research
                initiative exploring how Polycystic Ovary Syndrome affects
                adolescent girls and young women across the country — in the
                clinic, in the classroom, and at home.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="xl">
                  <Link href="/survey">
                    Take the National Survey
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link href="/dashboard">Explore the Dashboard</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-3xl font-medium text-primary tabular-nums sm:text-4xl">
                    <StatCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  </dd>
                  <p className="mt-2 text-sm leading-snug text-slate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
            <p className="mx-auto mt-6 max-w-md text-center text-xs text-caption">
              Figures shown are illustrative placeholders pending national
              survey results.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why this initiative exists"
              title="A condition that is common, and consistently under-discussed."
              description="PCOS is one of the most common endocrine conditions among women of reproductive age, yet in Pakistan it remains poorly understood, inconsistently diagnosed, and rarely discussed openly — especially among adolescents."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.05}>
                <PillarCard {...pillar} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-soft py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Insights Dashboard"
                title="Figures are not decoration here. They are the argument."
                description="A first look at how diagnosis, healthcare access, education, and mental health intersect for adolescent girls living with PCOS."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <Button asChild variant="outline" className="shrink-0">
                <Link href="/dashboard">
                  View full dashboard
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <ChartCard
                title="Diagnosis journey"
                caption="Fig. 1 — Cumulative months from symptom onset to a confirmed diagnosis and treatment plan."
              >
                <DiagnosisJourneyChart />
              </ChartCard>
            </Reveal>
            <Reveal delay={0.08}>
              <ChartCard
                title="Healthcare access gap"
                caption="Fig. 2 — Share of respondents reporting access to key services, urban vs. rural."
              >
                <HealthcareAccessChart />
              </ChartCard>
            </Reveal>
          </div>
          <div className="mt-6">
            <DataDisclaimer />
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Voices Behind the Data"
                title="Every statistic represents a lived experience."
                description="Anonymized reflections shared by young women who have navigated diagnosis, treatment, and daily life with PCOS."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <Button asChild variant="outline" className="shrink-0">
                <Link href="/voices">
                  Read more voices
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Reveal>
              <QuoteCard
                quote="It took three doctors and almost four years before anyone said the word PCOS to me."
                attribution="Respondent, age 19 — Lahore"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <QuoteCard
                quote="My college attendance suffered and no one ever asked why. I didn't have the language for what I was going through."
                attribution="Respondent, age 21 — Karachi"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <QuoteCard
                quote="I wish someone had told my mother this was common. We thought something was deeply wrong with me alone."
                attribution="Respondent, age 17 — Peshawar"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        eyebrow="Be counted"
        title="Your experience is data the country doesn't have yet."
        description="The national survey takes about eight minutes and is completely anonymous. Every response helps build the first public picture of PCOS in adolescent Pakistan."
        primaryLabel="Take the National Survey"
        primaryHref="/survey"
        secondaryLabel="See how to get involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
