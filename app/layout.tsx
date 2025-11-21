import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "The Grand Connect",
  description:
    "Bridging grandparents and Gen Z through joyful, patient digital literacy.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <SiteHeader />
          <div className="mx-auto flex max-w-6xl flex-col px-6 md:px-10 lg:px-16">
            <main className="flex-1 py-16">{children}</main>
            <footer className="border-t border-[var(--divider)] py-10 text-sm text-[var(--text-tertiary)]">
              <p>The Grand Connect · Elders first, always.</p>
              <p className="mt-2">
                © {new Date().getFullYear()} Crafted with patience, empathy, and
                love.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
