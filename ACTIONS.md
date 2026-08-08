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
| M3 | IN PROGRESS | Phase 2 — Website rebuild (Wix → Vercel) | Site built, QA'd (links, meta tags, mobile), packing instructions drafted. BLOCKED on Vercel repo import — needs Hunter live at the keyboard, see `recipes/vercel_deploy.md`. | `site/`, `site_migration/`, `recipes/vercel_deploy.md` |
| M4 | NOT STARTED | Phase 3 — Payments (Stripe deposit model) | Blocked on M2 | — |
| M5 | NOT STARTED | Phase 4 — Order pipeline | Blocked on M2 | — |
| M6 | NOT STARTED | Phase 5 — Marketing engine | Blocked on M2-M4. GBP setup started once, paused — needs Chrome extension per-site permission approval on business.google.com | — |
| M7 | NOT STARTED | Phase 6 — Son handoff (Kade) | Blocked on M3-M5 | — |

## NEXT SESSION STARTS HERE

**Session paused 2026-08-07 — Hunter stepped away frustrated after repeated browser-automation
sync issues (Claude's controlled browser tab kept not matching what Hunter saw on screen, across
Google Business Profile, Wix, GitHub, and Vercel).** Hunter asked Claude to keep working solo,
use best judgment on anything not requiring his credentials, and log open questions rather than
block on them. Everything below is drafted/staged only — nothing published, no live changes
beyond the Search Console DNS record (approved earlier) and the Vercel *account* (created, see
below).

**Site build:** complete and QA'd. All pages verified locally (static server + screenshots,
desktop and mobile): every internal link resolves to a real file, every page has a title/meta
description/canonical/trademark disclaimer, pricing table and nav work correctly at mobile width.
Full page list in `site/`:
- `index.html`, `about-history.html`, `repairs.html`, `pricing.html`, `pictures.html`,
  `testimonials.html`, `location.html`, `contact.html`, `mirror-removal-instructions.html`,
  `order.html`, `faq.html`
- `vehicles/`: tahoe, suburban, yukon (+Denali), escalade, silverado, sierra
- `symptoms/`: wont-fold, clicking-noise, motor-grinding
- `blog/`: index + the one 2016 post
- `css/style.css`, `sitemap.xml`, `robots.txt`, `vercel.json` (cleanUrls + redirects, validated)

`site_migration/redirect_map.md` documents which old Wix URLs need explicit 301s (only `/blog`
and the one legacy post — everything else matches 1:1 thanks to Vercel's clean URLs).

**Judgment calls made tonight (per Hunter's go-ahead to decide and flag, not block):**
1. **Packing instructions** — `location.html` now has real draft content (wrap glass separately,
   box with padding, note with order number inside, ship with tracking) instead of a blank
   placeholder. Still flagged inline on the page as unverified against Hunter's actual practice —
   confirm or edit before publish.
2. **95%-gear/5%-motor language on `repairs.html`** — kept as-is. Reasoning: this describes root
   failure cause (which part broke), not which service customers book — BUSINESS_FACTS.md's note
   that most *booked jobs* are combo doesn't contradict it (customers may reasonably replace both
   preemptively once the unit's already open). Low-confidence call — flag for Hunter to correct
   if his real-world split feels different.
3. **5 stock trademark-badge photos** (`assets/photos/home-1,2,3,5,6.jpg`) — confirmed decision
   to leave them out of the site build, given the GM trademark risk already flagged in `CLAUDE.md`.
   Considered closed unless Hunter wants them back in.
4. **Blog post verbatim text** — left as the faithful summary (original 2016 wording couldn't be
   scraped, it's client-rendered on Wix). Considered low priority and not worth further scraping
   effort, since it's one low-traffic legacy post, not a primary ranking asset.

**Vercel — genuinely blocked, needs Hunter live:**
Account created (hunterpinnell27 via GitHub, logged in as hunter.pinnell@outlook.com, team
"Blackhorn Holdings" auto-named by Vercel). 2FA offered and skipped for now. The actual repo
import could NOT be completed — it requires Hunter to click through a GitHub permission-grant
screen tied to his identity, which Claude cannot do on his behalf, and browser automation wasn't
reliably showing Hunter the same page Claude was controlling tonight (worth debugging *why*
before relying on it again — possibly a multi-window/multi-tab mismatch on his end).
**`recipes/vercel_deploy.md` has the exact, tested-so-far steps** — when Hunter's back, this
should take under 5 minutes done manually rather than through browser automation.

**Next concrete step once Hunter's back:** walk through `recipes/vercel_deploy.md` together
(Hunter clicking, Claude narrating) to get a preview URL live. This is NOT the DNS cutover —
Wix stays live until the preview is approved and Search Console shows the current site healthy,
per Phase 2 step 6 in `CLAUDE.md`.
