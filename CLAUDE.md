# GM Mirror Fix OS — Genesis File

**To Hunter: save this file as `CLAUDE.md` inside a new folder (suggested: `~/Desktop/GM Mirror Fix OS/`), open Claude Code in that folder, and say "let's start." Claude reads this file automatically and takes it from there. You answer questions and approve things; Claude does the building.**

---

## What this is (Claude, read carefully — you are the builder)

This folder is the operating system for GM Mirror Fix (gmmirrorfix.com), Hunter Pinnell's
mirror-repair business in McKinney, TX, running since 2016. Hunter repairs the power-fold
(retraction) feature on sideview mirrors for 2007-2014 GM900-series trucks and SUVs: Tahoe,
Suburban, Escalade, Yukon/Denali, Silverado, Sierra. The failure is almost always a stripped
plastic OEM spur gear or a dead motor. Hunter's replacement gear is redesigned and strengthened
(metal where OEM used plastic) — that is the product moat. Customers remove the mirror, ship it
in, Hunter repairs and ships it back.

**Published pricing (current, from the existing site):**

| Service | One mirror | Pair |
|---|---|---|
| Spur gear alone (DIY part) | $40 | $75 |
| Spur gear replacement service | $169 | $279 |
| Motor replacement service | $189 | $339 |
| Combo gear + motor service | $239 | $399 |

**Current state:** a handful of orders per month, found via deep Google searches. Site is on
Wix. Payment is check or Venmo before return shipping. Phone: 469-766-2667. Shop address:
2304 State Blvd., McKinney, TX 75071.

**The mission, in order:**
1. Relaunch the business: modern site, online ordering with a deposit, clean mail-in workflow.
2. Grow volume toward **20 repairs/week** (~$200K/yr gross at current prices) via SEO, YouTube,
   and marketplace channels.
3. Hand daily operations to Hunter's sons through a simple daily runbook — they operate the
   system; they don't build it. Hunter leads the build; the sons take over when orders flow.

Work the phases below **in order**. Each phase has done-criteria. Do not start a phase until the
previous one's done-criteria are verified. Keep a tracker (Phase 1) and reconcile it against
reality at the end of every session.

---

## Standing rules (non-negotiable, apply in every session)

- **Nothing external happens without Hunter's explicit yes in the current session** — no emails
  sent, nothing published, no DNS changes, no purchases, no listings posted. Drafting and
  staging are always fine.
- **Hunter enters all credentials and payment details himself.** Claude never asks Hunter to
  paste a password into chat and never handles card numbers, bank details, or account creation.
  Claude walks Hunter to the right screen and tells him what to click.
- **Receipts-only marketing.** Every claim on the site, in videos, or in listings must be
  literally true ("repairing GM mirrors since 2016," real photos, real reviews). No invented
  numbers, no fake urgency.
- **Secrets discipline.** API keys and tokens live in a `secrets/` folder that is gitignored
  from day one. Never print secret values into chat, never commit them.
- **Verify live, not assumed.** After any deploy or change to a live surface, load the live URL
  and confirm the change is actually visible before recording it as done. A push is not a deploy.
- **Chat style: bullets, not essays.** Report outcomes and next steps. Detail lives in files.
- **Capture recipes.** The first time any repeatable operation works (a deploy, a label
  purchase, a listing update), write the exact steps into `recipes/` before the session ends.
- **One decision at a time.** Hunter is not a developer. When a choice is needed, recommend one
  option with a one-line reason and ask yes/no. Do not present menus of alternatives.

---

## Phase 0 — Interview (first session)

Before building anything, interview Hunter conversationally (a few questions at a time, not a
form). Write the answers to `BUSINESS_FACTS.md` as you go so every future session inherits them.
Collect:

**Business reality**
- Orders per month right now, and the realistic max repairs/day with current time available.
- Turnaround time promised today (order received → shipped back), and actual.
- Warranty offered today, if any. If none, propose one (e.g., lifetime on the metal gear —
  strong claim, cheap to honor if failure rate is low; confirm failure rate first).
- Parts inventory on hand (gears, motors) and where each part comes from. Lead time to restock.
  Whether supply could support 20 repairs/week.
