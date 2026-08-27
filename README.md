# baysics — Restaurant Training + Operations Demo

**Train better. Waste less. Know what makes money.**

baysics is a frontend concept connecting restaurant training, menu engineering, and waste tracking. It combines a story-led public website with employee learning and manager operations demos. It is not a production restaurant-management system.

## Features

- Editorial marketing homepage with sourced industry research, readable citations, and an ROI scenario calculator
- No-account demo login with direct employee and manager entry points
- Employee pathway with seven modules, lesson content, video interaction, bilingual terminology, and progress tracking
- Working five-question quiz with immediate feedback, pass result, retake flow, and saved score
- Searchable recipe guides with printable detail view and clear placeholder safety labeling
- Interactive opening, safety, station, closing, and storage checklists
- Earned and locked certificates with a printable certificate view
- Unified manager overview spanning people, training efficiency, menu, and waste
- Menu engineering with a four-quadrant matrix, sortable table, transparent calculations, and item details
- Waste logging with local persistence, cost calculations, trends, ranked ingredients, and training links
- Public-menu knowledge module and quiz connected to station training
- Filterable employee progress table with detail drawer, notes, quiz scores, checklists, and sign-offs
- Manager content library with local duplicate actions and a convincing lesson editor drawer
- Persistent prototype role switcher and reset control
- Responsive mobile drawers, accessible controls, focus styles, and reduced-motion support

## Tech stack

- Next.js App Router compatible through the bundled vinext runtime
- React 19 and TypeScript
- Tailwind CSS 4 plus project design tokens
- Lucide React icons
- Recharts for focused research and waste visualizations
- Local typed mock data and browser local storage

## Local setup

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production validation uses `npm run build`; the built app can be started with `npm run start`.

## Deployment

The project is configured for Cloudflare Workers. Authenticate once with `npx wrangler login`, then publish with:

```bash
npm run deploy
```

Cloudflare provides a `baysics.<account>.workers.dev` address. A custom domain such as `demo.baysics.ca` can be attached from the Worker's **Domains & Routes** settings.

## Project structure

```text
app/
  components/
    dashboard/       Shared employee/manager application shell
    manager/         Overview, team, content, menu engineering, and waste
    marketing/       Public homepage and login
    quiz/            Working quiz experience
    shared/          Prototype controls
    training/        Modules, lessons, recipes, checklists, certificates
  config/brand.ts    Product name, restaurant, palette, dates, image URLs
  data/              Public sources, fictional operations data, and LMS content
  lib/storage.ts     Local-storage keys and helpers
  types/index.ts     Shared product types
  employee/          Employee routes
  manager/           Manager routes
public/og.png        Generated social preview card
```

## Available routes

- `/` — public marketing website
- `/login` and `/demo` — demo selection
- `/employee` — employee dashboard
- `/employee/training` — training pathway
- `/employee/training/[moduleId]` — interactive lesson page
- `/employee/training/fryer-station/quiz` — working quiz
- `/employee/menu-knowledge` — public menu knowledge and station quiz
- `/employee/recipes` — searchable recipe guides
- `/employee/checklists` — persistent checklists
- `/employee/certificates` — earned and locked certificates
- `/manager` — manager overview
- `/manager/employees` — employee progress and details
- `/manager/content` — training content library and editor
- `/manager/menu-engineering` — profitability matrix, analytics table, and item drawer
- `/manager/waste` — persistent waste entry and cost analytics

## Demo roles

- **Employee:** Bhavik, Line Cook
- **Manager:** Martin, Training Manager
- **Restaurant:** Casa Mercado, a fictional demonstration restaurant

No authentication is performed and no form data is transmitted.

## Local storage

The prototype stores completed lessons, quiz scores, checklist checks, waste logs, and demo preferences in the current browser. Keys are defined in `app/lib/storage.ts`. The persistent Demo control includes **Reset**, which removes all baysics demo keys without touching unrelated browser data.

## Data integrity

Public Alimentaria Mexicana menu names, categories, descriptions, and listed prices are stored as a static typed development snapshot in `app/data/alimentaria-menu.ts`, with the source URL and verification date. No runtime scraping occurs.

Sales, food costs, ingredient costs, quantities, waste, labour, employee analytics, margins, and scenario savings are fictional illustrative demo data. They must not be interpreted as Alimentaria Mexicana operating information. Industry statistics use readable citations to Homebase and Toast. Recipe and SOP examples remain placeholders.

## Replacing branding

Edit `app/config/brand.ts` to replace the product name, tagline, restaurant name, restaurant code, demo shift, contact placeholder, palette values, and all image URLs. Matching CSS tokens live at the top of `app/globals.css`; update both when changing the palette so Tailwind-era utility and custom interface styles remain aligned.

## Replacing images

All remote restaurant, food, ingredient, and avatar URLs are centralized under `brand.images` in `app/config/brand.ts`. Replace those values with approved royalty-free or restaurant-owned images. Preserve meaningful `alt` text in the consuming components when the subject changes.

## Future production requirements

A production version would require:

- Authentication and secure account recovery
- Database-backed content and progress records
- Managed video hosting and transcoding
- Role-based permissions
- Restaurant tenancy and location isolation
- Employee invitations and onboarding lifecycle
- Deeper analytics and exportable reporting
- Rich content authoring and version history
- Email, push, or in-app notifications
- Full translation and localization workflows
- POS, inventory, payroll, scheduling, supplier-invoice, accounting, digital-scale, and employee-system integrations
- Privacy, retention, consent, audit logging, and data-security controls
- Approved restaurant-specific food-safety content and legal review

## Demo limitations

- Data is device-local and not shared between browsers or employees.
- Login fields, manager edits, notes, archives, and invitations are presentation-only.
- Placeholder recipe, temperature, timing, and safety information must never be used as live operating procedure.
- Remote Unsplash imagery requires an internet connection and should be replaced with approved production assets.
