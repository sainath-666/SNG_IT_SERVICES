import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";
import { stats } from "@/data/solutions";

const heroImage =
  "https://i0.wp.com/gamicsolutions.com/wp-content/uploads/2023/03/GettyImages-618762080-1-1.jpg?resize=1024%2C649&ssl=1";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-hero-radial">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-12 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-2 shadow-soft">
              <div className="flex items-center gap-1 text-[#e21d2c]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slateInk">
                Reviewed on Clutch · 31 reviews
              </span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-[4.95rem]">
              We manage your IT,
              <br />
              so you can manage
              <br />
              your business.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slateInk/90 sm:text-[1.35rem] sm:leading-10">
              Take charge of your business continuity with innovative IT
              solutions designed for secure growth and reliable performance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" className="px-7 py-4 text-base">
                Schedule a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                to="/services"
                variant="secondary"
                className="px-7 py-4 text-base"
              >
                Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.2rem] bg-surface shadow-soft lg:rounded-[2.5rem]">
              <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block" />
              <img
                src={heroImage}
                alt="Modern IT office"
                className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1534]/10 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 h-28 w-32 bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
            </div>
          </motion.div>
        </div>

        <div className="border-t border-[#d9dde7] py-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <div className="flex items-center gap-4 xl:col-span-1">
              <div className="leading-tight">
                <div className="text-[0.75rem] font-bold uppercase tracking-[0.24em] text-muted">
                  Reviewed on
                </div>
                <div className="font-heading text-[2rem] font-bold tracking-tight text-ink">
                  Clutch
                </div>
              </div>
              <div className="text-sm font-bold text-muted">31 reviews</div>
            </div>
            {stats.map((stat) => (
              <div key={stat.id} className="border-l border-[#d9dde7] pl-6">
                <div className="font-heading text-4xl font-extrabold tracking-tight text-ink">
                  {stat.value}
                </div>
                <div className="mt-1 max-w-[10rem] text-sm font-medium leading-6 text-slateInk/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
