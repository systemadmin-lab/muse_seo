import Image from "next/image";

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[18px] transition-transform group-hover:translate-y-0.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}

function MusicNotesAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="footer-music-note footer-music-note-one">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="footer-music-note footer-music-note-two">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="footer-music-note footer-music-note-three">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.07C24 5.45 18.63.07 12 .07S0 5.45 0 12.07c0 5.99 4.39 10.96 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.92-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.03 24 18.06 24 12.07Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M23.5 6.16a3 3 0 0 0-2.11-2.11C19.52 3.55 12 3.55 12 3.55s-7.52 0-9.39.5A3 3 0 0 0 .5 6.16C0 8.03 0 12 0 12s0 3.97.5 5.84a3 3 0 0 0 2.11 2.11c1.87.5 9.39.5 9.39.5s7.52 0 9.39-.5a3 3 0 0 0 2.11-2.11C24 15.97 24 12 24 12s0-3.97-.5-5.84ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg aria-hidden="true" className="size-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83ZM15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.13.67-2.85 1.51-.62.73-1.16 1.87-1.01 2.98 1.1.09 2.18-.58 2.87-1.43Z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg aria-hidden="true" className="size-4 fill-current" viewBox="0 0 24 24">
      <path d="M4.2 2.8 14.7 13.3l-3.2 3.2L4.2 2.8Zm11.2 11.2 3.4-3.4 3.1 1.8c.8.46.8 1.58 0 2.04l-3.1 1.8-3.4-3.4Zm-1.4.7 3.6 3.6L5.3 25.3c-.82.46-1.83-.13-1.83-1.07V6.05L14 16.55Zm2.9-5.4-3.6 3.6L3.47 3.07c0-.94 1.01-1.53 1.83-1.07l11.6 6.6Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#e4d4bf]/70 bg-[#fff3e4] py-10">
      <MusicNotesAnimation />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-between gap-6 md:pr-8 lg:pr-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl border border-white/70 bg-white p-2 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                  <Image
                    src="/Monkey-thumb-up-webp.webp"
                    alt="The Muse logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-[1.35rem] font-black leading-none tracking-normal text-[#19191b]">
                  The Muse
                </span>
              </div>

              <p className="type-body-sm mt-4 max-w-[340px] font-medium text-[#594338]">
                Built for families who want clearer practice, calmer lessons,
                and visible progress between every piano session.
              </p>

              <div className="mt-5 flex gap-2.5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex size-8 items-center justify-center rounded-full border border-[#e4d4bf] bg-white text-[#594338] shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all hover:scale-105 hover:text-[#ff8900]"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex size-8 items-center justify-center rounded-full border border-[#e4d4bf] bg-white text-[#594338] shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all hover:scale-105 hover:text-[#006184]"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex size-8 items-center justify-center rounded-full border border-[#e4d4bf] bg-white text-[#594338] shadow-[0_2px_6px_rgba(0,0,0,0.03)] transition-all hover:scale-105 hover:text-[#ff8900]"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>

            <div className="type-caption mt-auto border-t border-[#e4d4bf]/70 pt-4 font-semibold text-[#8a7567] md:border-t-0">
              &copy; 2026 MuseCool Ltd. All rights reserved.
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 md:max-w-[460px] md:border-l md:border-[#e4d4bf]/70 md:pl-8 lg:max-w-[500px] lg:pl-8">
            <div className="flex flex-col gap-3">
              <h3 className="type-footer-title max-w-[26rem] font-extrabold text-[#19191b]">
                Start using The Muse between lessons and make practice easier to
                support.
              </h3>

              <div className="group relative mt-1 w-full">
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-full h-32 overflow-visible"
                  aria-hidden="true"
                >
                  <span className="footer-cta-note left-[16%] text-[#ff8900] group-hover:animate-[footer-note-rise_1.45s_ease-out_forwards]">
                    ♪
                  </span>
                  <span className="footer-cta-note left-[42%] text-[#006184] group-hover:animate-[footer-note-rise_1.65s_120ms_ease-out_forwards]">
                    ♫
                  </span>
                  <span className="footer-cta-note left-[68%] text-[#e87700] group-hover:animate-[footer-note-rise_1.55s_220ms_ease-out_forwards]">
                    ♬
                  </span>
                </div>
                <a
                  href="#"
                  className="type-button relative flex w-full max-w-[240px] items-center justify-center gap-2 overflow-hidden rounded-md bg-[#ff8900] px-5 py-3 font-bold text-white shadow-lg shadow-[#ff8900]/20 transition-all hover:-translate-y-0.5 hover:bg-[#e87700]"
                >
                  <DownloadIcon />
                  <span className="relative z-10">Download The Muse</span>
                  <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
                </a>
              </div>

              <div className="mt-1 flex flex-col gap-2">
                <span className="type-label font-bold uppercase tracking-widest text-[#8a7567]">
                  Available on iOS and Android
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg bg-[#19191b] px-3 py-1.5 text-white transition-colors hover:bg-[#2b2b2f]"
                  >
                    <AppleIcon />
                    <div className="text-left leading-tight">
                      <div className="text-[0.6875rem] uppercase tracking-wider text-zinc-400">
                        Download on the
                      </div>
                      <div className="text-[0.8125rem] font-semibold">
                        App Store
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg bg-[#19191b] px-3 py-1.5 text-white transition-colors hover:bg-[#2b2b2f]"
                  >
                    <PlayStoreIcon />
                    <div className="text-left leading-tight">
                      <div className="text-[0.6875rem] uppercase tracking-wider text-zinc-400">
                        Get it on
                      </div>
                      <div className="text-[0.8125rem] font-semibold">
                        Google Play
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="type-label mt-auto flex gap-4 border-t border-[#e4d4bf]/70 pt-4 font-bold uppercase tracking-widest text-[#8a7567]">
              <a href="#" className="transition-colors hover:text-[#ff8900]">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-[#ff8900]">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-[#ff8900]">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
