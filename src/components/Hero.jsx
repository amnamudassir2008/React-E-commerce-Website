import { ArrowDown, MessageCircle, ShieldCheck, Truck, Sparkles } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { generalMessage, whatsappLink } from '../data/brand.js'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-bronze/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cocoa/60 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24 2xl:max-w-[1500px]">
        <div className="animate-fadeUp text-center lg:text-left">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-camel sm:text-xs sm:tracking-[0.35em]">AM Shawl House · Karachi</p>
          <h1 className="mt-4 font-serif text-[2.6rem] font-semibold leading-[1.05] min-[400px]:text-5xl sm:mt-5 sm:text-6xl xl:text-7xl">
            Shawls &amp; Abayas, <span className="italic text-camel">Timeless Elegance</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:mt-6 sm:text-lg lg:mx-0">
            Explore our velvet, Banarsi and woollen shawls along with elegant abayas in beautiful colours, featuring fine embroidery and timeless details.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#velvet"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 font-medium text-ink transition hover:bg-sand"
            >
              Explore Collection <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-camel px-7 py-3.5 font-medium text-camel transition hover:bg-camel hover:text-ink"
            >
              <MessageCircle size={18} aria-hidden="true" /> Shop on WhatsApp
            </a>
          </div>
          <ul className="mt-8 flex flex-col items-center gap-3 text-sm text-cream/70 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 lg:justify-start">
            <li className="flex items-center gap-2"><Sparkles size={16} className="text-camel" aria-hidden="true" /> Shawls &amp; abayas</li>
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-camel" aria-hidden="true" /> Visit our Karachi shop</li>
            <li className="flex items-center gap-2"><Truck size={16} className="text-camel" aria-hidden="true" /> Ask us about delivery</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-fadeUp sm:max-w-sm lg:max-w-md lg:justify-self-end" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-3 rounded-[2rem] border border-camel/40" aria-hidden="true" />
          <SmartImage
            src="/images/shawl-green-hero.jpg"
            alt="Emerald green embroidered shawl with gold detailing"
            tone={['#3a2a5a', '#150e24']}
            label="Emerald Green Shawl"
            className="aspect-[4/5] w-full rounded-[1.75rem] shadow-2xl"
          />
          <div className="absolute -bottom-5 -left-3 w-1/3 overflow-hidden rounded-2xl border-4 border-ink shadow-xl sm:-left-8">
            <SmartImage
              src="/images/abaya-01.jpg"
              alt="Black embellished abaya from AM Shawl House"
              tone={['#B89A7A', '#493629']}
              label="Abaya"
              className="aspect-[3/4] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
