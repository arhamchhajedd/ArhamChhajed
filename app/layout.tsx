import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const baseUrl = "https://arhamchhajed.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Arham Chhajed | Full Stack Developer & Tech Mentor",
    template: "%s | Arham Chhajed",
  },
  description:
    "Arham Chhajed is a software engineer, full-stack builder, and tech mentor specializing in custom software development, IT solutions, SaaS MVPs, and 1-on-1 vibe coding tutoring.",
  keywords: [
    "Arham Chhajed",
    "software engineer",
    "software developer",
    "fullstack developer",
    "vibe coding",
    "vibe coding tutor",
    "coding mentor",
    "programming tutor",
    "custom software development",
    "IT software solutions",
    "Next.js developer",
    "React developer",
    "AI software development",
    "SaaS MVP builder",
    "freelance developer India",
    "Undesk",
    "InterJob",
  ],
  authors: [{ name: "Arham Chhajed", url: baseUrl }],
  creator: "Arham Chhajed",
  publisher: "Arham Chhajed",
  category: "technology",
  classification: "Full Stack Developer, Software Engineer & Tech Mentor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Arham Chhajed",
    title: "Arham Chhajed | Full Stack Developer & Tech Mentor",
    description:
      "Custom software engineering, IT solutions, SaaS MVP development, and 1-on-1 vibe coding mentorship.",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Arham Chhajed | Full Stack Developer & Tech Mentor",
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Arham Chhajed | Full Stack Developer & Tech Mentor",
    description:
      "Custom software engineering, IT solutions, SaaS MVP development, and 1-on-1 vibe coding mentorship.",
    creator: "@v5arham",
    images: [`${baseUrl}/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Arham Chhajed",
      url: baseUrl,
      jobTitle: "Full Stack Developer & Tech Mentor",
      description:
        "Software engineer, full-stack developer, and vibe coding mentor specializing in custom software development, IT solutions, SaaS MVPs, and 1-on-1 coding mentorship.",
      image: `${baseUrl}/arham.png`,
      sameAs: [
        "https://github.com/ArhamChhajedd",
        "https://www.linkedin.com/in/arhamchhajed",
        "https://www.instagram.com/v5arham",
      ],
      knowsAbout: [
        "Software Engineering",
        "Custom Software Development",
        "Vibe Coding",
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "AI Agent Development",
        "SaaS Architecture",
        "Database Architecture",
        "1-on-1 Tutoring & Mentorship",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Arham Chhajed Portfolio",
      description:
        "Portfolio of Arham Chhajed - Software Engineer, Custom IT Developer & Vibe Coding Mentor.",
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#service`,
      name: "Arham Chhajed - Software & Mentorship Services",
      url: baseUrl,
      provider: {
        "@id": `${baseUrl}/#person`,
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development & Mentorship Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software & IT Solutions",
              description: "End-to-end bespoke software, APIs, database architecture, and IT systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "1-on-1 Tutoring & Vibe Coding Mentorship",
              description: "Personalized mentorship in vibe coding, modern AI developer tooling, and full-stack software development.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS & MVP Engineering",
              description: "Rapid turnaround from concept to production-ready SaaS product.",
            },
          },
        ],
      },
    },
  ],
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
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${caveat.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-zinc-50 dark:bg-black text-black dark:text-white font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
