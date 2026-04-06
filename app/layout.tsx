import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Lantern Stories | Stories that spark imagination and learning",
  description:
    "A warm, calm digital storytelling hub for young children (ages 3–8) and their parents. Every story is a mini learning experience.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://littlelantern.stories"),
  openGraph: {
    title: "Little Lantern Stories",
    description: "Stories that spark imagination and learning for little dreamers ages 3-8",
    siteName: "Little Lantern Stories",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Lantern Stories",
    description: "Stories that spark imagination and learning for little dreamers ages 3-8",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Little Lantern",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icons/icon-512x512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/icon-152x152.svg", sizes: "152x152", type: "image/svg+xml" },
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌟</text></svg>"
        />
        <meta name="theme-color" content="#E8A87C" id="theme-color" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Little Lantern" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="bg-background dark:bg-dark-background font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
