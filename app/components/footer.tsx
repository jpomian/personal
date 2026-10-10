export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Jędrzej Pomianowski. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/jpomian" className="text-gray-400 hover:text-white">
              Github
            </a>
            <a href="https://steamcommunity.com/id/mixtaz" className="text-gray-400 hover:text-white">
              Steam
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