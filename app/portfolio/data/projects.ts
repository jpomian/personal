import type { Project } from "../types/project"
import nieruchomosci from "@/assets/thumbnails/nieruchomsci.png"
import gogdex from "@/assets/thumbnails/gogdex-full.png"
import veriflex from "@/assets/thumbnails/veriflex.png"
import biohazard from "@/assets/thumbnails/biohazard-old.png"
import forge from "@/assets/thumbnails/2forge.png"

export const projects: Project[] = [
  {
    id: 1,
    name: "GoG Dex",
    description:
      "Fanowska strona przygotowana dla społeczności w grze Guild of Guardians. Użytkownik może w niej zapoznać się z historycznym rankingiem graczy, sprawdzić atlas bohaterów z gry lub zasymulować rozwój poszczególnych części ekwipunku.",
    image: gogdex,
    releaseDate: "Wrzesień 2025",
    estimatedTime: "12 tygodni",
    tags: ["React", "TypeScript", "Tailwind CSS", "Python", "Immutable zkEVM"],
    url: "https://gogdex.com",
    category: "blockchain",
  },
  {
    id: 2,
    name: "Nieruchomości pod parasolem",
    description:
      "Strona internetowa firmy Nieruchomości pod parasolem. Zawiera najważniejsze informacje firmy wraz z FAQ, cennikiem oraz dynamicznym interfejsem z ofertami nieruchomości.",
    image: nieruchomosci,
    releaseDate: "Luty 2025",
    estimatedTime: "4 tygodnie",
    tags: ["React", "NextJS", "Tailwind CSS", "Cheerio", "Redix"],
    url: "https://nieruchomoscipodparasolem.pl",
    category: "trad",
  },
  {
    id: 3,
    name: "VeriFlex",
    description:
      "Zwycięska aplikacja wykonana w ramach Franklin Templeton Blockchain Contest. Po podłączeniu portfela, aplikacja oferuje generacje tokenów przywiązanych do duszy (SBT).",
    image: veriflex,
    releaseDate: "Czerwiec 2024",
    estimatedTime: "3 tygodnie",
    tags: ["React", "TypeScript", "Chakra UI", "RainbowKit", "Hardhat", "Circom", "Arbitrum"],
    url: "https://veriflex.vercel.app",
    category: "blockchain",
  },
  {
    id: 4,
    name: "Portal Biohazard",
    description:
      "Strona przeznaczona dla graczy serwera w grze Counter Strike 1.6. Strona zawiera kluczowe informacje takie jak regulamin, pula rozgrywanych map czy statystyki graczy na żywo.",
    image: biohazard,
    releaseDate: "Listopad 2023",
    estimatedTime: "2 tygodnie",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    url: "https://csbiohazard.vercel.app",
    category: "trad",
  },
  {
    id: 5,
    name: "2Forge",
    description:
      "Platforma wymiany fizycznych dóbr kolekcjonerskich. Każdy produkt sprzedany na platformie 2Forge otrzymuje e-paragon zapisany wewnątrz łańcucha bloków.",
    image: forge,
    releaseDate: "Czerwiec 2023",
    estimatedTime: "8 tygodni",
    tags: ["React", "NextJS", "TypeScript", "Hardhat", "Solidity", "Arbitrum"],
    url: "https://2forge.vercel.app",
    category: "blockchain",
  },
]

