import "@/styles/globals.css";
import { Chakra_Petch } from "next/font/google";
import type React from "react";
import { Metadata } from "next";
import LanguageSelector from "./components/lang";

const quanti = Chakra_Petch({ weight: "400", subsets: ["latin"] });

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
      <script defer src="https://stats.jpomian.pl/script.js" data-website-id="e7e81d85-60d9-4fd4-807e-3808a5938743"></script>
      <body className={`flex flex-col min-h-screen ${quanti.className}`}>
        <LanguageSelector />
        {children}
      </body>
    </html>
  );
}