- What share of jobs are gear vs. motor vs. combo. Repeat failure modes worth a page or video.
- The sons: names, which one(s) will operate, comfort level with computers. This calibrates the
  Phase 6 runbook.

**Assets and access**
- Where the domain gmmirrorfix.com is registered (Wix itself, GoDaddy, elsewhere). This matters
  for Phase 2 cutover.
- Wix account access, Google Business Profile (does one exist?), Google Search Console (likely
  not — set up in Phase 2), any existing Google/Yelp reviews.
- Photos: shop, workbench, before/after gears (plastic stripped vs. metal replacement), packing
  process, Hunter at work. Real photos, phone quality is fine. List what exists; make a shot
  list for what's missing.
- Existing customer records (emails, invoices) — even a shoebox count helps: past customers are
  the first review-request list.

**Done when:** `BUSINESS_FACTS.md` exists and Hunter confirms it's accurate.

---

## Phase 1 — Foundation

- **Fresh-Mac check first.** Run `git --version`. If macOS pops a dialog offering to install the
  Command Line Tools, have Hunter click Install and wait for it to finish (a few minutes) — git
  does not exist on a fresh Mac until then. Wade's start email has Hunter run
  `xcode-select --install` before the first session; verify it actually completed rather than
  assuming. Then set git identity before the first commit: `git config --global user.name` and
  `user.email`, using the SAME email Hunter will use for his personal GitHub account (a mismatch
  causes deploy-permission headaches with Vercel later).
- Create the folder skeleton:
  - `ACTIONS.md` — the single working tracker. Every open item is one line: short ID (M1, M2…),
    status, next action, pointer. History goes in git commits, not the tracker.
  - `BUSINESS_FACTS.md` — from Phase 0.
  - `orders/ORDERS.md` — order pipeline (Phase 4 defines the format).
  - `recipes/` — captured how-tos. `secrets/` — gitignored. `assets/photos/` — site images.
  - `templates/` — customer email/text templates.
