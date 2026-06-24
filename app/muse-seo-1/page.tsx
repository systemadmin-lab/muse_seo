import type { Metadata } from "next";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SeoVariantPage } from "../components/seo-variants/SeoVariantPage";

export const metadata: Metadata = {
  title: "Private Piano Lessons Near Wapping, E1W | MuseCool",
  description:
    "Find private piano lessons near Wapping, E1W with MuseCool. Local tutor matching for online and at-home piano lessons in Tower Hamlets.",
};

export default function MuseSeoOnePage() {
  return (
    <div className="min-h-screen bg-[#fbf8f6]">
      <Navbar />
      <SeoVariantPage variant="muse-seo-1" />
      <Footer />
    </div>
  );
}
