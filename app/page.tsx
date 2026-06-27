import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  name: "MuseCool",
  url: "https://musecool.com/",
  image: "https://musecool.com/hero/hero2.jpg",
  description:
    "Online and at-home piano lessons in Wapping, E1W with experienced MuseCool tutors.",
  areaServed: [
    {
      "@type": "Place",
      name: "Wapping, London E1W",
    },
    {
      "@type": "Place",
      name: "Tower Hamlets",
    },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Online piano lessons",
      priceCurrency: "GBP",
      price: "17",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "At-home piano lessons",
      priceCurrency: "GBP",
      price: "44",
      availability: "https://schema.org/InStock",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf8f6]">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
