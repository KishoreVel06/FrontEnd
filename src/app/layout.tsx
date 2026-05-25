import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://publications.meiporul.org"),
  title: {
    default: "Meiporul Publications | Inclusive Publishing in India",
    template: "%s | Meiporul Publications"
  },
  description: "India's most inclusive publishing platform for Tamil book publishing, Braille publishing, author guidance, and social-impact storytelling.",
  keywords: ["Tamil book publishing", "Braille publishing India", "self publishing India", "inclusive publishing", "Meiporul Publications"],
  openGraph: {
    title: "Publishing Stories That Deserve to Be Heard",
    description: "Author empowerment platform by Meiporul Chennai Foundation Trust.",
    type: "website",
    locale: "en_IN"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}