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
| M3 | IN PROGRESS | Phase 2 — Website rebuild (Wix → Vercel) | **DNS cutover done 2026-08-10.** gmmirrorfix.com and www.gmmirrorfix.com both point to Vercel, SSL valid, apex 308-redirects to www. Sitemap submitted in Search Console (status "Couldn't fetch" initially — normal, Google hasn't crawled it yet). Priority indexing requested for homepage + pricing. **Wix stays active ~2 weeks** as safety net — check Search Console Performance + Sitemaps status in a few days, watch for impression drops before canceling Wix. | `site/`, live: gmmirrorfix.com |
| M4 | DONE | Phase 3 — Payments (Stripe, pay-on-arrival model) | Stripe account live 2026-08-13, sole proprietorship. 4 Payment Links created and verified (correct pricing + $3 shipping on DIY gear). DIY gear links wired live into `/order.html`. Service links saved in `templates/stripe_payment_links.md` for manual send once a mirror's confirmed repairable. Real end-to-end test transaction ($45 single gear) completed and refunded successfully 2026-08-13 — money flow confirmed working both directions. | `site/order.html`, `templates/stripe_payment_links.md` |
| M5 | NOT STARTED | Phase 4 — Order pipeline | Blocked on M2 | — |
| M6 | IN PROGRESS | Phase 5 — Marketing engine | GBP claimed 2026-08-08. Video verification submitted 2026-08-15, under Google review. **YouTube channel created 2026-08-16**: renamed from personal default to "GM Mirror Fix", handle @gmmirrorfix, under hunterpinnell27@gmail.com. First video published public same day — HeyGen AI-avatar explainer (not the hands-on repair demo from the flagship script), "GM Mirror Won't Fold? Here's the $45 Fix," https://youtu.be/S16Bfiitc7A, AI-use disclosure applied per YouTube policy. **Not yet embedded on the live site** (homepage still says "Full repair video — coming soon"). Flagship video script (`marketing/video_script_flagship.md`, full hands-on repair demo) still undone. | `marketing/`, BUSINESS_FACTS.md |
| M7 | NOT STARTED | Phase 6 — Son handoff (Kade) | Blocked on M3-M5 | — |

## Visual redesign (2026-08-08)

Full visual refresh per Hunter's request ("free reign," then "done with black and yellow").
Navy + teal palette, Manrope font, icon cards, mobile hamburger nav, FAQ accordion, photo
lightbox, scroll-reveal animation. QA'd (0 broken links, all 22 pages consistent) and confirmed
live on the Vercel preview via curl. Note for future sessions: the local preview browser tool hit
a few transient rendering glitches during QA (0x0 viewport, washed-out screenshots) — always
double-check a suspicious screenshot with a `javascript_exec` state check before treating it as a
real bug; both times it was the tool, not the site.

## Live preview

**gm-mirror-fix.vercel.app** — deployed 2026-08-08, project under Vercel team "Blackhorn
Holdings," root directory set to `site`, auto-deploys on every push to `main`. Verified live via
curl: homepage 200, clean URLs work (`/pricing`, `/vehicles/tahoe`), the one legacy-URL redirect
308s correctly to `/blog/gm-trucks-mirror-fix`, sitemap.xml serves. This is a preview only — NOT
the live gmmirrorfix.com domain, no DNS changed. Hunter should visually click through it on
phone + desktop before we talk about a custom domain or cutover.

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

**Vercel — resolved 2026-08-08.** The earlier blocker (browser automation not reliably showing
Hunter the same page Claude was controlling) was worked around by switching to plain-text,
step-by-step narration with Hunter driving his own browser and screenshotting each step back.
That approach worked cleanly on the first try — worth defaulting to it over browser automation
for any future account/OAuth flows. Repo imported, root directory set to `site`, deployed, and
verified live (see "Live preview" section above).

**Next concrete step:** Hunter reviews the live preview (gm-mirror-fix.vercel.app) on phone and
desktop, and gives explicit yes/no on the open items listed above (packing instructions, 95/5
split language) before this becomes a candidate for the real DNS cutover. Cutover itself is a
separate, explicit-yes step per Phase 2 step 6 in `CLAUDE.md` — Wix stays live in the meantime.
