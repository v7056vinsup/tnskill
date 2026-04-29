import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Courses from "@/components/courses";
import Stats from "@/components/stats";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
