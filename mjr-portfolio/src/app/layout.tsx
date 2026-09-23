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
    siteName: "MJAR Portfolio",
    title: "Matti Ahola Rivas | Portfolio de Proyectos",
    description:
      "Proyectos Full Stack desplegados en producci\u00f3n \u2014 TypeScript, Angular, Node.js, Docker y m\u00e1s.",
    images: [
      {
        url: "/og-image.svg",
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
