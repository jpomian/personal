import Hero from "./components/hero"
import Footer from "./components/footer"
import About from "./components/about"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Footer />
    </main>
  )
}

