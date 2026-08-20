'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ExpoPromoModal.tsx
// Time-boxed trade-show popup — opens itself shortly after landing on the
// homepage, mobile only (the expo audience scanning in from a phone at the
// booth is the actual target, not desktop browsers). Shows once per browser
// session so it doesn't nag a visitor who's already dismissed it.
//
// Styled deliberately warmer than the rest of the site (a deep burnt-
// terracotta "event pass" look pulled from the booth photo, not the site's
// muted gold) — Suhaib's call, this is a short-lived promo, not part of the
// permanent brand system.
//
// "Explore Catalogue" swaps the card into a small lead-capture form (name +
// phone, optional note) instead of linking straight out. Submitting fires
// the row off to a Google Sheet (via an Apps Script webhook, fire-and-forget
// — see config/expoBanner.ts for setup) and always triggers the catalogue
// PDF download regardless of whether that write succeeds, so a flaky network
// never blocks the thing the visitor actually came for.
//
// Copy/image/catalogue file/webhook and the on/off switch all live in
// config/expoBanner.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import Image                    from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, MapPin, ArrowRight, ArrowLeft, User, Phone, MessageSquare, Check, Loader2, Download } from 'lucide-react'
import { EXPO_BANNER, EXPO_BANNER_ENABLED } from '@/config/expoBanner'
import { heroUrlMobile, PLACEHOLDER_URL } from '@/lib/cloudflareImages'

const OPEN_DELAY_MS = 1200
const ACCENT = '#D08856'

type View = 'promo' | 'form' | 'done'

