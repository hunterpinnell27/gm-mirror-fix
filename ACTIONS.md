# ACTIONS — GM Mirror Fix Tracker

The single working tracker. Every open item is one line: ID, status, next action, pointer.
History lives in git commits, not here — don't let this file accumulate a journal.

## Session rituals

- **Start:** read this tracker and `CLAUDE.md`, state the top 3 open items, confirm today's
  focus with Hunter.
- **Wrap:** reconcile this tracker against reality (what is actually live/shipped), commit,
  push, and write a "NEXT SESSION STARTS HERE" line at the bottom of this file.

## Open items

| ID | Status | Item | Next action | Pointer |
|----|--------|------|-------------|---------|
| M1 | DONE | Phase 0 — Interview | — | `BUSINESS_FACTS.md` |
| M2 | DONE | Phase 1 — Foundation | — | github.com/hunterpinnell27/gm-mirror-fix |
| M3 | IN PROGRESS | Phase 2 — Website rebuild (Wix → Vercel) | Search Console verified 2026-08-07, data processing (check back a day later). Site build started in `site/` — see NEXT SESSION note below for exact continuation point. | `site/`, `site_migration/url_inventory.md` |
| M4 | NOT STARTED | Phase 3 — Payments (Stripe deposit model) | Blocked on M2 | — |
| M5 | NOT STARTED | Phase 4 — Order pipeline | Blocked on M2 | — |
| M6 | NOT STARTED | Phase 5 — Marketing engine | Blocked on M2-M4. GBP setup started once, paused — needs Chrome extension per-site permission approval on business.google.com | — |
| M7 | NOT STARTED | Phase 6 — Son handoff (Kade) | Blocked on M3-M5 | — |

## NEXT SESSION STARTS HERE

**Paused mid-build 2026-08-07, on Hunter's request (stepping away from PC).** Everything below
is drafted/staged only — nothing published, no live changes beyond the Search Console DNS record
(already approved).

Done so far in `site/` (plain HTML/CSS, real content pulled verbatim from the live Wix site,
real photos in `site/assets/`):
- `index.html`, `about-history.html`, `repairs.html`, `pricing.html`, `pictures.html`,
  `testimonials.html`, `location.html`, `contact.html`, `mirror-removal-instructions.html`
- `css/style.css` (shared styles, black/yellow theme matching the original site)
- GM trademark disclaimer in every footer (per Known Risks #1 in `CLAUDE.md`)

Still to do for Phase 2 step 3 (build the new site):
- `order.html` (Phase 3 wires real Stripe links — build the structure now, payment later)
- `faq.html`
- Per-vehicle pages: `vehicles/tahoe.html`, `suburban.html`, `yukon.html` (+ Denali), `sierra.html`,
  `silverado.html`, `escalade.html` — genuinely useful content, not doorway spam
- Per-symptom pages: `symptoms/wont-fold.html`, `clicking-noise.html`, `motor-grinding.html`
- `blog/index.html` + the one 2016 post (verbatim text wasn't recoverable via scraping — client-
  rendered; use the WebFetch summary in `site_migration/url_inventory.md` and flag for Hunter to
  supply/confirm the original wording)
- `sitemap.xml`, `robots.txt`
- 301 redirect map (old Wix URL → new URL) — not implemented live, just the plan/config, ready
  for the Vercel cutover
- Two open content decisions needing Hunter's input before publish (see `location.html` inline
  placeholder note): exact packing/shipping instructions, and whether to keep the 95%-gear/5%-
  motor split language on `repairs.html` as-is given BUSINESS_FACTS.md says most *booked jobs*
  are combo (these aren't necessarily contradictory — failure cause vs. what customers choose —
  but worth Hunter's confirmation)
- 5 of the downloaded homepage photos (`assets/photos/home-1,2,3,5,6.jpg`) are stock vehicle-badge
  photos showing GM trademarks (Escalade/Suburban/Tahoe/Denali/GMC Sierra badges) — not used in
  the new site build yet. Flag to Hunter given the GM trademark risk already noted in `CLAUDE.md`;
  probably safer to skip these on the new site.
- After pages are done: walk Hunter through connecting the GitHub repo to Vercel and deploying to
  a preview URL (still not live/cutover — that's a separate, explicit-yes step later)

**Start next session by re-reading this file and `CLAUDE.md`, then continue the page list above.**
