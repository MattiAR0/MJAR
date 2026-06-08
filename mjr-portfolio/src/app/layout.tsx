import type { Metadata } from "next";
import localFont from "next/font/local";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mjr-portfolio-blush.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Matti Ahola Rivas | Desarrollador Full Stack",
  description:
    "Portfolio de Matti Ahola Rivas — Desarrollador Full Stack especializado en TypeScript, Angular, Node.js, Docker y arquitecturas modernas. Disponible para incorporaci\u00f3n inmediata.",
  keywords: [
    "desarrollador full stack",
    "portfolio",
    "TypeScript",
    "Angular",
    "Node.js",
    "Docker",
    "Matti Ahola Rivas",
    "Valencia",
    "DAW",
    "DAM",
  ],
  authors: [{ name: "Matti Ahola Rivas" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "MJAR Portfolio",
    title: "Matti Ahola Rivas | Desarrollador Full Stack",
    description:
      "Portfolio profesional — TypeScript, Angular, Node.js, Docker y m\u00e1s. Proyectos reales desplegados en producci\u00f3n.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Matti Ahola Rivas - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matti Ahola Rivas | Desarrollador Full Stack",
    description:
      "Portfolio profesional — TypeScript, Angular, Node.js, Docker y m\u00e1s.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
