import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import netflixImage from "@/assets/images/netflix.png";
import shopImage from "@/assets/images/shop.png";
import topmazImage from "@/assets/images/topmaz.png";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Automotive E-commerce and Inventory System",
    alt: "automotive management system, with inventory and advanced security by serenity softwares and technological innovations",
    results: [
      { title: "Seemless user experience" },
      {
        title:
          "Secure Authentication with jwt tokens and password hashing algorithms",
      },
      { title: "Payment intergration with Stripe(Stripe Testmode)" },
    ],
    link: "https://www.topmazautospares.com/",
    image: topmazImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Netflix Clone Web Application",
    alt: "Netflix clone, firebase authentication, modern technologies by serenity softwares and technological innovations",
    results: [
      { title: "Intergration with external API, in this case, the TMDB" },
      { title: "Advanced and secure authentication with firebase" },
      { title: "Dynamic trailer display and smooth transitions" },
    ],
    link: "https://netflix-clone-beta-virid.vercel.app/",
    image: netflixImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Interactive Online Shopping Store",
    alt: "Modern E-commerce website with inventory management, payment integration, and user authentication by Serenity Software.",
    results: [
      { title: "Filtering products on varied metrics" },
      { title: "Dynamic and smooth transitions" },
      { title: "Still working on the backend in nodejs" },
    ],
    link: "https://shop-lemon.vercel.app/",
    image: shopImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Automotive E-commerce and Inventory System",
    alt: "automotive management system, with inventory and advanced security by serenity softwares and technological innovations",
    results: [
      { title: "Seemless user experience" },
      {
        title:
          "Secure Authentication with jwt tokens and password hashing algorithms",
      },
      { title: "Payment intergration with Stripe(Stripe Testmode)" },
    ],
    link: "https://www.topmazautospares.com/",
    image: topmazImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Netflix Clone Web Application",
    alt: "Netflix clone, firebase authentication, modern technologies by serenity softwares and technological innovations",
    results: [
      { title: "Intergration with external API, in this case, the TMDB" },
      { title: "Advanced and secure authentication with firebase" },
      { title: "Dynamic trailer display and smooth transitions" },
    ],
    link: "https://netflix-clone-beta-virid.vercel.app/",
    image: netflixImage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Interactive Online Shopping Store",
    alt: "Modern E-commerce website with inventory management, payment integration, and user authentication by Serenity Software.",
    results: [
      { title: "Filtering products on varied metrics" },
      { title: "Dynamic and smooth transitions" },
      { title: "Still working on the backend in nodejs" },
    ],
    link: "https://shop-lemon.vercel.app/",
    image: shopImage,
  },
];

export const ProjectsSection = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="overflow-hidden">
      <div className="w-full m-4">
        {/* Section Header */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Explore Our Work
          </p>
        </div>
        <h2 className="font-serif md:text-3xl text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="lg:text-lg mx-auto max-w-md md:text-lg text-center mt-4 text-white/60">
          Transforming your lives with the most impressive and emerging
          technologies
        </p>

        {/* Project Cards */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-10">
          {portfolioProjects.map((project, projectIndex) => (
            <motion.div
              key={`${project.title}-${projectIndex}`}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false, // Key change: allows repeated animations
                amount: 0.1, // Triggers when 10% of card is visible
              }}
              custom={projectIndex}
              className="bg-gray-800 rounded-3xl w-full overflow-hidden border border-black relative"
            >
              {/* Previous card content remains the same */}
              <div className="p-8">
                <div className="p-2 gap-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif md:text-3xl text-2xl mt-2">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4" />

                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex md:text-base gap-2 text-sm text-white/50"
                    >
                      <CheckIcon className="w-5 h-5 md:w-6 md:h-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 relative h-48 overflow-hidden rounded-lg">
                  <Image
                    className="object-cover w-full h-full"
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                  />
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6"
                >
                  <button className="w-full px-6 bg-white text-gray-900 h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                    <span>View Live Projects</span>
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
