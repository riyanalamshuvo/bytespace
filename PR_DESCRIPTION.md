## ByteSpace: landing page and bonus pages

### What's included
- Landing page (required), pixel-matched to the Figma design
- Bonus: `/login` and `/signup` (UI + client-side validation, no backend)
- Extra pages from the design: `/courses`, `/courses/[slug]`, `/creators/[slug]`, custom 404
- Reusable components (`CourseCard`, `FilterBar`, `Navbar`, `Footer`, ...) and design tokens in Tailwind config

### How to test
1. `npm install && npm run dev`
2. Visit `/`, `/courses`, `/courses/build-digital-asset`, `/creators/purepearl-studio`, `/login`, `/signup`, and `/anything-else` (404)

### Notes
- Sample data only; forms do not submit to a server
- Live site: <add Vercel URL>
