import Image from "next/image";
import { ArrowRight } from "lucide-react";

const bodyCopy =
  "text-base font-medium leading-7 text-[#4f4f52] sm:text-lg sm:leading-8";

const linkClass =
  "font-semibold text-[#006184] transition-colors hover:text-[#ff8900]";

export default function WappingLocation() {
  return (
    <section
      id="wapping-location"
      aria-labelledby="wapping-location-title"
      className="relative z-10 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:gap-16">
          <div>
            <h2
              id="wapping-location-title"
              className="text-3xl font-black leading-tight text-[#19191b] sm:text-4xl lg:text-[2.6rem]"
            >
              Piano lessons in{" "}
              <span className="text-[#ff8900]">Wapping, E1W</span>
            </h2>

            <div className={`mt-6 space-y-6 lg:max-w-[45rem] ${bodyCopy}`}>
              <p>
                The maritime neighbourhood of Wapping is one of East London&apos;s
                most central areas, giving it access to the best that
                capital-living has to offer. The area has a rich and detailed
                history thanks to its naval associations and in recent years has
                seen a growing association with the arts.
              </p>

              <p>
                Piano lessons in Wapping are easy to find, and are taught by some
                of the most experienced tutors working in London. Prospective
                students based here, whether embarking on or furthering their
                piano-playing journeys, will have no trouble finding an
                invaluable mentor in the E1W area that will help them achieve
                their musical goals.
              </p>

              <p>
                In nearby E1 is{" "}
                <a
                  href="https://wiltons.org.uk/"
                  className={linkClass}
                  target="_blank"
                  rel="noreferrer"
                >
                  Wilton&apos;s Music Hall
                </a>
                , a great venue for music enthusiasts to check out a variety of
                musical performers.
              </p>

              <p>
                For more information please{" "}
                <a href="#contact" className={linkClass}>
                  contact us
                </a>
                .
              </p>
            </div>
          </div>

          <figure>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-[#f2f2f2] sm:rounded-[1.75rem]">
              <Image
                src="/muse/wapping/635px-Wapping_prospect_of_whitby_1-min.jpg"
                alt="The Prospect of Whitby in Wapping"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-4 text-center text-base font-semibold italic text-[#4f4f52] sm:text-lg">
              Image License:{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/2.0/"
                className="font-bold not-italic text-[#006184] transition-colors hover:text-[#ff8900]"
                target="_blank"
                rel="noreferrer"
              >
                CC
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="#booking"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#ff8900] px-8 py-3 text-base font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:-translate-y-0.5 hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2 sm:min-h-14 sm:px-10 sm:text-lg"
          >
            Meet your tutor
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
