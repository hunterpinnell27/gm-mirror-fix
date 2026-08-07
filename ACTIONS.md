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
| M3 | IN PROGRESS | Phase 2 — Website rebuild (Wix → Vercel) | All pages built and locally verified in `site/`. Next: walk Hunter through connecting the repo to Vercel for a preview deploy (not live/cutover yet — separate explicit-yes step). | `site/`, `site_migration/` |
| M4 | NOT STARTED | Phase 3 — Payments (Stripe deposit model) | Blocked on M2 | — |
| M5 | NOT STARTED | Phase 4 — Order pipeline | Blocked on M2 | — |
| M6 | NOT STARTED | Phase 5 — Marketing engine | Blocked on M2-M4. GBP setup started once, paused — needs Chrome extension per-site permission approval on business.google.com | — |
| M7 | NOT STARTED | Phase 6 — Son handoff (Kade) | Blocked on M3-M5 | — |

## NEXT SESSION STARTS HERE

**Site build complete as of 2026-08-07.** All pages drafted/staged only — nothing published, no
live changes beyond the Search Console DNS record (already approved). Locally verified with a
static server + browser screenshots: homepage, pricing, pictures (real photos load correctly),
removal instructions, and a vehicle page all render correctly with working nav and internal links.

Full page list in `site/`:
- `index.html`, `about-history.html`, `repairs.html`, `pricing.html`, `pictures.html`,
  `testimonials.html`, `location.html`, `contact.html`, `mirror-removal-instructions.html`,
  `order.html`, `faq.html`
- `vehicles/`: tahoe, suburban, yukon (+Denali), escalade, silverado, sierra
- `symptoms/`: wont-fold, clicking-noise, motor-grinding
- `blog/`: index + the one 2016 post
- `css/style.css`, `sitemap.xml`, `robots.txt`, `vercel.json` (cleanUrls + redirects)
- GM trademark disclaimer in every page footer (per Known Risks #1 in `CLAUDE.md`)

`site_migration/redirect_map.md` documents which old Wix URLs need explicit 301s (only `/blog`
and the one legacy post — everything else matches 1:1 thanks to Vercel's clean URLs).

**Open items needing Hunter's input before this goes live:**
1. `location.html` has a placeholder flag — exact packing/shipping instructions aren't written
   yet (box size, wrapping glass, etc.). Don't publish until filled in.
2. `blog/gm-trucks-mirror-fix.html` has a placeholder flag — the original 2016 post's exact
   wording couldn't be scraped (client-rendered on Wix); current text is a faithful summary, not
   verbatim. Low priority (not a major ranking asset) but flagged.
3. 5 of the downloaded homepage photos (`assets/photos/home-1,2,3,5,6.jpg`) are stock photos
   showing GM trademarked badges (Escalade/Suburban/Tahoe/Denali/GMC Sierra) — intentionally NOT
   used in the new site build, given the GM trademark risk already noted in `CLAUDE.md`. Confirm
   Hunter's OK with leaving them out before considering this closed.
4. `repairs.html` keeps the original site's "95% gear / 5% motor" language — worth Hunter
   confirming this still matches his real experience (BUSINESS_FACTS.md notes most *booked jobs*
   are combo, which isn't necessarily a contradiction — failure cause vs. customer choice — but
   worth a explicit yes before publishing).

**Next concrete step:** walk Hunter through connecting the GitHub repo to a free Vercel account
and deploying to a preview URL. This is NOT the live cutover — DNS stays on Wix until the preview
is approved and Search Console shows the current site healthy, per Phase 2 step 6 in `CLAUDE.md`.
Get explicit yes before any Vercel account creation or deploy.
