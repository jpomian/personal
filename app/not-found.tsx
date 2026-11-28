import Link from "next/link"
import { Home } from "lucide-react"
import FooterWide from "./components/footer-wide"

export default function NotFound() {
  return (
    <div className="dark min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 p-6 pb-0 md:p-10 md:pb-0 flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="animate-spin-slow text-8xl md:text-9xl font-bold leading-none bg-gradient-to-r from-slate-400 to-purple-300 text-transparent bg-clip-text">
            404
          </h1>
          <h2 className="mt-16 text-2xl md:text-3xl font-semibold text-white">
            Nie znaleziono zasobu
          </h2>

          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 text-lg transition-colors hover:text-purple-500/50"
          >
            <Home className="h-5 w-5" />
            jpomian.pl
          </Link>
        </div>
      </div>

      <FooterWide />
    </div>
  )
}
