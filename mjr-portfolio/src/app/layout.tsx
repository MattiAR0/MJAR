import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import Providers from "@/components/Providers";
import { siteUrl, socials } from "@/lib/site";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const viewport = { themeColor: "#0b0a09" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Matti Ahola Rivas | Portfolio de Proyectos",
  description:
    "Portfolio de Matti Ahola Rivas \u2014 Proyectos Full Stack con TypeScript, Angular, Node.js, Docker y arquitecturas modernas. Disponible para incorporaci\u00f3n inmediata.",
  keywords: [
    "portfolio",
    "proyectos",
    "desarrollador full stack",
    "TypeScript",
    "Angular",
    "Node.js",
    "Docker",
    "Matti Ahola Rivas",
    "Valencia",
  ],
  authors: [{ name: "Matti Ahola Rivas" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Matti Ahola Rivas · MJAR",
    title: "Matti Ahola Rivas | Portfolio de Proyectos",
    description:
      "Proyectos Full Stack desplegados en producci\u00f3n \u2014 TypeScript, Angular, Node.js, Docker y m\u00e1s.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matti Ahola Rivas - Portfolio de Proyectos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matti Ahola Rivas | Portfolio de Proyectos",
    description:
      "Proyectos Full Stack desplegados en producci\u00f3n \u2014 TypeScript, Angular, Node.js, Docker y m\u00e1s.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matti Ahola Rivas",
  alternateName: "MJAR",
  jobTitle: "Desarrollador Full Stack",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Torrent",
    addressRegion: "Valencia",
    addressCountry: "ES",
  },
  alumniOf: { "@type": "EducationalOrganization", name: "Instituto de Cheste" },
  knowsAbout: ["TypeScript", "Angular", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"],
  sameAs: [socials.github, socials.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
