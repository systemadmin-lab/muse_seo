import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musecool.com"),
  title: {
    default: "Piano Lessons in Wapping, E1W | MuseCool",
    template: "%s",
  },
  description:
    "Find friendly online and at-home piano lessons in Wapping, E1W with MuseCool. Experienced Tower Hamlets tutors, flexible pricing, and support between lessons.",
  applicationName: "MuseCool",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "piano lessons Wapping",
    "piano tutors E1W",
    "Tower Hamlets piano lessons",
    "children's piano lessons Wapping",
    "online piano lessons London",
    "at-home piano lessons",
  ],
  openGraph: {
    title: "Piano Lessons in Wapping, E1W | MuseCool",
    description:
      "Online and at-home piano lessons in Wapping with experienced MuseCool tutors.",
    url: "/",
    siteName: "MuseCool",
    images: [
      {
        url: "/hero/hero2.jpg",
        width: 1200,
        height: 630,
        alt: "Young piano student smiling during a MuseCool lesson",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piano Lessons in Wapping, E1W | MuseCool",
    description:
      "Find friendly online and at-home piano lessons in Wapping, E1W.",
    images: ["/hero/hero2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#19191b] focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white focus:outline-none focus:ring-2 focus:ring-[#ff8900] focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
