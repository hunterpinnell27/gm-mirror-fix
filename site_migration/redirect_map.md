# 301 Redirect Map — Wix → New Site

Implemented in `site/vercel.json` (`redirects` array), applied automatically once the site is
deployed to Vercel. Not live yet — this only takes effect after Phase 2's Vercel deploy + DNS
cutover, which needs Hunter's explicit yes.

Vercel's `cleanUrls: true` setting means most old URLs need **no explicit redirect** — a request
for `/about-history` is served directly by `about-history.html`, matching the old Wix URL
exactly. Only paths that actually changed shape need an entry in `vercel.json`.

| Old Wix URL | New URL | Redirect needed? |
|---|---|---|
| `/` | `/` | No — same |
| `/about-history` | `/about-history` | No — same |
| `/repairs` | `/repairs` | No — same |
| `/pricing` | `/pricing` | No — same |
| `/pictures` | `/pictures` | No — same |
| `/testimonials` | `/testimonials` | No — same |
| `/location` | `/location` | No — same |
| `/contact` | `/contact` | No — same |
| `/mirror-removal-instructions` | `/mirror-removal-instructions` | No — same |
| `/blog` | `/blog/` | Yes — added |
| `/single-post/2016/08/13/gm-trucks-mirror-fix` | `/blog/gm-trucks-mirror-fix` | Yes — added |

New pages that didn't exist on the old site (no redirect needed, just new URLs):
`/order`, `/faq`, `/vehicles/tahoe`, `/vehicles/suburban`, `/vehicles/yukon`,
`/vehicles/escalade`, `/vehicles/silverado`, `/vehicles/sierra`, `/symptoms/wont-fold`,
`/symptoms/clicking-noise`, `/symptoms/motor-grinding`.

**Verify after deploy:** load each old URL against the live domain post-cutover and confirm it
either serves the matching new page or 301s correctly — don't just trust this table.
