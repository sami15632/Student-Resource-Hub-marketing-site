import { Instagram, Facebook, Twitter, type LucideIcon } from "lucide-react";

// Canonical production URL for THIS marketing site (not the app).
// Update this the moment the site is live on its real domain — every
// SEO file below (metadata, sitemap, robots, JSON-LD, OG image) reads from it.
export const SITE_URL = "https://studentresourcehub.com";

// The live application — every CTA on this marketing site points here.
export const APP_URL = "https://studify-world.lovable.app/feed";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
];

export const SOCIAL_LINKS: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/studentresourcehubofficial/",
    icon: Instagram,
  },
  {
    label: "Twitter",
    href: "https://x.com/studentresourc",
    icon: Twitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/studentresourcehubofficial",
    icon: Facebook,
  },
];
