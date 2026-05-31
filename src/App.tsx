import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AppRoutes from "@/routes";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function App() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
