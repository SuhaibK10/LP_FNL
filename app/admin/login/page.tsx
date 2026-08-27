'use client'

// ─────────────────────────────────────────────────────────────────────────────
// app/admin/login/page.tsx
// Plain password gate for internal tools. Not a branded page — this is
// staff-only, so it doesn't need the storefront's visual polish.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { adminLogin } from '@/app/admin/actions'

export default function AdminLoginPage() {
  const [error, setError]     = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setError(null)
    const result = await adminLogin(formData)
    if (result?.error) {
      setError(result.error)
      setPending(false)
    }
    // On success, adminLogin() redirects server-side — nothing else to do here.
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1B19] px-4">
      <form action={handleSubmit} className="w-full max-w-xs bg-white rounded-lg p-6 space-y-4">
        <h1 className="font-semibold text-lg text-[#1C1B19]">Internal Tools</h1>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoFocus
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#B99A62]"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-[#1C1B19] text-white rounded-md py-2 text-sm font-medium disabled:opacity-50"
        >
          {pending ? 'Checking…' : 'Enter'}
        </button>
      </form>
    </div>
  )
}
