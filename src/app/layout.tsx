import type { Metadata } from "next";
import { Inter, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://pcos-insights-pakistan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PCOS Insights Pakistan",
    template: "%s — PCOS Insights Pakistan",
  },
  description:
    "A student-led public health research initiative examining how PCOS affects adolescent girls and young women across Pakistan.",
  keywords: [
    "PCOS Pakistan",
    "PCOS research",
    "women's health Pakistan",
    "adolescent health",
    "reproductive health research",
  ],
  openGraph: {
    title: "PCOS Insights Pakistan",
    description:
      "Understanding the reality behind the diagnosis — a national research initiative on PCOS in adolescent girls and young women.",
    url: siteUrl,
    siteName: "PCOS Insights Pakistan",
    images: [{ url: "/logo.png", width: 1008, height: 1063 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCOS Insights Pakistan",
    description: "Understanding the reality behind the diagnosis.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
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
      className={`${inter.variable} ${sourceSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
