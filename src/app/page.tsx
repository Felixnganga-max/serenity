import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center relative top-3 w-full z-10">
        <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/15 backdrop-blur">
          <a className="nav-item" href="#">Home</a>
          <a className="nav-item" href="#">Projects</a>
          <a className="nav-item" href="#">About</a>
          <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href="#">Contact</a>
        </nav>
      </div>
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    
    </>
  );
}
