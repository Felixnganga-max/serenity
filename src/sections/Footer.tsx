import ArrowUp from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "TikTok",
    href: "#",
  },
  {
    title: "Facebook",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div
        className="-z-10 absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30"
        style={{
          WebkitMaskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        }}
      />
      <div className="container ">
        <div className="border-t gap-8 borde-white/15 py-6 md:flex-row md:justify-between text-sm flex flex-col items-center">
          <div className="text-white/40">&copy;2024 All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                className="inline-flex items-center gap-1.5"
                key={index}
                href={link.href}
              >
                <span className="font-semibold"> {link.title}</span>
                <ArrowUp />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
