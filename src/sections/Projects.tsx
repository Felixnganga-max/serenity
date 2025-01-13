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
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold -tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif md:text-5xl text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="lg:text-lg mx-auto max-w-md md:text-lg text-center mt-4 text-white/60">
          See how I transform concepts into emerging digital experiences
        </p>

        {/* Project Cards */}
        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              style={{
                top: `calc(65px + ${projectIndex * 20}px)`, // Corrected dynamic calculation
              }}
              className="lg:pt-16 lg:px-20 md:px-10 md:pt-12 overflow-hidden z-0 bg-gray-800 rounded-3xl sticky after:content-[''] after:absolute after:inset-0 after:z-10 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none border border-black"
              key={project.title}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>

              {/* Content Grid */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Text Content */}
                <div className="lg:pb-16">
                  <div className="p-8 gap-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif md:text-4xl md:mt-5 text-2xl mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
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

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="md:w-auto px-6 bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Projects</span>
                      <ArrowUp className="w-4 h-4" />
                    </button>
                  </a>
                </div>

                {/* Image */}
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
