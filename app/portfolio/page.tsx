"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import { projects } from "./data/projects"
import { ProjectCard } from "@/components/ui/project-card"
import Footer from "../components/footer"
import type { Project } from "./types/project"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects: Project[] =
    activeTab === "all" ? projects : projects.filter((project: Project) => project.category === activeTab)

  return (
    <div className="dark min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto relative">

        <Link href="/" className="inline-flex text-gray-400 hover:text-white transition-colors group">
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>Powrót</span>
        </Link>

        <header className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Portfolio
          </h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl">
            Aplikacje podzielono na te z wykorzystaniem łańcucha bloków (Web 3), oraz aplikacje tradycyjne bez
            integracji z blockchainem (Web 2).
          </p>

          <p className="text-gray-400/60 text-center text-md max-w-2xl mt-6">
            Przycisk <span className="italic mr-1">Zobacz więcej</span> przekierowuje do strony projektu.
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

