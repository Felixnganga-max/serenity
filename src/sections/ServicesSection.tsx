import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Code, Smartphone, Brush, ArrowRight } from "lucide-react";

// Placeholder for actual images
import webDevImage from "@/assets/images/Hero1.png";
import mobileAppImage from "@/assets/images/mobile.jpg";
import designBrandingImage from "@/assets/images/design.jpg";

const serviceCategories = [
  {
    title: "Web Development Mastery",
    subtitle: "Digital Experiences that Convert",
    icon: Code,
    description:
      "Crafting pixel-perfect, high-performance websites that transform your online presence and drive business growth.",
    alt: "Professional Web Design and Development Solutions by Felix",
    services: [
      "Custom WordPress Websites",
      "E-commerce Platform Development",
      "Responsive Web Design",
      "Single Page Applications",
      "Performance Optimization",
    ],
    image: webDevImage,
    gradient: "from-blue-500/50 to-purple-600/50",
  },
  {
    title: "Mobile App Engineering",
    subtitle: "Innovation in Your Pocket",
    icon: Smartphone,
    description:
      "Developing cutting-edge mobile applications that deliver seamless user experiences across all platforms.",
    alt: "Expert Mobile App Development Services by Felix",
    services: [
      "iOS App Development",
      "Android App Creation",
      "Cross-Platform Solutions",
      "UI/UX Mobile Design",
      "App Store Launch Support",
    ],
    image: mobileAppImage,
    gradient: "from-green-500/50 to-teal-600/50",
  },
  {
    title: "Design & Branding",
    subtitle: "Visual Storytelling",
    icon: Brush,
    description:
      "Creating compelling visual identities that communicate your brand's essence and captivate your target audience.",
    alt: "Professional Graphic Design and Branding Services by Felix",
    services: [
      "Strategic Logo Design",
      "Corporate Stationery",
      "Marketing Collateral",
      "Brand Identity Systems",
      "Print & Digital Design",
    ],
    image: designBrandingImage,
    gradient: "from-pink-500/50 to-orange-600/50",
  },
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="py-10 bg-gradient-to-b from-[#EB5A3C]/20 to-[#DF9755]/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="Transform Your Vision into Digital Reality"
          description="Innovative solutions that elevate your brand and drive meaningful results"
          eyebrow="Our Specialized Services"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {serviceCategories.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div
                  className={`
                    relative overflow-hidden rounded-2xl 
                    bg-gradient-to-br ${service.gradient} 
                    border border-white/10 
                    w-full
                    shadow-2xl transition-all duration-500
                    ${
                      isActive
                        ? "ring-4 ring-white/20"
                        : "hover:ring-2 hover:ring-white/30"
                    }
                  `}
                  onClick={() => setActiveService(index)}
                >
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>

                  <Image
                    src={service.image}
                    alt={service.alt}
                    layout="responsive"
                    className="opacity-30 group-hover:opacity-40 transition-opacity"
                  />

                  <div className="relative p-8 text-white">
                    <div className="flex justify-between items-center mb-4">
                      <IconComponent
                        size={48}
                        className="text-white/80 group-hover:text-white transition-colors"
                      />
                      <ArrowRight
                        size={24}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/70 mb-4 text-sm">
                      {service.subtitle}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 space-y-2"
                      >
                        {service.services.map((item) => (
                          <div
                            key={item}
                            className="flex items-center text-sm text-white/60 hover:text-white transition-colors"
                          >
                            <span className="mr-2 text-blue-400">•</span>
                            {item}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
