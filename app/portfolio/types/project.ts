import type { StaticImageData } from "next/image"

export interface Project {
  id: number
  name: string
  description: string
  image: string | StaticImageData
  releaseDate: string
  estimatedTime: string
  tags: string[]
  url: string
  category: string
}

