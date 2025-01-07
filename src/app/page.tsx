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
      <div className="flex items-center justify-around relative top-3 w-full z-10">
        <div>
          <p className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
              Serenity <span>Technologies</span>
            </span>
          </p>
        </div>
        <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/15 backdrop-blur">
          <a className="nav-item" href="#">
            Home
          </a>
          <a className="nav-item" href="#">
            Projects
          </a>
          <a className="nav-item" href="#">
            About
          </a>
          <a
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            href="#"
          >
            Contact
          </a>
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
