"use client";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImage from "@/assets/images/sereneImage.png";
import ServicesSection from "@/sections/ServicesSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Services", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-slate-500/50 to-[#EB5A3C]/50 h-19 w-full z-10 sticky"
      >
        <div className="flex items-center gap-4 justify-around">
          <div className="flex gap-4 mt-1">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={logoImage}
                width={80}
                height={56}
                alt="Website, software and mobile apps development logo"
              />
            </motion.div>
            <p className="text-4xl font-bold">
              <span className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
                Serenity Hi-Tech
              </span>
            </p>

            {/* Hamburger Icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-3xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "❌" : "🍔"}
            </motion.button>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:gap-4 gap-2 p-4 md:p-0 absolute md:static top-full left-0 w-full md:w-auto backdrop-blur border md:border-0 rounded-lg md:rounded-none`}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="nav-item md:px-4 py-2 text-sm font-[400] uppercase md:text-sm rounded-lg hover:bg-white/20"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>

      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
