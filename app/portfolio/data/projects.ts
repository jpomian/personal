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
      "A fan-made website created for the Guild of Guardians community. Users can view historical player rankings, check the game's hero atlas, or simulate the progression of specific pieces of equipment.",
    image: gogdex,
    releaseDate: "Wrzesień 2025",
    estimatedTime: "12 tygodni",
    tags: ["React", "TypeScript", "Tailwind CSS", "Python", "Immutable zkEVM"],
    url: "https://gogdex.com",
    category: "blockchain",
  },
  {
    id: 2,
    name: "Runics",
    description:
      "A runic dictionary that maps numbers in the range [0-9999] to their runic representation as vector graphics. The mechanism is described in the reference table in the upper right corner.",
    image: runics,
    releaseDate: "Kwiecień 2025",
    estimatedTime: "Tydzień",
    tags: ["React", "TypeScript", "NextJS", "SVG"],
    url: "https://runics.vercel.app",
    category: "trad",
  },
  {
    id: 3,
    name: "Nieruchomości pod parasolem",
    description:
      "Landing page for company Nieruchomości pod parasolem. Includes the company's most important information along with FAQs, price list and dynamic interface with real estate listings.",
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
      "The winning application made as part of the Franklin Templeton Blockchain Contest. Once the wallet is connected, the app can generate soul-bound token (SBT) for its user.",
    image: veriflex,
    releaseDate: "June 2024",
    estimatedTime: "3 weeks",
    tags: ["React", "TypeScript", "Chakra UI", "RainbowKit", "Hardhat", "Circom"],
    url: "https://veriflex.vercel.app",
    category: "blockchain",
  },
  {
    id: 5,
    name: "Portal Biohazard",
    description:
      "A site designed for players in the game Counter Strike 1.6. The site contains key information such as rules and regulations, the pool of maps played and live player statistics.",
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
      "A platform for exchanging physical collectible goods. Every product sold on the 2Forge platform receives an e-receipt stored inside the blockchain.",
    image: forge,
    releaseDate: "June 2023",
    estimatedTime: "8 weeks",
    tags: ["React", "NextJS", "TypeScript", "Hardhat", "Solidity"],
    url: "https://2forge.vercel.app",
    category: "blockchain",
  },
]

