# VYERA - Technical Roadmap

## Phase 1 - Base Frontend (Vanilla JS, HTML5, CSS3)
- [ ] Set up directory structure (`/public`, `/src`, `/styles`).
- [ ] Create `index.html` with semantic markup and basic SEO for VYERA Research.
- [ ] Build the styling system (`styles.css`):
    - Native CSS variables (background `#0a0a0a`, neon accents, typography).
    - Grid and Flexbox for the peptide catalog (no frameworks).
- [ ] Design and implement "Low-Key Lighting" UI (Hero, Catalog, Footer) matching the strict visual reference: thebiopeptide.com.
- [ ] Create HTML component for the lead capture form (Name, Peptide, Quantity, Email).
- [ ] Deploy static assets to Vercel.

## Phase 2 - Backend & Supabase (Node.js, Express)
- [ ] Initialize Node project (`npm init -y`) and install `express`, `cors`, `dotenv`, and `@supabase/supabase-js`.
- [ ] Set up Supabase project: Create `leads` table (id, name, email, order, date).
- [ ] Configure `.env` with Supabase credentials.
- [ ] Build Express server (`server.js`) with `POST /api/leads` endpoint.
- [ ] Implement data insertion logic to Supabase inside the endpoint.
- [ ] Deploy API on Render (Free Web Service).

## Phase 3 - WhatsApp Redirection & Final Integration
- [ ] Create `app.js` in frontend to intercept form `submit` event.
- [ ] Implement `fetch` to the Render endpoint (sending JSON payload).
- [ ] Program logic to build WhatsApp API URL (`https://wa.me/NUMBER?text=...`).
- [ ] Execute `window.location.href` to WhatsApp immediately upon receiving a `200 OK` from Render.
- [ ] Perform E2E tests (form -> database -> redirect).