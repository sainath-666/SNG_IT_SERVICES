import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const AboutPage = lazy(() => import("@/pages/About/About"));
const ServicesPage = lazy(() => import("@/pages/Services/Services"));
const SolutionsPage = lazy(() => import("@/pages/Solutions/Solutions"));
const ContactPage = lazy(() => import("@/pages/Contact/Contact"));

function PageLoader() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 text-sm text-muted sm:px-6 lg:px-8">
      Loading…
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
