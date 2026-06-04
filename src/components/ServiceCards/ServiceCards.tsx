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

const cardThemes: Record<
  string,
  {
    iconBg: string;
    iconText: string;
    hoverBorder: string;
    hoverShadow: string;
    badgeLabel: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  "managed-services": {
    iconBg: "bg-sky-50",
    iconText: "text-accentSky",
    hoverBorder: "hover:border-sky-300",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)]",
    badgeLabel: "Infrastructure",
    badgeBg: "bg-sky-50",
    badgeText: "text-accentSky",
  },
  "it-consulting": {
    iconBg: "bg-indigo-50",
    iconText: "text-accentIndigo",
    hoverBorder: "hover:border-indigo-300",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)]",
    badgeLabel: "Strategy",
    badgeBg: "bg-indigo-50",
    badgeText: "text-accentIndigo",
  },
  "cyber-security": {
    iconBg: "bg-emerald-50",
    iconText: "text-accentEmerald",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]",
    badgeLabel: "Security",
    badgeBg: "bg-emerald-50",
    badgeText: "text-accentEmerald",
  },
  "web-development": {
    iconBg: "bg-cyan-50",
    iconText: "text-accentCyan",
    hoverBorder: "hover:border-cyan-300",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]",
    badgeLabel: "Development",
    badgeBg: "bg-cyan-50",
    badgeText: "text-accentCyan",
  },
  "mobile-development": {
    iconBg: "bg-green-50",
    iconText: "text-accentMint",
    hoverBorder: "hover:border-green-300",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(34,197,94,0.12)]",
    badgeLabel: "Mobile",
    badgeBg: "bg-green-50",
    badgeText: "text-accentMint",
  },
  "cloud-services": {
    iconBg: "bg-teal-50",
    iconText: "text-accentTeal",
    hoverBorder: "hover:border-teal-300",
    hoverShadow: "hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)]",
    badgeLabel: "Cloud",
    badgeBg: "bg-teal-50",
    badgeText: "text-accentTeal",
  },
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
            const theme = cardThemes[service.id] || cardThemes["managed-services"];

            return (
              <SectionReveal key={service.id} delay={index * 0.05}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className={`group h-full rounded-[1.75rem] border border-border bg-[#fbfcff] p-7 shadow-soft transition-all duration-300 ${theme.hoverBorder} ${theme.hoverShadow}`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconText}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className={`inline-flex rounded-full ${theme.badgeBg} ${theme.badgeText} px-3 py-1 text-xs font-bold uppercase tracking-wider`}>
                      {theme.badgeLabel}
                    </span>
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
