import { ADDRESS_LINES, BRAND, OWNER, WHATSAPP_DISPLAY, generalMessage, whatsappLink } from '../data/brand.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto grid max-w-7xl 2xl:max-w-[1500px] gap-10 px-4 py-12 sm:py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold text-cream">{BRAND}</p>
          <p className="mt-3 text-sm leading-relaxed">Velvet, Banarsi and woollen shawls plus elegant abayas for every season and occasion. Owned by {OWNER}.</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-camel">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-camel" href="#velvet">Velvet Shawls</a></li>
            <li><a className="hover:text-camel" href="#banarsi">Banarsi Shawls</a></li>
            <li><a className="hover:text-camel" href="#woollen">Woollen Shawls</a></li>
            <li><a className="hover:text-camel" href="#abayas">Abayas</a></li>
            <li><a className="hover:text-camel" href="#about">About Us</a></li>
            <li><a className="hover:text-camel" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-camel">Visit</p>
          <address className="mt-4 text-sm not-italic leading-relaxed">
            {ADDRESS_LINES.map((l) => <span key={l} className="block">{l}</span>)}
            <a className="mt-2 inline-block hover:text-camel" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 pb-24 text-center text-xs sm:pb-5">
        © {new Date().getFullYear()} {BRAND}. All rights reserved. Orders are confirmed with the shop on WhatsApp.
      </div>
    </footer>
  )
}
