"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Calendar } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  image: string
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
      image: "/placeholder.svg?height=300&width=500",
      releaseDate: "Luty 2025",
      estimatedTime: "4 weeks",
      tags: ["React", "Node.js", "NextJS", "Tailwind CSS", "Redix"],
      category: "trad",
    },
    {
      id: 2,
      name: "Task Management App",
      description:
        "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
      image: "/placeholder.svg?height=300&width=500",
      releaseDate: "January 2023",
      estimatedTime: "3 weeks",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "blockchain",
    },
    {
      id: 3,
      name: "Fitness Tracker",
      description: "A trad application for tracking workouts, nutrition, and progress with data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      releaseDate: "November 2022",
      estimatedTime: "6 weeks",
      tags: ["React Native", "TypeScript", "Firebase"],
      category: "trad",
    },
    {
      id: 4,
      name: "Weather Dashboard",
      description: "A real-time weather application with forecasting, location-based services, and interactive maps.",
      image: "/placeholder.svg?height=300&width=500",
      releaseDate: "September 2022",
      estimatedTime: "2 weeks",
      tags: ["JavaScript", "OpenWeather API", "Chart.js"],
      category: "blockchain",
    },
    {
      id: 5,
      name: "AI Content Generator",
      description:
        "A tool that leverages machine learning to generate blog posts, social media content, and marketing copy.",
      image: "/placeholder.svg?height=300&width=500",
      releaseDate: "July 2022",
      estimatedTime: "8 weeks",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "trad",
    },
    {
      id: 6,
      name: "Inventory Management System",
      description: "A comprehensive solution for tracking inventory, managing suppliers, and generating reports.",
      image: "/placeholder.svg?height=300&width=500",
      releaseDate: "May 2022",
      estimatedTime: "5 weeks",
      tags: ["Vue.js", "Node.js", "PostgreSQL"],
      category: "blockchain",
    },
  ]

  const filteredProjects: Project[] =
    activeTab === "all" ? projects : projects.filter((project: Project) => project.category === activeTab)

  return (
    <div className="dark min-h-screen bg-gray-950 text-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Portfolio
          </h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl">
            Aplikacje podzielono na te z wykorzystaniem łańcucha bloków (Web 3), oraz aplikacje tradycyjne bez integracji z blockchainem (Web 2).
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
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center z-10">
            <Clock className="w-4 h-4 mr-1 text-purple-400" />
            <span className="text-sm font-medium">{project.estimatedTime}</span>
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
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
              Zobacz więcej →
            </button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

