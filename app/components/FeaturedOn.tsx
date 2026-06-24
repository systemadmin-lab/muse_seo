const featuredLogos = [
  {
    name: "Forbes",
    className:
      "font-serif text-4xl font-bold tracking-[-0.04em] text-[#315f97] sm:text-5xl",
  },
  {
    name: "Classic fm",
    className:
      "font-serif text-3xl font-medium tracking-[0.16em] text-[#151515] sm:text-4xl",
  },
  {
    name: "BBC RADIO LONDON",
    className:
      "max-w-[165px] text-center text-xl font-black leading-[0.92] tracking-[-0.02em] text-[#26165f] sm:text-2xl",
  },
  {
    name: "the Strad",
    className:
      "font-serif text-4xl font-semibold tracking-[-0.05em] text-[#141414] sm:text-5xl",
  },
  {
    name: "tech eu",
    className:
      "max-w-[120px] text-center text-5xl font-black leading-[0.78] tracking-[-0.08em] text-[#052b62] sm:text-6xl",
  },
];

export default function FeaturedOn() {
  return (
    <section
      id="featured-on"
      aria-labelledby="featured-title"
      className="relative z-10 border-t border-[#e4d4bf]/70 bg-[#fff3e4] px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2
          id="featured-title"
          className="text-3xl font-black tracking-[-0.02em] text-[#21004d] sm:text-4xl"
        >
          As Featured On
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-14 lg:gap-x-16">
          {featuredLogos.map((logo) => (
            <div
              key={logo.name}
              aria-label={logo.name}
              className="flex min-h-14 items-center justify-center opacity-95 grayscale-[20%]"
            >
              <span className={logo.className}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
