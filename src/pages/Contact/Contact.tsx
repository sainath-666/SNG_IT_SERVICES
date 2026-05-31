import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Shared/Container";
import SectionHeading from "@/components/Shared/SectionHeading";
import Button from "@/components/Shared/Button";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-hero-radial py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Contact"
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
                  <Phone className="mt-0.5 h-5 w-5 text-brand" />
                  <div>
                    <div className="font-semibold text-ink">Phone</div>
                    <a href="tel:+18068099684">+1 806-809-9684</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-brand" />
                  <div>
                    <div className="font-semibold text-ink">Email</div>
                    <a href="mailto:info@gamicsolutions.com">
                      info@gamicsolutions.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand" />
                  <div>
                    <div className="font-semibold text-ink">
                      Office locations
                    </div>
                    <p>30 N Gould St, Sheridan, WY 82801</p>
                    <p>19 College Ave, Glassboro, NJ 08028</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.08 }}
              className="rounded-[2rem] border border-border bg-white p-8 shadow-soft"
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

              <form className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "First name",
                  "Last name",
                  "Company / Organization",
                  "Company email",
                  "Phone",
                  "How Can We Help You?",
                ].map((field, index) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    className={`rounded-2xl border border-border bg-[#f8faff] px-4 py-3 text-sm outline-none transition focus:border-brand ${index === 5 ? "sm:col-span-2" : ""}`}
                  />
                ))}
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="rounded-2xl border border-border bg-[#f8faff] px-4 py-3 text-sm outline-none transition focus:border-brand sm:col-span-2"
                />
                <Button type="submit" className="sm:col-span-2 px-6 py-3">
                  Submit
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
