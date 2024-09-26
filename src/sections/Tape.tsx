import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Robust",
  "Responsive",
  "Resilient",
  "Maintanable",
  "SEO Optimized",
  "Lightweight",
  "Accessible",
  "Reliable",
  "Scalable",
  "Performant",
  "Robust",
  "Responsive",
  "Resilient",
  "Maintanable",
  "SEO Optimized",
  "Lightweight",
  "Accessible",
  "Reliable",
  "Scalable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="-rotate-3 -mx-1 bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div className="inline-flex items-center gap-4" key={word}>
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
