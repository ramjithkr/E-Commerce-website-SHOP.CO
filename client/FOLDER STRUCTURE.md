src/
├── assets/
│   ├── images/              # banners, product images, logos
│   ├── icons/               # svg icons
│   └── fonts/
│
├── components/              # reusable components
│   ├── ui/                  # small UI atoms (NO lazy loading)
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │   ├── Rating.jsx
│   │   └── Loader.jsx
│   │
│   ├── layout/              # common layout
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MobileMenu.jsx
│   │
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductGallery.jsx
│   │   ├── ProductInfo.jsx
│   │   ├── ProductReviews.jsx
│   │   └── RelatedProducts.jsx
│   │
│   ├── cart/
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   └── CartCoupon.jsx
│   │
│   ├── filters/
│   │   ├── CategoryFilter.jsx
│   │   ├── PriceFilter.jsx
│   │   ├── ColorFilter.jsx
│   │   └── SizeFilter.jsx
│   │
│   └── home/
│       ├── Hero.jsx
│       ├── NewArrivals.jsx
│       ├── TopSelling.jsx
│       ├── BrowseByStyle.jsx
│       └── Testimonials.jsx
│
├── pages/                   # LAZY LOADED PAGES
│   ├── Home/
│   │   └── Home.jsx
│   │
│   ├── Category/
│   │   └── Category.jsx
│   │
│   ├── ProductDetails/
│   │   └── ProductDetails.jsx
│   │
│   ├── Cart/
│   │   └── Cart.jsx
│   │
│   └── NotFound/
│       └── NotFound.jsx
│
├── routes/
│   └── AppRoutes.jsx         # lazy loading happens here
│
├── services/
│   ├── api.js                # axios config
│   ├── product.service.js
│   └── cart.service.js
│
├── hooks/
│   ├── useProducts.js
│   └── useCart.js
│
├── context/                  # or Redux/Zustand
│   ├── CartContext.jsx
│   └── AuthContext.jsx
│
├── utils/
│   ├── formatPrice.js
│   └── constants.js
│
├── styles/
│   └── globals.css           # or Tailwind base
│
├── App.jsx
└── main.jsx
