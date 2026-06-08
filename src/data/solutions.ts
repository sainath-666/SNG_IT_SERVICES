export type SolutionCard = {
  id: string;
  title: string;
  summary: string;
  href: string;
};

export type IndustryCard = {
  id: string;
  title: string;
  image: string;
  href: string;
};

export type ValueCard = {
  id: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  logo: string;
};

export const solutions: SolutionCard[] = [
  {
    id: "managed-services",
    title: "Managed Services",
    summary:
      "Free up your internal resources to focus on the business while we handle day-to-day support and monitoring.",
    href: "/solutions",
  },
  {
    id: "it-consulting-advisory",
    title: "IT Consulting & Advisory",
    summary:
      "Transform strategic goals into actionable technology plans with practical guidance and implementation support.",
    href: "/solutions",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    summary:
      "Identify vulnerabilities, assess risks, and implement security layers that protect what matters most.",
    href: "/solutions",
  },
  {
    id: "web-development",
    title: "Web Development",
    summary:
      "Create a fast, credible online presence that feels tailored to your organization and audience.",
    href: "/solutions",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    summary:
      "Launch mobile apps that keep teams and customers connected across platforms and screen sizes.",
    href: "/solutions",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    summary:
      "Adopt cloud environments that improve resilience, accessibility, and long-term cost efficiency.",
    href: "/solutions",
  },
];

export const industries: IndustryCard[] = [
  {
    id: "manufacturing",
    title: "Industry & Manufacturing",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    href: "/solutions",
  },
  {
    id: "logistics",
    title: "Transportation & Logistics",
    image:
      "https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&w=1200&q=80",
    href: "/solutions",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    href: "/solutions",
  },
  {
    id: "insurance",
    title: "Banks & Insurance",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    href: "/solutions",
  },
  {
    id: "consulting",
    title: "Consulting Providers",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    href: "/solutions",
  },
  {
    id: "non-profit",
    title: "Non-Profit",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    href: "/solutions",
  },
];

export const vendorChallenges: ValueCard[] = [
  {
    id: "datacenter",
    title: "Datacenter & Hosting",
    description:
      "Enterprise-grade environments built for resilience, compliance, and predictable performance.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Make everyday work feel seamless with integrated tools that teams already understand and trust.",
  },
  {
    id: "cloud-platform",
    title: "Cloud Platform",
    description:
      "Deploy a flexible cloud foundation that reduces overhead while improving access and security.",
  },
  {
    id: "network",
    title: "Network & Connectivity",
    description:
      "Keep devices, offices, and teams reliably connected through a well-planned network architecture.",
  },
];

export const stats = [
  { id: "years", value: "5+", label: "Years Proven Track Record" },
  { id: "satisfaction", value: "98%", label: "Customer Satisfaction" },
  { id: "projects", value: "500", label: "Projects We Have Completed" },
  { id: "response", value: "3 Mins", label: "Average Answer Time" },
];

export const testimonials: Testimonial[] = [
  {
    id: "daniel",
    quote:
      "SNG IT Services is an example of the way Managed Services should be done. They step in immediately and keep us moving forward.",
    name: "Daniel Legrante",
    role: "CIO",
    company: "Restaurant Product Supplier",
    logo: "https://gamicsolutions.com/wp-content/uploads/2023/03/logo-R-1.svg",
  },
  {
    id: "amanda",
    quote:
      "Their team was professional, knowledgeable, and proactive. The transition to remote work was seamless and low risk.",
    name: "Amanda Parks",
    role: "Network Manager",
    company: "Healthcare Organization",
    logo: "https://i0.wp.com/gamicsolutions.com/wp-content/uploads/2023/03/photo-1.png?fit=108%2C108&ssl=1",
  },
  {
    id: "john",
    quote:
      "Their collaborative approach has been critical in helping us build an IT infrastructure that enables our success.",
    name: "John Labkins",
    role: "Partner & CEO",
    company: "Telecommunication Company",
    logo: "https://i0.wp.com/gamicsolutions.com/wp-content/uploads/2023/03/nespresso-logo-1.png?fit=108%2C108&ssl=1",
  },
];