export function ExpoPromoModal() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<View>('promo')

  const [name,  setName]  = useState('')
  const [phone, setPhone] = useState('')
  const [note,  setNote]  = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!EXPO_BANNER_ENABLED) return
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(max-width: 1023px)').matches) return

    const t = setTimeout(() => setOpen(true), OPEN_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Body overflow:hidden alone doesn't reliably block background scroll on
  // iOS Safari (it still rubber-bands via touch) — locking documentElement
  // too matches the pattern already used for the mobile nav menu.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [open])

  // Reset back to the promo view a beat after close, so the modal doesn't
  // flash the form/done state the next time it opens mid-session.
  useEffect(() => {
    if (open) return
    const t = setTimeout(() => {
      setView('promo')
      setName('')
      setPhone('')
      setNote('')
      setPhoneError(false)
      setSubmitting(false)
    }, 300)
    return () => clearTimeout(t)
  }, [open])

  function downloadCatalogue() {
    if (!EXPO_BANNER.catalogueUrl) return
    const a = document.createElement('a')
    a.href = EXPO_BANNER.catalogueUrl
    a.download = 'Louis-Polo-Catalogue.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setPhoneError(true)
      return
    }
    setPhoneError(false)
    setSubmitting(true)

    if (EXPO_BANNER.sheetWebhookUrl) {
      try {
        // no-cors + text/plain sidesteps a preflight OPTIONS request, which
        // Apps Script web apps don't handle — response is opaque either way,
        // we only care that the request went out.
        await fetch(EXPO_BANNER.sheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({ name: name.trim(), phone: digits, note: note.trim() }),
        })
      } catch {
        // Sheet write failing shouldn't stop the visitor from getting the PDF.
      }
    }

    downloadCatalogue()
    setSubmitting(false)
    setView('done')
    setTimeout(() => setOpen(false), 2200)
  }

  if (!EXPO_BANNER_ENABLED) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden fixed inset-0 z-70 bg-black/75 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          {/* Warm glow behind the card */}
          <div
            className="absolute w-88 h-88 rounded-full blur-3xl opacity-35 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #8B4226 0%, transparent 70%)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.94 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#3A2418] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]"
            style={{ background: 'linear-gradient(165deg, #1D1712 0%, #12100D 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#12100D]/90 backdrop-blur-md border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center justify-center text-white transition-all duration-200 hover:bg-[#12100D] hover:border-white/25 active:scale-90"
              aria-label="Close"
            >
              <X size={16} strokeWidth={2.5} />
            </button>

            {/* Image — stays put across views for visual continuity */}
            <div className="relative w-full aspect-4/5">
              <Image
                src={heroUrlMobile(EXPO_BANNER.image) || PLACEHOLDER_URL}
                alt={EXPO_BANNER.heading}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#12100D] via-transparent to-black/10" />
              <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-transparent" />

              {view !== 'promo' && (
                <button
                  type="button"
                  onClick={() => setView('promo')}
                  className="absolute top-3 left-3 z-20 w-9 h-9 rounded-full bg-[#12100D]/90 backdrop-blur-md border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center justify-center text-white transition-all duration-200 hover:bg-[#12100D] hover:border-white/25 active:scale-90"
                  aria-label="Back"
                >
                  <ArrowLeft size={16} strokeWidth={2.25} />
                </button>
              )}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {view === 'promo' && (
                <motion.div
                  key="promo"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative px-6 pt-5 pb-6 text-center"
                >
                  <span
                    className="inline-block font-body text-[0.65rem] font-semibold tracking-[0.14em] uppercase rounded-full border px-3 py-1 mb-3.5"
                    style={{
                      color: ACCENT,
                      borderColor: 'rgba(208,136,86,0.35)',
                      backgroundColor: 'rgba(139,66,38,0.12)',
                    }}
                  >
                    {EXPO_BANNER.eyebrow}
                  </span>

                  <h2 className="font-display text-[1.55rem] leading-[1.15] text-white mb-4">
                    {EXPO_BANNER.heading}
                  </h2>

                  <div className="flex flex-col items-center gap-2 mb-5">
                    <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 font-body text-[0.78rem] text-white/80">
                      <Calendar size={13} strokeWidth={1.75} className="text-[#D08856]" />
                      {EXPO_BANNER.dateLine}
                    </span>
                    <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 font-body text-[0.78rem] text-white/80">
                      <MapPin size={13} strokeWidth={1.75} className="text-[#D08856]" />
                      {EXPO_BANNER.locationLine}
                    </span>
                  </div>

                  {EXPO_BANNER.externalFormUrl ? (
                    <motion.a
                      href={EXPO_BANNER.externalFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center justify-center gap-2 w-full rounded-xl py-3.5 font-body text-[0.85rem] font-semibold tracking-[0.03em] uppercase text-white border border-white/10"
                      style={{
                        background: 'linear-gradient(180deg, #9C4E28 0%, #6E3018 100%)',
                        boxShadow: '0 10px 20px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
                      }}
                      onClick={() => setOpen(false)}
                    >
                      {EXPO_BANNER.ctaLabel}
                      <ArrowRight size={16} strokeWidth={2} />
                    </motion.a>
                  ) : (
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      className="relative flex items-center justify-center gap-2 w-full rounded-xl py-3.5 font-body text-[0.85rem] font-semibold tracking-[0.03em] uppercase text-white border border-white/10"
                      style={{
                        background: 'linear-gradient(180deg, #9C4E28 0%, #6E3018 100%)',
                        boxShadow: '0 10px 20px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
                      }}
                      onClick={() => setView('form')}
                    >
                      {EXPO_BANNER.ctaLabel}
                      <ArrowRight size={16} strokeWidth={2} />
                    </motion.button>
                  )}
                </motion.div>
              )}

              {view === 'form' && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  onSubmit={handleSubmit}
                  className="relative px-6 pt-5 pb-6"
                >
                  <h2 className="font-display text-[1.3rem] leading-[1.2] text-white text-center mb-1">
                    Get the Catalogue
                  </h2>
                  <p className="font-body text-[0.78rem] text-white/50 text-center mb-5">
                    Just your name and number — the PDF downloads instantly.
                  </p>

                  <div className="space-y-3">
                    <label className="flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/4 px-3.5 py-3 focus-within:border-[rgba(208,136,86,0.5)] transition-colors duration-200">
                      <User size={15} strokeWidth={1.75} className="text-white/35 shrink-0" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        autoComplete="name"
                        className="flex-1 min-w-0 bg-transparent font-body text-[0.85rem] text-white placeholder:text-white/30 focus:outline-none"
                      />
                    </label>

                    <div>
                      <label className={`flex items-center gap-2.5 rounded-xl border bg-white/4 px-3.5 py-3 transition-colors duration-200 ${
                        phoneError ? 'border-[#C0392B]/60' : 'border-white/12 focus-within:border-[rgba(208,136,86,0.5)]'
                      }`}>
                        <Phone size={15} strokeWidth={1.75} className="text-white/35 shrink-0" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => { setPhone(e.target.value); setPhoneError(false) }}
                          placeholder="Phone number"
                          autoComplete="tel"
                          inputMode="tel"
                          className="flex-1 min-w-0 bg-transparent font-body text-[0.85rem] text-white placeholder:text-white/30 focus:outline-none"
                        />
                      </label>
                      {phoneError && (
                        <p className="font-body text-[0.7rem] text-[#E27B6B] pt-1.5 pl-1">
                          Enter a valid phone number
                        </p>
                      )}
                    </div>

                    <label className="flex items-start gap-2.5 rounded-xl border border-white/12 bg-white/4 px-3.5 py-3 focus-within:border-[rgba(208,136,86,0.5)] transition-colors duration-200">
                      <MessageSquare size={15} strokeWidth={1.75} className="text-white/35 shrink-0 mt-0.5" />
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Note (optional)"
                        rows={2}
                        className="flex-1 min-w-0 bg-transparent font-body text-[0.85rem] text-white placeholder:text-white/30 focus:outline-none resize-none"
                      />
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileTap={{ scale: 0.98 }}
                    className="relative flex items-center justify-center gap-2 w-full rounded-xl py-3.5 mt-5 font-body text-[0.85rem] font-semibold tracking-[0.03em] uppercase text-white border border-white/10 disabled:opacity-70"
                    style={{
                      background: 'linear-gradient(180deg, #9C4E28 0%, #6E3018 100%)',
                      boxShadow: '0 10px 20px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
                    }}
                  >
                    {submitting ? (
                      <Loader2 size={16} strokeWidth={2} className="animate-spin" />
                    ) : (
                      <Download size={16} strokeWidth={2} />
                    )}
                    {submitting ? 'Sending…' : 'Download Catalogue'}
                  </motion.button>
                </motion.form>
              )}

              {view === 'done' && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative px-6 pt-8 pb-10 text-center"
                >
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                    style={{ backgroundColor: 'rgba(139,66,38,0.18)', border: '1px solid rgba(208,136,86,0.35)' }}
                  >
                    <Check size={24} strokeWidth={2.25} style={{ color: ACCENT }} />
                  </motion.span>
                  <h2 className="font-display text-[1.25rem] leading-[1.2] text-white mb-1.5">
                    Catalogue Downloading
                  </h2>
                  <p className="font-body text-[0.78rem] text-white/50">
                    See you at Stall D24.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
