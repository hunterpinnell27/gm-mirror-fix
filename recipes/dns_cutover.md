# Recipe: DNS cutover (Wix domain → Vercel hosting)

Done successfully 2026-08-10 using plain-text narration (Hunter drives, Claude tells him exactly
what to click) — same approach that worked for the original Vercel signup. Browser automation is
not reliable for this; don't attempt it.

## Steps

1. **Vercel side — add the domains to the project:**
   - Project → Settings → Environments → click into **Production** environment → Domains section
     → Add Domain. (Vercel has moved "Domains" around in the UI before — if there's no dedicated
     Domains tab in the left sidebar, this is where it lives now.)
   - Add both the apex (`gmmirrorfix.com`) and `www.gmmirrorfix.com`.
   - Go to Project Settings → **Domains** (left sidebar, project-level, not the Environments
     sub-page) to see DNS status per domain and click "View DNS configuration" to get the exact
     records Vercel wants.

2. **Confirm which domain form is canonical today**, before changing anything: curl the live
   site's apex and www and see which one redirects to which. (Here: apex → www.) Match that
   behavior on the new setup so nothing changes for existing links/bookmarks/rankings.

3. **Wix side — edit the DNS records** (Wix Dashboard → Manage Domain → domain's "..." menu →
   Manage DNS Records — clicking the domain name itself does nothing, has to be the "..." menu):
   - **A record** for the apex (blank host name = `@`/root): edit the *first* existing A record
     to Vercel's IP, then delete any other duplicate A records on the same host. Wix typically
     ships 3 duplicate A records for redundancy — only one is needed once pointed at Vercel.
   - **CNAME record** for `www`: edit its value to the CNAME target Vercel showed (format looks
     like `xxxxxxxxxxxxxxxx.vercel-dns-0NN.com`, changes per domain — always read it fresh from
     Vercel's DNS config panel, don't assume the value is a fixed constant).
   - **Leave any TXT records alone** (e.g. `google-site-verification=...` — that's the Search
     Console verification token; deleting it can break Search Console verification).
   - Wix shows a "may take up to 48 hours" warning on save — in practice it can propagate in
     well under an hour.

4. **Back in Vercel**, click Refresh on each domain until both show "Valid Configuration" and SSL
   finishes generating (automatic, no action needed).

5. **Set the redirect direction** on the non-canonical domain (here, apex): Domains → Edit next
   to that domain → select "Redirect to Another Domain" (not "Connect to an environment") → pick
   a permanent redirect (301 or 308 — both are treated as permanent by search engines, use
   whichever Vercel offers) → target = the canonical domain (here, `www.gmmirrorfix.com`) → Save.

6. **Verify independently, don't trust the browser cache:**
   ```
   dig +short gmmirrorfix.com @8.8.8.8
   dig +short www.gmmirrorfix.com @8.8.8.8
   curl -sI https://www.gmmirrorfix.com/   # confirm 200 + real content, not a stale cached Wix response
   ```
   A stale/old response from `curl` alone doesn't mean it failed — check with `dig` against a
   public resolver (8.8.8.8) for the real current state, since local DNS caching can lag behind.

## After cutover — do NOT skip

- **Keep the Wix subscription active for ~2 weeks.** Cutting DNS over doesn't cancel Wix — the
  Wix-hosted site becomes unreachable via the custom domain but Wix itself keeps running as a
  safety net you can revert to (by pointing DNS back) if something goes wrong.
- Watch Google Search Console for any drop in impressions during that window before canceling
  Wix for good.
- Submit the new sitemap.xml in Search Console and request indexing of key pages.
