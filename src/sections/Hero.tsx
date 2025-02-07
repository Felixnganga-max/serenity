"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleImage from "@/assets/icons/sparkle.svg";
import grainImage from "@/assets/images/grain.jpg";
import heroImage from "@/assets/images/Hero1.png";
import heroImageI from "@/assets/images/Hero2.png";
import heroImageII from "@/assets/images/Hero3.jpeg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  const images = [heroImage, heroImageI, heroImageII];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Typing Effect States and Logic
  const lines = ["Your Vision", "Our Software Craft", "Endless Possibilities"];
  const [typedLines, setTypedLines] = useState(["", "", ""]);

  useEffect(() => {
    lines.forEach((line, index) => {
      let currentText = "";
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (currentText.length < line.length) {
            currentText += line[currentText.length];
            setTypedLines((prev) => {
              const newLines = [...prev];
              newLines[index] = currentText;
              return newLines;
            });
          } else {
            clearInterval(interval);
          }
        }, 100); // Typing speed (adjust as needed)
      }, index * 2000); // Delay for each line to start typing
      return () => clearTimeout(timeout);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 800);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 md:py-10 lg:py-20 relative z-0 h-[88vh] overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[450px] hero-ring"></div>
      <div className="size-[550px] hero-ring"></div>
      <div className="size-[650px] hero-ring"></div>
      <div className="size-[750px] hero-ring"></div>

      {/* Reduced size of rotating icons */}
      <HeroOrbit size={430} rotation={-14} shouldOrbit spinDuration="30s">
        <SparkleImage className="size-4 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit spinDuration="32s">
        <SparkleImage className="size-3 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-42} shouldOrbit spinDuration="36s">
        <div className="w-1.5 h-1.5 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit spinDuration="38s">
        <SparkleImage className="size-6 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit spinDuration="40s">
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit spinDuration="50s">
        <StarIcon className="size-6 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit spinDuration="42s">
        <div className="w-1.5 h-1.5 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit spinDuration="44s">
        <SparkleImage className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={88} shouldOrbit spinDuration="46s">
        <div className="w-2 h-2 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit spinDuration="48s">
        <StarIcon className="size-16 text-emerald-300" />
      </HeroOrbit>

      <div className="lg:ml-10 lg:mr-10 flex flex-col-reverse md:flex-row md:gap-20 items-center h-full justify-start">
        {/* Left side content */}
        <div className="mt-10 w-full md:w-1/2">
          <h1 className="font-serif text-center lg:text-left md:text-5xl text-2xl tracking-tight flex flex-col gap-2">
            {typedLines.map((line, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 2 }}
                className={
                  index === 2
                    ? "bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text"
                    : index === 1
                    ? "text-emerald-400"
                    : "text-white/90"
                }
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <p className="mt-8 text-white/60 md:text-xl max-w-2xl leading-relaxed">
            Transforming complex business challenges into elegant software
            solutions. Your success is our code.
          </p>
          <div className="flex md:-[100%] flex-col m-auto w-[75%] md:flex-row mt-16 gap-4">
            <button className="inline-flex items-center gap-4 border border-white/15 px-6 h-12 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
              <span className="font-bold">Explore my work here</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-lg hover:bg-transparent hover:text-white transition-colors duration-300">
              <span>🌐</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="mt-10 w-full md:w-1/2 h-full relative flex items-center justify-center overflow-hidden">
          <div className="bg-green-500 size-2.5 rounded-full absolute z-10">
            <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
          </div>
          <div className="relative w-full h-full min-h-[500px]">
            <Image
              alt="hero image"
              src={images[currentImageIndex]}
              className={`object-cover object-center transform transition-all duration-1000 ease-in-out ${
                isTransitioning
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image
              alt="hero image next"
              src={images[(currentImageIndex + 1) % images.length]}
              className={`object-cover object-center absolute inset-0 transform transition-all duration-1000 ease-in-out ${
                isTransitioning
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
