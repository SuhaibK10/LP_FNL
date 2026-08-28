-- Fulfilment tracking, separate from `status` (which tracks payment state:
-- pending/paid/failed). This tracks what happens to a PAID order physically
-- at the factory: packed, then shipped, then delivered. Powers the
-- easy-to-use /admin/orders tracker for factory staff.
alter table orders
  add column fulfillment_status text not null default 'unfulfilled'
    check (fulfillment_status in ('unfulfilled', 'packed', 'shipped', 'delivered'));

-- Recreate orders_readable (from 20260823_guest_checkout_leads.sql) to
-- include the new column — CREATE OR REPLACE VIEW can't add columns to an
-- existing view definition otherwise.
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
  fulfillment_status
from orders
order by created_at desc;

revoke all on orders_readable from anon, authenticated;
