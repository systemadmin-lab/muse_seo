import Image from "next/image";
import { ArrowRight } from "lucide-react";

const linkClass =
  "font-bold text-[#2a2c2f] underline decoration-[#2a2c2f]/25 underline-offset-4 transition hover:text-[#ff8900]";

const textBlockClass = "mx-auto w-full max-w-[34rem] text-left lg:mx-0";
const sectionLabelClass = "text-sm font-black text-[#2a2c2f]";
const headingClass =
  "mt-2 text-2xl font-black leading-tight tracking-normal text-[#2a2c2f] sm:text-3xl";
const bodyClass =
  "mt-4 space-y-4 text-base font-medium leading-7 text-[#2a2c2f] sm:text-lg sm:leading-8";
const imageClass =
  "relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_22px_60px_rgba(25,25,27,0.14)] sm:aspect-[16/9] sm:rounded-[1.75rem]";

export default function PianoLessonDetails() {
  return (
    <section
      id="piano-teachers"
      aria-labelledby="piano-details-title"
      className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:gap-14">
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className={imageClass}>
              <Image
                src="/three/482065667_1213217594142678_2163797596276449561_n.jpg"
                alt="Tutor and student holding violins inside a music lesson space"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover object-[42%_52%]"
              />
            </div>

            <div className={textBlockClass}>
              <p className={sectionLabelClass}>Our tutors</p>

              <h2
                id="piano-details-title"
                className={headingClass}
              >
                Our piano teachers
              </h2>

              <div className={bodyClass}>
                <p>
                  Learn with DBS-checked professionals and late-stage
                  conservatoire students, including tutors trained at the{" "}
                  <a href="https://www.ram.ac.uk/" className={linkClass}>
                    Royal Academy of Music
                  </a>{" "}
                  and the{" "}
                  <a href="https://www.rcm.ac.uk/" className={linkClass}>
                    Royal College of Music
                  </a>
                  .
                </p>

                <p>
                  Every teacher is selected for strong musicianship, clear
                  communication, and a calm approach with children and adults.
                </p>
              </div>

              <p className="mt-5 text-lg font-black leading-7 text-[#2a2c2f] sm:text-xl">
                Carefully matched to your level, goals, and learning style.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className={`${textBlockClass} order-2 lg:order-1`}>
              <p className={sectionLabelClass}>Flexible learning</p>

              <h3 className={headingClass}>
                Piano lessons online
              </h3>

              <div className={bodyClass}>
                <p>
                  Choose online sessions from &pound;15 or home lessons from
                  &pound;40, with simple pay-as-you-go booking.
                </p>

                <p>
                  Students can still join concerts, workshops, and{" "}
                  <a href="https://gb.abrsm.org/en/" className={linkClass}>
                    ABRSM
                  </a>{" "}
                  exam preparation, whether lessons are online or in person.
                </p>
              </div>
            </div>

            <div className={`${imageClass} order-1 lg:order-2`}>
              <Image
                src="/three/492599250_1260941056036998_1341966969437704583_n.jpg"
                alt="Students and tutors at a music concert"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover object-[48%_52%]"
              />
            </div>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className={imageClass}>
              <Image
                src="/three/502754347_1288938456570591_3119552445116318433_n.jpg"
                alt="Child learning keyboard with a tutor"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover object-[58%_55%]"
              />
            </div>

            <div className={textBlockClass}>
              <p className={sectionLabelClass}>Getting started</p>

              <h3 className={headingClass}>
                Getting a piano
              </h3>

              <div className={bodyClass}>
                <p>
                  We help you choose a piano or keyboard that fits your home,
                  budget, and musical goals.
                </p>

                <p>
                  New students can receive a free keyboard for the first month,
                  plus access to our{" "}
                  <a
                    href="https://soundcloud.com/lycaeum-music/bbc-radio-london-interview-26jan21"
                    className={linkClass}
                  >
                    BBC-featured
                  </a>{" "}
                  children&apos;s music course.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#booking"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ff8900] px-8 py-3 text-sm font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
          >
            Meet your tutor
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
