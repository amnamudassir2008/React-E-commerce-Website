// Shawls and abayas for AM Shawl House. Abaya prices are in PKR. Shawls with price: null show "Price on WhatsApp".
export const categories = [
  { id: 'all', label: 'All' },
  { id: 'velvet', label: 'Velvet Shawls' },
  { id: 'banarsi', label: 'Banarsi Shawls' },
  { id: 'woollen', label: 'Woollen Shawls' },
  { id: 'abaya', label: 'Abayas' },
]

export const products = [
  { id: 's1', category: 'velvet', name: 'Royal Blue Velvet Shawl', detail: 'Rich blue velvet with golden embroidery', price: null, label: 'Bestseller', image: '/images/shawl-blue.jpg', tone: ['#3a2a5a', '#150e24'] },
  { id: 's2', category: 'velvet', name: 'Ruby Red Embroidered Shawl', detail: 'Deep red velvet with decorative embroidered borders', price: null, label: 'New Arrival', image: '/images/shawl-red.jpg', tone: ['#3a2a5a', '#150e24'] },
  { id: 's3', category: 'velvet', name: 'Zari Embroidered Green Shawl', detail: 'Emerald green shawl with ornate gold embroidery', price: null, label: 'Bestseller', image: '/images/shawl-green.jpg', tone: ['#3a2a5a', '#150e24'] },
  { id: 's4', category: 'velvet', name: 'Black Cutwork Velvet Shawl', detail: 'Black velvet with a laser-cut scalloped border', price: null, label: 'New Arrival', image: '/images/shawl-03.jpg', tone: ['#3a2a5a', '#150e24'] },
  { id: 's5', category: 'velvet', name: 'Maroon Cutwork Velvet Shawl', detail: 'Deep maroon velvet with delicate cutwork edges', price: null, label: 'Elegant Style', image: '/images/shawl-04.jpg', tone: ['#3a2a5a', '#150e24'] },
  { id: 's6', category: 'velvet', name: 'Chocolate Lace Cutwork Shawl', detail: 'Warm brown shawl with a handsome lace border', price: null, label: 'Elegant Style', image: '/images/shawl-14.jpg', tone: ['#3a2a5a', '#150e24'] },
  { id: 's7', category: 'banarsi', name: 'Multicolor Banarsi Shawl', detail: 'Bold stripes with golden Banarsi weaving', price: null, label: 'Bestseller', image: '/images/shawl-07.jpg', tone: ['#8a6a3a', '#2a1d10'] },
  { id: 's8', category: 'banarsi', name: 'Floral Banarsi Shawl', detail: 'Cream and maroon floral Banarsi pattern', price: null, label: 'Elegant Style', image: '/images/shawl-08.jpg', tone: ['#8a6a3a', '#2a1d10'] },
  { id: 's9', category: 'banarsi', name: 'Golden Paisley Banarsi Shawl', detail: 'Classic paisley weave in golden tones', price: null, label: 'New Arrival', image: '/images/shawl-09.jpg', tone: ['#8a6a3a', '#2a1d10'] },
  { id: 's10', category: 'banarsi', name: 'Blue Paisley Banarsi Shawl', detail: 'Cool blue paisley with a fine woven border', price: null, label: 'Elegant Style', image: '/images/shawl-10.jpg', tone: ['#8a6a3a', '#2a1d10'] },
  { id: 's11', category: 'woollen', name: 'Men’s Beige Woollen Shawl', detail: 'Beige woven shawl with a patterned border and tassels', price: null, label: 'Men’s Collection', image: '/images/mens-wool-beige.jpg', tone: ['#6b6b6b', '#262626'] },
  { id: 's12', category: 'woollen', name: 'Men’s Charcoal Woollen Shawl', detail: 'Dark charcoal shawl with a refined woven border', price: null, label: 'Men’s Collection', image: '/images/mens-wool-charcoal.jpg', tone: ['#6b6b6b', '#262626'] },
  { id: 's13', category: 'woollen', name: 'Men’s Grey Striped Woollen Shawl', detail: 'Grey wool shawl with subtle striped trim and tassels', price: null, label: 'Men’s Collection', image: '/images/mens-wool-grey-stripe.jpg', tone: ['#6b6b6b', '#262626'] },
  { id: 's14', category: 'woollen', name: 'Men’s Black Woollen Shawl', detail: 'Classic black shawl with a golden woven border', price: null, label: 'Men’s Collection', image: '/images/mens-wool-black.jpg', tone: ['#6b6b6b', '#262626'] },
  { id: 'a1', category: 'abaya', name: 'Emerald Green Crystal Bead Abaya', detail: 'Subtle beadwork with a graceful drape', price: 3500, label: 'Bestseller', image: '/images/abaya-01.jpg', tone: ['#282522', '#080808'] },
  { id: 'a2', category: 'abaya', name: 'Ruby Red Butterfly Sleeve Abaya', detail: 'Flowy silhouette with statement sleeves', price: 3200, label: 'New Arrival', image: '/images/abaya-02.jpg', tone: ['#282522', '#080808'] },
  { id: 'a3', category: 'abaya', name: 'Wine Red Lace Border Abaya', detail: 'Delicate lace trim and timeless black fabric', price: 3300, label: 'Elegant Style', image: '/images/abaya-03.jpg', tone: ['#282522', '#080808'] },
  { id: 'a4', category: 'abaya', name: 'Forest Green Open-Front Abaya', detail: 'A versatile open-front layering style', price: 3000, label: 'Elegant Style', image: '/images/abaya-04.jpg', tone: ['#282522', '#080808'] },
  { id: 'a5', category: 'abaya', name: 'Floral Embroidered Abaya', detail: 'Floral embroidery for an elevated look', price: 3500, label: 'Bestseller', image: '/images/abaya-05.jpg', tone: ['#282522', '#080808'] },
  { id: 'a6', category: 'abaya', name: 'Wide Sleeve Abaya', detail: 'Wide sleeves with an airy, modest fit', price: 2900, label: 'Elegant Style', image: '/images/abaya-06.jpg', tone: ['#282522', '#080808'] },
  { id: 'a7', category: 'abaya', name: 'Chevron Stitch Abaya', detail: 'Chevron stitching with a clean finish', price: 3000, label: 'Elegant Style', image: '/images/abaya-07.jpg', tone: ['#282522', '#080808'] },
  { id: 'a8', category: 'abaya', name: 'Tassel Detail Abaya', detail: 'Neckline tassel detail and relaxed fit', price: 2800, label: 'New Arrival', image: '/images/abaya-08.jpg', tone: ['#282522', '#080808'] },
  { id: 'a9', category: 'abaya', name: 'Minimalist Zip Abaya', detail: 'Minimal design with a front zip detail', price: 3000, label: 'Elegant Style', image: '/images/abaya-09.jpg', tone: ['#282522', '#080808'] },
  { id: 'a10', category: 'abaya', name: 'Elegant Lace Abaya', detail: 'Fine lace accents for a refined finish', price: 3200, label: 'Elegant Style', image: '/images/abaya-10.jpg', tone: ['#282522', '#080808'] },
  { id: 'a11', category: 'abaya', name: 'Black Rose Embroidered Abaya', detail: 'Elegant floral embroidery on a classic abaya', price: 3500, label: 'Bestseller', image: '/images/abaya-11.jpg', tone: ['#282522', '#080808'] },
  { id: 'a12', category: 'abaya', name: 'Soft Flow Abaya', detail: 'Soft flowing fabric for everyday elegance', price: 2500, label: 'Elegant Style', image: '/images/abaya-12.jpg', tone: ['#282522', '#080808'] },
  { id: 'a13', category: 'abaya', name: 'Signature Embellished Abaya', detail: 'A statement black abaya with delicate detailing', price: 3400, label: 'New Arrival', image: '/images/abaya-13.jpg', tone: ['#282522', '#080808'] }
]
