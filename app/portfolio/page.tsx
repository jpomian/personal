"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar, ArrowLeft } from "lucide-react"

import nieruchomosci from '../../assets/thumbnails/nieruchomsci.png'
import gogworld from '../../assets/thumbnails/gogworld.png'
import veriflex from '../../assets/thumbnails/veriflex.png'
import biohazard from '../../assets/thumbnails/biohazard.png'
import forge from '../../assets/thumbnails/2forge.png'
import Footer from "../components/footer"

interface Project {
  id: number
  name: string
  description: string
  image: string | StaticImageData
  releaseDate: string
  estimatedTime: string
  tags: string[]
  category: string
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      name: "Nieruchomości pod parasolem",
      description: "Strona internetowa firmy Nieruchomości pod parasolem. Zawiera najważniejsze informacje firmy wraz z FAQ, cennikiem oraz dynamicznym interfejsem z ofertami nieruchomości.",
      image: nieruchomosci,
      releaseDate: "Luty 2025",
      estimatedTime: "4 tygodnie",
      tags: ["React", "NextJS", "Tailwind CSS", "Cheerio", "Redix"],
      category: "trad",
    },
    {
      id: 2,
      name: "GoG World",
      description:
        "Katalog wszystkich tokenów NFT z kolekcji Guild of Guardians Avatars. Pełna kolekcja wszystkich 10.000 cyfrowych tokenów wraz z ich metadanymi i rankingiem w oparciu o ich rzadkość.",
      image: gogworld,
      releaseDate: "Grudzień 2024",
      estimatedTime: "6 tygodni",
      tags: ["React", "TypeScript", "NextJS", "Tailwind CSS", "Immutable SDK"],
      category: "blockchain",
    },
    {
      id: 3,
      name: "VeriFlex",
      description: "Zwycięska aplikacja wykonana w ramach Franklin Templeton Blockchain Contest. Po podłączeniu portfela, aplikacja oferuje generacje tokenów przywiązanych do duszy (SBT).",
      image: veriflex,
      releaseDate: "Czerwiec 2024",
      estimatedTime: "3 tygodnie",
      tags: ["React", "TypeScript", "Chakra UI", "RainbowKit", "Hardhat", "Circom"],
      category: "blockchain",
    },
    {
      id: 4,
      name: "Portal Biohazard",
      description: "Strona przeznaczona dla graczy serwera w grze Counter Strike 1.6. Strona zawiera kluczowe informacje takie jak regulamin, pula rozgrywanych map czy statystyki graczy na żywo.",
      image: biohazard,
      releaseDate: "Listopad 2023",
      estimatedTime: "2 tygodnie",
      tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
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
      tags: ["React", "NextJS", "TypeScript", "Hardhat", "Solidity"],
      category: "blockchain",
    },
  ]

  const filteredProjects: Project[] =
    activeTab === "all" ? projects : projects.filter((project: Project) => project.category === activeTab)

  return (
    <div className="dark min-h-screen bg-gradient-to-b from-gray-900 to-black  text-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex text-gray-400 hover:text-white transition-colors group">
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>Powrót</span>
        </Link>
        <header className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Portfolio
          </h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl">
            Aplikacje podzielono na te z wykorzystaniem łańcucha bloków (Web 3), oraz aplikacje tradycyjne bez integracji z blockchainem (Web 2).
          </p>

          <p className="text-gray-400/60 text-center text-md max-w-2xl mt-6">
            Szczegóły projektów chwilowo niedostępne. Za utrudnienia przepraszamy.
          </p>
        </header>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="bg-gray-900 border border-gray-800">
            <TabsTrigger value="all">Wszystkie projekty</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain (Web 3)</TabsTrigger>
            <TabsTrigger value="trad">Tradycyjne (Web 2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trad" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              {filteredProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <div className="group flex relative">
            <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center z-10">
              <Clock className="w-4 h-4 mr-1 text-purple-400" />
              <span className="text-sm font-medium">{project.estimatedTime}</span>
              <span className="group-hover:opacity-100 transition-opacity bg-gray-800/80 px-3 py-2 text-sm min-w-[200px] text-gray-100 rounded-md 
    absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mx-auto text-center">
                Czas w jakim<br />wykonano projekt.
              </span>
            </div>
          </div>

          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            width={500}
            height={300}
            className="w-full h-60 md:h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="md:w-2/3 flex flex-col">
          <CardHeader className="pb-2">
            <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
          </CardHeader>

          <CardContent className="pb-4 flex-grow">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-1 text-purple-400" />
              <span>{project.releaseDate}</span>
            </div>
            <p className="text-gray-400 mb-4 text-lg">{project.description}</p>


            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="bg-gray-800 hover:bg-gray-700 text-purple-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="pt-0">
            <Link href={"/soon"}>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                Zobacz więcej →
              </button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

