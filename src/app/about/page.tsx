import type { Metadata } from "next";
import { BookOpen, HeartHandshake, Microscope, ScrollText } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { PillarCard } from "@/components/shared/pillar-card";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why a group of students in Pakistan built a national research initiative on PCOS in adolescent girls and young women.",
};

const PHASES = [
  {
    step: "01",
    title: "Literature review",
    description:
      "Mapping what is already known about PCOS prevalence, diagnosis pathways, and care access in South Asia — and where the evidence runs out.",
  },
  {
    step: "02",
    title: "National survey",
    description:
      "Collecting anonymous, self-reported data directly from adolescent girls and young women across provinces and income backgrounds.",
  },
  {
    step: "03",
    title: "Analysis & dashboard",
    description:
      "Turning responses into an open, readable picture of diagnosis timelines, healthcare access, education impact, and mental health.",
  },
  {
    step: "04",
    title: "Publication & advocacy",
    description:
      "Sharing findings with schools, clinicians, and policymakers to inform how PCOS is taught, screened for, and treated.",
  },
];

const COMMITMENTS = [
  {
    icon: HeartHandshake,
    title: "Informed, voluntary participation",
    description:
      "Every respondent is told exactly what the survey is for before they begin, and may stop at any time without consequence.",
  },
  {
    icon: ScrollText,
    title: "Anonymity by default",
    description:
      "No names, contact details, or identifying information are collected. Findings are only ever reported in aggregate.",
  },
  {
    icon: BookOpen,
    title: "Not a substitute for care",
    description:
      "This platform shares research and lived experience. It does not diagnose, treat, or replace a conversation with a clinician.",
  },
  {
    icon: Microscope,
    title: "Methods held to scrutiny",
    description:
      "Our survey design and analysis are reviewed by faculty advisors and disclosed openly so the findings can be checked.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Initiative"
        title="Research, led by the people closest to the question."
        description="PCOS Insights Pakistan began as a question a group of university students kept returning to: why does a condition affecting roughly one in five adolescent girls remain so poorly tracked, so rarely taught, and so quietly endured?"
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                Where this started
              </p>
              <h2 className="mt-4 text-3xl font-serif font-medium tracking-tight text-ink sm:text-4xl">
                A gap between the clinic and the classroom.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="space-y-5 text-base leading-relaxed text-slate">
                <p>
                  Most public data on PCOS in Pakistan is drawn from small
                  clinical samples — women who have already reached a
                  gynecologist or endocrinologist. That leaves out everyone
                  who never got that far: girls whose symptoms were dismissed
                  as normal, whose families didn&apos;t know what to ask a
                  doctor, or who had no specialist within reach at all.
                </p>
                <p>
                  We are a small team of undergraduate and graduate students
                  in public health, medicine, and data science who wanted to
                  build the missing dataset — not another awareness
                  campaign, but a structured, national, youth-reported
                  picture of what living with PCOS actually looks like before
                  and after diagnosis.
                </p>
                <p>
                  Everything on this site, from the dashboard to the
                  testimonials, is built to be checked. We would rather show
                  an honest gap in the data than dress up a guess as a
                  finding.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How the research is built"
              title="Four phases, from literature review to advocacy."
              description="The initiative runs as a structured research project, not a one-off campaign."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 0.05}>
                <div className="flex gap-5">
                  <span className="font-mono text-sm font-medium text-lavender-d tabular-nums">
                    {phase.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-ink">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Research ethics"
              title="Commitments we hold ourselves to."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <PillarCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        eyebrow="Join the effort"
        title="This research is only as strong as its data."
        description="Whether you take the survey yourself, share it with your community, or help spread the findings, you are part of building the first national picture of adolescent PCOS in Pakistan."
        primaryLabel="Take the National Survey"
        primaryHref="/survey"
        secondaryLabel="See how to get involved"
        secondaryHref="/get-involved"
      />
    </>
  );
}
