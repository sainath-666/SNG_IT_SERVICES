import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import SectionReveal from "@/components/Shared/SectionReveal";
import Button from "@/components/Shared/Button";
import { industries, solutions } from "@/data/solutions";

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      <section className="bg-hero-radial py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Solutions"
              as="h1"
              title="A catalog of capabilities built to mirror the original site’s service-led structure."
              description="The cards below are intentionally layered, visually distinct, and highly scannable so the page feels close to the reference while remaining a maintainable React build."
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => {
              const themes = [
                { text: "text-brand", border: "hover:border-blue-200", shadow: "hover:shadow-[0_20px_50px_rgba(2,132,199,0.08)]" },
                { text: "text-accentIndigo", border: "hover:border-indigo-200", shadow: "hover:shadow-[0_20px_50px_rgba(79,70,229,0.08)]" },
                { text: "text-accentEmerald", border: "hover:border-emerald-200", shadow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]" },
                { text: "text-accentTeal", border: "hover:border-teal-200", shadow: "hover:shadow-[0_20px_50px_rgba(13,148,136,0.08)]" },
                { text: "text-accentCyan", border: "hover:border-cyan-200", shadow: "hover:shadow-[0_20px_50px_rgba(6,182,212,0.08)]" },
                { text: "text-accentSky", border: "hover:border-sky-200", shadow: "hover:shadow-[0_20px_50px_rgba(14,165,233,0.08)]" },
              ];
              const theme = themes[index % themes.length];

              return (
                <SectionReveal key={solution.id} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`h-full rounded-[1.75rem] border border-border bg-[#fbfcff] p-7 shadow-soft transition-all duration-300 ${theme.border} ${theme.shadow}`}
                  >
                    <div className={`text-xs font-bold uppercase tracking-[0.24em] ${theme.text}`}>
                      Solution
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-ink">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {solution.summary}
                    </p>
                    <Button
                      to={solution.href}
                      variant="ghost"
                      className="mt-6 px-4 py-2.5 text-sm"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f8fc] py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Industries"
              title="Everyday IT support for every industry, every day."
              description="The reference site repeats industry storytelling across the homepage. This section condenses that idea into a clean, reusable gallery."
            />
            <Button to="/contact" className="self-start px-6 py-3">
              Get started
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
                      <h3 className="font-heading text-2xl font-bold">
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
    </main>
  );
}
