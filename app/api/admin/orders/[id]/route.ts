// ─────────────────────────────────────────────────────────────────────────────
// app/api/admin/orders/[id]/route.ts
// Advances an order's fulfilment_status. Gated by proxy.ts like every other
// /api/admin/* route (shared-password admin session).
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse, type NextRequest } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'

const VALID_STATUSES = ['unfulfilled', 'packed', 'shipped', 'delivered'] as const
type FulfillmentStatus = (typeof VALID_STATUSES)[number]

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { fulfillmentStatus } = await request.json()

  if (!VALID_STATUSES.includes(fulfillmentStatus)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const now = new Date().toISOString()
  const update: Record<string, unknown> = {
    fulfillment_status: fulfillmentStatus as FulfillmentStatus,
    updated_at: now,
  }
  // Set once, the first time an order reaches that stage — never
  // overwritten on a later update (e.g. an accidental re-tap).
  if (fulfillmentStatus === 'shipped')   update.shipped_at   = now
  if (fulfillmentStatus === 'delivered') update.delivered_at = now

  const supabase = createServiceRoleClient()
  const { data, error } = await supabase
    .from('orders')
    .update(update)
    .eq('id', id)
    .select()
    .single()

  if (error || !data) {
    console.error('Failed to update fulfillment status:', error)
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }

  return NextResponse.json({ order: data })
}
