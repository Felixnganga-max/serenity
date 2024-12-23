import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Perfomant",
  "Accessible",
  "Secure",
  "Scalable",
  "Responsive",
  "User Friendly",
  "Reliable",
  "Maintainable",
  "Ease to Use",
  "Search Optimized",
  "Interactive",
  "Lovely",
  "Contemporary",
  "Fit for your needs",
];

export const TapeSection = () => {
  return (
    <div className="py-16 g:py-24 overflow-x-clip ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400-rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex gap-4 pr-4 flex-none py-3 animate-move-left">
            {new Array(2).fill(0).map((_, outerIndex) => (
              <div key={outerIndex}>
                {words.map((word, wordIndex) => (
                  <div
                    className="inline-flex items-center justify-center gap-4"
                    key={`${word}-${wordIndex}`} // Ensure uniqueness
                  >
                    <span className="text-center uppercase text-gray-900 font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
