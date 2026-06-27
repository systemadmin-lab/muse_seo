import Image from "next/image";

const screenshots = [
  {
    src: "/muse/games.webp",
    alt: "The Muse games screen with a daily practice plan",
    className:
      "left-3 top-[28%] hidden w-[29%] -rotate-[9deg] opacity-95 lg:block xl:left-5",
    sizes: "(min-width: 1280px) 165px, (min-width: 1024px) 140px, 0px",
  },
  {
    src: "/muse/summary.webp",
    alt: "The Muse summary screen with practice recommendations",
    className:
      "right-3 top-[28%] hidden w-[29%] rotate-[9deg] opacity-95 lg:block xl:right-5",
    sizes: "(min-width: 1280px) 165px, (min-width: 1024px) 140px, 0px",
  },
] as const;

export default function MuseEngagement() {
  return (
    <section
      id="muse-engagement"
      aria-labelledby="muse-engagement-title"
      className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2
          id="muse-engagement-title"
          className="mx-auto max-w-[44rem] text-4xl font-black leading-tight tracking-normal text-[#19191b] sm:text-5xl lg:text-[3.35rem]"
        >
          Meet <span className="text-[#ff8900]">The Muse</span> and get more
          from every piano lesson!
        </h2>

        <div className="relative mx-auto mt-10 flex min-h-[72svh] w-full max-w-[42rem] items-center justify-center sm:mt-12 sm:min-h-[440px] lg:min-h-[660px]">
          {screenshots.map((screenshot) => (
            <Image
              key={screenshot.src}
              src={screenshot.src}
              alt={screenshot.alt}
              width={590}
              height={1280}
              sizes={screenshot.sizes}
              className={`absolute z-20 rounded-[1.6rem] shadow-[0_22px_54px_rgba(58,44,29,0.12)] ${screenshot.className}`}
            />
          ))}

          <div className="relative z-10 h-[68svh] max-h-[38rem] w-[min(92vw,22rem)] sm:aspect-square sm:h-auto sm:w-[66%] sm:max-w-[27rem] lg:w-[66%]">
            <Image
              src="/muse/insights-headmap.webp"
              alt="The Muse insights screen showing a piece heat map"
              fill
              sizes="(min-width: 1280px) 320px, (min-width: 1024px) 280px, (min-width: 640px) 330px, 74vw"
              className="rounded-[1.8rem] object-contain drop-shadow-[0_26px_35px_rgba(58,44,29,0.16)]"
              priority={false}
            />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-5xl text-center text-xl font-bold leading-snug tracking-normal text-[#19191b] sm:mt-10 sm:text-2xl">
          The Muse follows the lesson as it happens and gives you a clear
          summary, progress updates and practice guidance afterwards - all based
          on what your tutor has taught.
        </p>
      </div>
    </section>
  );
}
