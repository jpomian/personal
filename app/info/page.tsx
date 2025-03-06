import Footer from "../components/footer"
import Image from 'next/image'
import Foto from '../../assets/og.jpg'

export default function Page() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="flex items-center justify-center">
                <Image src={Foto} alt={"Autor"} height={400} width={400} />
            </div>
            <Footer />
        </main>
    )
}

