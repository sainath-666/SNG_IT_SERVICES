export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon:
    | "shield-check"
    | "layers-3"
    | "cpu"
    | "globe-2"
    | "smartphone"
    | "cloud";
  href: string;
};

export const services: ServiceCard[] = [
  {
    id: "managed-services",
    title: "Managed Services",
    description:
      "Free up internal resources and keep your systems stable with day-to-day support, monitoring, and proactive maintenance.",
    icon: "shield-check",
    href: "/services",
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Advisory",
    description:
      "Align technology with business goals through careful planning, architecture guidance, and practical roadmaps.",
    icon: "layers-3",
    href: "/services",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Protect critical data and systems with risk assessments, hardening, monitoring, and response planning.",
    icon: "cpu",
    href: "/services",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build polished digital experiences that present your brand clearly and convert visitors into customers.",
    icon: "globe-2",
    href: "/services",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Deliver native-feeling mobile apps tailored to your brand, workflows, and customer expectations.",
    icon: "smartphone",
    href: "/services",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description:
      "Move faster with scalable cloud solutions that improve access, resilience, and long-term flexibility.",
    icon: "cloud",
    href: "/services",
  },
];
