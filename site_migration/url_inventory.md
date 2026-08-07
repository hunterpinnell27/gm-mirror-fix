# URL Inventory — gmmirrorfix.com (Wix, pre-migration)

Crawled 2026-08-07 as the first step of Phase 2. **Purpose:** nothing on the new site should
break a ranking URL — every one of these needs either a matching page or a 301 redirect.

Content below was pulled via automated fetch + summarization, not a byte-for-byte copy. Treat
this as a strong first draft of what must be preserved, not the final source text — before
writing final page copy, cross-check phrasing against the live pages (especially pricing figures
and the removal-instructions steps) so nothing subtly changes in the rewrite.

## Site structure (from nav menu)

| URL | Page title | Status |
|---|---|---|
| https://www.gmmirrorfix.com/ | HOME \| gmmirrorfix | inventoried |
| https://www.gmmirrorfix.com/about-history | ABOUT / HISTORY \| gmmirrorfix | inventoried |
| https://www.gmmirrorfix.com/repairs | REPAIRS \| gmmirrorfix | inventoried |
| https://www.gmmirrorfix.com/pricing | Pricing \| gmmirrorfix | inventoried |
| https://www.gmmirrorfix.com/pictures | PICTURES \| gmmirrorfix | inventoried (images described, not yet saved as files) |
| https://www.gmmirrorfix.com/testimonials | TESTIMONIALS \| gmmirrorfix | inventoried |
| https://www.gmmirrorfix.com/location | LOCATION \| gmmirrorfix | inventoried |
| https://www.gmmirrorfix.com/contact | CONTACT \| gmmirrorfix | inventoried |
| https://www.gmmirrorfix.com/blog | Blog \| gmmirrorfix | inventoried — only 1 post found, worth double-checking there isn't more archived |
| https://www.gmmirrorfix.com/single-post/2016/08/13/gm-trucks-mirror-fix | GM trucks mirror fix (blog post) | found via blog index, not yet individually crawled |
| https://www.gmmirrorfix.com/mirror-removal-instructions | Mirror removal Instructions \| gmmirrorfix | inventoried — 16 numbered steps, summarized only |

## Per-page content

### / (Home)
Presents the core pitch: repair for 2007-2014 GM900-series power-fold mirrors (Tahoe, Suburban,
Yukon, Denali, Sierra, Silverado). Hours: Mon-Fri 7:30 AM-6:00 PM, weekends 10:00 AM-5:00 PM.
Phone 469-766-2667, address 2304 State Blvd., McKinney, TX 75071. Founded 2016. Links out to
Repairs, Pricing, Removal Instructions, Testimonials. Social links to Google+/Twitter/Facebook
(Wix defaults — verify these are real accounts or drop them).

### /about-history
Origin story: fall 2014, owner's wife's 2007 Escalade mirror failed. Dealer quote ~$1,000.
Diagnosed a cracked plastic spur gear ("about the size of two dimes stacked together") on the
worm-gear/motor assembly. Epoxy fix held 3 months only. After ~9 months, partnered with a parts
manufacturer experienced with VAG (VW/Audi) parts to design a stronger replacement gear.
GMMirrorFix.com launched 2016.

### /repairs
Two failure modes: broken spur gear (~95% of cases, fixed with the redesigned gear) and broken
electric motor (~5% of cases, motor replacement). This 95/5 split should be verified against
Hunter's actual experience (BUSINESS_FACTS.md currently says most jobs are combo — reconcile
before publishing on the new site).

### /pricing
| Service | Per mirror | Per pair |
|---|---|---|
| Spur gear alone (DIY part) | $40.00 | $75.00 |
| Spur gear replacement service | $169.00 | $279.00 |
| Motor replacement service | $189.00 | $339.00 |
| Combo gear + motor service | $239.00 | $399.00 |

Matches the pricing already recorded in `CLAUDE.md`.

### /pictures
3 photos of mirror components/repair (not yet downloaded as files — need to save these directly
from Wix media before cutover, since the description here is not the asset itself).

### /testimonials
One testimonial on file — **Tim Norris**, Cadillac Escalade owner. Passenger mirror stopped
folding; dealer quoted ~$1,000. Found Hunter via a Cadillac forum. Quote: *"I would HIGHLY
recommend Hunter. He took the time to explain the issue, and did everything he said he would.
Top notch service."* Praised responsiveness, photos sent during repair, full restoration of
function.

### /location
Address 2304 State Blvd., McKinney, TX 75071. Phone 469-766-2667. No shipping instructions or
map embed found in the crawl — check the live page directly, since mail-in shipping instructions
are important content to preserve or rewrite clearly.

### /contact
Contact form (confirms "Success! Message received" on submit). Same phone/address as above.

### /blog
One archived post: **"GM trucks mirror fix"**, Aug 13, 2016, at
`/single-post/2016/08/13/gm-trucks-mirror-fix`. Announces the fix for GM power-fold mirror
failures. Low volume (1 post in 10 years) — Phase 5 calls for a weekly content cadence going
forward.

### /mirror-removal-instructions
16-step removal guide. Tools needed: 10mm deep socket, small and medium flat-blade screwdrivers.
Process: remove interior door panel triangle cover, foam padding, armrest switch panel, pry back
door skin, access mirror mounting nuts and electrical connectors, disconnect the black/white
plugs, unbolt the mirror, fish cables through the triangle cavity. Recommends a second person to
help. This page is a ranking asset (linked from testimonials as a customer-praised resource) —
preserve in full, verbatim, not summarized, when writing final copy.

## Open items before Phase 2 build starts

- [ ] Download the 3 photos from /pictures directly (not just descriptions) plus any other
      images on the site.
- [ ] Verify /location for shipping/mail-in instructions the crawl may have missed.
- [ ] Confirm whether more than 1 blog post exists in the Wix archive.
- [ ] Reconcile the "95% gear / 5% motor" split on /repairs against Hunter's actual job mix
      (BUSINESS_FACTS.md says most jobs are combo — decide what the new site should say).
- [ ] Get real social media URLs or drop the Google+/Twitter/Facebook links (Google+ no longer
      exists).
- [ ] Set up Google Search Console next, per Phase 2 step 2, to see what queries/pages actually
      get impressions today — that data, not this crawl alone, should decide final priorities.
