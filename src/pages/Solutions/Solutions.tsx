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
              title="A catalog of capabilities built to mirror the original site’s service-led structure."
              description="The cards below are intentionally layered, visually distinct, and highly scannable so the page feels close to the reference while remaining a maintainable React build."
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <SectionReveal key={solution.id} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="h-full rounded-[1.75rem] border border-border bg-[#fbfcff] p-7 shadow-soft"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand">
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
            ))}
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
                  className="group overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1534]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-heading text-2xl font-bold">
                        {industry.title}
                      </h3>
                    </div>
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
