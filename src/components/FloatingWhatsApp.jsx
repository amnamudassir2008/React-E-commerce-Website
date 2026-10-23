import { MessageCircle } from 'lucide-react'
import { generalMessage, whatsappLink } from '../data/brand.js'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(generalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AM Shawl House on WhatsApp"
      style={{ marginBottom: 'env(safe-area-inset-bottom)', marginRight: 'env(safe-area-inset-right)' }}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 sm:bottom-6 sm:right-6 items-center justify-center rounded-full bg-bronze text-white shadow-lg shadow-ink/30 transition hover:scale-105 hover:bg-camel"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
