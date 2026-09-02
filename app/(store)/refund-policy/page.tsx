import type { Metadata } from 'next'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Replacement Policy',
  description: 'Louis Polo\'s replacement policy for luggage and travel accessories — replacement only for items damaged on delivery or with an in-warranty manufacturing defect.',
  alternates:  { canonical: '/refund-policy' },
}

export default function RefundPolicyPage() {
  return (
    <div className="pt-16 md:pt-18">
      <div className="container-lp section-pad max-w-[52rem]">

        <span className="lp-eyebrow">Legal</span>
        <h1 className="lp-heading-lg mb-2">Replacement Policy</h1>
        <p className="font-body text-[var(--color-lp-muted)] text-sm mb-10">
          Last updated: August 2026
        </p>

        <div className="prose-lp">

          <section>
            <h2>1. Our Approach to Returns</h2>
            <p>
              We recommend reviewing the size guide and product details carefully before placing
              your order, since we're unable to offer a return, refund, or exchange outside of the
              two cases below.
            </p>
          </section>

          <section>
            <h2>2. When a Replacement Is Offered</h2>
            <p>We replace a product, free of charge, only in these two cases:</p>
            <ul>
              <li>
                <strong>Damaged on delivery</strong> — the product arrives visibly damaged, or
                damaged in transit, when you open it.
              </li>
              <li>
                <strong>Manufacturing defect within warranty</strong> — the product develops a
                genuine manufacturing fault (not damage from misuse, an accident, or normal wear)
                while still within the warranty period stated on its product page.
              </li>
            </ul>
            <p>
              Outside of these two cases, we are unable to offer a return, refund, or exchange.
            </p>
          </section>

          <section>
            <h2>3. Damaged on Delivery</h2>
            <p>
              Contact us within <strong>48 hours</strong> of delivery at{' '}
              <a href="mailto:support@louispolo.in">support@louispolo.in</a> with your order
              number and clear photos of the damage. Once verified, we will arrange a replacement
              at no additional cost, including pickup and reshipping.
            </p>
          </section>

          <section>
            <h2>4. Manufacturing Defect Within Warranty</h2>
            <p>
              Email <a href="mailto:support@louispolo.in">support@louispolo.in</a> with your order
              number or invoice, and photos of the defect. Our team will confirm whether it
              qualifies as a manufacturing defect under warranty (see the Warranty section on the
              product's page for coverage and duration) and, if approved, arrange a replacement at
              no additional cost. Keep your invoice — it's required to process any warranty claim.
            </p>
            <p>
              Warranty does not cover damage from misuse, accidents, unauthorised repairs, or
              normal wear and tear (scuffs, fading, worn wheels or zippers over time).
            </p>
          </section>

          <section>
            <h2>5. How Replacement Works</h2>
            <p>
              Once a claim is approved, we arrange pickup of the original product (where
              applicable) and ship the replacement to the same address. There is no charge to you
              for either. If the exact product/colour/size is no longer available, we will offer
              the closest equivalent or, only in that case, a refund to your original payment
              method.
            </p>
          </section>

          <section>
            <h2>6. Contact</h2>
            <p>
              For any questions about a replacement claim, email{' '}
              <a href="mailto:support@louispolo.in">support@louispolo.in</a> or call{' '}
              <a href={`tel:${BRAND.phone.replace(/[\s-]/g, '')}`}>{BRAND.phone}</a>. We aim to
              respond within 2 business days.
            </p>
            <p>
              {BRAND.legalName}<br />
              {BRAND.address}
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
