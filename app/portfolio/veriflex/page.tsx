import Link from "next/link"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import {
  ArrowLeft,
  FileText,
  History,
  Lightbulb,
  ShieldCheck,
  Trophy,
} from "lucide-react"
import FooterWide from "../../components/footer-wide"

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="flex items-center gap-3 mb-4 text-xl md:text-2xl font-semibold text-white">
        <Icon className="h-6 w-6 text-purple-400" />
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function VeriFlex() {
  return (
    <div className="dark min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 p-6 pb-0 md:p-10 md:pb-0">
      <div className="max-w-6xl mx-auto">

        <Link
          href="/portfolio"
          className="inline-flex text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>Powrót</span>
        </Link>

        <header className="flex flex-col items-center justify-center mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-400 to-purple-300 text-transparent bg-clip-text">
            VeriFlex
          </h1>
          <p className="flex items-baseline gap-8 text-gray-400 text-lg max-w-xl">
            <a href="https://www.linkedin.com/in/jpomian/" className="hover:text-white">
            Aplikacja
          </a>
          <a href="https://www.linkedin.com/in/jpomian/" className="hover:text-white">
            Kod źródłowy (z instrukcją)
          </a>
          </p>
        </header>

        <article className="rounded-lg border border-gray-800 bg-black/40 backdrop-blur-sm p-16 sm:p-8 md:p-12 space-y-16">

          <Section icon={History} title="Geneza">
            <p className="text-gray-300 leading-relaxed">
              Franklin Templeton zorganizował konkurs (III edycja) na najlepsze rozwiązanie
              technologiczne na jednym z trzech łańcuchów bloków:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 text-gray-300 leading-relaxed">
              <li>
                <span className="font-medium text-gray-100">Hyperledger Fabric</span>
              </li>
              <li>
                <span className="font-medium text-gray-100">Ethereum</span> lub inny blockchain z EVM
              </li>
              <li>
                <span className="font-medium text-gray-100">Bitcoin Satoshi Vision (BSV)</span>
              </li>
            </ol>
            <p className="text-gray-300 leading-relaxed mt-4">
              W wyborze pomógł mi udział w II edycji konkursu, gdzie w 4-osobowym zespole zdobyliśmy
              II miejsce, tworząc aplikację Proof-of-Concept o nazwie{" "}
              <span className="font-medium text-gray-100">2Forge</span>.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Moja przeszła praktyka i doświadczenie z blockchainami opartymi o maszynę wirtualną EVM
              i znajomość języka Solidity, pozwoliła mi podjąć szybką decyzję o budowie na
              infrastrukturze pochodnej do Ethereum.
            </p>
          </Section>

          <Section icon={Lightbulb} title="Motywacja">
            <p className="text-gray-300 leading-relaxed">
              Jednocześnie z udziałem w konkursie, pisałem pracę magisterską. W pracy opisywałem
              stosowanie dowodów z wiedzą zerową — technologię, która jest aktywnie rozwijana
              w technologii łańcuchów bloków.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              W magisterce, dowód trzymał dane potwierdzające, że dostawca modelu AI zapewnia
              gwarantowaną ilość parametrów i wag. Żadne wartości nie zostają odczytane przez
              użytkownika końcowego, ponieważ są one zaszyfrowane wewnątrz dowodu z wiedzą zerową.
            </p>
          </Section>

          <Section icon={ShieldCheck} title="Aplikacja">
            <p className="text-gray-300 leading-relaxed">
              VeriFlex generował inny dowód — dowód trzymający pewną wartość w pełnej poufności.
              Dowód był przypieczętowany w tokenie przywiązanym do duszy (ang.{" "}
              <span className="font-medium text-gray-100">SBT, Soulbound Token</span>). Dla
              uproszczenia — dowodem dołączanym do tokenu była informacja o wieku właściciela.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Użytkownik może skorzystać z tokena SBT, gdy jakaś aplikacja zewnętrzna wyraźnie o to
              poprosi. Podczas odczytu przez inteligentny kontrakt widoczna jest jedynie informacja,
              że właściciel tokena ma ponad 18 lat; nie są ujawniane żadne dane dotyczące dokładnego
              wieku.
            </p>
            <div className="mt-3 relative w-full overflow-hidden rounded-lg border border-gray-800 pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/gAxI__F74uA"
                title="Demo aplikacji VeriFlex"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="mt-3 text-sm italic text-gray-500 text-center">
              Nagranie prezentujące działanie aplikacji VeriFlex.
            </p>
          </Section>

          <Section icon={FileText} title="Dokumentacja">
            <p className="text-gray-300 leading-relaxed">
              Dokumentacja działania mechanizmu tokenów przywiązanych do duszy
              jest opisana w{" "}
              <a
                href="/vf-tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 underline decoration-dashed underline-offset-4 transition-colors"
              >
                pliku PDF
              </a>
              .
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="/veriflex-business-preposition.png"
              alt="Wartość biznesowa projektu"
              width={1200}
              height={900}
              className="w-full object-cover"
            />
            </div>
            <p className="mt-3 text-center text-sm italic text-gray-500">Propozycja biznesowa VeriFlex</p>
          </Section>

          <Section icon={Trophy} title="Werdykt">
            <p className="text-gray-300 leading-relaxed">
              Ostateczną decyzję co do istotności mojego projektu miał komitet sędziowski,
              składający się z technicznych członków zespołu FT z USA, Kanady oraz jury z Polski.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Po krótkiej sesji Q&amp;A, ogłoszono wynik konkursu. Mój projekt zdobył uznanie
              sędziów i został zakwalifikowany na{" "}
              <span className="font-semibold text-purple-300">I miejsce</span>.
            </p>

            <div className="mt-6">
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/final-stand-veriflex.jpeg"
                  alt="Werdykt konkursu — projekt VeriFlex zajmuje I miejsce"
                  width={1200}
                  height={900}
                  className="w-full object-cover"
                />
              </div>
              <p className="my-3 text-center text-sm italic text-gray-500">Werdykt</p>
              <p className="text-gray-300 leading-relaxed">
              Mimo prężnie rozwijającej się technologii, użyteczność dowodów z wiedzą zerową nadal
              nie została w pełni wyeksploatowana, a VeriFlex ma potencjał aby walor, który dość
              surowo prezentuje, mógł być wykorzystany w realnym przypadku użycia. Chociażby
              przykładem byłaby sprywatyzowana tożsamość cyfrowa dla klientów partnerskich
              podmiotów oferujących usługi cyfrowe (np. e-commerce).
            </p>
             <p className="text-gray-300 leading-relaxed mt-4">
              Jeżeli jesteś zainteresowany rozmową na ten lub inne tematy,{" "}
              <Link
                href="/info"
                className="text-purple-300 hover:text-purple-200 underline decoration-dashed underline-offset-4 transition-colors"
              >
                zapraszam do kontaktu
              </Link>
              .
            </p>
            </div>
          </Section>
        </article>
      </div>
      <FooterWide />
    </div>
  )
}
