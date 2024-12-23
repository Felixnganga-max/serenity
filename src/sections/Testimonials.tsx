import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Serenity Technologies was instrumental in transforming our website into a powerful marketing tool. Their attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Serenity Technologies was a pleasure. Their expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Felix was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Felix's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Felix is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Serenity Technologies work on our website has been nothing short of exceptional. The developers are talented and communicate effectively. We highly recommend the company.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div>
        <SectionHeader
          description="Don't just take my word for it. See what my clients say about my work"
          title="What Our Clients Say"
          eyebrow="Happy Clients"
        />
        <div className="mt-16 ml-10 mr-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-x-clip [mask-image: linear-gradient(to_right, transparent, black_10%_90%, transparent)">
          {testimonials.map((test) => (
            <Card key={test.name} className="p-5 h-auto shadow-lg">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Image
                    className="max-h-full"
                    src={test.avatar}
                    alt={test.text}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold">{test.name}</div>
                  <div className="text-sm text-white/40">{test.position}</div>
                </div>
              </div>
              <p className="mt-4 text-sm">{test.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
