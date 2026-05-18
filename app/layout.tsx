import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAGMA | Entrá en Modo Magma",
  description:
    "Pouches de cafeína MAGMA: energía portátil para gym, estudio, laburo y performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
