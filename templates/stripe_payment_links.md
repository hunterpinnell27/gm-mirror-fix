# Stripe Payment Links — quick reference

Created 2026-08-13 in the live Stripe account (GM Mirror Fix). All 4 confirmed working with
correct pricing and shipping before going live.

## DIY gear part — live on the site (`/order.html`)

These are public "Buy now" buttons on the order page — customer pays instantly, no manual step.

| Item | Price | Link |
|---|---|---|
| Spur gear — 1 mirror | $45 + $3 shipping | https://buy.stripe.com/7sY14fh1ifcT9ua1XFgYU00 |
| Spur gear — pair | $85 + $3 shipping | https://buy.stripe.com/8x2aEP26o7KrbCi31JgYU01 |

## Gear + Motor repair service — send manually, not on the site

These are **not** public — per the pay-on-arrival model, nothing is charged at order time. Once
a mirror has arrived and you've confirmed it's repairable, copy the matching link below and text
(or email) it to the customer.

| Item | Price | Link |
|---|---|---|
| Gear + Motor service — 1 mirror | $279 | https://buy.stripe.com/6oUcMX4ew9SzfSy1XFgYU02 |
| Gear + Motor service — pair | $549 | https://buy.stripe.com/cNicMX7qIggX21I8m3gYU03 |

## Notes

- DIY gear links include a $3 shipping line item (added via Stripe's native shipping-rate
  feature on the Payment Link, not baked into the product price) — checkout shows the base price
  and shipping separately, matching the price shown on the site.
- Business type on Stripe: sole proprietorship (SSN, no EIN) — see `BUSINESS_FACTS.md`.
- Still to do: run one real end-to-end test transaction (place a real order, confirm the money
  actually arrives, then refund it) before fully relying on these for real customers.
