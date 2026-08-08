# Recipe: Connect GitHub repo to Vercel and deploy

**Status as of 2026-08-07:** Vercel account created (hunterpinnell27, via GitHub), logged in as
hunter.pinnell@outlook.com. Team name on the account is "Blackhorn Holdings" (auto-generated on
signup — harmless, can rename later in Vercel team settings if it bugs you). GitHub
(hunterpinnell27) is already linked under Account → Authentication. 2FA was offered and
intentionally skipped for now — can turn on anytime under Account → Authentication → Two-Factor
Authentication.

**This step needs Hunter at the keyboard** — it involves clicking through a GitHub permission
grant tied to your identity, which can't be done by Claude on your behalf.

## Steps

1. Go to **vercel.com** and make sure you're logged in.
2. Click **Add New** (top right of the dashboard) → **Project**. (Or go straight to
   **vercel.com/new**.)
3. Under the **"Import Git Repository"** panel (left side — ignore "Clone Template" on the
   right, that's for unrelated starter projects), click **Continue with GitHub**.
4. GitHub will ask which repos to give Vercel access to. Choose **"Only select repositories"**
   and pick **gm-mirror-fix**. (Avoid "All repositories" — no need to give Vercel more access
   than this one project needs.)
5. You should land back on Vercel with `gm-mirror-fix` importable. Click **Import** next to it.
6. On the configuration screen:
   - **Framework Preset:** select "Other" (this is a plain static HTML/CSS site, not a
     framework like Next.js).
   - **Root Directory:** click Edit and set it to `site` — the actual website files live in the
     `site/` folder of the repo, not the repo root (which also has `BUSINESS_FACTS.md`,
     `ACTIONS.md`, etc. that shouldn't be published).
   - Leave build/output settings on their defaults (a static site needs no build command).
7. Click **Deploy**. Vercel will give you a preview URL like
   `gm-mirror-fix-<random>.vercel.app` — that's the site, live at a throwaway address, not
   `gmmirrorfix.com` yet.
8. **Verify it live**: open the preview URL, click through a few pages, check pictures load,
   check a vehicle page and the removal instructions page. Confirm on both desktop and phone
   sizes.

## What happens after this (later steps, not part of this recipe)

- DNS cutover from Wix to Vercel (`gmmirrorfix.com` pointing at Vercel) is a **separate,
  explicit-yes step** — do NOT do this until Hunter has visually approved every page on the
  preview URL, per Phase 2 step 6 in `CLAUDE.md`. Keep Wix active for 2+ weeks after cutover
  before cancelling it.
- Once deployed, every future `git push` to `main` auto-redeploys the preview automatically —
  no need to repeat this recipe for updates, just push.
