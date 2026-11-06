# Airtel Sync

React + Vite frontend with Supabase and Prisma configured for a Supabase PostgreSQL database.

## Setup

1. Copy `.env.example` to `.env` and fill in the values from your Supabase project's **Connect** and **API Keys** panels.
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for the browser client. Only use a publishable key here; never put a `service_role` or secret key in a `VITE_` variable.
3. Set `DATABASE_URL` to Supabase's transaction-pooler URL (port `6543`) and `DIRECT_URL` to the direct database URL (port `5432`). Prisma CLI commands use `DIRECT_URL`. URL-encode special characters in the database password.
4. Run `npm run db:migrate -- --name init` to create the `Profile` table, then `npm run prisma:generate`.

`Profile.id` is a UUID intended to match the corresponding Supabase Auth user's ID. This schema does not configure Supabase Auth triggers or Row Level Security policies; configure policies for your app's access requirements before exposing profile data.

The Supabase JavaScript client is for browser-safe Supabase API access. Prisma is configured for schema management and server-side use only; do not import Prisma Client into the Vite browser app or expose database credentials to it.

## Commands

- `npm run dev` — start Vite
- `npm run build` — build the frontend
- `npm run lint` — lint the project
- `npm run prisma:validate` — validate the Prisma schema
- `npm run prisma:generate` — generate Prisma Client
- `npm run db:migrate -- --name <migration>` — create and apply a development migration
- `npm run db:deploy` — apply existing migrations in deployment
- `npm run db:pull` — introspect the connected database

## Languages

The app includes a language selector in the top navigation and on the sign-in screen. Supported interface languages are English (default), Hindi, Bengali, Marathi, Tamil, and Telugu. The selection is saved in browser storage (`udyamsync-language`) and restored on the next visit. Translation strings and the `t()` helper live in `src/i18n/translations.ts`; untranslated copy falls back to English.
