import type { Metadata } from "next";
import { Raleway, Sue_Ellen_Francisco } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

// Free version of Sketch Block Bold (dafont.com/sketch-block.font) — personal use only
const sketchBlock = localFont({
  src: "../fonts/SketchBlock-Bold.ttf",
  variable: "--font-sketch-block",
  weight: "700",
});

const sueEllen = Sue_Ellen_Francisco({
  variable: "--font-sue-ellen",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sweetslice",
  description: "Freshly baked, natural and healthy cakes for every occasion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${sketchBlock.variable} ${sueEllen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
