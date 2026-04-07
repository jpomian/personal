import ContactWindow from "./ContactWindow"
import Footer from "../components/footer"

export default function Page() {
  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] bg-black text-white">
      <ContactWindow />
      <Footer />
    </main>
  )
}

