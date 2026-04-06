"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Briefcase } from "lucide-react"
import Link from "next/link"

const milestones = [
  {
    year: "2018",
    title: "Junior Developer",
    company: "TechStart Sp. z o.o.",
    location: "Olsztyn",
    description:
      "Began career building internal tooling and REST APIs. Worked primarily with Node.js and PostgreSQL. Contributed to the migration of legacy systems to modern cloud infrastructure.",
    tags: ["Node.js", "PostgreSQL", "REST API"],
  },
  {
    year: "2020",
    title: "Full-Stack Developer",
    company: "Nexora Digital",
    location: "Poznań",
    description:
      "Led frontend architecture for a SaaS platform serving 10,000+ users. Introduced TypeScript across the codebase and mentored two junior developers. Collaborated closely with design and product teams.",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    year: "2022",
    title: "Senior Engineer",
    company: "DataBridge S.A.",
    location: "Warszawa",
    description:
      "Responsible for designing scalable microservices handling real-time data pipelines. Drove adoption of automated testing practices and reduced deployment times by 40%.",
    tags: ["Microservices", "Kafka", "CI/CD"],
  },
  {
    year: "2024",
    title: "Lead Engineer",
    company: "Independent / Freelance",
    location: "Remote",
    description:
      "Working with select clients across Poland and the EU to deliver high-quality web products. Focus on architecture, performance, and long-term maintainability.",
    tags: ["Architecture", "Consulting", "Full-Stack"],
  },
]

export default function Career() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 120

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="pb-12 scroll-mt md:scroll-mt-md lg:scroll-mt-lg">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-16">
        {/* Back link */}
        <motion.div
          className="w-full max-w-4xl mb-10"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
            <span>Powrót</span>
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="w-full max-w-4xl mb-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Doświadczenie</p>
          <h1 className="text-3xl font-bold tracking-tight text-white">Ścieżka kariery</h1>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Line + nodes */}
          <div className="relative flex items-center">
            {/* Horizontal rule */}
            <div className="absolute left-0 right-0 h-px bg-gray-700" />

            {/* Nodes */}
            <div className="relative flex w-full justify-between">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Tooltip — above the line */}
                  <div className="mb-6 flex flex-col items-center">
                    <AnimatePresence>
                      {activeIndex === i && (
                        <motion.div
                          className="absolute bottom-full mb-4 w-56 rounded-lg border border-gray-700 bg-black/90 backdrop-blur-sm p-4 text-left z-20"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-xs text-gray-500 mb-1">{m.year} · {m.location}</p>
                          <p className="text-sm font-semibold text-white mb-1">{m.title}</p>
                          <p className="text-xs text-gray-400 mb-3 leading-relaxed">{m.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {m.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-gray-700 px-2 py-0.5 text-xs text-gray-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Dot */}
                  <motion.button
                    className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors duration-200 cursor-pointer ${
                      activeIndex === i
                        ? "border-white bg-white"
                        : "border-gray-500 bg-black hover:border-gray-300"
                    }`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-label={`${m.title} at ${m.company}`}
                  >
                    {activeIndex === i && (
                      <span className="h-1.5 w-1.5 rounded-full bg-black" />
                    )}
                  </motion.button>

                  {/* Year + company below */}
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="text-xs font-semibold text-white">{m.year}</span>
                    <span className="mt-1 text-xs text-gray-500 max-w-[90px] leading-snug">{m.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active detail card */}
        <div className="w-full max-w-4xl mt-20 min-h-[100px]">
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                className="rounded-lg border border-gray-800 bg-black/80 backdrop-blur-sm p-8 flex gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-800">
                  <Briefcase className="h-4 w-4 text-gray-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {milestones[activeIndex].year} · {milestones[activeIndex].location}
                  </p>
                  <h2 className="text-lg font-semibold text-white mb-0.5">
                    {milestones[activeIndex].title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-3">
                    {milestones[activeIndex].company}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {milestones[activeIndex].description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {milestones[activeIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
