import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Piano,
  Star,
} from "lucide-react";

export default function HeroIntro() {
  return (
    <section
      id="find-tutor"
      aria-labelledby="hero-title"
      className="relative z-10 overflow-hidden bg-[#fbf8f6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto grid min-h-[min(760px,calc(100svh-4rem))] max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative z-10 flex max-w-2xl flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#d8c7ae] bg-white/80 px-3 py-2 text-sm font-black text-[#4d382c] shadow-sm backdrop-blur">
            <MapPin className="h-4 w-4 text-[#006184]" aria-hidden="true" />
            Tower Hamlets piano tutors in E1W
          </div>

          <h1
            id="hero-title"
            className="type-display mt-6 max-w-[720px] font-black text-[#19191b]"
          >
            Piano Lessons in <span className="text-[#ff8900]">Wapping</span>
          </h1>

          <p className="type-subtitle mt-4 max-w-[620px] font-semibold text-[#594338] sm:mt-5">
            The best piano tutors for both beginner and advanced learners based
            in Tower Hamlets, E1W.
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center justify-start gap-2 rounded-md border border-[#d8c7ae] bg-white/80 px-4 py-2 text-sm font-black text-[#4d382c] shadow-sm backdrop-blur">
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

          <div className="mt-6 flex w-full max-w-xl flex-col items-start justify-start gap-3 sm:flex-row sm:items-center">
            <a
              href="https://musecool.com/uk/prices/#popmake-70158"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ff8900] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
            >
              <Piano className="h-4 w-4" aria-hidden="true" />
              <span className="whitespace-nowrap">Book Your First Lesson</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 inline-flex max-w-xl items-center gap-2 rounded-md bg-[#19191b] px-4 py-3 text-sm font-bold leading-6 text-white">
            <span
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#73d7f1]/20"
              aria-hidden="true"
            >
              <BadgeCheck
                className="h-4 w-4 text-[#73d7f1]"
                aria-hidden="true"
              />
            </span>
            No payment today, only pay after your 1st lesson is completed.
          </div>
        </div>

        <div className="relative min-h-[430px] w-full lg:min-h-[640px]">
          <div className="absolute inset-y-0 left-0 right-0 overflow-hidden rounded-[2rem] border border-white/70 bg-[#f2eee9] shadow-[0_32px_90px_rgba(25,25,27,0.18)] sm:rounded-[2.75rem] lg:left-5">
            <Image
              src="/hero/hero2.jpg"
              alt="Young piano student smiling during a lesson"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[58%_54%]"
            />
          </div>

          <div className="absolute bottom-5 left-5 w-[13rem] overflow-hidden rounded-md border border-white/70 bg-white shadow-[0_18px_45px_rgba(25,25,27,0.14)] sm:w-[16rem]">
            <Image
              src="/kidsafe/kidsage.jpeg"
              alt="Kidsafe certification"
              width={1600}
              height={704}
              sizes="(min-width: 640px) 256px, 208px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
