import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import { Metadata } from "next";
import LanguageSelector from "./components/lang";
import { MatomoTracker } from './components/MatomoTracker';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[jpomian]",
  description: "Specjalista technologii internetowych web2/web3 Jędrzej Pomianowski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <LanguageSelector />
        {children}
        <MatomoTracker />
      </body>
    </html>
  );
}