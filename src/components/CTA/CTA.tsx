import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import SectionHeading from "@/components/Shared/SectionHeading";

const benefits = [
  "Client-oriented",
  "Independent",
  "Competent",
  "Results-driven",
  "Problem-solving",
  "Transparent",
];

export default function CTA() {
  return (
    <section className="bg-[#f4f6fb] py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-cta-gradient p-8 text-white shadow-soft sm:p-10"
          >
            <SectionHeading
              eyebrow="Partner with us"
              title="Comprehensive IT support built around your business."
              description="We are happy to answer questions, review priorities, and help determine which services fit your current needs."
              light
            >
              <a
                href="tel:+18068099684"
                className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white"
              >
                <Phone className="h-5 w-5" />
                Call us at +1 806-809-9684
              </a>
            </SectionHeading>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#8cf0c8]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" className="px-6 py-3">
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/services" variant="secondary" className="px-6 py-3">
                View Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10"
          >
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted">
              What happens next?
            </div>
            <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink">
              Schedule a Free Consultation
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Use this space to represent the consultation flow and the
              quick-response experience highlighted in the reference site.
            </p>
            <form className="mt-8 grid gap-4">
              {[
                "First name",
                "Last name",
                "Company / Organization",
                "Company email",
                "Phone",
              ].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                />
              ))}
              <textarea
                placeholder="How Can We Help You?"
                rows={4}
                className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
              />
              <Button type="submit" className="w-full py-3.5">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
