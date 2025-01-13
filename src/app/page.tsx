"use client";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative top-3 w-full z-10">
        <div className="flex items-center justify-around px-4">
          {/* Logo */}
          <p className="text-4xl font-bold">
            <span className="text-xl md:text-2xl lg:text-4xl bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
              Serenity Technologies
            </span>
          </p>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "❌" : "🍔"}
          </button>

          {/* Navigation */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:gap-4 gap-2 p-4 md:p-0 absolute md:static top-full left-0 w-full md:w-auto backdrop-blur border md:border-0 rounded-lg md:rounded-none`}
          >
            <a
              className="nav-item md:px-4 py-2 text-sm font-[400] uppercase md:text-lg rounded-lg hover:bg-white/20"
              href="#"
            >
              Home
            </a>
            <a
              className="nav-item md:px-4 py-2 text-sm font-[400] uppercase md:text-lg  rounded-lg hover:bg-white/20"
              href="#"
            >
              Projects
            </a>
            <a
              className="nav-item md:px-4 py-2 text-sm font-[400] uppercase md:text-lg  rounded-lg hover:bg-white/20"
              href="#"
            >
              About
            </a>
            <a
              className="nav-item md:px-4 py-2 text-sm font-[400] uppercase md:text-lg  rounded-lg hover:bg-white/20"
              href="#"
            >
              Contact
            </a>
            <a
              className="nav-item md:px-4 py-2 text-sm font-[400] uppercase md:text-lg  rounded-lg hover:text-decoration-underline"
              href="#"
            >
              Services
            </a>
            <a
              className="nav-item md:px-4 py-2 text-sm font-[400] uppercase md:text-lg  rounded-lg hover:bg-white/20"
              href="#"
            >
              Blog
            </a>
          </nav>
        </div>
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
