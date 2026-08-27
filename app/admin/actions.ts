// ─────────────────────────────────────────────────────────────────────────────
// app/admin/actions.ts
// Shared-password auth for internal tools (e.g. /admin/media) — separate
// from customer Supabase auth. The cookie stores an HMAC derived from the
// password, not the password itself, so it can't be reversed if it leaks.
// ─────────────────────────────────────────────────────────────────────────────

'use server'

import crypto from 'crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

function expectedToken() {
  return crypto
    .createHmac('sha256', process.env.ADMIN_PASSWORD!)
    .update('louispolo-admin')
    .digest('hex')
}

export async function adminLogin(formData: FormData) {
  const password = formData.get('password')
  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: 'Incorrect password.' }
  }

  const cookieStore = await cookies()
  cookieStore.set('admin_session', expectedToken(), {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path:     '/',
    maxAge:   60 * 60 * 24 * 30, // 30 days
  })

  redirect('/admin/media')
}

export async function adminLogout() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  redirect('/admin/login')
}
