import ContactWindow from "./ContactWindow"
import FooterWide from "../components/footer-wide"

export default function Page() {
  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] bg-black text-white">
      <ContactWindow />
      <FooterWide />
    </main>
  )
}

