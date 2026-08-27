// ─────────────────────────────────────────────────────────────────────────────
// app/api/admin/images/upload/route.ts
// Bulk upload from the media library UI straight to Cloudflare Images.
// Accepts multiple files in one multipart request, uploads each to
// Cloudflare individually (their API takes one file per request), and
// returns every resulting image ID so the dashboard can show copyable links
// immediately. Gated by proxy.ts (shared-password admin session).
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
  const token     = process.env.CLOUDFLARE_IMAGES_API_TOKEN
  if (!accountId || !token) {
    return NextResponse.json({ error: 'Cloudflare Images not configured' }, { status: 500 })
  }

  const formData = await request.formData()
  const files = formData.getAll('files').filter((f): f is File => f instanceof File)

  if (files.length === 0) {
    return NextResponse.json({ error: 'No files provided' }, { status: 400 })
  }

  const results = await Promise.all(
    files.map(async (file) => {
      const uploadForm = new FormData()
      uploadForm.append('file', file, file.name)

      const res = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: uploadForm,
        }
      )
      const json = await res.json()
      if (!json.success) {
        return { filename: file.name, error: json.errors?.[0]?.message ?? 'Upload failed' }
      }
      return { filename: file.name, id: json.result.id }
    })
  )

  return NextResponse.json({ results })
}
