# MUN IIT Indore — Official Website

Official website for MUN IIT Indore 10.0, built with **React + Vite + Tailwind CSS**.
## Tech Stack
- React 19 (with React Router for page routing)
- Vite 6 (fast dev server + production builds)
- Tailwind CSS v4
- Framer Motion / GSAP for animations


## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project Structure

```
src/
├── App.jsx                  # Router + lazy-loaded public pages
├── main.jsx                 # React entry point
├── index.css                # Global styles (Tailwind theme + custom CSS)
│
├── components/
│   ├── layout/              # Site chrome: Navbar, Footer, Layout
│   ├── home/                # Home-page sections (hero, timeline, sponsors, etc.)
│   ├── sections/            # Shared sections/cards used across pages
│   ├── common/              # Reusable primitives (PageHeader, Spinner, particles)
│   ├── ui/                  # Low-level animated UI atoms
│   
│
├── pages/                   # One file per route (Home, Committees, Secretariat, ...)
├── data/                    # Static content data (committees, secretariat)
└── assets/                  # Bundled images (gallery, etc.)
```