- `git init`, sensible `.gitignore` (secrets/, .env*), first commit. Then walk Hunter through
  creating a free GitHub account (if he doesn't have a personal one) and a **private** repo;
  push. GitHub is needed for Vercel in Phase 2 anyway.
- **Session rituals**, recorded at the top of `ACTIONS.md`:
  - Start: read the tracker, state the top 3 open items, confirm today's focus.
  - Wrap: reconcile the tracker against reality (what is actually live/shipped), commit, push,
    and write a "NEXT SESSION STARTS HERE" line.

**Done when:** repo exists on GitHub, tracker has the phase list as items, rituals are written.

---

## Phase 2 — Website rebuild (Wix → Vercel)

**The single biggest risk in this whole project: Hunter's Google rankings are his only lead
source. Protect them.** Order of operations matters more than design.

1. **Inventory before anything.** Crawl the live Wix site. List every URL, its title, and its
   content in `site_migration/url_inventory.md`. Save the full text of every page — the blog
   posts and instruction pages are ranking assets and must be preserved, not rewritten from
   scratch.
2. Set up **Google Search Console** for gmmirrorfix.com (walk Hunter through verification) and
   export what queries/pages actually get impressions today. That data decides what must not
   break and what to build more of.
3. **Build the new site** in this repo: static site, plain HTML/CSS (or Next.js static export
   if forms make it easier — recommend one, don't debate). Pages, at minimum:
   - Home: what we fix, which vehicles, pricing table, how mail-in works (4 steps), real photos,
     "since 2016," reviews.
   - Order page (Phase 3 wires payment): service selector → deposit → instructions.
   - Mirror removal instructions (preserve existing content; add photos).
   - Per-vehicle landing pages (Tahoe, Suburban, Yukon, Escalade, Silverado, Sierra — one each,
     genuinely useful, not doorway spam) and per-symptom pages ("mirror won't fold," "mirror
     clicking noise," "mirror motor grinding").
   - Testimonials (real ones from the Wix site), Contact, FAQ (turnaround, warranty, packing).
   - `sitemap.xml`, proper titles/descriptions, `og:image`, schema.org LocalBusiness markup.
4. **Every old Wix URL gets a 301 redirect** to its new equivalent. No orphans.
5. Walk Hunter through connecting the GitHub repo to a free **Vercel** account (import repo,
   default settings, deploy). Verify the preview URL renders correctly on phone and desktop.
6. **Cutover checklist** (only when Hunter approves): point DNS from Wix to Vercel per Vercel's
   domain instructions for wherever the domain is registered. Keep the Wix subscription active
   until the new site has served real traffic for 2+ weeks with Search Console showing no
   crash in impressions. Then cancel Wix.
7. Post-cutover: submit the sitemap in Search Console, request indexing of key pages, watch
   impressions weekly for a month.

**Done when:** new site is live on gmmirrorfix.com, all old URLs redirect, Search Console shows
the site healthy, and Hunter has visually approved every page.

---

## Phase 3 — Payments (deposit model)

Current flow (check or Venmo before return shipping) becomes:

- **$50 deposit at order time** via Stripe Payment Link → customer gets an order number (RMA)
  and shipping instructions. The deposit filters tire-kickers and starts the trust exchange —
  the customer isn't wiring a stranger full price for a mirror they still own.
- **Balance due when the repair is done**, via an emailed Stripe link, before return shipping.
  Deposit is credited. Venmo and check remain accepted for the balance for customers who prefer
  them.
- Stripe has **no monthly fee**; cost is ~2.9% + 30¢ per transaction (~$5-6 on a typical job).
  Payment Links require zero code; the order page links straight to them.
- Walk Hunter through creating the Stripe account himself (his EIN/SSN and bank details go
  directly into Stripe, never through Claude), then create one Payment Link per service tier
  plus the $50 deposit link, and wire them into the order page.
- Refund rule (put it in the FAQ): deposit fully refunded if the unit turns out unrepairable or
  the customer cancels before shipping the mirror.

**Done when:** a real $50 test transaction has been run and refunded, links are live on the
site, and the balance-request email template exists in `templates/`.

---

## Phase 4 — Order pipeline (the ops core)

- `orders/ORDERS.md`: one line per order — RMA number (GMF-001…), date, customer name/email/
  phone, vehicle, service tier, status, tracking numbers, deposit/balance paid flags.
- **Statuses:** `ORDERED → INBOUND → RECEIVED → IN REPAIR → AWAITING BALANCE → SHIPPED → CLOSED`.
- **Templates** (Hunter's plain, friendly voice — draft them, have him edit until they sound
  like him): order confirmation + packing instructions, "we received your mirror," "repair done,
  here's your balance link," "shipped, here's tracking," and a review request 5 days after
  delivery (link to Google review page).
- **Shipping:** use PirateShip (free account, cheapest USPS/UPS rates, no code needed) as the
  label recipe. Capture the exact click-path in `recipes/shipping_labels.md`. Customers ship
  inbound themselves per the packing instructions; return label is bought when balance clears.
- **Packing instructions page** on the site: box size, wrap the glass, include the order number
  on a note inside. Every support email this page prevents is son-time saved.
- Claude's per-session ops job (this becomes the sons' runbook): read `ORDERS.md`, list what
  moves today (new orders to confirm, arrived mirrors to log, done repairs needing balance
  links, paid repairs to ship, deliveries needing review requests), draft the messages, Hunter
  (later: sons) approves and sends.

**Done when:** one real order has flowed end-to-end through the pipeline (a friends-and-family
test order counts) and every template exists.

---

## Phase 5 — Marketing engine (start only after Phases 2-4 are live)

Priority order — cheapest, most durable first:

1. **Google Business Profile.** Claim/refresh it, correct categories (auto parts, auto repair),
   photos, service list. Then work the review flywheel: the Phase 4 review-request email plus a
   one-time campaign to past customers from the Phase 0 records. Reviews are the #1 lever for
   a local-intent niche service.
2. **SEO content.** The per-vehicle and per-symptom pages from Phase 2, plus a steady trickle:
   one genuinely useful post/page per week (failure diagnosis, "gear vs motor — which is
   broken?", packing guide, year-range differences). All receipts-based, from Hunter's 10 years
   of real repairs.
3. **YouTube.** One flagship DIY video: Hunter, on camera at the bench, honestly showing the
   full repair including the hard parts. The funnel logic: the video builds credibility and
   ranks for the search; most viewers will watch, decide it's fiddly, and mail it in — and the
   confident DIYers buy the $40 gear. Description links to the order page and the gear. Then
   short follow-ups: removal per vehicle, packing your mirror, gear-vs-motor diagnosis. Claude
   drafts scripts/titles/descriptions; Hunter records on his phone.
4. **eBay parts channel** (recommend to Hunter — new idea, his call). List the $40 spur gear
   (and $75 pair) on eBay Motors with fitment data for the covered vehicles. That marketplace is
   where this buyer already shops; each shipped gear is an insert card away from a future
   mail-in customer ("if you'd rather we do it: gmmirrorfix.com"). Start eBay-only; consider
   Amazon later (more fees, more rules — not worth it until eBay proves volume).
5. **Forums and Facebook groups** (Tahoe/Yukon/Silverado owners' forums and groups). Genuine
   participation only: answer mirror questions helpfully with real knowledge, signature/profile
   links to the site. Never spam. This is where "deep Google searchers" already congregate.
6. **Measure.** Weekly: Search Console impressions/clicks, GBP calls, orders by source (ask
   "how did you find us?" at order — one field on the form). Double down on what moves.

**Done when:** it's never done — but the engine is "running" when GBP is claimed with 10+
reviews, the DIY video is live, the eBay listing is live (if Hunter opts in), and the weekly
measure ritual is on the tracker.

---

## Phase 6 — Son handoff

Only unlocks when Phases 2-4 are verified live and orders are flowing.

- Write `RUNBOOK.md`: the whole day in one page. Open Claude Code in this folder, say **"run
  the morning check"** → Claude reads `ORDERS.md` and email, reports: new orders, mirrors
  arrived, repairs awaiting balance, paid units to ship today, messages to approve. The
  operator does the physical work (repair under Hunter's training, pack, ship), approves the
  drafted messages, and says "log it" — Claude updates the tracker and order file, commits.
- The runbook assumes zero technical knowledge: every action is "say this to Claude" or a
  physical step. No git commands, no file editing by hand.
- Weekly rhythm: Monday morning check includes last week's totals (orders, revenue, reviews) —
  small wins visible to the person doing the work matter here.
- Hunter stays approver-of-record for anything external (publishes, listings, refunds) until he
  explicitly delegates it — record delegations in `BUSINESS_FACTS.md` when he does.

**Done when:** a son runs a full week of morning checks with Hunter only observing.

---

## Known risks (Claude: surface these to Hunter at the right moments, don't bury them)

1. **GM trademark.** "GM" in the domain and brand name is General Motors' mark. Ten years at
   trickle volume drew no attention; a relaunch with YouTube and marketplace listings raises
   visibility. Options when Hunter's ready to discuss: keep as-is (many small shops do),
   add clarifying language ("independent repair service, not affiliated with General Motors" in
   the footer — do this regardless, it's free), or migrate the brand over time to something like
   "FoldMirrorFix" with gmmirrorfix.com redirecting. eBay is the likeliest place to hit
   trademark friction (VeRO program) — describe fitment ("fits Tahoe/Silverado 2007-2014")
   rather than branding as GM. Raise this in Phase 2 (footer disclaimer) and again before the
   eBay listing goes live.
2. **SEO cutover.** Covered in Phase 2 — inventory, 301s, keep Wix until proven. Never let
   enthusiasm compress this sequence.
3. **Capacity honesty.** If orders outrun repair capacity, the turnaround promise on the site is
   the first thing to update — a slipped promise costs reviews, and reviews are the engine.
4. **Single point of failure.** Everything lives in the GitHub repo; the Mac dying should cost
   nothing but hardware. Verify pushes actually happen at every wrap.

---

## For Hunter directly: how to work with this

- Sessions are conversations. Say "let's start," "where were we," or "run the morning check."
  Claude reads this file and the tracker every time — you never have to re-explain.
- You'll be asked questions in plain English and for yes/no approvals. When Claude needs you to
  do something on a website (Stripe, Vercel, DNS), it walks you through it click by click.
- Nothing gets sent, published, or changed on the live site without your yes.
- Budget expectations: Vercel free, GitHub free, PirateShip free (postage at cost), Stripe
  ~3% per transaction, Wix cancels after cutover. The only new fixed cost is a personal Claude
  subscription (~$20/mo) — keep this on your personal account and personal Mac, not the WWT
  enterprise license, so your side business never touches your employer's tenant.
