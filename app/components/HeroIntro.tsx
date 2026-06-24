import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Piano,
  Star,
} from "lucide-react";

const nearbyAreas = [
  "Wapping",
  "St Katharine Docks",
  "Shadwell",
  "Limehouse",
  "Tower Bridge",
];

export default function HeroIntro() {
  return (
    <section
      id="find-tutor"
      aria-labelledby="hero-title"
      className="relative z-10 mx-auto flex min-h-[min(760px,calc(100svh-4rem))] w-full max-w-5xl flex-col items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-md border border-[#d8c7ae] bg-white/70 px-3 py-2 text-sm font-black text-[#4d382c] shadow-sm backdrop-blur">
          <MapPin className="h-4 w-4 text-[#006184]" aria-hidden="true" />
          Tower Hamlets piano tutors in E1W
        </div>

        <h1
          id="hero-title"
          className="type-display mt-6 max-w-[820px] font-black text-[#19191b]"
        >
          Piano Lessons in <span className="text-[#ff8900]">Wapping</span>
        </h1>

        <p className="type-subtitle mt-4 max-w-[700px] font-semibold text-[#594338] sm:mt-5">
          The best piano tutors for both beginner and advanced learners based
          in Tower Hamlets, E1W.
        </p>

        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-md border border-[#d8c7ae] bg-white/75 px-4 py-2 text-sm font-black text-[#4d382c] shadow-sm backdrop-blur">
          <span className="text-[#4285f4]" aria-hidden="true">
            G
          </span>
          <span>Google</span>
          <span className="text-[#19191b]">4.9</span>
          <span
            className="inline-flex items-center gap-0.5 text-[#ff8900]"
            aria-label="5 star rating"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              />
            ))}
          </span>
          <span className="text-[#6b5849]">reviews</span>
        </div>

        <div className="mt-6 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ff8900] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
          >
            <Piano className="h-4 w-4" aria-hidden="true" />
            Start trial lesson
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#piano-teachers"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#d8c7ae] bg-white/75 px-6 py-3 text-sm font-black text-[#4d382c] backdrop-blur transition hover:border-[#19191b] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
          >
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Meet our teachers
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-[#594338]">
          <span className="inline-flex items-center gap-2 rounded-md bg-[#19191b] px-3 py-2 text-white">
            <BadgeCheck
              className="h-4 w-4 text-[#73d7f1]"
              aria-hidden="true"
            />
            Matched by level, goals, and location
          </span>
          {nearbyAreas.map((area) => (
            <span
              key={area}
              className="rounded-md border border-[#d8c7ae] bg-white/60 px-3 py-2"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
