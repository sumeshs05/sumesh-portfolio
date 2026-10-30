import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const TITLE = "Sumesh S — General Manager, Product Management";
const DESCRIPTION =
  "Sumesh S — General Manager, Product Management at Swiggy. 12 years shipping consumer products, 7+ years at Swiggy. Case studies, experience, and contact.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sumesh S",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background text-text-primary">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-primary"
        >
          Skip to content
        </a>
        {/* The photo glow bleeds past the viewport edge. Clipping a wrapper (not the
            body) stops sideways wobble on phones and keeps the sticky nav working. */}
        <div className="overflow-x-clip">{children}</div>
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  );
}
