import type { Metadata, Viewport } from "next";
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const TITLE = "Student Resource Hub — Learn. Share. Grow.";
const DESCRIPTION =
  "Free study notes, past exams, programming resources, and student projects — shared by students, for students, at universities worldwide. Browse, save, and contribute for free.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Student Resource Hub",
  },
  description: DESCRIPTION,
  applicationName: "Student Resource Hub",
  category: "education",
  keywords: [
    "study notes",
    "past exams",
    "exam papers",
    "programming resources",
    "student projects",
    "free study resources",
    "university resources",
    "student community",
    "learning platform",
    "study materials",
  ],
  authors: [{ name: "Student Resource Hub" }],
  creator: "Student Resource Hub",
  publisher: "Student Resource Hub",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Student Resource Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@studentresourc",
    creator: "@studentresourc",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Student Resource Hub",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      description: DESCRIPTION,
      sameAs: SOCIAL_LINKS.map((link) => link.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Student Resource Hub",
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="bg-void text-ink font-body antialiased overflow-x-clip">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
