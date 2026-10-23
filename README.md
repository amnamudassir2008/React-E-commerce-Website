# Mudassir E-Commerce — Ecommerce Website

Responsive React + Vite + Tailwind CSS storefront for Mudassir E-Commerce.

## Run the website on localhost (Windows)

1. Extract the ZIP file.
2. Open the extracted **mudassir-e-commerce** folder in VS Code (the folder that contains `package.json`).
3. In VS Code, select **Terminal → New Terminal**.
4. Run these commands one at a time:

   ```bash
   npm install
   npm run dev
   ```

5. Open the localhost address Vite prints in the terminal (usually `http://localhost:5173/`).

**Important:** Do not open `index.html` by double-clicking it. Keep the terminal running while using the website. If another project is using port 5173, Vite may show a different port such as 5174; open the exact address it prints.

## Build for deployment

```bash
npm run build
```

Product details and images are in `src/data/products.js` and `public/images/`.
