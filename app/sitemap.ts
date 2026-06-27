import type { MetadataRoute } from "next";

const baseUrl = "https://musecool.com";
const lastModified = new Date("2026-06-27");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${baseUrl}/hero/hero2.jpg`],
    },
  ];
}
