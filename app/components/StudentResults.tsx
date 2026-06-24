import Image from "next/image";

const results = [
  {
    title: "The Right Tutor",
    description:
      "97% of our students continue with their recommended tutor after the first session.",
    value: 97,
  },
  {
    title: "Learn To Play Well",
    description:
      "92% of our students who take ABRSM exams pass with Merit or Distinction.",
    value: 92,
  },
] as const;

const doodles = [
  {
    src: "/icons/step1.2.svg",
    className: "left-5 top-20 h-14 w-14 -rotate-12 sm:left-8 sm:h-20 sm:w-20",
  },
  {
    src: "/icons/step1.2.svg",
    className:
      "left-28 top-24 hidden h-16 w-16 rotate-12 sm:block lg:left-32 lg:h-20 lg:w-20",
  },
  {
    src: "/icons/step1.1.svg",
    className:
      "right-44 top-20 hidden h-16 w-16 -rotate-12 opacity-[0.14] lg:block",
  },
  {
    src: "/icons/step1.2.svg",
    className:
      "right-20 top-24 hidden h-16 w-16 rotate-6 sm:block lg:h-20 lg:w-20",
  },
  {
    src: "/icons/step1.2.svg",
    className:
      "bottom-6 left-8 h-16 w-16 -rotate-12 sm:bottom-10 sm:h-20 sm:w-20",
  },
  {
    src: "/icons/step1.1.svg",
    className:
      "bottom-6 right-8 h-16 w-16 rotate-12 opacity-[0.14] sm:bottom-10 sm:h-20 sm:w-20",
  },
];

function ResultBar({
  title,
  description,
  value,
}: (typeof results)[number]) {
  return (
    <article>
      <h3 className="text-xl font-black leading-tight text-[#4d4d4f] sm:text-2xl">
        {title}
      </h3>

      <p className="mt-6 max-w-4xl text-base font-bold leading-7 text-[#5f6063] sm:text-xl sm:leading-8">
        {description}
      </p>

      <div
        className="relative mt-9 h-3.5 rounded-full bg-[#d9d2c9] sm:h-4"
        role="progressbar"
        aria-label={title}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <span
          className="absolute inset-y-0 left-0 rounded-full bg-[#ff8900]"
          style={{ width: `${value}%` }}
        />
        <span
          className="absolute -top-12 -translate-x-1/2 rounded-md bg-[#ff8900] px-3 py-1.5 text-base font-black leading-none text-white shadow-sm sm:text-lg"
          style={{ left: `min(${value}%, calc(100% - 2rem))` }}
        >
          {value}%
          <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[7px] border-t-[11px] border-x-transparent border-t-[#ff8900]" />
        </span>
      </div>
    </article>
  );
}

export default function StudentResults() {
  return (
    <section
      id="student-results"
      aria-labelledby="student-results-title"
      className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] border border-[#ffe3c4] bg-gradient-to-b from-[#fff0dc] via-[#fff7ed] to-white px-6 py-14 shadow-[0_24px_70px_rgba(255,137,0,0.1)] sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-24 lg:py-20">
        {doodles.map((doodle, index) => (
          <Image
            key={`${doodle.src}-${index}`}
            src={doodle.src}
            alt=""
            width={96}
            height={96}
            aria-hidden="true"
            className={`pointer-events-none absolute opacity-[0.16] ${doodle.className}`}
          />
        ))}

        <div className="relative mx-auto max-w-6xl">
          <h2
            id="student-results-title"
            className="text-center text-3xl font-black leading-tight tracking-normal text-[#2a2c2f] sm:text-4xl"
          >
            We Are Good At What We Do
          </h2>

          <div className="mt-12 space-y-14 sm:mt-14 sm:space-y-16">
            {results.map((result) => (
              <ResultBar key={result.title} {...result} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
