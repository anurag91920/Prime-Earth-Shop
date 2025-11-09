# Prime Earth Shop

> **Live demo:** [https://prime-earth-shop.vercel.app/](https://prime-earth-shop.vercel.app/)

## Overview

Prime Earth Shop is a modern, responsive e-commerce storefront built with Next.js and deployed on Vercel. It demonstrates a clean product listing, product detail pages, shopping cart, and checkout flow (demo). The project is designed as a starter template for small online stores and developer experimentation.

## Features

* Responsive product listing and product detail pages
* Shopping cart with add/update/remove functionality
* Search and category filters (if available)
* Static & dynamic routes for product pages
* SEO-friendly pages and metadata
* Deployed to Vercel for instant hosting

## Demo

Visit the live site at: [https://prime-earth-shop.vercel.app/](https://prime-earth-shop.vercel.app/)

> Note: The demo may use mocked or demo data. If you plan to connect a backend or third-party API, see **Environment** below.

## Tech stack

* **Framework:** Next.js (React)
* **Styling:** Tailwind CSS / CSS Modules / Styled Components (update accordingly)
* **Deployment:** Vercel
* **Optional:** Stripe (payments), Sanity/Contentful/Shopify (CMS), MongoDB/Firebase (database)

## Folder structure (example)

```
prime-earth-shop/
├─ public/             # static assets (images, icons)
├─ src/
│  ├─ components/      # reusable components (Header, Footer, ProductCard)
│  ├─ pages/           # Next.js pages
│  ├─ styles/          # global styles
│  └─ lib/             # helper functions / api wrappers
├─ .env.local          # local environment variables
├─ package.json
└─ README.md
```

## Getting started (local development)

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/prime-earth-shop.git
cd prime-earth-shop
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Create a `.env.local` file in the project root and add any environment variables required by the app (example below).

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment variables (example)

```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
# Add other variables your app needs
```

## Build & deploy

To create a production build:

```bash
npm run build
npm run start
```

For deployment, connect the repository to Vercel and configure environment variables in the Vercel dashboard. Push to `main` or `master` to trigger automatic deployment.

## Connect a real backend (optional)

* Replace mocked data with API calls (REST or GraphQL).
* Add a database (MongoDB, PostgreSQL, Firebase) to store products, orders, and users.
* Integrate Stripe or another payment provider for real payments (test keys first).

## Contributing

Contributions are welcome! Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit changes and push
4. Open a Pull Request describing your changes

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

If you want, I can:

* Customize this README with exact tech choices (e.g., Tailwind vs Chakra UI) and commands used in your repository.
* Generate a `package.json` example, `.env.example`, or a short CONTRIBUTING guide.

Tell me which parts you want customized and I will update the README accordingly.
