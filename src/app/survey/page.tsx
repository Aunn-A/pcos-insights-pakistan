import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Lock, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "National Survey",
  description:
    "Take the PCOS Insights Pakistan national survey — an anonymous, eight-minute questionnaire for adolescent girls and young women.",
};

// TODO: replace with the live Google Form URL once the survey is published.
const SURVEY_FORM_URL = "https://forms.gle/REPLACE-WITH-FORM-ID";

const EXPECTATIONS = [
  {
    icon: Clock,
    title: "About 8 minutes",
    description: "A short, multiple-choice questionnaire with a few optional open-ended questions.",
  },
  {
    icon: Lock,
    title: "Fully anonymous",
    description: "No names, contact details, or identifying information are ever requested.",
  },
  {
    icon: Users,
    title: "Ages 13–25",
    description: "Open to adolescent girls and young women living in Pakistan, diagnosed or not.",
  },
  {
    icon: ShieldCheck,
    title: "Aggregate reporting only",
    description: "Individual responses are never published — only combined, anonymized trends.",
  },
];

const SURVEY_FAQS = [
  {
    question: "Do I need a PCOS diagnosis to take the survey?",
    answer:
      "No. The survey is open to anyone in the eligible age range, whether or not you have been formally diagnosed. Undiagnosed and dismissed symptoms are exactly what this research is trying to capture.",
  },
  {
    question: "Will my answers be shared with anyone individually?",
    answer:
      "No. Responses are collected anonymously and analyzed only in aggregate. No individual response is ever published or shared in identifiable form.",
  },
  {
    question: "What happens with the results?",
    answer:
      "Aggregated findings populate the Insights Dashboard on this site and inform a report shared with schools, clinicians, and policymakers. You can revisit the dashboard as it updates.",
  },
  {
    question: "Is the survey available in Urdu?",
    answer:
      "A bilingual English/Urdu version is planned alongside the English form. Check back here for the update, or use the link provided once it is live.",
  },
];

export default function SurveyPage() {
  return (
    <>
      <PageHero
        eyebrow="National Survey"
        title="Your experience is data the country doesn't have yet."
        description="This national survey is how PCOS Insights Pakistan builds its evidence base — directly from adolescent girls and young women, not secondhand estimates."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-card px-8 py-14 text-center shadow-[0_1px_2px_rgba(91,58,142,0.04)] sm:px-14 sm:py-16">
              <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                Ready when you are
              </p>
              <h2 className="mt-4 text-3xl font-serif font-medium tracking-tight text-ink sm:text-4xl">
                Start the survey
              </h2>
              <p className="prose-measure mx-auto mt-4 text-base leading-relaxed text-slate">
                Opens in a new tab. Takes about eight minutes. Completely
                anonymous — there is no way for us to trace a response back to
                you.
              </p>
              <div className="mt-8">
                <Button asChild size="xl">
                  <Link href={SURVEY_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Take the National Survey
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </div>
              <p className="mt-5 text-xs text-caption">
                By continuing, you confirm you are between the ages of 13 and
                25 and living in Pakistan.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-soft py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Before you begin"
              title="What to expect."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPECTATIONS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-card p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-paper-soft text-primary">
                    <item.icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Questions"
                title="Before you take the survey."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <FaqAccordion items={SURVEY_FAQS} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
