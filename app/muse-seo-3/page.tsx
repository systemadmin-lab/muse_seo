import type { Metadata } from "next";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { SeoVariantPage } from "../components/seo-variants/SeoVariantPage";

export const metadata: Metadata = {
  title: "Online and At-Home Piano Tutors in Tower Hamlets | MuseCool",
  description:
    "Compare online and at-home piano lessons in Tower Hamlets, Wapping, Limehouse, and Shadwell with MuseCool tutor matching.",
};

export default function MuseSeoThreePage() {
  return (
    <div className="min-h-screen bg-[#fbf8f6]">
      <Navbar />
      <SeoVariantPage variant="muse-seo-3" />
      <Footer />
    </div>
  );
}
