import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { QuoteCard } from "@/components/shared/quote-card";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Voices Behind the Data",
  description:
    "Anonymized reflections from young women navigating PCOS diagnosis, treatment, and daily life in Pakistan.",
};

const THEMES = [
  {
    title: "On diagnosis",
    quotes: [
      {
        quote:
          "It took three doctors and almost four years before anyone said the word PCOS to me.",
        attribution: "Respondent, age 19 — Lahore",
      },
      {
        quote:
          "I was told to just lose weight. No one explained what was actually happening in my body.",
        attribution: "Respondent, age 22 — Islamabad",
      },
      {
        quote:
          "My ultrasound came back normal, so the first doctor said I couldn't have PCOS. I later learned that isn't how diagnosis works.",
        attribution: "Respondent, age 20 — Multan",
      },
    ],
  },
  {
    title: "On school & work",
    quotes: [
      {
        quote:
          "My college attendance suffered and no one ever asked why. I didn't have the language for what I was going through.",
        attribution: "Respondent, age 21 — Karachi",
      },
      {
        quote:
          "I missed exams because of pain I couldn't explain to my teachers. It felt like I was making excuses.",
        attribution: "Respondent, age 18 — Faisalabad",
      },
      {
        quote:
          "Between appointments and symptoms, I dropped two extracurriculars I loved. Nobody at school ever asked if I was okay.",
        attribution: "Respondent, age 19 — Rawalpindi",
      },
    ],
  },
  {
    title: "On family & community",
    quotes: [
      {
        quote:
          "I wish someone had told my mother this was common. We thought something was deeply wrong with me alone.",
        attribution: "Respondent, age 17 — Peshawar",
      },
      {
        quote:
          "My relatives kept asking when I'd 'grow out of' the acne and weight changes. It's a hormonal condition, not a phase.",
        attribution: "Respondent, age 23 — Karachi",
      },
    ],
  },
  {
    title: "On mental health & self-image",
    quotes: [
      {
        quote:
          "Some days the anxiety about how I look is worse than any physical symptom.",
        attribution: "Respondent, age 20 — Hyderabad",
      },
      {
        quote:
          "Therapy helped me separate my worth from my skin and my scale. I wish that had been offered to me sooner.",
        attribution: "Respondent, age 22 — Lahore",
      },
    ],
  },
];

export default function VoicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Voices Behind the Data"
        title="Every statistic represents a lived experience."
        description="These reflections are shared anonymously by national survey respondents and lightly edited for length and clarity. Names, exact locations, and identifying details are never collected or published."
      />

      {THEMES.map((theme, sectionIndex) => (
        <section
          key={theme.title}
          className={
            sectionIndex % 2 === 1
              ? "border-t border-line bg-paper-soft py-20 sm:py-24"
              : "border-t border-line py-20 sm:py-24"
          }
        >
          <Container>
            <Reveal>
              <h2 className="text-2xl font-serif font-medium tracking-tight text-ink sm:text-3xl">
                {theme.title}
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {theme.quotes.map((q, i) => (
                <Reveal key={q.quote} delay={i * 0.05}>
                  <QuoteCard {...q} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CtaSection
        eyebrow="Add your voice"
        title="Your story can help someone else feel less alone."
        description="The national survey includes optional space to share your own experience in your own words. It stays anonymous — but it becomes part of the record."
        primaryLabel="Take the National Survey"
        primaryHref="/survey"
      />
    </>
  );
}
