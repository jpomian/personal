import type { Project } from "../types/project"
import nieruchomosci from "@/assets/thumbnails/nieruchomsci.png"
import gogworld from "@/assets/thumbnails/gogworld.png"
import veriflex from "@/assets/thumbnails/veriflex.png"
import biohazard from "@/assets/thumbnails/biohazard.png"
import forge from "@/assets/thumbnails/2forge.png"

export const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
    name: "GoG World",
    description:
      "A catalog of all NFT tokens from the Guild of Guardians Avatars collection. A complete collection of all 10,000 digital tokens along with their metadata and ranking based on their rarity.",
    image: gogworld,
    releaseDate: "December 2024",
    estimatedTime: "6 weeks",
    tags: ["React", "TypeScript", "NextJS", "Tailwind CSS", "Immutable SDK"],
    url: "https://gogworld.vercel.app",
    category: "blockchain",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "2Forge",
    description:
      "A platform for exchanging physical collectible goods. Every product sold on the 2Forge platform receives an e-paragon stored inside the blockchain.",
    image: forge,
    releaseDate: "June 2023",
    estimatedTime: "8 weeks",
    tags: ["React", "NextJS", "TypeScript", "Hardhat", "Solidity"],
    url: "https://2forge.vercel.app",
    category: "blockchain",
  },
]

