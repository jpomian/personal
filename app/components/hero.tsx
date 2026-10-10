"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, LandPlot } from "lucide-react";
import Link from "next/link";

const BASE_SPEED = 160;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [count, setCount] = useState(1);

  const pops = BASE_SPEED * count;

  const popsRef = useRef(pops);
  popsRef.current = pops;

  const handleSpeed = useCallback(() => {
    setCount((c) => (c >= 4 ? 1 : c * 2))
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x = Math.random() * canvas!.width;
      y = Math.random() * canvas!.height;
      size = Math.random() * 2 + 1;
      speedX = Math.random() * 2 - 4;
      speedY = Math.random() * 2 - 3;

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = "rgba(153, 204, 255, 0.6)";
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const particles: Particle[] = Array.from(
      { length: popsRef.current },
      () => new Particle()
    );

    let rafId: number;

    function animate() {
      // Dynamically add/remove particles to match the target count
      const target = popsRef.current;
      if (particles.length < target) {
        while (particles.length < target) particles.push(new Particle());
      } else if (particles.length > target) {
        particles.length = target;
      }

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      rafId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);           // ✅ stop the loop
      window.removeEventListener("resize", handleResize);
    };
  }, []); // ✅ runs once — no restart on speed change

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-black z-0"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          JĘDRZEJ <span className="text-[#3388FF]">POMIANOWSKI</span>
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Out-of-the-box ideas for your website
        </motion.p>

        <div className="flex flex-row gap-12 mt-12">
          <motion.button
            className="px-6 py-3 border border-gray-200/80 rounded-lg group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/portfolio">
              <p className="flex flex-row items-center text-lg transition-all group-hover:text-white/60">
                <BookOpenCheck className="mr-3 w-6 h-6 group-hover:scale-110" />
                My projects
              </p>
            </Link>
          </motion.button>

          <motion.button
            className="px-6 py-3 border border-gray-200/80 rounded-lg group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/info">
              <p className="flex flex-row items-center text-lg transition-all duration-300 group-hover:text-white/60">
                <LandPlot className="mr-3 w-6 h-6 group-hover:scale-105" />
                More about me
              </p>
            </Link>
          </motion.button>
        </div>
      </div>

      <div className="fixed bottom-[15px] left-3 right-5 z-10">
        <div className="mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jędrzej Pomianowski. All rights
              reserved.{" "}
              <span
                onClick={handleSpeed}
                className="cursor-pointer hover:text-white italic"
              >
                x{count}
              </span>
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/jpomian" className="text-gray-400 hover:text-white">Github</a>
              <a href="https://steamcommunity.com/id/mixtaz" className="text-gray-400 hover:text-white">Steam</a>
              <a href="https://www.linkedin.com/in/jpomian/" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}