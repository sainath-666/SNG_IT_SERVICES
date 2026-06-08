import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Loader2 } from "lucide-react";
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
  const [ctaState, setCtaState] = useState<"idle" | "submitting" | "success">("idle");
  const [ctaData, setCtaData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCtaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCtaData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaData.firstName || !ctaData.email || !ctaData.message) {
      alert("Please fill in required fields (First name, Email, and Message).");
      return;
    }
    setCtaState("submitting");
    setTimeout(() => {
      setCtaState("success");
    }, 1200);
  };

  const handleCtaReset = () => {
    setCtaData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    setCtaState("idle");
  };
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
                href="tel:+917842959855"
                className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white"
              >
                <Phone className="h-5 w-5" />
                Call us at +91 78429 59855
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
            className="rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {ctaState === "success" ? (
                <motion.div
                  key="cta-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center py-12 px-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accentEmeraldSoft text-accentEmerald">
                    <CheckCircle2 className="h-8 w-8 animate-pulse" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-ink">
                    Consultation Requested!
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Thanks, <span className="font-semibold text-ink">{ctaData.firstName}</span>! We have queued your request and will reach out at <span className="font-semibold text-ink">{ctaData.email}</span> shortly.
                  </p>
                  <Button
                    onClick={handleCtaReset}
                    className="mt-6 px-5 py-2.5 text-sm"
                  >
                    Send Another Request
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="cta-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted">
                    What happens next?
                  </div>
                  <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink">
                    Schedule a Free Consultation
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Fill out the fields below and our engineering team will get back to you with tailored advisory options.
                  </p>
                  <form onSubmit={handleCtaSubmit} className="mt-8 grid gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name *"
                      required
                      value={ctaData.firstName}
                      onChange={handleCtaChange}
                      className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={ctaData.lastName}
                      onChange={handleCtaChange}
                      className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company / Organization"
                      value={ctaData.company}
                      onChange={handleCtaChange}
                      className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Company email *"
                      required
                      value={ctaData.email}
                      onChange={handleCtaChange}
                      className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={ctaData.phone}
                      onChange={handleCtaChange}
                      className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                    />
                    <textarea
                      name="message"
                      placeholder="How Can We Help You? *"
                      required
                      rows={4}
                      value={ctaData.message}
                      onChange={handleCtaChange}
                      className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                    />
                    <Button
                      type="submit"
                      disabled={ctaState === "submitting"}
                      className="w-full py-3.5 relative overflow-hidden"
                    >
                      {ctaState === "submitting" ? (
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Scheduling...
                        </div>
                      ) : (
                        "Submit Consultation Request"
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
