# Ananta — A Dining House of Indian Heritage

**A premium, cinematic multi-page Indian restaurant website** that blends traditional Indian art, architecture, and hospitality with modern luxury web design.

> *"A Taste of India, Told Through Fire & Spice."*

Ananta is a fictional premium Indian dining brand, imagined as a portfolio-grade demonstration of interactive UI/UX, component architecture, and scroll-driven storytelling — built to feel like a real brand you could find in a luxury hotel or metropolitan dining district, not a generic restaurant template.

---

## ✨ Features

- **Cinematic hero** with staggered text reveals, parallax imagery, and animated decorative motifs
- **Scroll-triggered storytelling** throughout every page using GSAP + ScrollTrigger
- **Interactive menu** with live category and vegetarian/non-vegetarian filtering across 22 dishes
- **Regional cuisine journey** — 8 Indian regions (Punjab, Rajasthan, Bengal, Kerala, Tamil Nadu, Awadh, Hyderabad, Gujarat), each with its own story, ingredients, dishes, and technique
- **Masonry gallery** with category filters and a lightbox viewer
- **Reservation system** with full client-side validation and realistic success/error states
- **Contact page** with validated form, FAQ accordion, and map placeholder
- **Custom SVG ornament library** — hand-built jali lattice, mandala, paisley, arch, and diya motifs (no generic stock icons)
- **Smooth page transitions** and a fully responsive, mobile-first layout
- Built with accessibility in mind: semantic HTML, keyboard navigation, `prefers-reduced-motion` support, ARIA labelling on interactive elements

---

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger |
| Fonts | Fraunces (display), Manrope (body), Cormorant Garamond (accent) |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Developer-Aisurya/ananta-restaurant-website
cd ananta-restaurant-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

### Production build

```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

---

## 📁 Project Structure

```
src/
├── components/     Reusable UI building blocks
│   ├── Navbar.jsx, MobileMenu.jsx, Footer.jsx, Layout.jsx
│   ├── Hero.jsx, SectionHeading.jsx, ScrollReveal.jsx
│   ├── DishCard.jsx, MenuFilter.jsx, CuisineCard.jsx
│   ├── Gallery.jsx, TestimonialCard.jsx, Timeline.jsx
│   ├── ReservationForm.jsx, ContactForm.jsx, FaqAccordion.jsx
│   ├── PageTransition.jsx, BackToTop.jsx
│   └── DecorativePattern.jsx   (custom SVG ornament library)
├── pages/          One file per route
│   ├── Home.jsx, About.jsx, Menu.jsx
│   ├── OurCuisine.jsx, GalleryPage.jsx
│   ├── Reservations.jsx, Contact.jsx, NotFound.jsx
├── data/           Sample restaurant content
│   ├── dishes.js, regions.js, content.js
├── hooks/
│   └── useGsap.js  GSAP context + ScrollTrigger helper
└── styles/
    └── index.css   Tailwind entry + custom global styles
```

---

## 🗺 Pages

| Route | Description |
|---|---|
| `/` | Home — hero, brand statement, featured dishes, tasting experience, chef section, gallery preview, testimonials, reservation CTA |
| `/about` | Origin story, philosophy, hospitality principles, restaurant timeline |
| `/menu` | Interactive filterable menu |
| `/cuisine` | Regional cuisine storytelling journey |
| `/gallery` | Filterable masonry gallery with lightbox |
| `/reservations` | Reservation form with validation |
| `/contact` | Contact form, details, and FAQ |

---

## 🖼 Adding Your Own Images

- **Dish, region, and gallery photos** live in `src/data/dishes.js`, `src/data/regions.js`, and `src/data/content.js` — update the `image` field for each entry. Simplest approach: drop files in `public/images/` and reference them as `"/images/your-file.jpg"`.
- **Hero, chef, and about-page photos** are set directly inside their components (`Hero.jsx`, `ChefSection.jsx`, `About.jsx`, `Reservations.jsx`) — either swap the URL directly or `import` a file from `src/assets/` for Vite-optimized delivery.

---

## ⚠️ Notes

- All placeholder photography is sourced from Unsplash. Replace with licensed or original photography before using this for a real client.
- The reservation and contact forms are **frontend-only** — they simulate a network request and display success/error states but do not send data anywhere. Connect them to a backend or a service like Formspree/Resend for production use.

---

## 📄 License

This project is available for personal and portfolio use. Please replace all placeholder imagery and brand content before using it commercially.