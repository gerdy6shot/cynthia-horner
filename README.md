# Cynthia Horner — Personal Website

Editorial personal-brand website foundation for Cynthia Horner. Built with React, Vite and TypeScript, intended for Cloudflare Pages and an existing Supabase project.

## Supabase
Project reference: `mwjmqydxanecnongfguj`.

Only put the project's **publishable** key in `VITE_SUPABASE_PUBLISHABLE_KEY`. Never commit secret or service-role keys. Supabase database migration is NOT applied; confirm access and review schema before any production changes.

## Development
```bash
npm install
cp .env.example .env.local
npm run dev
npm run build
```

## Cloudflare Pages
Build command: `npm run build`
Output directory: `dist`

## Status
This repository contains a minimal navigable visual foundation, not the full editorial website or booking backend. The fuller starter ZIP was prepared separately and is **not yet committed here**. No Supabase schema, forms, administrator permissions, or live deployment should be assumed operational. All displayed editorial content requires Cynthia's approval.

## Security
Enable RLS for all exposed tables; protect inquiry records and administrative writes. Rate-limit public form submissions. Avoid unapproved licensed assets.
