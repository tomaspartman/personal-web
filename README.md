# Personal Web Portfolio

A Vite + React + TypeScript personal website with a travel-focused landing page, map section, and Netlify-enabled contact form.

## Tech stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui primitives
- React Router
- Vitest + Testing Library

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Start local development server

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – create a production build
- `npm run preview` – preview production build locally
- `npm run lint` – run ESLint
- `npm run test` – run tests once with Vitest
- `npm run test:watch` – run Vitest in watch mode

## Contact form notes (Netlify)

The contact form is configured for Netlify form handling with:

- `data-netlify="true"`
- hidden `form-name` field
- honeypot field (`bot-field`)

If you host elsewhere, replace the submit endpoint in `src/components/ContactForm.tsx` and wire it to your backend/email service.

## Project structure

- `src/pages/` – top-level route pages
- `src/components/` – reusable site sections/components
- `src/data/` – page data/content
- `src/test/` – test setup and test files

## Improvement backlog ideas

- Add end-to-end tests for navigation and form submission flow.
- Add image optimization/lazy loading strategy for hero and social preview assets.
- Add a simple CMS/content pipeline for travel entries.
- Add analytics + event tracking for CTA links.
