import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import localFont from "next/font/local";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const ppEditorialNew = localFont({
  src: [
    {
      path: "../public/fonts/PPEditorialNew-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPEditorialNew-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pp-editorial-new",
});


export const metadata: Metadata = {
  title: "vibesB2B",
  description:
    "vibeb2b is a platform for buying and selling products and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.className} ${ppEditorialNew.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
