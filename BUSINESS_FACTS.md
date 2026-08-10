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
- **Parts cost (2026-08-10):** gear alone $16, motor alone $16, full housing assembly (motor +
  gear + housing pre-assembled) $32.
- **Idea (parked, not yet actioned):** Hunter wants to explore getting a fully manufactured unit
  made with the metal spur gear built in from the start. Why: it would let Kade or Hunter skip
  opening the existing housing and doing the dangerous spring-loaded-shaft disassembly entirely
  — removes both the safety risk and a chunk of labor time. Needs its own research thread later
  (manufacturer, MOQ, cost/unit) — not required to finish the current pricing pass.

## Pricing (current — updated 2026-08-10, supersedes the table in `CLAUDE.md`)

The genesis file's pricing table reflects the old Wix-era prices and is now stale; this is the
live reference going forward.

| Service | One mirror | Pair |
|---|---|---|
| Spur gear alone (DIY part — you install it) | $45 | $85 |
| Gear + Motor repair service (mail-in, we handle it) | $279 | $549 |

- **Why it changed:** prices hadn't moved in ~10 years and didn't price in bench labor at all.
  Parts cost $16 (gear or motor alone) or $32 (pre-assembled housing); bench time is ~2 hours per
  mirror start to finish. Even at $279, that's still a ~70% discount vs. a ~$1,000 dealer mirror
  replacement, and GM Mirror Fix has no known competitor offering this repair.
- **"Motor replacement" and "gear replacement" tiers were eliminated entirely** — Hunter's actual
  shop policy has always been to replace both together once the housing is open ("while you're in
  there"), and he has never performed a motor-only job. The site now only offers the DIY gear part
  and the combined Gear + Motor service — no separate gear-only or motor-only service tier.
  Diagnosis content (which part likely failed) is still kept on the symptom pages for SEO/education,
  but no longer maps to a different price.
- **Pair pricing is intentionally not a strict 2x-minus-discount ratio** — it's priced to always
  beat two separate single-mirror orders (so the pair option remains the rational choice), with
  some room left to raise prices again later without another full site pass.
- **Operator (Phase 6):** Kade will run repairs day-to-day. Very comfortable with computers/tech
  — the runbook doesn't need to be dumbed down, but should stay plain-English/no-git per the
  genesis file's standing approach.

## Payment model (current — updated 2026-08-10, supersedes the deposit model in `CLAUDE.md` Phase 3)

The genesis file describes a $50-deposit-then-balance model. Hunter decided against it — replaced
with a single full payment, collected only after the mirror physically arrives and is confirmed
repairable, before the repair starts:

1. Customer orders (DIY gear part, or the mail-in repair service) — no payment for the repair
   service at this step, just an order number (RMA) and shipping instructions. (The DIY gear part
   is a normal up-front purchase, unrelated to this flow — it's a physical product shipped to the
   customer, not a mail-in repair.)
2. Customer ships their mirror in.
3. Hunter receives it and confirms it's repairable.
4. Hunter sends one Stripe Payment Link for the full service price. Nothing is charged before this.
5. Once paid, Hunter repairs and ships it back — 3-day turnaround from payment, not from receipt.

- **Why:** removes an unnecessary extra step (deposit-then-balance was two payments for one job),
  and it's a stronger trust pitch for a stranger mailing in a part they own — "we don't charge you
  until your mirror is in our hands and we've confirmed we can fix it." Also eliminates all
  deposit-refund logic — nothing is ever charged for an unrepairable unit, so there's nothing to
  refund.
- **Site copy updated to match** (`pricing.html`, `order.html`, `faq.html` — including the FAQPage
  schema) — all $50-deposit language removed 2026-08-10.
- **Still blocked on Stripe setup**, which stays parked per Hunter's "hold off on Stripe for now" —
  this is the agreed target flow for whenever that resumes, not something built yet.

## Assets and access

- **Domain:** gmmirrorfix.com registered AND DNS-hosted at Wix (registrar: Wix.com Ltd.,
  nameservers ns0/ns1.wixdns.net — verified via `whois`/`dig` 2026-08-07). Hunter's initial guess
  of GoDaddy was incorrect. Current site is also built/hosted on Wix. This simplifies the Phase 2
  cutover (DNS and site are in the same place) but means Wix must be used for DNS record changes
  (e.g. Search Console TXT verification) until DNS is pointed elsewhere.
- **Google Business Profile:** claimed 2026-08-08 under hunterpinnell27@gmail.com. Turned out an
  unclaimed listing already existed ("GM SUV & Truck Mirror Fix," exact address/phone match) —
  claimed that instead of creating a duplicate. Category set to "Auto repair shop," business type
  "Service business." Business ID: 06371752351910746790. **Status: unverified — Google requires a
  video walkthrough** (location, equipment, proof Hunter manages it) since phone/postcard
  verification wasn't offered for this listing. Parked via "Verify Later," nothing public yet.
  Next step: Hunter needs to film that video and submit it at business.google.com/locations.
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
