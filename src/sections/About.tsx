import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";
import { CardHeader } from "@/components/CardHeader";
import Education from "@/assets/images/education.jpg";
import Finance from "@/assets/images/finance.jpg";
import Blockchain from "@/assets/images/blockchain.jpg";

export const AboutSection = () => {
  return (
    <div className="py-16 lg:py-28 relative overflow-hidden bg-gradient-to-br bg-gray-900 to-blue-950 text-white">
      {/* Flaming Candle on the Left */}
      <div className="absolute top-0 left-0 h-full w-16 flex items-center justify-center">
        <div className="relative w-4 h-64 bg-yellow-900 rounded-t-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="relative w-6 h-14">
              <div className="absolute w-6 h-14 bg-yellow-400 rounded-full blur-sm animate-flicker"></div>
              <div className="absolute w-8 h-16 bg-yellow-200 rounded-full blur-md opacity-50 animate-flicker"></div>
              <div className="absolute w-3 h-6 bg-white rounded-full blur-sm top-0 left-1/2 transform -translate-x-1/2 animate-flicker"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Flaming Candle on the Right */}
      <div className="absolute top-0 right-0 h-full w-16 flex items-center justify-center">
        <div className="relative w-4 h-64 bg-yellow-900 rounded-t-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="relative w-6 h-14">
              <div className="absolute w-6 h-14 bg-yellow-400 rounded-full blur-sm animate-flicker"></div>
              <div className="absolute w-8 h-16 bg-yellow-200 rounded-full blur-md opacity-50 animate-flicker"></div>
              <div className="absolute w-3 h-6 bg-white rounded-full blur-sm top-0 left-1/2 transform -translate-x-1/2 animate-flicker"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container relative z-10">
        <SectionHeader
          eyebrow="Upcoming Services"
          title="Explore Our Offerings"
          description="Discover the innovative solutions we provide to help you achieve your goals"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Financial Services",
              description:
                "Comprehensive financial solutions tailored to your needs",
              image: Finance,
            },
            {
              title: "Blockchain",
              description:
                "Cutting-edge blockchain technology for secure and transparent solutions",
              image: Blockchain,
            },
            {
              title: "Financial Service Software",
              description:
                "Advanced software solutions for financial management",
              image: Finance,
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="h-[380px] flex flex-col items-center text-center bg-gray-800 rounded-xl shadow-lg p-4"
            >
              <CardHeader
                title={service.title}
                description={service.description}
              />
              <div className="w-full h-40 mt-4 relative rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes flicker {
          0% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          25% {
            transform: translateX(-3px) translateY(-2px) scale(1.2);
            opacity: 0.9;
          }
          50% {
            transform: translateX(2px) translateY(1px) scale(1.4);
            opacity: 0.7;
          }
          75% {
            transform: translateX(-2px) translateY(-1px) scale(1.3);
            opacity: 0.85;
          }
          100% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
        }

        .animate-flicker {
          animation: flicker 1s infinite ease-in-out alternate;
        }
      `}</style>
    </div>
  );
};
