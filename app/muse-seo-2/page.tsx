import type { Metadata } from "next";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SeoVariantPage } from "../components/seo-variants/SeoVariantPage";

export const metadata: Metadata = {
  title: "Children's Piano Lessons in Wapping | MuseCool",
  description:
    "Patient children's piano lessons in Wapping for beginners, young learners, and ABRSM preparation. Online and at-home tutor options.",
};

export default function MuseSeoTwoPage() {
  return (
    <div className="min-h-screen bg-[#fbf8f6]">
      <Navbar />
      <SeoVariantPage variant="muse-seo-2" />
      <Footer />
    </div>
  );
}
