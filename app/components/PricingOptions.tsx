import Image from "next/image";

const pricingPlans = [
  {
    title: "Online",
    range: "£16 - £27",
    image: "/icons/pricing/image.png",
    imageAlt: "Student taking an online piano lesson at home",
    imageClass: "object-cover object-center",
    rows: [
      { duration: "30min", price: "£16" },
      { duration: "45min", price: "£21" },
      { duration: "60min", price: "£27" },
    ],
  },
  {
    title: "In person at your home",
    range: "£42 - £56",
    image: "/icons/pricing/inperson.jpg",
    imageAlt: "In-person piano lesson at home",
    imageClass: "object-cover object-center",
    rows: [
      { duration: "30min", price: "£42" },
      { duration: "45min", price: "£50" },
      { duration: "60min", price: "£56" },
    ],
  },
] as const;

function PriceCard({ plan }: { plan: (typeof pricingPlans)[number] }) {
  return (
    <article>
      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-[#f2eee9] shadow-[0_22px_60px_rgba(25,25,27,0.14)] sm:rounded-[1.75rem]">
        <Image
          src={plan.image}
          alt={plan.imageAlt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className={plan.imageClass}
        />
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between gap-5 border-b border-[#ded9d2] pb-4">
          <h3 className="text-xl font-black leading-tight text-[#2a2c2f] sm:text-2xl">
            {plan.title}
          </h3>
          <p className="shrink-0 text-lg font-black text-[#2a2c2f] sm:text-xl">
            {plan.range}
          </p>
        </div>

        <dl className="divide-y divide-[#ded9d2]">
          {plan.rows.map((row) => (
            <div
              key={row.duration}
              className="grid grid-cols-[1fr_auto] items-center gap-4 py-4 text-base font-bold leading-7 text-[#2a2c2f] sm:text-lg"
            >
              <dt>{row.duration}</dt>
              <dd>
                <span className="font-black text-[#2a2c2f]">{row.price}</span>{" "}
                per session
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex justify-center">
          <a
            href="#booking"
            className="inline-flex min-h-12 min-w-[12rem] items-center justify-center rounded-md bg-[#ff8900] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
          >
            Meet your tutor
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PricingOptions() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-options-title"
      className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl">
        <h2
          id="pricing-options-title"
          className="mx-auto max-w-4xl text-center text-3xl font-black leading-tight tracking-normal text-[#2a2c2f] sm:text-4xl"
        >
          Pricing Options - Lessons Online or In Person
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {pricingPlans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
