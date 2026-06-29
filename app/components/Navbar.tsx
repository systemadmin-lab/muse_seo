import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/#find-tutor", label: "Wapping tutors" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#piano-teachers", label: "Piano teachers" },
  { href: "/#pricing", label: "Pricing" },
];

const bookingUrl = "https://musecool.com/uk/prices/#popmake-70158";

export default function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/90 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/#find-tutor"
          className="flex min-w-0 items-center text-[#21190f]"
          aria-label="MuseCool piano lessons in Wapping"
        >
          <Image
            src="/nav/musemonke-site-logo.png.bv_resized_mobile.png.bv.webp"
            alt="MuseCool"
            width={387}
            height={120}
            priority
            sizes="154px"
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#5e5141] transition hover:text-[#21190f]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://musecool.com/uk/login"
            className="hidden rounded-md border border-[#d8c7ae] px-4 py-2 text-sm font-bold text-[#21190f] transition hover:border-[#21190f] hover:bg-[#fbf7ef] sm:inline-flex"
          >
            Log in
          </a>
          <a
            href={bookingUrl}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#ff8900] px-4 py-2 text-sm font-black text-white shadow-sm shadow-[#ff8900]/20 transition hover:bg-[#e87700] focus:outline-none focus:ring-2 focus:ring-[#19191b] focus:ring-offset-2"
          >
            Start trial
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}
