import ProductCard from './ProductCard.jsx'

export default function ProductSection({ id, eyebrow, title, intro, products, dark = false, children }) {
  return (
    <section id={id} className={`${dark ? 'bg-sand/50' : 'bg-cream'} py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl 2xl:max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink min-[400px]:text-4xl sm:text-5xl">{title}</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-bronze" />
          <p className="mt-4 text-cocoa/80">{intro}</p>
        </div>
        {children}
        <div className="mt-8 grid min-w-0 grid-cols-2 gap-2 min-[380px]:gap-3 sm:mt-10 sm:gap-5 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
