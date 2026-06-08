import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import SectionReveal from "@/components/Shared/SectionReveal";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import CTA from "@/components/CTA/CTA";
import Button from "@/components/Shared/Button";

const steps = [
  "Assess current systems and identify friction points.",
  "Design a prioritized roadmap with realistic milestones.",
  "Implement changes and validate with the core team.",
  "Monitor outcomes and refine for long-term stability.",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="bg-hero-radial py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Services"
              as="h1"
              title="A focused service catalog shaped around business continuity."
              description="The original site presents its services as a broad, trustworthy capability stack. This page mirrors that feel with clean cards, strong hierarchy, and soft motion."
            />
          </div>
        </Container>
      </section>

      <ServiceCards />

      <section className="bg-[#f7f8fc] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionReveal>
              <SectionHeading
                eyebrow="How we work"
                title="A practical service delivery model that avoids unnecessary complexity."
                description="Every engagement is shaped around clarity, responsiveness, and enough structure to keep things moving without making the process feel heavy."
              />
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <div className="rounded-[2rem] border border-border bg-white p-8 shadow-soft">
                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const stepColors = [
                      "bg-brand",
                      "bg-accentIndigo",
                      "bg-accentEmerald",
                      "bg-accentTeal",
                    ];
                    const stepColor = stepColors[index % stepColors.length];

                    return (
                      <div
                        key={step}
                        className="flex gap-4 rounded-2xl bg-surface p-4"
                      >
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${stepColor} text-sm font-bold text-white`}>
                          {index + 1}
                        </div>
                        <p className="pt-1 text-sm leading-7 text-muted">
                          {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/contact" className="px-6 py-3">
                    Request a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button to="/solutions" variant="ghost" className="px-6 py-3">
                    Explore solutions
                  </Button>
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Strategy & planning",
              "Managed support",
              "Cloud modernization",
              "Application delivery",
              "Security hardening",
              "Long-term optimization",
            ].map((item, index) => {
              const textColors = [
                "text-brand",
                "text-accentIndigo",
                "text-accentEmerald",
                "text-accentTeal",
                "text-accentCyan",
                "text-accentSky",
              ];
              const textColor = textColors[index % textColors.length];

              return (
                <SectionReveal key={item} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="rounded-[1.6rem] border border-border bg-[#fbfcff] p-6 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-indigo-100"
                  >
                    <div className={`flex items-center gap-3 ${textColor}`}>
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="text-sm font-bold uppercase tracking-[0.24em]">
                        Included
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                      {item}
                    </h3>
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
