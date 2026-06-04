import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import SectionReveal from "@/components/Shared/SectionReveal";
import { testimonials } from "@/data/solutions";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Success stories"
            title="Trusted by teams that need reliable outcomes."
            description="A few representative testimonials are shown here to mirror the social proof heavy rhythm of the original site."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={testimonial.id} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="h-full rounded-[1.75rem] border border-border bg-[#fbfcff] p-7 shadow-soft transition-all duration-300 hover:border-accentCyan/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.06)]"
              >
                <Quote className="h-8 w-8 text-accentTeal/30" />
                <p className="mt-5 text-sm leading-7 text-slateInk">
                  “{testimonial.quote}”
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="h-12 w-12 rounded-full object-contain bg-white p-1 shadow-sm"
                  />
                  <div>
                    <div className="font-semibold text-ink">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
