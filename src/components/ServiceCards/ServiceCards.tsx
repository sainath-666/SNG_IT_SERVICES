import {
  ArrowRight,
  Cloud,
  Cpu,
  Globe2,
  Layers3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import SectionHeading from "@/components/Shared/SectionHeading";
import SectionReveal from "@/components/Shared/SectionReveal";
import { services } from "@/data/services";

const icons = {
  "shield-check": ShieldCheck,
  "layers-3": Layers3,
  cpu: Cpu,
  "globe-2": Globe2,
  smartphone: Smartphone,
  cloud: Cloud,
};

export default function ServiceCards() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Simplifying IT for a complex world."
            description="We combine dependable support, strategic guidance, and modern engineering to help organizations scale with confidence."
          />
          <div className="max-w-xl justify-self-start lg:justify-self-end">
            <Button to="/solutions" variant="ghost">
              View all solutions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <SectionReveal key={service.id} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group h-full rounded-[1.75rem] border border-border bg-[#fbfcff] p-7 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brandSoft text-brand">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                  <Button
                    to={service.href}
                    variant="ghost"
                    className="mt-6 px-4 py-2.5 text-sm"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.article>
              </SectionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
