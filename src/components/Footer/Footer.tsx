import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/Shared/Container";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#10162f] text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl font-extrabold">
                S
              </div>
              <div>
                <div className="font-heading text-lg font-bold tracking-tight">
                  SNG it services
                </div>
                <p className="text-sm text-white/65">
                  Digital transformation · IT services · Cloud support
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
              We manage your IT so you can manage your business. This replica
              keeps the same premium, conversion-focused structure as the
              reference site.
            </p>
            <div className="mt-6 flex items-center gap-3 text-white/70">
              {[Linkedin, Facebook, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-brand"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/55">
              Quick links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/75 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-white/55">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brandSoft" />
                <span>30 N Gould St, Sheridan, WY 82801</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brandSoft" />
                <span>19 College Ave, Glassboro, NJ 08028</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-brandSoft" />
                <a href="tel:+18068099684">+1 806-809-9684</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-brandSoft" />
                <a href="mailto:info@gamicsolutions.com">
                  info@gamicsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2025 SNG it services. All rights reserved.</span>
          <span>
            Built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.
          </span>
        </Container>
      </div>
    </footer>
  );
}
