import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Clock3,
  MapPin,
  Piano,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export type SeoVariantKey = "muse-seo-1" | "muse-seo-2" | "muse-seo-3";

type SeoVariant = {
  badge: string;
  titleStart: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  image: {
    src: string;
    alt: string;
  };
  proof: string[];
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  teacher: {
    title: string;
    body: string;
    cards: {
      icon: "piano" | "clock" | "shield";
      title: string;
      body: string;
    }[];
  };
  pricingNote: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const seoVariants: Record<SeoVariantKey, SeoVariant> = {
  "muse-seo-1": {
    badge: "Long-tail local SEO version 1",
    titleStart: "Private piano lessons near",
    titleAccent: "Wapping, E1W",
    subtitle:
      "A focused local landing page for families searching for trusted piano tutors near Wapping, St Katharine Docks, Shadwell, and Tower Bridge.",
    primaryCta: "Find a Wapping tutor",
    secondaryCta: "View lesson options",
    image: {
      src: "/hero/wapping-piano-lessons.jpg",
      alt: "Piano lesson setup for a Wapping student",
    },
    proof: [
      "At-home and online lessons",
      "Beginner to advanced piano",
      "Tower Hamlets tutor matching",
      "Flexible weekly scheduling",
    ],
    intro: {
      eyebrow: "Search intent: local private lessons",
      title: "Built for parents comparing piano tutors close to home",
      body: "This version is written for high-intent searches where the student already knows the area and wants a reliable teacher nearby. The copy keeps Wapping visible while naturally covering neighbouring searches without making the page feel stuffed.",
      points: [
        "Clear E1W location language above the fold",
        "Neighbouring area signals for St Katharine Docks, Shadwell, Limehouse, and Tower Bridge",
        "Trust-led content for parents who need a safe, practical first step",
      ],
    },
    teacher: {
      title: "Matched piano tutors for Wapping students",
      body: "Students are matched by level, learning style, schedule, and whether online or home lessons are the better fit. The page keeps the conversion path simple: understand the offer, trust the tutors, then book a trial.",
      cards: [
        {
          icon: "piano",
          title: "Level-aware teaching",
          body: "Support for complete beginners, returning players, and students preparing for grade exams.",
        },
        {
          icon: "clock",
          title: "Local scheduling",
          body: "Lessons can be planned around school, work, and travel across Wapping and nearby E1 areas.",
        },
        {
          icon: "shield",
          title: "Calm first lesson",
          body: "The first session is shaped around confidence, goals, and a practical learning plan.",
        },
      ],
    },
    pricingNote:
      "Online piano lessons start from £16, with in-person home lessons available for Wapping students who prefer face-to-face support.",
    faqs: [
      {
        question: "Can I book piano lessons at home in Wapping?",
        answer:
          "Yes. The page positions both online and at-home lessons, so it can serve searches from families who want a tutor to travel locally.",
      },
      {
        question: "Does this page target nearby areas too?",
        answer:
          "Yes. It keeps Wapping as the primary location while adding natural mentions of nearby places such as Shadwell, Limehouse, and Tower Bridge.",
      },
    ],
  },
  "muse-seo-2": {
    badge: "Long-tail local SEO version 2",
    titleStart: "Children's piano lessons in",
    titleAccent: "Wapping",
    subtitle:
      "A parent-first version for searches around kids piano lessons, beginner piano teachers, and after-school music support in E1W.",
    primaryCta: "Match my child",
    secondaryCta: "Meet piano teachers",
    image: {
      src: "/three/494922368_1260941029370334_866964434842475635_n.jpg",
      alt: "Child learning piano with a teacher",
    },
    proof: [
      "Patient tutors for young learners",
      "Practice support between lessons",
      "ABRSM preparation available",
      "Concerts and workshops",
    ],
    intro: {
      eyebrow: "Search intent: children's lessons",
      title: "Designed for families who want progress without pressure",
      body: "This version leans into the parent decision-making journey: safety, confidence, consistency, and visible progress. It is still local, but the emotional hook is helping a child enjoy the piano long enough to improve.",
      points: [
        "Parent-friendly copy for beginner and early-grade students",
        "Mentions practice, confidence, exams, concerts, and workshops",
        "Keeps booking language soft and reassuring",
      ],
    },
    teacher: {
      title: "Friendly piano teachers for children in Wapping",
      body: "The best local page for children should feel calm, specific, and easy to trust. This version explains how lessons are adapted to attention span, personality, and home practice routines.",
      cards: [
        {
          icon: "piano",
          title: "Beginner confidence",
          body: "Lessons start with rhythm, listening, simple pieces, and small wins that help children feel capable.",
        },
        {
          icon: "clock",
          title: "After-school fit",
          body: "Families can choose lesson lengths and times that work around school days and weekend routines.",
        },
        {
          icon: "shield",
          title: "Trusted tutors",
          body: "The page highlights tutor quality, preparation, and the reassurance parents need before booking.",
        },
      ],
    },
    pricingNote:
      "Shorter lessons are available for younger students, with online and in-person options depending on age, focus, and family schedule.",
    faqs: [
      {
        question: "What age can children start piano lessons?",
        answer:
          "Many children begin once they can focus for a short structured session. This version explains that lesson length can adapt to the child.",
      },
      {
        question: "Can children prepare for ABRSM exams?",
        answer:
          "Yes. The content includes exam preparation, mock exams, concerts, and workshops as part of the wider learning journey.",
      },
    ],
  },
  "muse-seo-3": {
    badge: "Long-tail local SEO version 3",
    titleStart: "Online and at-home piano tutors for",
    titleAccent: "Tower Hamlets",
    subtitle:
      "A broader local variant for students searching across Tower Hamlets, Wapping, Limehouse, Shadwell, and nearby East London locations.",
    primaryCta: "Compare lesson formats",
    secondaryCta: "See pricing",
    image: {
      src: "/icons/pricing/image.png",
      alt: "Student taking an online piano lesson",
    },
    proof: [
      "Online lessons from home",
      "In-person lessons in E1W",
      "Flexible pay-as-you-go options",
      "Tutor matching by goal",
    ],
    intro: {
      eyebrow: "Search intent: lesson format comparison",
      title: "A page for students deciding between online and in-person piano",
      body: "This version catches a different long-tail pattern: people who know they want piano lessons locally, but are still deciding whether online or at-home teaching is the right format. It supports comparison without diluting the local focus.",
      points: [
        "Clear online versus home lesson language",
        "Broader Tower Hamlets reach with Wapping still present",
        "Pricing and format intent brought higher on the page",
      ],
    },
    teacher: {
      title: "Choose online lessons or a tutor at your home",
      body: "Some students want convenience; others learn best with a teacher in the room. This version presents both paths clearly so the page can rank for format-led searches as well as location-led ones.",
      cards: [
        {
          icon: "piano",
          title: "Online lessons",
          body: "A strong fit for busy families, adult learners, and students who want consistent weekly progress from home.",
        },
        {
          icon: "clock",
          title: "Home lessons",
          body: "A better choice when posture, technique, and in-room encouragement matter most.",
        },
        {
          icon: "shield",
          title: "Format guidance",
          body: "Students can start with the format that suits them now and change as their goals evolve.",
        },
      ],
    },
    pricingNote:
      "Online sessions start from £16, while in-person lessons at home are available for students who want direct support in Wapping and nearby areas.",
    faqs: [
      {
        question: "Are online piano lessons effective?",
        answer:
          "Yes. This variant explains when online lessons work well and when an in-person tutor may be a better fit.",
      },
      {
        question: "Can I switch from online to in-person lessons?",
        answer:
          "Yes. The page is structured around flexibility, so students can choose the format that suits their current routine.",
      },
    ],
  },
};

const iconMap = {
  piano: Piano,
  clock: Clock3,
  shield: ShieldCheck,
};

function LiquidBackground() {
  return (
    <div
      aria-hidden="true"
      className="hero-liquid-bg pointer-events-none absolute inset-x-0 -bottom-24 top-0 z-0 overflow-hidden sm:-bottom-36 lg:-bottom-52"
    >
      <span className="hero-liquid-dot hero-liquid-dot-one" />
      <span className="hero-liquid-dot hero-liquid-dot-two" />
      <span className="hero-liquid-dot hero-liquid-dot-three" />
      <span className="hero-liquid-dot hero-liquid-dot-four" />
      <span className="hero-liquid-dot hero-liquid-dot-five" />
      <span className="hero-liquid-dot hero-liquid-dot-six" />
      <span className="hero-liquid-dot hero-liquid-dot-seven" />
    </div>
  );
}

function Stars() {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-[#ff8900]"
      aria-label="5 star rating"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}

export function SeoVariantPage({ variant }: { variant: SeoVariantKey }) {
  const page = seoVariants[variant];

  return (
    <main className="relative isolate overflow-hidden bg-[#fbf8f6] pt-16 text-[#19191b]">
      <section
        id="find-tutor"
        aria-labelledby={`${variant}-title`}
        className="relative z-10 min-h-[min(760px,calc(100svh-4rem))] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <LiquidBackground />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1fr)]">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="type-label inline-flex items-center gap-2 rounded-md border border-[#d8c7ae] bg-white/70 px-3 py-2 font-black text-[#4d382c] shadow-sm backdrop-blur">
              <Search className="h-4 w-4 text-[#006184]" aria-hidden="true" />
              {page.badge}
            </div>

            <h1
              id={`${variant}-title`}
              className="type-display mt-6 font-black text-[#19191b]"
            >
              {page.titleStart}{" "}
              <span className="text-[#ff8900]">{page.titleAccent}</span>
            </h1>

            <p className="type-subtitle mt-4 font-semibold text-[#594338] sm:mt-5">
              {page.subtitle}
            </p>

            <div className="type-label mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-md border border-[#d8c7ae] bg-white/75 px-4 py-2 font-black text-[#4d382c] shadow-sm backdrop-blur lg:justify-start">
              <span className="text-[#4285f4]" aria-hidden="true">
                G
              </span>
              <span>Google</span>
              <span className="text-[#19191b]">4.9</span>
              <Stars />
              <span className="text-[#6b5849]">reviews</span>
            </div>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#booking"
                className="type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ff8900] px-6 py-3 font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
              >
                <Piano className="h-4 w-4" aria-hidden="true" />
                {page.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#piano-teachers"
                className="type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#d8c7ae] bg-white/75 px-6 py-3 font-black text-[#4d382c] backdrop-blur transition hover:border-[#19191b] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
              >
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                {page.secondaryCta}
              </a>
            </div>

            <div className="type-label mt-6 flex flex-wrap items-center justify-center gap-2 font-bold text-[#594338] lg:justify-start">
              {page.proof.map((item, index) => (
                <span
                  key={item}
                  className={
                    index === 0
                      ? "inline-flex items-center gap-2 rounded-md bg-[#19191b] px-3 py-2 text-white"
                      : "rounded-md border border-[#d8c7ae] bg-white/60 px-3 py-2"
                  }
                >
                  {index === 0 && (
                    <BadgeCheck
                      className="h-4 w-4 text-[#73d7f1]"
                      aria-hidden="true"
                    />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="absolute -left-5 -top-5 hidden h-24 w-24 rounded-full bg-[#ff8900]/20 blur-2xl sm:block" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-[0_28px_80px_rgba(25,25,27,0.16)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={page.image.src}
                  alt={page.image.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="type-label grid gap-2 px-3 py-4 font-bold text-[#4d382c] sm:grid-cols-2">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#006184]" />
                  Wapping and nearby E1
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#ff8900]" />
                  Long-tail SEO ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1fr] lg:gap-14">
          <div>
            <p className="type-label font-black uppercase tracking-[0.18em] text-[#ff8900]">
              {page.intro.eyebrow}
            </p>
            <h2 className="type-section-title mt-3 font-black text-[#19191b]">
              {page.intro.title}
            </h2>
          </div>
          <div className="type-body font-medium text-[#4f4f52]">
            <p>{page.intro.body}</p>
            <div className="mt-6 grid gap-3">
              {page.intro.points.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-md border border-[#e4d4bf] bg-[#fbf8f6] p-4"
                >
                  <BadgeCheck
                    className="mt-1 h-5 w-5 shrink-0 text-[#ff8900]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="piano-teachers"
        className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="type-section-title font-black text-[#19191b]">
              {page.teacher.title}
            </h2>
            <p className="type-body mt-4 font-medium text-[#4f4f52]">
              {page.teacher.body}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.teacher.cards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <article
                  key={card.title}
                  className="rounded-md border border-[#e4d4bf] bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#fff3e4] text-[#ff8900]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="type-card-title mt-5 font-black text-[#19191b]">
                    {card.title}
                  </h3>
                  <p className="type-body-sm mt-3 font-medium text-[#594338]">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative z-10 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {[
            "The tutor understood exactly what my child needed and made the first lesson feel relaxed.",
            "Booking was straightforward, the lesson plan was clear, and the local matching made everything easier.",
          ].map((quote) => (
            <figure
              key={quote}
              className="rounded-md border border-[#e4d4bf] bg-[#fbf8f6] p-6"
            >
              <Stars />
              <blockquote className="type-card-title mt-4 font-black italic text-[#19191b]">
                &quot;{quote}&quot;
              </blockquote>
              <figcaption className="type-caption mt-4 font-bold text-[#594338]">
                MuseCool piano parent, London
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.25rem] border border-[#e4d4bf] bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <p className="type-label font-black uppercase tracking-[0.18em] text-[#ff8900]">
              Pricing and booking
            </p>
            <h2 className="type-section-title mt-3 font-black text-[#19191b]">
              Simple options for local piano students
            </h2>
            <p className="type-body mt-3 font-medium text-[#4f4f52]">
              {page.pricingNote}
            </p>
          </div>
          <a
            id="booking"
            href="#find-tutor"
            className="type-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ff8900] px-6 py-3 font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
          >
            Start trial lesson
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-[#006184]" aria-hidden="true" />
            <h2 className="type-section-title font-black text-[#19191b]">
              Local SEO FAQ
            </h2>
          </div>

          <div className="mt-6 grid gap-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-md border border-[#e4d4bf] bg-[#fbf8f6] p-5"
              >
                <h3 className="type-card-title font-black text-[#19191b]">
                  {faq.question}
                </h3>
                <p className="type-body mt-2 font-medium text-[#4f4f52]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
