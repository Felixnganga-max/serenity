import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
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
                Let&apos;s create something amazing together
              </h2>
              <p className="txt-sm mt-2 md:text-base">
                Ready to bring your next proect to life? Lets connect and
                discuss how we can live yor dream by getting your project done.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 w-max border border-gray-950 inline-flex items-center px-6 h-[48px] rounded-xl gap-2 mt-8">
                <span className="font-semibold">Contact Me</span>
                <ArrowUp className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
