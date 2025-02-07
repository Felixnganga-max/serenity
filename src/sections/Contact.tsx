import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image"; // Correct import for Next.js images
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const socialLinks = [
    {
      Icon: FaFacebook,
      href: "https://facebook.com/your.profile",
      color: "text-blue-600",
    },
    {
      Icon: FaInstagram,
      href: "https://instagram.com/your.profile",
      color: "text-pink-500",
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/yourphonenumber",
      color: "text-green-500",
    },
    {
      Icon: FaTiktok,
      href: "https://tiktok.com/@your.profile",
      color: "text-white",
    },
    {
      Icon: FaEnvelope,
      onClick: () => setIsEmailOpen(true),
      color: "text-red-500",
    },
  ];

  const handleSendEmail = () => {
    console.log("Sending email:", { email, message });
    setIsEmailOpen(false);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:p-20">
      <div className="container">
        <div className="md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 md:gap-16 justify-center md:flex-row">
            <div>
              <h2 className="font-serif text-2xl md:text-xl">
                Let us create something amazing together
              </h2>
              <p className="txt-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how we can make your dream a reality.
              </p>
              <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                {socialLinks.map(({ Icon, href, onClick, color }) =>
                  href ? (
                    <a
                      key={color}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${color} hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} />
                    </a>
                  ) : (
                    <button
                      key={color}
                      onClick={onClick}
                      className={`${color} hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} />
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              <button className="text-white bg-gray-900 w-max border border-gray-950 inline-flex items-center px-6 h-[48px] rounded-xl gap-2 mt-8">
                <span className="font-semibold">Contact Me</span>
                <Image src={ArrowUp} alt="Arrow Up" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isEmailOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-2xl w-full max-w-md p-8 relative border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsEmailOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Send Us a Message
            </h2>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project..."
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
              <button
                onClick={handleSendEmail}
                disabled={!email || !message}
                className="w-full bg-blue-500 text-white py-3 rounded-lg disabled:bg-blue-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
