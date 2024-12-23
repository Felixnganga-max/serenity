import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import book from "@/assets/images/book-cover.png";
import Image from "next/image";
import ReactIcon from "@/assets/icons/react.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import React from "react";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBox } from "@/components/ToolBox";

const toolBoxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GitHubIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
];

const hobbies = [
  { title: "Music", emoji: "🎸", left: "50%", top: "50%" },
  { title: "Environment", emoji: "🌳", left: "10%", top: "50%" },
  { title: "Education", emoji: "🏫", left: "10%", top: "20%" },
  { title: "Photography", emoji: "📷", left: "60%", top: "15%" },
  { title: "Hiking", emoji: "👟", left: "45%", top: "30%" },
  { title: "BootCamps", emoji: "👩‍💻", left: "70%", top: "30%" },
  { title: "Reading", emoji: "🧾", left: "30%", top: "5%" },
  { title: "BootCamps", emoji: "👩‍💻", left: "70%", top: "30%" },
  { title: "Reading", emoji: "🧾", left: "70%", top: "0%" },
];

export const AboutSection = () => {
  // const generateRandomPosition = () => {
  //   const top = Math.random() * 40; // Limits the top position to 80% of the container height
  //   const left = Math.random() * 80; // Limits the left position to 80% of the container width
  //   return { top: `${top}%`, left: `${left}%` };
  // };

  return (
    <div className="py-16 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my World"
          description="Learn More about the services you need to unlock your full potential"
        />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image alt="book" src={book} />
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 pt-6"
                title="My ToolBox"
                description="Explore the tools we use in crafting your solutions"
              />
              <ToolBox className="mt-6 pr-6" toolBoxItems={toolBoxItems} />
              <ToolBox className="mt-6 pr-6" toolBoxItems={toolBoxItems} />
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Our Interests Beyond Technology"
              />
              <div className="relative w-full h-full">
                {hobbies.map((hobby, index) => {
                  // const position = generateRandomPosition();
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                      style={{ top: hobby.top, left: hobby.left }}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="w-full h-full object-cover"
                alt="map Image"
                src={mapImage}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute  after:inset-0 after:outline after:outiline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  className="size-20"
                  alt="smile memoji"
                  src={smileMemoji}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
