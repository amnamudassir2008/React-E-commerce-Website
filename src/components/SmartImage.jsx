import { useState } from 'react'

// Shows a real image when available; otherwise a fabric-style gradient placeholder in the product's colors.
export default function SmartImage({ src, alt, tone = ['#E8DDCC', '#B89A7A'], className = '', label, imageFilter = 'none' }) {
  const [state, setState] = useState('loading')
  const showFallback = state === 'error' || !src

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(145deg, ${tone[0]}, ${tone[1]})` }}>
      {!showFallback && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${state === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
          style={{ filter: imageFilter }}
        />
      )}
      {(showFallback || state === 'loading') && (
        <div className={`absolute inset-0 weave ${state === 'loading' && !showFallback ? 'animate-pulse' : ''}`} aria-hidden="true" />
      )}
      {showFallback && (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-end justify-start p-4 transition duration-700 group-hover:scale-105"
        >
          <span className="font-serif text-lg text-white/80 drop-shadow">{label}</span>
        </div>
      )}
    </div>
  )
}
