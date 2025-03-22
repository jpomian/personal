import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Globe, Calendar } from "lucide-react"
import type { Project } from "../../app/portfolio/types/project"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <div className="group flex relative">
            <div className="absolute top-3 right-3 flex items-center z-10">
              <Link href={project.url}>
                <div className="bg-gray-800/80 rounded-full p-1 mr-1 backdrop-blur-sm">
                  <Globe className="w-6 h-6 text-gray-100" />
                </div>
              </Link>
              <span
                className="group-hover:opacity-100 transition-opacity bg-gray-800/80 px-3 py-2 text-sm min-w-[200px] text-gray-100 rounded-md 
                absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mx-auto text-center"
              >
                Visit website
              </span>
            </div>
          </div>

          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            width={500}
            height={300}
            className="w-full h-60 md:h-full object-cover transition-transform duration-500"
          />
        </div>

        <div className="md:w-2/3 flex flex-col">
          <div className="group flex relative">
            <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center z-10">
              <Clock className="w-4 h-4 mr-1 text-purple-400" />
              <span className="text-sm font-medium">{project.estimatedTime}</span>
              <span
                className="group-hover:opacity-100 transition-opacity bg-gray-800/80 px-3 py-2 text-sm min-w-[200px] text-gray-100 rounded-md 
                absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mx-auto text-center"
              >
                Time to finish
              </span>
            </div>
          </div>
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
            <a href={project.url}>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                See more →
              </button>
            </a>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

