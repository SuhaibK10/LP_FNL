-- Guest checkout leads: captured the moment a guest enters a valid email +
-- phone and clicks "Continue to shipping", before an order even exists.
-- Lets ops follow up by phone with anyone who showed real intent but
-- dropped off before finishing checkout.
--
-- RLS is enabled with no policies at all — by design, only the service-role
-- client (app/api/checkout/guest-lead/route.ts) ever writes to this table,
-- and only the Supabase dashboard (which uses full credentials, not RLS)
-- ever needs to read it.
create table guest_checkout_leads (
  id         uuid primary key default gen_random_uuid(),
  email      text not null,
  phone      text not null,
  created_at timestamptz not null default now()
);

alter table guest_checkout_leads enable row level security;

-- Readable views — same underlying tables, timestamps reformatted to IST
-- (this business operates in India; UTC timestamptz is what's actually
-- stored and stays authoritative) so they're legible directly in the
-- Supabase Table Editor without needing the admin dashboard built first.
create view guest_checkout_leads_readable as
select
  id,
  email,
  phone,
  to_char(created_at at time zone 'Asia/Kolkata', 'DD Mon YYYY, HH12:MI AM') as when_ist,
  created_at
from guest_checkout_leads
order by created_at desc;

create view orders_readable as
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
  updated_at
from orders
order by created_at desc;
