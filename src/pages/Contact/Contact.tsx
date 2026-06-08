import { useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import Button from "@/components/Shared/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields (First name, Email, and Message).");
      return;
    }
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    setFormState("idle");
  };

  return (
    <main className="bg-white">
      <section className="bg-hero-radial py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Contact"
              as="h1"
              title="Talk to us about the systems your team needs most."
              description="This contact page follows the same conversion-focused pattern as the reference site: a sharp hero, clear details, and a form-like panel that reads as ready for action."
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-border bg-[#fbfcff] p-8 shadow-soft"
            >
              <h3 className="font-heading text-3xl font-bold text-ink">
                Reach us directly
              </h3>
              <div className="mt-6 space-y-5 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-ink">Phone</div>
                    <a href="tel:+917842959855" className="hover:text-brand transition-colors">+91 78429 59855</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-ink">Email</div>
                    <a href="mailto:admin@sngsofts.com" className="hover:text-brand transition-colors">
                      admin@sngsofts.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-ink">
                      Registered Address
                    </div>
                    <p className="leading-relaxed">H. No.:9-4-131/1/N/16, Neeraja Colony, Toli Chowki, Hyderabad, Golconda, Telangana, India, 500008</p>
                    <div className="mt-3 space-y-1 text-xs text-muted">
                      <div><span className="font-semibold text-ink">CIN:</span> U62020TS2025PTC194370</div>
                      <div><span className="font-semibold text-ink">GSTIN:</span> 36ABPCS3249C1Z7</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.08 }}
              className="rounded-[2rem] border border-border bg-white p-8 shadow-soft relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-10 px-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accentEmeraldSoft text-accentEmerald">
                      <CheckCircle2 className="h-10 w-10 animate-pulse" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold text-ink">
                      Inquiry Submitted!
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted max-w-sm">
                      Thank you, <span className="font-semibold text-ink">{formData.firstName || "there"}</span>! Your inquiry has been received. Our IT solutions team will contact you at <span className="font-semibold text-ink">{formData.email}</span> within 2 hours.
                    </p>
                    <Button
                      onClick={handleReset}
                      className="mt-8 px-6 py-3"
                    >
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand">
                          Schedule a free consultation
                        </div>
                        <h3 className="mt-3 font-heading text-3xl font-bold text-ink">
                          What happens next?
                        </h3>
                      </div>
                      <div className="hidden rounded-full bg-brandSoft px-4 py-2 text-sm font-semibold text-brand sm:block">
                        Fast response
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name *"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                      />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company / Organization"
                        value={formData.company}
                        onChange={handleChange}
                        className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25 sm:col-span-2"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Company email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25"
                      />
                      <textarea
                        name="message"
                        placeholder="How Can We Help You? *"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-accentTeal focus:ring-2 focus:ring-accentTeal/25 sm:col-span-2"
                      />
                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="sm:col-span-2 px-6 py-3.5 relative overflow-hidden"
                      >
                        {formState === "submitting" ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending inquiry...
                          </div>
                        ) : (
                          <>
                            Submit Request
                            <Send className="h-4 w-4" />
                          </>
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
    </main>
  );
}
