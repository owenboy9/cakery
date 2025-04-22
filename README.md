
simple website for a cupcake and wedding cake shop.

cakery/
│
├── public/                # Static public assets
│   └── favicon.svg / etc
│
├── src/
│   ├── assets/            # Images and static files (cake pics, icons, etc.)
│   │   ├── cakes/
|   |   |    |_8 different pics
|   |   |    
│   │   ├── cupcakes/
|   |   |    |_8 different pics
|   |   | 
│   │   └── icons/         # e.g. social media icons if not using libraries
│
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│
│   ├── pages/             # Route components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   └── Contact.jsx
│
│   ├── data/              # Optional: Static product data (JS objects or JSON)
│   │   └── products.json
│
│   ├── styles/            # Optional: centralize CSS or SCSS files
│   │   ├── App.css
│   │   └── headerAndFooter.css
│   │   └── productCard.css
│
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Vite entry
│   └── index.css          # Global styles / Tailwind / Reset
│
├── index.html             # Entry point
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── eslint.config.js
└── vite.config.js
