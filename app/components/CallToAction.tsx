import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative z-10 bg-[#fbf8f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-8 overflow-hidden rounded-[42px] bg-[#fb7907] px-6 py-8 shadow-[0_18px_44px_rgba(143,80,30,0.14)] sm:px-10 lg:min-h-[280px] lg:px-14">
        <div className="pointer-events-none absolute right-[-170px] top-1/2 hidden size-[340px] -translate-y-1/2 rounded-full bg-[#fff3e7] opacity-80 sm:block lg:right-[-120px]" />

        <h2 className="type-section-title relative z-10 max-w-3xl font-black text-white">
          Students using The Muse practice 20% more at home
        </h2>

        <Image
          src="/Monkey-thumb-up-webp.webp"
          alt="The Muse mascot giving a thumbs up"
          width={220}
          height={220}
          className="relative z-10 hidden h-auto w-[150px] shrink-0 sm:block lg:w-[220px]"
        />
      </div>
    </section>
  );
}
