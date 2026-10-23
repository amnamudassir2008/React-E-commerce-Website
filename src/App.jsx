import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'
import ProductSection from './components/ProductSection.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import { products } from './data/products.js'
import { generalMessage, whatsappLink } from './data/brand.js'

const sections = [
  { id: 'velvet', cat: 'velvet', eyebrow: 'Shawl Collection', title: 'Velvet Shawls', intro: 'Rich velvet shawls with embroidered borders, star motifs and delicate cutwork edges.', dark: true },
  { id: 'banarsi', cat: 'banarsi', eyebrow: 'Shawl Collection', title: 'Banarsi Shawls', intro: 'Beautiful Banarsi weaves in paisley, floral and colourful striped patterns.' },
  { id: 'woollen', cat: 'woollen', eyebrow: 'Shawl Collection', title: 'Woollen Shawls', intro: 'Warm, soft woollen shawls with woven borders and tassels for the cold season.', dark: true },
  { id: 'abayas', cat: 'abaya', eyebrow: 'The Abaya Collection', title: 'Colourful Abayas — Grace in Every Detail', intro: 'Discover elegant abayas in black, red, green and other beautiful colours, with embroidery, lace, beadwork and flowing sleeves.' },
]
export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const inCat = category === 'all' || p.category === category
      const inText = !q || `${p.name} ${p.detail} ${p.label}`.toLowerCase().includes(q)
      return inCat && inText
    })
  }, [query, category])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FilterBar query={query} setQuery={setQuery} category={category} setCategory={setCategory} />
        {sections.map((s) => {
          const items = filtered.filter((p) => p.category === s.cat)
          if (items.length === 0) return null
          return <ProductSection key={s.id} {...s} products={items} />
        })}
        {filtered.length === 0 && (
          <section className="py-24 text-center">
            <p className="font-serif text-3xl">No products match your search.</p>
            <p className="mt-3 text-cocoa/70">Try a different word, or ask us directly on WhatsApp.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 px-4 sm:flex-row">
              <button type="button" onClick={() => { setQuery(''); setCategory('all') }} className="rounded-full border border-ink px-6 py-3 text-sm font-medium hover:bg-ink hover:text-cream">
                Clear filters
              </button>
              <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream hover:bg-bronze">
                Ask on WhatsApp
              </a>
            </div>
          </section>
        )}
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
