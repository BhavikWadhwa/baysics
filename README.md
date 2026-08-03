# baysics — Restaurant Training Demo

**Learn before the rush.**

baysics is a polished frontend concept for helping restaurant employees learn essential information before practical shifts. It combines a story-led public website with employee training and manager oversight demos. The content is fictional demonstration material and is not intended as real food-safety or operating instruction.

## Features

- Editorial marketing homepage with hospitality photography, product story, pilot form, and embedded app preview
- No-account demo login with direct employee and manager entry points
- Employee pathway with seven modules, lesson content, video interaction, bilingual terminology, and progress tracking
- Working five-question quiz with immediate feedback, pass result, retake flow, and saved score
- Searchable recipe guides with printable detail view and clear placeholder safety labeling
- Interactive opening, safety, station, closing, and storage checklists
- Earned and locked certificates with a printable certificate view
- Manager overview with focused completion chart, activity, readiness, and attention states
- Filterable employee progress table with detail drawer, notes, quiz scores, checklists, and sign-offs
- Manager content library with local duplicate actions and a convincing lesson editor drawer
- Persistent prototype role switcher and reset control
- Responsive mobile drawers, accessible controls, focus styles, and reduced-motion support

## Tech stack

- Next.js App Router compatible through the bundled vinext runtime
- React 19 and TypeScript
- Tailwind CSS 4 plus project design tokens
- Lucide React icons
- Recharts for one focused manager completion chart
- Local typed mock data and browser local storage

## Local setup

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production validation uses `npm run build`; the built app can be started with `npm run start`.

## Project structure

```text
app/
  components/
    dashboard/       Shared employee/manager application shell
    manager/         Manager overview, employees, and content library
    marketing/       Public homepage and login
    quiz/            Working quiz experience
    shared/          Prototype controls
    training/        Modules, lessons, recipes, checklists, certificates
  config/brand.ts    Product name, restaurant, palette, dates, image URLs
  data/mock-data.ts  Typed restaurant demo content
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
- `/employee/recipes` — searchable recipe guides
- `/employee/checklists` — persistent checklists
- `/employee/certificates` — earned and locked certificates
- `/manager` — manager overview
- `/manager/employees` — employee progress and details
- `/manager/content` — training content library and editor

## Demo roles

- **Employee:** Mateo Williams, Line Cook
- **Manager:** Sofia Rivera, Training Manager
- **Restaurant:** Casa Mercado, a fictional demonstration restaurant

No authentication is performed and no form data is transmitted.

## Local storage

The prototype stores completed lessons, quiz scores, checklist checks, and demo preferences in the current browser. Keys are defined in `app/lib/storage.ts`. The persistent Demo control includes **Reset**, which removes all baysics demo keys without touching unrelated browser data.

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
- Privacy, retention, consent, audit logging, and data-security controls
- Approved restaurant-specific food-safety content and legal review

## Demo limitations

- Data is device-local and not shared between browsers or employees.
- Login fields, manager edits, notes, archives, and invitations are presentation-only.
- Placeholder recipe, temperature, timing, and safety information must never be used as live operating procedure.
- Remote Unsplash imagery requires an internet connection and should be replaced with approved production assets.
