-- Per-stage timestamps for the /admin/orders tracker. `updated_at` only
-- reflects the most recent change, so it can't show both "shipped on X" and
-- "delivered on Y" once an order reaches delivered. Set once, in
-- app/api/admin/orders/[id]/route.ts, the first time an order moves into
-- that stage — never overwritten afterward.
alter table orders
  add column shipped_at   timestamptz,
  add column delivered_at timestamptz;

-- Recreate orders_readable (see 20260828_order_fulfillment_status.sql) —
-- new columns appended at the end; CREATE OR REPLACE VIEW can't reorder or
-- insert columns into an existing view's position list.
create or replace view orders_readable
with (security_invoker = true) as
select
  id,
  full_name,
  guest_email,
  guest_phone,
  city,
  state,
  total,
  status,
  to_char(created_at at time zone 'Asia/Kolkata', 'DD Mon YYYY, HH12:MI AM') as placed_at_ist,
  to_char(updated_at at time zone 'Asia/Kolkata', 'DD Mon YYYY, HH12:MI AM') as updated_at_ist,
  created_at,
  updated_at,
  fulfillment_status,
  to_char(shipped_at   at time zone 'Asia/Kolkata', 'DD Mon YYYY, HH12:MI AM') as shipped_at_ist,
  to_char(delivered_at at time zone 'Asia/Kolkata', 'DD Mon YYYY, HH12:MI AM') as delivered_at_ist,
  shipped_at,
  delivered_at
from orders
order by created_at desc;

revoke all on orders_readable from anon, authenticated;
