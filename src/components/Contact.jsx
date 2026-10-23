import { MapPin, Phone, User, Navigation, MessageCircle } from 'lucide-react'
import {
  ADDRESS_LINES, BRAND, OWNER, WHATSAPP_DISPLAY,
  generalMessage, mapDirectionsUrl, mapEmbedUrl, whatsappLink,
} from '../data/brand.js'

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">Contact</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold min-[400px]:text-4xl sm:text-5xl">Visit or Message Us</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-bronze" />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-sand bg-white p-5 shadow-sm sm:p-8">
            <h3 className="font-serif text-2xl font-semibold">{BRAND}</h3>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <User className="mt-0.5 shrink-0 text-bronze" size={20} aria-hidden="true" />
                <div><p className="text-xs uppercase tracking-wider text-cocoa/60">Owner</p><p>{OWNER}</p></div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-bronze" size={20} aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-cocoa/60">Address</p>
                  <address className="not-italic">{ADDRESS_LINES.map((l) => <span key={l} className="block">{l}</span>)}</address>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-bronze" size={20} aria-hidden="true" />
                <div><p className="text-xs uppercase tracking-wider text-cocoa/60">WhatsApp</p><p className="break-words">{WHATSAPP_DISPLAY}</p></div>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-cream transition hover:bg-bronze"
              >
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp Us
              </a>
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink px-6 py-3 font-medium text-ink transition hover:bg-ink hover:text-cream"
              >
                <Navigation size={18} aria-hidden="true" /> Get Directions
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
            <iframe
              title="Map of Sadia Market, Paposh Nagar, Karachi"
              src={mapEmbedUrl}
              className="h-72 w-full border-0 sm:h-80 lg:h-full lg:min-h-[24rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
