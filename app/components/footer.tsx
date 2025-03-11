export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-transparent py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Jędrzej Pomianowski. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="https://github.com/jpomian" className="text-gray-400 hover:text-white">
              Github
            </a>
            <a href="https://etherscan.io/address/0x0E522E6ad7Ad2C2515a3bb914e66C350537d9D7a" className="text-gray-400 hover:text-white">
              Etherscan
            </a>
            <a href="https://www.linkedin.com/in/jpomian/" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}