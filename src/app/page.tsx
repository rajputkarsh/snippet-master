import { CTASection } from "@/components/CTASection";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
      <Features />
    </div>
  );
}
