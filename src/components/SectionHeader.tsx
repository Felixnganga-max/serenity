export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold -tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif md:text-5xl text-3xl text-center mt-6">
        {title}
      </h2>
      <p className="lg:text-lg mx-auto max-w-md md:text-lg text-center mt-4 text-white/60">
        {description}
      </p>
    </div>
  );
};
