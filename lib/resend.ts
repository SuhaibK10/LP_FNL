// ─────────────────────────────────────────────────────────────────────────────
// lib/resend.ts
// Resend client + email senders. Server-side only — RESEND_API_KEY has no
// NEXT_PUBLIC_ prefix, so it's never exposed to the browser.
//
// Two emails go out per paid order:
//   sendOrderConfirmationEmail — customer-facing, "thank you" tone
//   sendOrderNotificationEmail — internal, sent to BRAND.teamEmail, includes
//                                 the shipping address so the team can fulfill
// ─────────────────────────────────────────────────────────────────────────────

import { Resend } from 'resend'
import { BRAND } from '@/lib/constants'
import { thumbUrl } from '@/lib/cloudflareImages'

export const resend = new Resend(process.env.RESEND_API_KEY!)

// Update once your subdomain is verified in the Resend dashboard.
export const EMAIL_FROM = 'Louis Polo <orders@mail.louispolo.in>'

interface OrderConfirmationItem {
  product_name: string
  color: string
  size: string | null
  price: number
  quantity: number
  image?: string  // Cloudflare Images ID
}

// 56×56 thumbnail + name/variant/qty, used in the line-item table of both
// emails below.
function itemRow(item: OrderConfirmationItem): string {
  const thumb = item.image
    ? `<img src="${thumbUrl(item.image)}" width="56" height="56" alt="" style="display:block; width:56px; height:56px; object-fit:cover; border-radius:6px; background:#f2f0ec;" />`
    : ''
  return `
        <tr>
          <td style="padding:8px 0; width:56px;">${thumb}</td>
          <td style="padding:8px 0 8px 12px;">${item.product_name} (${item.color}${item.size ? `, ${item.size}` : ''}) × ${item.quantity}</td>
          <td style="padding:8px 0; text-align:right; white-space:nowrap;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
        </tr>`
}

interface OrderConfirmationParams {
  to: string
  orderId: string
  total: number
  items: OrderConfirmationItem[]
}

// ── Customer-facing: order confirmation ───────────────────────────────────
export async function sendOrderConfirmationEmail({
  to,
  orderId,
  total,
  items,
}: OrderConfirmationParams) {
  const itemRows = items.map(itemRow).join('')

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to,
    subject: `Your Louis Polo order is confirmed (#${orderId.slice(0, 8).toUpperCase()})`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h1 style="font-size: 20px;">Order confirmed</h1>
        <p>Thank you for your order. Here's a quick summary:</p>
        <table style="width:100%; border-collapse:collapse;">${itemRows}</table>
        <p style="margin-top:16px; font-weight:bold;">Total: ₹${total.toLocaleString('en-IN')}</p>
        <p style="color:#777; font-size:13px;">Order ID: ${orderId.slice(0, 8).toUpperCase()}</p>
      </div>
    `,
  })

  if (error) {
    console.error('Failed to send order confirmation email:', error)
  }
}

// ── Internal: new order notification to the team ──────────────────────────
interface OrderNotificationParams {
  orderId: string
  total: number
  items: OrderConfirmationItem[]
  customerEmail: string
  shipping: {
    fullName: string
    phone: string
    addressLine1: string
    addressLine2: string | null
    city: string
    state: string
    pincode: string
  }
}

export async function sendOrderNotificationEmail({
  orderId,
  total,
  items,
  customerEmail,
  shipping,
}: OrderNotificationParams) {
  const itemRows = items.map(itemRow).join('')

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: BRAND.teamEmail,
    subject: `New order #${orderId.slice(0, 8).toUpperCase()} · ₹${total.toLocaleString('en-IN')}`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h1 style="font-size: 20px;">New order received</h1>
        <p><strong>Customer:</strong> ${customerEmail}</p>
        <table style="width:100%; border-collapse:collapse;">${itemRows}</table>
        <p style="margin-top:16px; font-weight:bold;">Total: ₹${total.toLocaleString('en-IN')}</p>
        <h2 style="font-size:16px; margin-top:24px;">Ship to</h2>
        <p>
          ${shipping.fullName}<br/>
          ${shipping.addressLine1}${shipping.addressLine2 ? `, ${shipping.addressLine2}` : ''}<br/>
          ${shipping.city}, ${shipping.state} ${shipping.pincode}<br/>
          ${shipping.phone}
        </p>
        <p style="color:#777; font-size:13px;">Order ID: ${orderId.slice(0, 8).toUpperCase()}</p>
      </div>
    `,
  })

  if (error) {
    console.error('Failed to send order notification email:', error)
  }
}
