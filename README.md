# ByteSpace

Course marketplace front end built from the ByteSpace Figma design.
Stack: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS.

## Run locally
    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build

## Pages
| Route | Description |
|---|---|
| `/` | Landing page (required) |
| `/courses` | Search and browse courses (live search, sort, pagination) |
| `/courses/[slug]` | Course details with About / Lesson / Reviews tabs |
| `/creators/[slug]` | Creator profile |
| `/signup`, `/login` | Bonus: auth pages with client-side validation (no backend) |
| any other URL | Custom 404 page |

## Structure
- `app/` routes and layouts
- `components/` reusable UI: `Navbar`, `Footer`, `CourseCard`, `FilterBar`, `AuthShell`, `AuthForm`, `CourseTabs`, ...
- `tailwind.config.ts` design tokens (colors, fonts, radius); `app/globals.css` shared classes (`btn`, `h2`, `grid-bg`, `glow`)

## Notes for reviewers
- Course data is sample data; there is no backend yet.
- Images not exported from Figma are shown as neutral placeholder blocks (`Placeholder` in `components/ui.tsx`).
- Filter / Level / Category buttons are visual only; search, sort, chips, pagination, tabs and review-rating filter work.
