import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaSection } from "@/components/shared/cta-section";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Learn About PCOS",
  description:
    "What Polycystic Ovary Syndrome is, how it presents in adolescence, and the myths that delay diagnosis.",
};

const SYMPTOM_GROUPS = [
  {
    value: "physical",
    label: "Physical",
    items: [
      "Irregular, infrequent, or absent periods",
      "Acne and persistently oily skin",
      "Excess hair growth on the face, chest, or back (hirsutism)",
      "Thinning hair on the scalp",
      "Weight gain or difficulty losing weight",
    ],
  },
  {
    value: "emotional",
    label: "Emotional & Mental",
    items: [
      "Anxiety and persistent low mood",
      "Body image concerns tied to visible symptoms",
      "Sleep disturbances, including insomnia",
      "Social withdrawal or embarrassment about symptoms",
    ],
  },
  {
    value: "long-term",
    label: "Long-Term Health",
    items: [
      "Insulin resistance and elevated type 2 diabetes risk",
      "Cardiovascular risk factors, including cholesterol changes",
      "Fertility challenges related to irregular ovulation",
      "Endometrial health risks from infrequent periods",
    ],
  },
];

const MYTHS = [
  {
    myth: "PCOS only affects fertility.",
    fact: "PCOS is a metabolic and endocrine condition. It can affect insulin regulation, cardiovascular risk, mental health, and skin — not only the ability to conceive.",
  },
  {
    myth: "You need visible cysts on your ovaries to be diagnosed.",
    fact: "Despite the name, many people with PCOS have no visible ovarian cysts. Diagnosis relies on a broader set of clinical and hormonal criteria.",
  },
  {
    myth: "Only adult women get PCOS.",
    fact: "Symptoms frequently begin in adolescence, though diagnosis is often delayed for years due to limited awareness and specialist access.",
  },
  {
    myth: "Irregular periods are just normal for teenagers.",
    fact: "Cycles can be irregular after a first period, but persistent irregularity alongside other symptoms warrants evaluation, not dismissal.",
  },
  {
    myth: "Losing weight will cure PCOS.",
    fact: "Weight management can help some people manage symptoms, but PCOS is a chronic condition with no single cure — and it affects people at every body size.",
  },
];

const FAQS = [
  {
    question: "Is PCOS the same for everyone who has it?",
    answer:
      "No. PCOS presents on a spectrum — some people experience mainly metabolic symptoms, others mainly reproductive or dermatological ones. Diagnosis typically requires at least two of three features: irregular ovulation, clinical or biochemical signs of excess androgens, and polycystic ovarian morphology on ultrasound.",
  },
  {
    question: "Can PCOS be diagnosed during adolescence?",
    answer:
      "Yes, though clinical guidelines recommend caution, since irregular cycles can be typical in the first few years after a first period. A qualified clinician should evaluate persistent or worsening symptoms rather than diagnosing on cycle irregularity alone.",
  },
  {
    question: "Does this website provide medical advice?",
    answer:
      "No. This platform shares research findings and lived experience for education and awareness. Always consult a qualified healthcare provider for diagnosis or treatment decisions.",
  },
  {
    question: "Where does the information on this page come from?",
    answer:
      "Content is adapted from peer-reviewed clinical literature and international guidelines on PCOS, reviewed periodically by our faculty advisors. It is intended as a starting point for a conversation with a clinician, not a replacement for one.",
  },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn About PCOS"
        title="A common condition, still widely misunderstood."
        description="Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine conditions among people of reproductive age. Here is what the clinical evidence says — and what it doesn't."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                What is PCOS?
              </p>
              <h2 className="mt-4 text-3xl font-serif font-medium tracking-tight text-ink sm:text-4xl">
                A hormonal condition, not a single symptom.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="space-y-5 text-base leading-relaxed text-slate">
                <p>
                  PCOS is a hormonal and metabolic condition in which the
                  ovaries produce higher-than-typical levels of androgens.
                  This can disrupt ovulation, alter menstrual cycles, and
                  produce visible symptoms such as acne or excess hair
                  growth.
                </p>
                <p>
                  It is diagnosed clinically, usually when a person meets at
                  least two of three criteria: irregular or absent ovulation,
                  clinical or blood-test evidence of excess androgens, and
                  polycystic ovaries on ultrasound. No single test confirms
                  it on its own.
                </p>
                <p>
                  Because symptoms vary so widely between individuals — and
                  because ultrasound access is limited in much of Pakistan —
                  PCOS is frequently under-diagnosed or diagnosed very late,
                  particularly among adolescents.
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
              eyebrow="Recognizing it"
              title="How PCOS can show up."
              description="Not everyone experiences every symptom, and severity varies widely. This is a guide for recognition, not a checklist for self-diagnosis."
            />
          </Reveal>
          <Reveal delay={0.08} className="mt-12">
            <Tabs defaultValue="physical">
              <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
                {SYMPTOM_GROUPS.map((group) => (
                  <TabsTrigger
                    key={group.value}
                    value={group.value}
                    className="rounded-full border border-line bg-card px-4 py-2 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {group.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {SYMPTOM_GROUPS.map((group) => (
                <TabsContent key={group.value} value={group.value} className="mt-8">
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-line bg-card px-5 py-4 text-sm leading-relaxed text-slate"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Myths vs. Facts"
              title="What delays diagnosis is often what we assume we already know."
            />
          </Reveal>
          <div className="mt-14 space-y-5">
            {MYTHS.map((item, i) => (
              <Reveal key={item.myth} delay={i * 0.04}>
                <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line sm:grid-cols-2">
                  <div className="flex items-start gap-3 bg-blush/30 px-6 py-5">
                    <X className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
                    <p className="text-sm leading-relaxed text-ink">
                      <span className="font-medium">Myth: </span>
                      {item.myth}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 border-t border-line px-6 py-5 sm:border-t-0 sm:border-l">
                    <Check className="mt-0.5 size-4 shrink-0 text-sage" aria-hidden />
                    <p className="text-sm leading-relaxed text-ink">
                      <span className="font-medium">Fact: </span>
                      {item.fact}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper-soft py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently Asked"
                title="Common questions about PCOS."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <FaqAccordion items={FAQS} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        eyebrow="See it in the data"
        title="Curious how these symptoms show up nationally?"
        description="The Insights Dashboard turns self-reported experiences like these into a readable, evolving picture of PCOS in adolescent Pakistan."
        primaryLabel="Explore the Dashboard"
        primaryHref="/dashboard"
        secondaryLabel="Read voices behind the data"
        secondaryHref="/voices"
      />
    </>
  );
}
