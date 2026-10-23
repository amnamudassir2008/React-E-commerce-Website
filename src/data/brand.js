export const WHATSAPP_NUMBER = '923333149912'
export const WHATSAPP_DISPLAY = '0333 3149912'
export const OWNER = 'Mudassir Mahmood'
export const BRAND = 'AM SHAWL HOUSE'
export const ADDRESS_LINES = ['Shop No. 26, Sadia Market,', 'Paposh Nagar, Karachi, Pakistan.']
export const MAP_QUERY = 'Sadia Market, Paposh Nagar, Karachi, Pakistan'

export const formatPrice = (n) => (n == null ? 'Price on WhatsApp' : `Rs. ${n.toLocaleString('en-PK')}`)

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const productMessage = (p) =>
  `Assalam-o-Alaikum ${BRAND}! I am interested in the ${p.name}${p.price == null ? '' : ` (${formatPrice(p.price)})`}. Please share its price, availability and delivery details.`

export const generalMessage = `Assalam-o-Alaikum ${BRAND}! I would like to know more about your shawls and abayas.`

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`
export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`
