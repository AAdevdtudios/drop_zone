import Hero from "@/components/Sections/Hero";
import DashboardFeatures from "@/components/Sections/DashboardFeatures";
import Features from "@/components/Sections/Features";
import Integration from "@/components/Sections/Integration";
import CTASection from "@/components/Sections/CTASection";

export default function Home() {
  return (
    <section>
      <Hero />
      <DashboardFeatures />
      <Features />
      <Integration />
      <CTASection />
    </section>
  );
}