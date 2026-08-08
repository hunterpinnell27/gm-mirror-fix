# Business Facts — GM Mirror Fix

Collected in the Phase 0 interview. This file is inherited by every future session — update it
as facts change; don't duplicate it elsewhere.

## Business reality

- **Volume today:** ~4 orders/month.
- **Capacity:** could realistically do ~10 repairs/day if orders picked up — well above the
  ~20/week (≈3/day average) growth target, so capacity is not the bottleneck.
- **Turnaround promised:** 3 days (order received → shipped back).
- **Warranty:** 1 year on the repair.
- **Job mix:** most jobs are combo (gear + motor replacement together).
- **Parts sourcing:** gears and motors both sourced from China via Amazon/eBay; short lead time
  to restock. A complete pre-assembled gear+motor unit is also available, which reduces labor
  and repair time vs. installing gear and motor separately.
- **Operator (Phase 6):** Kade will run repairs day-to-day. Very comfortable with computers/tech
  — the runbook doesn't need to be dumbed down, but should stay plain-English/no-git per the
  genesis file's standing approach.

## Assets and access

- **Domain:** gmmirrorfix.com registered AND DNS-hosted at Wix (registrar: Wix.com Ltd.,
  nameservers ns0/ns1.wixdns.net — verified via `whois`/`dig` 2026-08-07). Hunter's initial guess
  of GoDaddy was incorrect. Current site is also built/hosted on Wix. This simplifies the Phase 2
  cutover (DNS and site are in the same place) but means Wix must be used for DNS record changes
  (e.g. Search Console TXT verification) until DNS is pointed elsewhere.
- **Google Business Profile:** does not exist yet. Queued for Phase 5 (marketing). Setup was
  started once ahead of schedule and paused at Hunter's request — Chrome extension needs a
  per-site permission approval before Claude can read/screenshot business.google.com; revisit
  when Phase 5 starts.
- **Google Search Console:** set up and verified 2026-08-07 as a Domain property (DNS TXT record
  added to Wix DNS, host `@`/blank, auto-verified). Logged in as hunterp27@yahoo.com. Performance
  data was still processing at setup time — check back a day later for impressions/query data
  that should inform what Phase 2 prioritizes.
- **Vercel:** account created 2026-08-07, signed up via GitHub (hunterpinnell27), logged in as
  hunter.pinnell@outlook.com. Team name on the account is "Blackhorn Holdings" (Vercel
  auto-generated this on signup — not something Hunter named, harmless, renamable later). 2FA was
  offered and intentionally skipped for now. GitHub repo import to create the actual Vercel
  project was NOT completed — it requires Hunter to click through a GitHub permission-grant
  screen himself; see `recipes/vercel_deploy.md` for the exact next steps.
- **Reviews:** none existing (Google or Yelp).
- **Photos:** shop/workbench and before/after gear photos exist on the current Wix site — pull
  these during the Phase 2 site crawl/inventory rather than shooting new ones.
- **Testimonials:** existing testimonials are on the current Wix site — preserve during Phase 2
  migration.
- **Customer records:** no separate customer contact list/database exists. Review-request
  outreach starts fresh once the Phase 4 order pipeline is live.
