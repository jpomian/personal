import type { Project } from "../types/project"
import nieruchomosci from "@/assets/thumbnails/nieruchomsci.png"
import gogdex from "@/assets/thumbnails/gogdex-full.png"
import runics from "@/assets/thumbnails/runics.png"
import veriflex from "@/assets/thumbnails/veriflex.png"
import biohazard from "@/assets/thumbnails/biohazard-old.png"
import forge from "@/assets/thumbnails/2forge.png"

export const projects: Project[] = [
  {
    id: 1,
    name: "GoG Dex",
    description:
      "A fan-made site built for the Guild of Guardians community. Users can browse historical player rankings, check the atlas of in-game heroes, or simulate the progression of individual pieces of equipment.",
    image: gogdex,
    releaseDate: "September 2025",
    estimatedTime: "12 weeks",
    tags: ["React", "TypeScript", "Tailwind CSS", "Python", "Immutable zkEVM"],
    url: "https://gogdex.com",
    category: "blockchain",
  },
  {
    id: 2,
    name: "Runics",
    description:
      "A runic dictionary that converts numbers in the range [0-9999] into their runic representation as vector graphics. The mechanics behind it are explained in a reference table in the top right corner.",
    image: runics,
    releaseDate: "April 2025",
    estimatedTime: "1 week",
    tags: ["React", "TypeScript", "NextJS", "SVG"],
    url: "https://runics.vercel.app",
    category: "trad",
  },
  {
    id: 3,
    name: "Nieruchomości pod parasolem",
    description:
      "Website for the company Nieruchomości pod parasolem. It contains the company's key information along with an FAQ, pricing, and a dynamic interface of property listings.",
    image: nieruchomosci,
    releaseDate: "February 2025",
    estimatedTime: "4 weeks",
    tags: ["React", "NextJS", "Tailwind CSS", "Cheerio", "Redix"],
    url: "https://nieruchomoscipodparasolem.pl",
    category: "trad",
  },
  {
    id: 4,
    name: "VeriFlex",
    description:
      "The winning application built during the Franklin Templeton Blockchain Contest. After connecting a wallet, the app lets you generate soulbound tokens (SBTs).",
    image: veriflex,
    releaseDate: "June 2024",
    estimatedTime: "3 weeks",
    tags: ["React", "TypeScript", "Chakra UI", "RainbowKit", "Hardhat", "Circom", "Arbitrum"],
    url: "https://veriflex.vercel.app",
    category: "blockchain",
  },
  {
    id: 5,
    name: "Portal Biohazard",
    description:
      "A site made for players of a Counter-Strike 1.6 server. It contains key information such as the rules, the map pool, and live player statistics.",
    image: biohazard,
    releaseDate: "November 2023",
    estimatedTime: "2 weeks",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    url: "https://csbiohazard.vercel.app",
    category: "trad",
  },
  {
    id: 6,
    name: "2Forge",
    description:
      "A platform for trading physical collectibles. Every product sold on 2Forge receives an e-receipt stored on the blockchain.",
    image: forge,
    releaseDate: "June 2023",
    estimatedTime: "8 weeks",
    tags: ["React", "NextJS", "TypeScript", "Hardhat", "Solidity", "Arbitrum"],
    url: "https://2forge.vercel.app",
    category: "blockchain",
  },
]

