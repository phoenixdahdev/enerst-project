import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Projects } from "@/components/sections/projects";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Projects />
        <FeaturedProperties />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
