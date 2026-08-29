import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Placeholder type roles per DESIGN.md §A.4 — final families are TBD (§A.14).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ascent Elevator",
  description:
    "Ascent Elevator — kurumsal web sitesi (yapım aşamasında).",
};

export const viewport: Viewport = {
  themeColor: "#0e0d0c",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // smooth scroll applies to in-page anchors only, not route transitions
      data-scroll-behavior="smooth"
      // the pre-paint opening-reveal script may add a class to <html> before
      // React hydrates; scoped to this element's own attributes only
      suppressHydrationWarning
    >
      <body className="min-h-full">
        {/* Pre-paint: if the opening reveal already played this session, hide it
            before it can flash on a full reload. Fails silently. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{if(sessionStorage.getItem('ascent:opened')==='1')document.documentElement.classList.add('ascent-opened')}catch(e){}",
          }}
        />
        <a className="skip-link" href="#icerik">
          İçeriğe geç
        </a>
        <SiteHeader />
        <main id="icerik" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
