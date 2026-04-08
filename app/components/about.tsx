"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import GitHub from "../../assets/github.png";
import Linkedin from "../../assets/linkedin-icon.svg";

import EmailDownloadModal from "./download-button";

export default function About() {
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
    <div className="relative h-screen">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-black"
      />
      <div className="relative z-10 flex w-full items-center justify-center px-4 py-16">
        <motion.div
          className="w-full max-w-[1164px] rounded-lg border border-gray-800 bg-black/80 backdrop-blur-sm p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-8 flex justify-between"
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

            <div className="flex gap-6">
              <a href="https://github.com/jpomian">
                <Image
                  src={GitHub}
                  width={30}
                  height={30}
                  alt="GitHub"
                  className="flex h-10 w-10 cursor-pointer transition-all hover:-translate-y-1.5 hover:drop-shadow-md"
                />
              </a>
              <a href="https://www.linkedin.com/in/jpomian/">
                <Image
                  src={Linkedin}
                  width={30}
                  height={30}
                  alt="Linkedin"
                  className="flex h-10 w-10 scale-90 cursor-pointer transition-all hover:-translate-y-1.5 hover:drop-shadow-md"
                />
              </a>
            </div>
          </motion.div>

          {/* Section 1 */}
          <div className="mb-10">
            <motion.h2
              className="mb-4 text-4xl font-bold tracking-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kim jestem
            </motion.h2>
            <motion.p
              className="text-gray-300 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Moje imię już znasz, dowiesz się teraz trochę o mojej osobie. 
              Jestem uważnym <strong>webmasterem</strong>, praktykującym <strong>matematykiem</strong>, amatorskim <strong>grafikiem</strong> oraz <strong>inwestorem</strong> aktywów nowoczesnych.
            </motion.p>
            <motion.p
              className="mt-4 text-gray-300 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Urodzony w Olsztynie, szukam wyzwań i nowych doświadczeń w dużych miastach w Polsce i za granicą. Jestem zainteresowany długoterminowym 
              <strong> upskillingiem</strong> i <strong>reskillingiem</strong> swoich umiejętności.
              Wierzę, że wiedza i zdolności, które zdobyłem na swojej ścieżce prywatnej i zawodowej to <strong>kapitał</strong>, który nie może zostać mi odebrany. 
            </motion.p>
            <motion.p
              className="mt-4 text-gray-300 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Moją specjalizacją są technologie rozproszone, w szczególności technologia <strong>blockchain</strong>. 
              Brałem udział w hackatonach, gdzie projektowałem aplikacje tworząc realne przypadki użycia. 
              Więcej o tym możesz znaleźć w moim <Link href="/portfolio" className="underline decoration-dashed text-gray-100 hover:opacity-70 transition duration-300">portfolio</Link>.  
            </motion.p>
          </div>

          <div className="border-t border-gray-800 my-8" />

          {/* Section 2 */}
          <div>
            <motion.h3
              className="mb-4 text-2xl font-semibold tracking-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Czym się zajmuję
            </motion.h3>
            <motion.p
              className="text-gray-400 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
            Tworzenie stron internetowych to tylko jedna z moich domen. Dodatkowo zajmuję się także ich hostowaniem oraz utrzymaniem. 
            Opanowane sztuczki <strong>DevOps</strong>, pozwalają mi na wydajny przepływ pracy na obrazach Docker wewnątrz mojego serwera VPS, celem prostej aktualizacji wszystkich moich projektów. 

            </motion.p>

            <motion.p
              className="mt-4 text-gray-400 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
            Jestem w trakcie tworzenia artykułu naukowego we współpracy z <strong>Uniwersytetem Ekonomicznym w Poznaniu</strong>.
            Publikacja będzie stanowiła rozszerzenie moich badań zawartych w pracy magisterskiej. 

            </motion.p>

            <motion.p
              className="mt-4 text-gray-400 leading-relaxed text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
            Hackatony. Mam więcej pomysłów które chciałbym wylać na makietę. Jeżeli szukasz osoby do zespołu, a wiesz że odbywa się taki konkurs, <strong>napisz</strong>!

            </motion.p>


          </div>

          <motion.div
            className="mt-6 pt-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <EmailDownloadModal />
          </motion.div>
          {/* Contact row */}

          <div className="pt-8 flex flex-wrap gap-6 justify-center">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800">
                <Mail className="h-4 w-4 text-gray-300" />
              </div>
              <Link
                href="mailto:jpomianowski@outlook.com"
                className="text-sm text-gray-400 hover:text-white transition-colors"
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
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800">
                <Phone className="h-4 w-4 text-gray-300" />
              </div>
              <Link
                href="tel:+48664982222"
                className="text-sm text-gray-400 hover:text-white transition-colors"
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
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800">
                <MapPin className="h-4 w-4 text-gray-300" />
              </div>
              <p className="text-sm text-gray-400">Olsztyn, Poznań, Warszawa</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
