import { Award, Users2, Layers3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import SectionReveal from "@/components/Shared/SectionReveal";
import Button from "@/components/Shared/Button";

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted delivery",
    description:
      "We prioritize dependable execution, transparent communication, and clear ownership.",
  },
  {
    icon: Users2,
    title: "People first",
    description:
      "We keep users, processes, and collaboration at the center of every technical decision.",
  },
  {
    icon: Layers3,
    title: "Structured thinking",
    description:
      "Work is framed around clean architecture and long-term maintainability rather than quick fixes.",
  },
  {
    icon: Award,
    title: "Continuous improvement",
    description:
      "Each engagement is a chance to refine, optimize, and improve outcomes for the next one.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-hero-radial py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <SectionHeading
              eyebrow="About"
              title="A technology partner focused on outcomes, not noise."
              description="This learning clone mirrors the original site’s emphasis on trust, consistency, and measurable value across managed IT, consulting, and digital delivery."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-border bg-white p-8 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  ["5+", "Years proven track record"],
                  ["98%", "Customer satisfaction"],
                  ["500", "Projects completed"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-surface p-5 text-center"
                  >
                    <div className="font-heading text-4xl font-extrabold text-ink">
                      {value}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-muted">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionReveal>
              <SectionHeading
                eyebrow="Our story"
                title="Built for businesses that need stability and momentum at the same time."
                description="The page structure follows the same premium, long-form rhythm as the reference site, but the copy is tailored to this mock brand and app structure."
              />
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <div className="rounded-[2rem] border border-border bg-[#fbfcff] p-8 shadow-soft">
                <p className="text-sm leading-8 text-muted">
                  We help teams plan, launch, and support the systems that keep
                  modern organizations moving. The focus is on practical
                  technology choices, clean delivery, and a responsive service
                  model that can adapt as needs change.
                </p>
                <p className="mt-5 text-sm leading-8 text-muted">
                  From managed services to cloud and web work, the goal is
                  always the same: reduce friction, improve visibility, and make
                  digital systems feel dependable rather than complicated.
                </p>
                <Button to="/contact" className="mt-7 px-6 py-3">
                  Talk to us
                </Button>
              </div>
            </SectionReveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              const themes = [
                { bg: "bg-sky-50 text-accentSky", hoverBorder: "hover:border-sky-200" },
                { bg: "bg-indigo-50 text-accentIndigo", hoverBorder: "hover:border-indigo-200" },
                { bg: "bg-emerald-50 text-accentEmerald", hoverBorder: "hover:border-emerald-200" },
                { bg: "bg-teal-50 text-accentTeal", hoverBorder: "hover:border-teal-200" },
              ];
              const theme = themes[index % themes.length];

              return (
                <SectionReveal key={value.title} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`h-full rounded-[1.7rem] border border-border bg-white p-6 shadow-soft transition-all duration-300 ${theme.hoverBorder}`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.bg}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-bold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {value.description}
                    </p>
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
