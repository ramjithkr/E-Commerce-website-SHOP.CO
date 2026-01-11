server/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   │   └── cloudinary.js
│   │
│   ├── api/
│   │   └── v1/                      # 👈 API VERSION
│   │       ├── controllers/
│   │       │   ├── auth.controller.js
│   │       │   ├── user.controller.js
│   │       │   ├── product.controller.js
│   │       │   ├── category.controller.js
│   │       │   ├── cart.controller.js
│   │       │   └── order.controller.js
│   │       │
│   │       ├── routes/
│   │       │   ├── auth.routes.js
│   │       │   ├── user.routes.js
│   │       │   ├── product.routes.js
│   │       │   ├── category.routes.js
│   │       │   ├── cart.routes.js
│   │       │   └── order.routes.js
│   │       │
│   │       ├── services/
│   │       │   ├── auth.service.js
│   │       │   ├── product.service.js
│   │       │   ├── cart.service.js
│   │       │   └── order.service.js
│   │       │
│   │       └── index.js              # v1 route entry
│   │
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Product.model.js
│   │   ├── Category.model.js
│   │   ├── Cart.model.js
│   │   └── Order.model.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── upload.middleware.js
│   │
│   ├── utils/
│   │   ├── apiError.js
│   │   ├── apiResponse.js
│   │   └── generateToken.js
│   │
│   ├── app.js
│   └── index.js
│
├── .env
├── package.json
└── README.md
