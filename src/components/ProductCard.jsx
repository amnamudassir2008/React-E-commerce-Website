import { MessageCircle } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { formatPrice, productMessage, whatsappLink } from '../data/brand.js'

const categoryName = { abaya: 'Black Abaya', velvet: 'Velvet Shawl', banarsi: 'Banarsi Shawl', woollen: 'Woollen Shawl' }

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cocoa/10">
      <div className="relative">
        <SmartImage
          src={product.image}
          alt={`${product.name} - ${product.detail}`}
          tone={product.tone}
          label={product.name}
          className="aspect-[4/5] w-full"
          imageFilter={product.category === 'abaya' ? ({ a1: 'sepia(0.65) saturate(2.4) hue-rotate(75deg) brightness(0.78)', a2: 'sepia(0.8) saturate(3.5) hue-rotate(305deg) brightness(0.8)', a3: 'sepia(0.75) saturate(3.2) hue-rotate(290deg) brightness(0.78)', a4: 'sepia(0.65) saturate(2.4) hue-rotate(65deg) brightness(0.78)' }[product.id] || 'none') : 'none'}
        />
        <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-ink/85 px-2.5 py-1 text-[10px] sm:left-3 sm:top-3 sm:px-3 sm:text-[11px] font-medium uppercase tracking-wider text-cream backdrop-blur">
          {product.label}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-2.5 min-[400px]:p-3 sm:p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-bronze sm:text-[11px] sm:tracking-[0.18em]">{categoryName[product.category]}</p>
        <h3 className="mt-1 break-words font-serif text-sm font-semibold leading-snug text-ink min-[400px]:text-base sm:text-xl lg:text-2xl">{product.name}</h3>
        <p className="mt-1 break-words text-[11px] leading-snug text-cocoa/70 min-[400px]:text-xs sm:text-sm">{product.detail}</p>
        <p className="mt-2 text-sm font-semibold text-cocoa sm:mt-3 sm:text-lg">{formatPrice(product.price)}</p>
        <div className="mt-3 sm:mt-4" />
        <a
          href={whatsappLink(productMessage(product))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order ${product.name} on WhatsApp`}
          className="mt-auto inline-flex min-h-10 w-full items-center justify-center gap-1 whitespace-normal rounded-full bg-ink px-2 py-2 text-xs font-medium text-cream transition hover:bg-bronze min-[400px]:gap-2 min-[400px]:text-sm sm:min-h-11 sm:px-3"
        >
          <MessageCircle size={16} aria-hidden="true" className="max-[359px]:hidden" />
          Order Now
        </a>
      </div>
    </article>
  )
}
