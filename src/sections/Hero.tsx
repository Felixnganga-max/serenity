import memojiComputer from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleImage from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-5 md:py-10 lg:py-20 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={430} rotation={-14} shouldOrbit spinDuration="30s">
        <SparkleImage className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit spinDuration="32s">
        <SparkleImage className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit spinDuration="34s">
        <SparkleImage className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-42} shouldOrbit spinDuration="36s">
        <div className="w-2 h-2 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit spinDuration="38s">
        <SparkleImage className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit spinDuration="40s">
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}shouldOrbit spinDuration="50s">
        <StarIcon className="size-8 text-emerald-300" shouldOrbit spinDuration="30s"/>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit spinDuration="42s">
        <div className="w-2 h-2 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit spinDuration="44s">
        <SparkleImage className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={88} shouldOrbit spinDuration="46s">
        <div className="w-3 h-3 bg-emerald-300/20 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit spinDuration="48s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            alt="person and laptop"
            src={memojiComputer}
            className="size-[100px]"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex justify-center items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
          </div>
          <div className="text-sm font-medium">
            Available for the needs of your enterprise
          </div>
        </div>
      </div>
      <div className="m-w-lg mx-auto">
        <h1 className="font-serif md:text-5xl text-2xl text-center mt-8 tracking-wide">
          Your dreams come true
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-xl">
         We brigde the distance between your dream software and the reality
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore my work here</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>🤝</span>
          <span className="font-semibold ">Let&apos;s Connect</span>
        </button>
      </div>
    </div>
  );
};
