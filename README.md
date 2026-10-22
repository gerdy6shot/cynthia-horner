# Cynthia Horner — Personal Website

Presentation-oriented editorial personal website for Cynthia Horner, built on the existing **React + Vite + TypeScript** project. This site is distinct from Right On! Magazine.

## Pages
Home (`/`), About (`/about`), Career & Legacy (`/career`), Media (`/media`), Bookings (`/bookings`), Contact (`/contact`). Unknown routes render an intentional 404. Navigation uses the history API; Cloudflare Pages' `public/_redirects` provides SPA fallback for direct requests and refresh.

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
npm run build
```

No committed lockfile was found in the initial audit. Generate and commit `package-lock.json` with a successful npm install in an authorized connected development environment. Do not invent lockfile contents.

## Editing
- `src/content.ts`: Typed biographies, dates, publications, media, sources, verification state, approval state and social/contact settings.
- `src/App.tsx`: Page templates, navigation and preview-only form UI.
- `src/style.css`: Layout and responsive styling.
- Replace `Portrait` placeholders with appropriately licensed Cynthia imagery after approval; do not hotlink unlicensed pictures.
- Update SEO/social metadata after a production domain is approved. Do not guess a canonical URL.

## Contact / bookings
Forms intentionally **do not submit, email or store anything**. They show a conspicuous preview-only notice before and after submitting. Browser built-in validation covers required fields and email syntax. Do not enable real submissions without an authorized server endpoint, allowlist validation, anti-spam/rate limiting, RLS and a reviewed privacy notice.

## Supabase
Project reference: `mwjmqydxanecnongfguj`. No database operations have been applied or verified. Access attempts returned permission denied in the previous session. The current website works without Supabase.

Only a Supabase publishable key should be supplied in `VITE_SUPABASE_PUBLISHABLE_KEY`; never expose service-role or secret keys in browser code. Inspect existing schema before creating tables or policies. Verify non-admin users cannot read private inquiries. An authorization-safe admin requires verified identity AND database/server-enforced permissions, not merely a hidden route.

## Cloudflare Pages
Build command: `npm run build`; build output: `dist`. Do not deploy without approval. Production domain is unspecified.

## Verification status
Source files and GitHub commits have been checked. Production build, TypeScript compiler, installation, keyboard navigation, mobile browser inspection, end-to-end form tests and deployment **have not yet been executed or verified**. No lint or test scripts are defined in package.json.

## Pre-publication approvals
1. Confirm current executive titles and exact NYABJ term.
2. Approve biography, awards, career dates and original publication attribution.
3. Provide approved portrait and rights-cleared archive images.
4. Approve contact/booking channels and communication expectations.
5. Verify media links and update timely news content.
6. Configure and test inquiry storage/admin only once project access is available.

## Security and privacy
No inquiry PII is intentionally stored locally or sent to a server by this prototype. The repository is currently public. Never commit .env.local or secret credentials.
