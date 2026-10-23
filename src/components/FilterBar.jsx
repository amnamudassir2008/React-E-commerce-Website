import { Search, X } from 'lucide-react'
import { categories } from '../data/products.js'

export default function FilterBar({ query, setQuery, category, setCategory }) {
  return (
    <section id="shop" className="border-b border-sand bg-cream py-6 sm:py-8">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[1500px] flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm transition ${
                category === c.id ? 'border-ink bg-ink text-cream' : 'border-camel/60 text-cocoa hover:border-ink'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="product-search" className="sr-only">Search products</label>
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cocoa/60" aria-hidden="true" />
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shawls, abayas, colors..."
            className="w-full rounded-full border border-camel/60 bg-white py-3 pl-11 pr-10 text-base sm:text-sm placeholder:text-cocoa/50 focus:border-bronze focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-cocoa/60 hover:text-ink"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
