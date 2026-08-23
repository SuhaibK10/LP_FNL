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
--
-- `security_invoker = true` is load-bearing, not stylistic: a plain view
-- runs as its DEFINER (the postgres role used by the SQL editor), which
-- bypasses RLS on the underlying table entirely. Since Supabase exposes
-- every public-schema relation over PostgREST using the public anon key,
-- an invoker-less view here would let anyone holding that key (it's in the
-- site's own client bundle) read every guest's email/phone and every
-- customer's order. security_invoker makes the view enforce the CALLING
-- role's RLS instead — which for anon/authenticated means nothing, since
-- the underlying tables have RLS on with no policies for those roles.
-- The revoke below is a second, independent backstop for the same gap.
create view guest_checkout_leads_readable
with (security_invoker = true) as
select
  id,
  email,
  phone,
  to_char(created_at at time zone 'Asia/Kolkata', 'DD Mon YYYY, HH12:MI AM') as when_ist,
  created_at
from guest_checkout_leads
order by created_at desc;

create view orders_readable
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
  updated_at
from orders
order by created_at desc;

revoke all on guest_checkout_leads_readable from anon, authenticated;
revoke all on orders_readable from anon, authenticated;
