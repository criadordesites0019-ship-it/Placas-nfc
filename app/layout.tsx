import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Placas NFC | Avaliações no Google", description: "Plaquinhas de acrílico personalizadas com QR Code e NFC para avaliações no Google." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }