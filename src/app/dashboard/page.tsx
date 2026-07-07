import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ChartCard } from "@/components/shared/chart-card";
import { DataDisclaimer } from "@/components/shared/data-disclaimer";
import { DiagnosisJourneyChart } from "@/components/charts/diagnosis-journey-chart";
import { HealthcareAccessChart } from "@/components/charts/healthcare-access-chart";
import { EducationImpactChart } from "@/components/charts/education-impact-chart";
import { MentalHealthChart } from "@/components/charts/mental-health-chart";

export const metadata: Metadata = {
  title: "Insights Dashboard",
  description:
    "Diagnosis journeys, healthcare access, education impact, and mental health data on adolescent PCOS in Pakistan.",
};

export default function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights Dashboard"
        title="Figures are not decoration here. They are the argument."
        description="A first look at how diagnosis, healthcare access, education, and mental health intersect for adolescent girls living with PCOS in Pakistan. This dashboard will update as national survey data is collected."
      >
        <div className="mt-8 max-w-2xl">
          <DataDisclaimer />
        </div>
      </PageHero>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              National indicators
            </p>
            <h2 className="mt-3 text-2xl font-serif font-medium tracking-tight text-ink sm:text-3xl">
              Four early signals
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <ChartCard
                title="Diagnosis journey"
                caption="Fig. 1 — Cumulative months from symptom onset to a confirmed diagnosis and treatment plan, self-reported by survey respondents."
              >
                <DiagnosisJourneyChart />
              </ChartCard>
            </Reveal>

            <Reveal delay={0.06}>
              <ChartCard
                title="Healthcare access gap"
                caption="Fig. 2 — Share of respondents reporting access to key services, compared across urban and rural residence."
              >
                <HealthcareAccessChart />
              </ChartCard>
            </Reveal>

            <Reveal delay={0.12}>
              <ChartCard
                title="Education impact index"
                caption="Fig. 3 — Share of respondents reporting each effect of PCOS symptoms on school or college life."
              >
                <EducationImpactChart />
              </ChartCard>
            </Reveal>

            <Reveal delay={0.18}>
              <ChartCard
                title="Mental health snapshot"
                caption="Fig. 4 — Share of respondents self-reporting moderate-to-severe symptoms across five dimensions of wellbeing."
              >
                <MentalHealthChart />
              </ChartCard>
            </Reveal>
          </div>

          <Reveal delay={0.22} className="mt-14">
            <div className="rounded-2xl border border-line bg-paper-soft px-8 py-8 sm:px-10">
              <h2 className="font-serif text-xl font-medium text-ink">
                A note on methodology
              </h2>
              <p className="prose-measure mt-3 text-sm leading-relaxed text-slate">
                Figures on this page are illustrative placeholders that
                demonstrate the intended shape of the dashboard. Once national
                survey data collection closes, each chart will be replaced
                with verified results, disaggregated by age, province, and
                urban/rural residence where sample size allows, alongside
                confidence intervals and methodology notes.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
