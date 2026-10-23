import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { BRAND, generalMessage, whatsappLink } from '../data/brand.js'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#velvet', label: 'Velvet' },
  { href: '#banarsi', label: 'Banarsi' },
  { href: '#woollen', label: 'Woollen' },
  { href: '#abayas', label: 'Abayas' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl 2xl:max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-camel font-serif text-lg font-bold text-camel">AM</span>
          <span className="truncate font-serif text-lg font-semibold tracking-wide text-cream sm:text-xl">{BRAND}</span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-cream/80 transition hover:text-camel">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-bronze px-4 py-2 text-sm font-medium text-white transition hover:bg-camel md:inline-flex"
          >
            <MessageCircle size={16} aria-hidden="true" /> Order on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-cream transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ink lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-cream/90 transition hover:bg-white/10 hover:text-camel"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-bronze px-4 py-3 font-medium text-white"
              >
                <MessageCircle size={18} aria-hidden="true" /> Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
