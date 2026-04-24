"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react"
import Link from 'next/link'
import EmailDownloadModal from "./download-button"

export default function ContactWindow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <motion.div
          className="w-full max-w-md rounded-lg border border-gray-800 bg-black/80 backdrop-blur-sm p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors group">
              <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span>Powrót</span>
            </Link>
          </motion.div>
          <div className="mb-6 text-center">
            <motion.h1
              className="mb-2 text-3xl font-bold tracking-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hej!
            </motion.h1>
            <motion.p
              className="text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Masz pytanie lub szukasz współpracy? Napisz do mnie.
            </motion.p>
          </div>

          <div className="space-y-8">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                <Mail className="h-5 w-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <Link href="mailto:jpomianowski@outlook.com" className="text-white hover:text-gray-300 transition-colors">
                  jpomianowski@outlook.com
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                <Phone className="h-5 w-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Numer telefonu</p>
                <Link href="tel:+48664982222" className="text-white hover:text-gray-300 transition-colors">
                  +48 664 982 222
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                <MapPin className="h-5 w-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Lokalizacje</p>
                <p className="text-white">Olsztyn, Poznań, Warszawa</p>
              </div>
            </motion.div>


            <motion.div
              className="mt-8 pt-6 border-t border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <EmailDownloadModal />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

