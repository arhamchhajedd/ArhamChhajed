import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Arham Chhajed | Web Developer & Freelancer",
    template: "%s | Arham Chhajed",
  },
  description:
    "Arham Chhajed is a web developer and freelancer specializing in building fast, modern websites and web applications.",
  keywords: [
    "Arham Chhajed",
    "web developer",
    "freelancer",
    "Next.js developer",
    "React developer",
    "frontend developer",
    "fullstack developer",
    "portfolio",
  ],
  authors: [{ name: "Arham Chhajed" }],
  creator: "Arham Chhajed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Arham Chhajed",
    title: "Arham Chhajed | Web Developer & Freelancer",
    description:
      "Arham Chhajed is a web developer and freelancer specializing in building fast, modern websites and web applications.",
    images: ["/opengraph-image.png"],
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
    title: "Arham Chhajed | Web Developer & Freelancer",
    description:
      "Arham Chhajed is a web developer and freelancer specializing in building fast, modern websites and web applications.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${caveat.variable} antialiased`}
    >
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
