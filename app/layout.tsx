import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Owl Artisans | Handcrafted Indian Home Fashion",
  description: "Direct from our ateliers in India to your most ambitious projects — handcrafted textiles and decor with no minimums, no middlemen.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/hero.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
