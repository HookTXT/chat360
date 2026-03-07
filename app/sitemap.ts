import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://chat360.ca",
      lastModified: new Date("2026-03-07"),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://chat360.ca",
          fr: "https://chat360.ca/fr",
        },
      },
    },
    {
      url: "https://chat360.ca/fr",
      lastModified: new Date("2026-03-07"),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://chat360.ca",
          fr: "https://chat360.ca/fr",
        },
      },
    },
  ];
}
