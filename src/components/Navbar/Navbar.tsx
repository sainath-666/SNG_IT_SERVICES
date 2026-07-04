import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Container from "@/components/Shared/Container";
import Button from "@/components/Shared/Button";

type DropdownLink = {
  label: string;
  to: string;
};

type NavItem =
  | {
      label: string;
      to: string;
      dropdown?: never;
    }
  | {
      label: string;
      dropdown: DropdownLink[];
      to?: never;
    };

function hasDropdown(
  item: NavItem,
): item is Extract<NavItem, { dropdown: DropdownLink[] }> {
  return "dropdown" in item;
}

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const solutionLinks = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
];

const resourceLinks = [
  { label: "Case Studies", to: "/solutions" },
  { label: "Support", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = useMemo(
    () =>
      [
        { label: "Home", to: "/" },
        { label: "Company", dropdown: companyLinks },
        { label: "Solutions", dropdown: solutionLinks },
        { label: "Resources", dropdown: resourceLinks },
      ] satisfies NavItem[],
    [],
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#e8ebf3] bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(15,21,52,0.08)]" : ""
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="SNG IT Services home"
          >
            <img 
              src="/logofiles/ChatGPT Image Jun 29, 2026, 12_55_12 AM.png" 
              alt="SNG IT Services Logo" 
              className="h-16 w-16 object-contain"
            />
            <div className="leading-none">
              <div className="font-heading text-[1.1rem] font-extrabold tracking-tight text-ink">
                SNG
              </div>
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-brand">
                it services
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              hasDropdown(item) ? (
                <div key={item.label} className="group relative px-2 py-3">
                  <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-slateInk transition-colors hover:text-brand">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-3xl border border-border bg-white p-2 shadow-soft">
                      {item.dropdown.map((link) => (
                        <NavLink
                          key={link.label}
                          to={link.to}
                          className={({ isActive }) =>
                            `block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-brandSoft text-brand"
                                : "text-slateInk hover:bg-surface"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-brandSoft text-brand"
                        : "text-slateInk hover:text-brand"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+917842959855"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-slateInk hover:text-brand"
            >
              <Phone className="h-4 w-4" />
              +91 78429 59855
            </a>
            <Button to="/contact" className="px-6 py-3">
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-slateInk lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 space-y-3 rounded-3xl border border-border bg-white p-4 shadow-soft">
                {navItems.map((item) =>
                  hasDropdown(item) ? (
                    <div key={item.label} className="space-y-2">
                      <div className="px-2 text-xs font-bold uppercase tracking-[0.24em] text-muted">
                        {item.label}
                      </div>
                      <div className="grid gap-2">
                        {item.dropdown.map((link) => (
                          <NavLink
                            key={link.label}
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `rounded-2xl px-4 py-3 text-sm font-semibold ${
                                isActive
                                  ? "bg-brandSoft text-brand"
                                  : "bg-surface text-slateInk"
                              }`
                            }
                          >
                            {link.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-sm font-semibold ${
                          isActive
                            ? "bg-brandSoft text-brand"
                            : "bg-surface text-slateInk"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-surface px-4 py-3">
                  <a
                    href="tel:+917842959855"
                    className="text-sm font-semibold text-slateInk"
                  >
                    +91 78429 59855
                  </a>
                  <Button
                    to="/contact"
                    className="px-5 py-2.5"
                    onClick={() => setOpen(false)}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
