import Image from "next/image";
import { ArrowRight, Info, Music2 } from "lucide-react";

const linkClass =
  "font-black text-[#1d7da0] underline decoration-[#1d7da0]/35 underline-offset-4 transition hover:text-[#155e78]";
const bookingUrl = "https://musecool.com/uk/prices/#popmake-70158";

const benefits = [
  {
    title: "Professional piano tutors",
    description: (
      <>
        Trained at top conservatoires, including the{" "}
        <a href="https://www.ram.ac.uk/" className={linkClass}>
          Royal Academy of Music
        </a>{" "}
        and{" "}
        <a href="https://www.rcm.ac.uk/" className={linkClass}>
          Royal College of Music
        </a>
        .
      </>
    ),
  },
  {
    title: "Flexible",
    description:
      "Schedule lessons whenever it is convenient for you, pay as you go or book in advance for discounted rates.",
  },
  {
    title: "More than private lessons",
    description: (
      <>
        In addition to our private lessons, we host biannual concerts, regular
        group workshops,{" "}
        <a href="https://gb.abrsm.org/en/" className={linkClass}>
          ABRSM
        </a>{" "}
        piano exam preparation and mock exams.
      </>
    ),
  },
  {
    title: "Need help finding a piano?",
    description:
      "We can help - and you’ll receive a free keyboard for your first month (T&Cs apply).",
  },
];

export default function LessonOptions() {
  return (
    <section
      id="lesson-options"
      aria-labelledby="lesson-options-title"
      className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#bceffa] bg-gradient-to-b from-[#d7f7ff] via-[#ecfbff] to-white px-5 py-10 shadow-[0_28px_80px_rgba(86,174,207,0.16)] sm:rounded-[2.5rem] sm:px-9 sm:py-14 lg:min-h-[560px] lg:px-12 lg:py-16 xl:px-14">
        <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(430px,0.9fr)_minmax(470px,1fr)] lg:gap-10 xl:gap-16">
          <div className="relative mx-auto flex min-h-[300px] w-full max-w-[38rem] items-center justify-center sm:min-h-[390px] lg:min-h-[430px] xl:min-h-[470px]">
            <div className="relative z-30 aspect-square w-[61%] max-w-[22rem] -rotate-[13deg] overflow-hidden rounded-[1.5rem] sm:max-w-[23rem]">
              <Image
                src="/hero/529289562_1350767253721044_5479051767468236839_n.jpg"
                alt="Young student playing violin"
                fill
                sizes="(min-width: 1280px) 335px, (min-width: 1024px) 285px, (min-width: 640px) 330px, 58vw"
                className="object-cover object-[47%_43%] saturate-[1.04]"
              />
            </div>

            <div className="relative z-10 -ml-[74px] aspect-square w-[56%] max-w-[20rem] rotate-[7deg] overflow-hidden rounded-[1.5rem] sm:-ml-[92px] sm:max-w-[22rem]">
              <Image
                src="/hero/wapping-piano-lessons.jpg"
                alt="Young student playing piano"
                fill
                sizes="(min-width: 1280px) 335px, (min-width: 1024px) 285px, (min-width: 640px) 330px, 58vw"
                className="object-cover object-[59%_53%] saturate-[1.03]"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[48rem] pb-4 text-[#2d3033] lg:pb-0">
            <h2
              id="lesson-options-title"
              className="max-w-[42rem] text-4xl font-black leading-[1.05] tracking-normal text-[#2a2c2f] sm:text-5xl lg:text-[3.25rem]"
            >
              Piano lessons online or at your home
            </h2>

            <p className="mt-6 text-lg font-semibold leading-8 text-[#363b40] sm:mt-8 sm:text-xl sm:leading-9">
              From &pound;17 for online sessions and &pound;44 for sessions at
              your home, we offer the most affordable prices for high-standard
              teaching.
            </p>

            <ul className="mt-8 space-y-5 sm:mt-10">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="grid grid-cols-[1.75rem_1fr] gap-3 text-lg leading-8 text-[#2f3337] sm:grid-cols-[2rem_1fr] sm:text-xl"
                >
                  <Music2
                    className="mt-1 h-7 w-7 text-[#ff62b4] sm:h-8 sm:w-8"
                    aria-hidden="true"
                    strokeWidth={2.2}
                  />
                  <span>
                    <strong className="font-black text-[#2d3033]">
                      {benefit.title}
                    </strong>{" "}
                    <span aria-hidden="true">-</span>{" "}
                    {benefit.description}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-9 grid grid-cols-[1.75rem_1fr] gap-3 text-base font-semibold leading-7 text-[#5a6065] sm:grid-cols-[2rem_1fr] sm:text-lg">
              <Info
                className="mt-1 h-6 w-6 fill-[#ff9300] text-white"
                aria-hidden="true"
                strokeWidth={2.8}
              />
              <span>
                <strong className="font-black text-[#2d3033]">
                  Satisfaction guarantee
                </strong>{" "}
                <span aria-hidden="true">- </span> If you don&apos;t like
                your first lesson we&apos;ll refund the entire fee!
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <a
            href={bookingUrl}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ff8900] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
          >
            Meet your tutor
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
