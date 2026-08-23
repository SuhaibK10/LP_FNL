// ─────────────────────────────────────────────────────────────────────────────
// app/api/checkout/guest-lead/route.ts
// Fired the moment a guest enters a valid email + phone and clicks "Continue
// to shipping" — before an order even exists. Captures checkout intent so a
// human can follow up by phone with anyone who drops off before paying,
// independent of whether they ever reach /api/checkout.
//
// Fire-and-forget from the client (see app/(store)/checkout/page.tsx) — a
// failure here must never block the checkout flow itself.
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse, type NextRequest } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const { email, phone } = await request.json()

  if (typeof email !== 'string' || typeof phone !== 'string' || !email.includes('@') || phone.replace(/\D/g, '').length !== 10) {
    return NextResponse.json({ error: 'Invalid email or phone.' }, { status: 400 })
  }

  const supabase = createServiceRoleClient()
  const { error } = await supabase
    .from('guest_checkout_leads')
    .insert({ email, phone: phone.replace(/\D/g, '') })

  if (error) {
    console.error('Failed to save guest checkout lead:', error)
    return NextResponse.json({ error: 'Could not save.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
