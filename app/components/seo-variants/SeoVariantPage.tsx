import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Music2 } from "lucide-react";

type SeoVariant = "muse-seo-1" | "muse-seo-2" | "muse-seo-3";

type VariantContent = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  points: string[];
};

const variants: Record<SeoVariant, VariantContent> = {
  "muse-seo-1": {
    eyebrow: "Wapping piano tutors",
    title: "Private piano lessons near Wapping, E1W",
    intro:
      "MuseCool connects Wapping students with experienced piano tutors for one-to-one lessons online or at home, with flexible scheduling and support for every level.",
    image: "/hero/wapping-piano-lessons.jpg",
    imageAlt: "Piano student taking a lesson in Wapping",
    points: [
      "Beginner, intermediate, and advanced piano lessons",
      "Online or at-home sessions around Wapping and Tower Hamlets",
      "ABRSM preparation, performance confidence, and repertoire coaching",
    ],
  },
  "muse-seo-2": {
    eyebrow: "Children's piano lessons",
    title: "Patient piano teaching for young learners in Wapping",
    intro:
      "Friendly tutors help children build rhythm, reading, technique, and confidence through lessons that feel encouraging, structured, and age appropriate.",
    image: "/hero/529289562_1350767253721044_5479051767468236839_n.jpg",
    imageAlt: "Young music student during a lesson",
    points: [
      "Calm first lessons for complete beginners",
      "Clear weekly goals for parents and students",
      "Exam preparation and creative musicianship options",
    ],
  },
  "muse-seo-3": {
    eyebrow: "Tower Hamlets lessons",
    title: "Online and at-home piano tutors across Tower Hamlets",
    intro:
      "Choose a lesson format that fits your week, from convenient online coaching to in-person piano lessons in Wapping, Limehouse, Shadwell, and nearby areas.",
    image: "/muse/wapping/635px-Wapping_prospect_of_whitby_1-min.jpg",
    imageAlt: "The Prospect of Whitby in Wapping",
    points: [
      "Flexible online lessons from home",
      "Local tutor matching for East London students",
      "Affordable pricing with a satisfaction guarantee",
    ],
  },
};

export function SeoVariantPage({ variant }: { variant: SeoVariant }) {
  const content = variants[variant];

  return (
    <main className="bg-[#fbf8f6] pt-16 text-[#19191b]">
      <section className="px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-normal text-[#006184]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-normal text-[#19191b] sm:text-5xl lg:text-[3.5rem]">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#4f4f52] sm:text-xl sm:leading-9">
              {content.intro}
            </p>

            <ul className="mt-8 space-y-4">
              {content.points.map((point) => (
                <li
                  key={point}
                  className="grid grid-cols-[1.75rem_1fr] gap-3 text-base font-semibold leading-7 text-[#363b40] sm:text-lg"
                >
                  <CheckCircle2
                    className="mt-1 h-5 w-5 text-[#ff8900]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#ff8900] px-7 py-3 text-base font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:-translate-y-0.5 hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
              >
                Meet your tutor
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#lesson-options"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#006184]/25 bg-white px-7 py-3 text-base font-black text-[#006184] transition hover:border-[#006184] hover:text-[#004e69] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
              >
                <Music2 className="h-5 w-5" aria-hidden="true" />
                Lesson options
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#f2f2f2] shadow-[0_24px_70px_rgba(25,25,27,0.12)] sm:rounded-[1.75rem]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
