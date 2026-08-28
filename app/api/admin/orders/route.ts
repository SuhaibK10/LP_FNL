// ─────────────────────────────────────────────────────────────────────────────
// app/api/admin/orders/route.ts
// Powers the /admin/orders fulfilment tracker. Only paid orders matter here —
// pending/failed orders never reached a warehouse floor. Gated by proxy.ts
// like every other /api/admin/* route (shared-password admin session).
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = createServiceRoleClient()

  const { data, error } = await supabase
    .from('orders')
    .select('*, order_items(*)')
    .eq('status', 'paid')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Failed to fetch orders:', error)
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }

  return NextResponse.json({ orders: data })
}
