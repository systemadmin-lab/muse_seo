import CallToAction from "./CallToAction";
import FeaturedOn from "./FeaturedOn";
import HeroIntro from "./HeroIntro";
import LessonOptions from "./LessonOptions";
import MuseEngagement from "./MuseEngagement";
import PianoLessonDetails from "./PianoLessonDetails";
import PricingOptions from "./PricingOptions";
import StudentResults from "./StudentResults";
import Testimonials from "./Testimonials";
import WappingLocation from "./WappingLocation";

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

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[#fbf8f6] pt-16 text-[#19191b]">
      <LiquidBackground />
      <HeroIntro />
      <FeaturedOn />
      <LessonOptions />
      <MuseEngagement />
      <CallToAction />
      <Testimonials />
      <PianoLessonDetails />
      <StudentResults />
      <PricingOptions />
      <WappingLocation />
    </div>
  );
}
