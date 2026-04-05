import type { Metadata, Viewport } from "next";
import { Fraunces, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf9" },
    { media: "(prefers-color-scheme: dark)", color: "#070b12" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.displayName} — ${site.role}`,
    template: `%s — ${site.displayName}`,
  },
  description: site.seoDescription,
  applicationName: site.displayName,
  authors: [{ name: site.displayName, url: siteUrl }],
  creator: site.displayName,
  publisher: site.displayName,
  keywords: site.seoKeywords,
  category: "technology",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${site.displayName} — Portfolio`,
    title: `${site.displayName} — ${site.role}`,
    description: site.seoDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.displayName} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.displayName} — ${site.role}`,
    description: site.seoDescription,
    images: ["/opengraph-image"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: `${site.displayName} — Portfolio`,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${fraunces.variable} ${figtree.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh min-w-0 touch-manipulation font-sans text-[15px] leading-relaxed antialiased md:text-base">
        <JsonLd />
        <Script id="portfolio-theme" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
