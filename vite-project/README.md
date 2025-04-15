
simple website for a cupcake and wedding cake shop.

cakery/
│
├── public/                # Static public assets
│   └── favicon.svg / etc
│
├── src/
│   ├── assets/            # Images and static files (cake pics, icons, etc.)
│   │   ├── cakes/
│   │   ├── cupcakes/
│   │   └── icons/         # e.g. social media icons if not using libraries
│
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── Navigation.jsx (optional if separated from Header)
│
│   ├── pages/             # Route components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products/
│   │   │   ├── Cupcakes.jsx
│   │   │   ├── WeddingCakes.jsx
│   │   │   └── index.jsx  # Optionally render both above in tabs or sections
│   │   └── Contact.jsx
│
│   ├── data/              # Optional: Static product data (JS objects or JSON)
│   │   └── products.js
│
│   ├── styles/            # Optional: centralize CSS or SCSS files
│   │   ├── App.css
│   │   └── components.css
│
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Vite entry
│   └── index.css          # Global styles / Tailwind / Reset
│
├── index.html             # Entry point
├── package.json
└── vite.config.js
