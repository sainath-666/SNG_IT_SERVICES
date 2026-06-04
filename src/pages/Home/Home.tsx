import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Target,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import Button from "@/components/Shared/Button";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import SectionReveal from "@/components/Shared/SectionReveal";
import { industries, vendorChallenges } from "@/data/solutions";

const featureCards = [
  {
    icon: CheckCircle2,
    title: "Cost-effectiveness",
    description:
      "Affordable IT solutions that help reduce costs and improve your bottom line.",
  },
  {
    icon: BadgeCheck,
    title: "Innovative Technology",
    description:
      "We stay up to date with emerging technology trends and implement what actually adds value.",
  },
  {
    icon: Users2,
    title: "Industry Expertise",
    description:
      "Tailored solutions built around the needs of healthcare, finance, logistics, and more.",
  },
  {
    icon: Target,
    title: "Scalability",
    description:
      "Flexible systems that can grow with your business and support the next stage of growth.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      <section className="bg-[#111219] py-20 text-white sm:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Simplifying IT for a complex world."
              description="A streamlined technology partner can reduce downtime, improve confidence, and keep business moving."
              light
            />
            <Button
              to="/about"
              variant="secondary"
              className="self-start px-6 py-3 text-sm"
            >
              About Gamic Solutions
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              const colors = [
                { bg: "bg-sky-500/10 text-sky-400", border: "hover:border-sky-500/30" },
                { bg: "bg-indigo-500/10 text-indigo-400", border: "hover:border-indigo-500/30" },
                { bg: "bg-emerald-500/10 text-emerald-400", border: "hover:border-emerald-500/30" },
                { bg: "bg-teal-500/10 text-teal-400", border: "hover:border-teal-500/30" },
              ];
              const color = colors[index % colors.length];

              return (
                <SectionReveal key={card.title} delay={index * 0.06}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    className={`h-full rounded-[1.6rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-colors duration-300 ${color.border}`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color.bg}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-bold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {card.description}
                    </p>
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ServiceCards />

      <section className="bg-[#f7f8fc] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Where we do"
              title="Solving IT challenges in every industry, every day."
              description="The original site leans heavily on industry-specific storytelling, so this section mirrors that visual cadence with strong imagery and clear labels."
            />
            <Button
              to="/solutions"
              variant="ghost"
              className="justify-self-start px-6 py-3"
            >
              View all industries
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <SectionReveal key={industry.id} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft transition-all duration-300 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1534]/85 via-[#0f1534]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
                        Industry
                      </div>
                      <h3 className="mt-1 font-heading text-2xl font-bold">
                        {industry.title}
                      </h3>
                    </div>
                    {/* Vibrant bottom accent bar */}
                    <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-brand via-accentCyan to-accentEmerald transition-all duration-300 group-hover:w-full" />
                  </div>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="What we use"
              title="Bringing the best IT vendors to you."
              description="We work with dependable technology foundations and wrap them in a service model that removes friction for your team."
            />
            <div className="rounded-[1.5rem] border border-border bg-surface p-6 text-sm leading-7 text-muted shadow-soft">
              Working only with the best helps keep implementation quality high,
              reduces surprises, and provides the predictable support businesses
              need.
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {vendorChallenges.map((item, index) => {
              const themes = [
                {
                  subColor: "text-accentTeal",
                  shadow: "hover:shadow-[0_20px_50px_rgba(13,148,136,0.08)]",
                  border: "hover:border-teal-200",
                },
                {
                  subColor: "text-accentCyan",
                  shadow: "hover:shadow-[0_20px_50px_rgba(6,182,212,0.08)]",
                  border: "hover:border-cyan-200",
                },
              ];
              const theme = themes[index % themes.length];

              return (
                <SectionReveal key={item.id} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`rounded-[1.7rem] border border-border bg-[#fbfcff] p-7 shadow-soft transition-all duration-300 ${theme.border} ${theme.shadow}`}
                  >
                    <div className={`text-xs font-bold uppercase tracking-[0.26em] ${theme.subColor}`}>
                      Your IT challenges
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                    <Button
                      to="/solutions"
                      variant="ghost"
                      className="mt-6 px-4 py-2.5 text-sm"
                    >
                      View more
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Testimonials />
      <CTA />
    </main>
  );
}
