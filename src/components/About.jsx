import { MessageCircle } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { BRAND, OWNER, generalMessage, whatsappLink } from '../data/brand.js'

export default function About() {
  return (
    <section id="about" className="bg-ink py-12 text-cream sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 2xl:max-w-[1500px]">
        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4 lg:max-w-none">
          <SmartImage src="/images/shawl-13.jpg" alt="Embroidered velvet shawl at AM Shawl House" tone={['#3a2a5a', '#150e24']} label="Velvet Shawl" className="aspect-[3/4] rounded-2xl" />
          <SmartImage src="/images/abaya-05.jpg" alt="Embroidered black abaya at AM Shawl House" tone={['#493629', '#171512']} label="Embroidered Abaya" className="mt-6 sm:mt-8 aspect-[3/4] rounded-2xl" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-camel">About Us</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold min-[400px]:text-4xl sm:text-5xl">{BRAND}</h2>
          <div className="mt-4 h-px w-16 bg-bronze" />
          <p className="mt-6 leading-relaxed text-cream/80">
            {BRAND} is a Karachi shop owned by <span className="text-camel">{OWNER}</span>, specializing in velvet, Banarsi and woollen shawls and elegant black abayas for different styles and occasions. From everyday wear to
            special gatherings, we focus on graceful cuts, tasteful details and fair prices.
          </p>
          <p className="mt-4 leading-relaxed text-cream/80">
            Message us on WhatsApp to check availability, ask about prices, colors and designs, or
            arrange delivery, or visit the shop in Paposh Nagar.
          </p>
          <a
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-bronze px-7 py-3.5 font-medium text-white transition hover:bg-camel"
          >
            <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
