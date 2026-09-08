# VYERA - Technical Roadmap

## Phase 1 - Base Frontend (Vanilla JS, HTML5, CSS3)
- [X] Set up directory structure (`/public`, `/src`, `/styles`).
- [X] Create `index.html` with semantic markup and basic SEO for VYERA Research.
- [X] Build the styling system (`styles.css`):
    - Native CSS variables (background `#0a0a0a`, neon accents, typography).
    - Grid and Flexbox for the peptide catalog (no frameworks).
- [X] Design and implement "Low-Key Lighting" UI (Hero, Catalog, Footer) matching the strict visual reference: thebiopeptide.com.
- [X] Create HTML component for the lead capture form (Name, Peptide, Quantity, Email).
- [X] Deploy static assets to Vercel.

## Phase 2 - Backend & Supabase (Node.js, Express)
- [X] Initialize Node project (`npm init -y`) and install `express`, `cors`, `dotenv`, and `@supabase/supabase-js`.
- [X] Set up Supabase project: Create `leads` table (id, name, email, order, date).
- [X] Configure `.env` with Supabase credentials.
- [X] Build Express server (`server.js`) with `POST /api/leads` endpoint.
- [X] Implement data insertion logic to Supabase inside the endpoint.
- [X] Deploy API on Render (Free Web Service).

## Phase 3 - WhatsApp Redirection & Final Integration
- [X] Create `app.js` in frontend to intercept form `submit` event.
- [X] Implement `fetch` to the Render endpoint (sending JSON payload).
- [X] Program logic to build WhatsApp API URL (`https://wa.me/NUMBER?text=...`).
- [X] Execute `window.location.href` to WhatsApp immediately upon receiving a `200 OK` from Render.
- [X] Perform E2E tests (form -> database -> redirect).