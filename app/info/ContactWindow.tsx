"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import GitHub from "../../assets/github.png";
import Linkedin from "../../assets/linkedin-icon.svg";

import EmailDownloadModal from "./download-button";

export default function ContactWindow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 120;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 h-full w-full bg-black"
      />
      
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-8 md:py-16">
        <div className="w-full max-w-[1164px] my-auto">
          <motion.div
            className="w-full rounded-lg border border-gray-800 bg-black/80 backdrop-blur-sm p-6 sm:p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors group self-start sm:self-auto"
              >
                <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                <span>Back</span>
              </Link>

              <div className="flex gap-6 self-end sm:self-auto">
                <a href="https://github.com/jpomian">
                  <Image
                    src={GitHub}
                    width={30}
                    height={30}
                    alt="GitHub"
                    className="flex h-8 w-8 md:h-10 md:w-10 cursor-pointer transition-all hover:-translate-y-1.5 hover:drop-shadow-md"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jpomian/">
                  <Image
                    src={Linkedin}
                    width={30}
                    height={30}
                    alt="Linkedin"
                    className="flex h-8 w-8 md:h-10 md:w-10 scale-90 cursor-pointer transition-all hover:-translate-y-1.5 hover:drop-shadow-md"
                  />
                </a>
              </div>
            </motion.div>

            {/* Section 1 */}
            <motion.h2
              className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Who I am
            </motion.h2>
            <motion.p
              className="text-gray-300 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              You already know my name, now let me tell you a bit about myself.
              I am a maturing <strong>webmaster</strong>, a practical <strong>mathematician</strong>, an amateur <strong>graphic designer</strong>, and a modern asset <strong>investor</strong>.
            </motion.p>
            <motion.p
              className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Born in Olsztyn, I seek challenges and new experiences in major cities across Poland and abroad. I am interested in the long-term
              <strong> upskilling</strong> and <strong>reskilling</strong> of my abilities.
              I believe that the knowledge and skills I have gained on my personal and professional journey are <strong>capital</strong> that can never be taken away from me.
            </motion.p>
            <motion.p
              className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My specialization is distributed technologies, particularly <strong>blockchain</strong> technology.
              I have participated in hackathons where I designed applications creating real-world use cases.
              You can find out more about this in my <Link href="/portfolio" className="underline decoration-dashed text-gray-100 hover:text-lg hover:opacity-70 hover:no-underline transition duration-300">portfolio</Link>.  
            </motion.p>

            <div className="border-t border-gray-500 my-6 md:my-8" />

            {/* Section 2 */}
            <div>
              <motion.h3
                className="mb-4 text-xl sm:text-2xl font-semibold tracking-tight text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                What I do
              </motion.h3>
              <motion.p
                className="text-gray-400 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Creating websites is just one of my domains. I also handle their hosting and maintenance.
                Mastered <strong>DevOps</strong> techniques allow me to maintain an efficient workflow using Docker images inside my <strong>VPS server</strong>.
                All of this to simplify the process of publishing changes to my projects.
              </motion.p>

              <motion.p
                className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I am currently in the process of writing a scientific article in collaboration with the <strong>Poznań University of Economics</strong>.
                The publication will be an extension of the research I conducted in my master thesis.
              </motion.p>

              <motion.p
                className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <strong>Hackathons</strong>. I have more ideas that I would like to pour out into a mockup. If you are looking for a team member and you know a competition is taking place, <strong>reach out</strong> to me.
              </motion.p>
            </div>

            <motion.div
              className="mt-6 pt-6 border-t border-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <EmailDownloadModal />
            </motion.div>

            {/* Contact row */}
            <div className="pt-6 md:pt-8 flex flex-wrap gap-4 md:gap-6 justify-center">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gray-800">
                  <Mail className="h-3 w-3 md:h-4 md:w-4 text-gray-300" />
                </div>
                <Link
                  href="mailto:jpomianowski@outlook.com"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors break-all"
                >
                  jpomianowski@outlook.com
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gray-800">
                  <Phone className="h-3 w-3 md:h-4 md:w-4 text-gray-300" />
                </div>
                <Link
                  href="tel:+48664982222"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +48 664 982 222
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-gray-800">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 text-gray-300" />
                </div>
                <p className="text-xs sm:text-sm text-gray-400 text-wrap">Poland and Beyond</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}