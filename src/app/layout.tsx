import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/content/site";

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

export const metadata: Metadata = {
  title: `${site.displayName} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.displayName} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${fraunces.variable} ${figtree.variable}`} suppressHydrationWarning>
      <body className="font-sans text-[15px] leading-relaxed md:text-base">
        <Script id="portfolio-theme" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
