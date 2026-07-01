import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Student Resource Hub — Learn. Share. Grow.",
    short_name: "Resource Hub",
    description:
      "Free study notes, past exams, programming resources, and student projects shared by students worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060B",
    theme_color: "#05060B",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
