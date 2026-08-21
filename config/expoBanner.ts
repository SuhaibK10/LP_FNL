// ─────────────────────────────────────────────────────────────────────────────
// config/expoBanner.ts
// Time-boxed homepage banner for an upcoming trade show. Flip
// EXPO_BANNER_ENABLED off once the show is over — everything else here
// (copy, image, catalogue file, sheet webhook) can just be left in place for
// next time.
//
// IMAGE: a Cloudflare Images ID, same as product photos (see
// lib/cloudflareImages.ts). Leave blank to show the placeholder monogram.
//
// CATALOGUE_URL: the PDF that auto-downloads once the lead form is
// submitted. Drop the file in /public (e.g. public/catalogue.pdf) and point
// this at '/catalogue.pdf' — has to be same-origin for the browser's
// `download` attribute to force a save instead of just opening the PDF in a
// new tab.
//
// SHEET_WEBHOOK_URL: where each { name, phone, note } submission is sent so
// it lands as a row in a Google Sheet. This is a Google Apps Script Web App
// URL — Google Sheets has no public write API you can call straight from
// browser JS, so Apps Script is the standard bridge. One-time setup
// (~5 min, needs Suhaib's Google account — Claude can't do this step):
//   1. sheets.google.com → new blank sheet → add header row:
//      Timestamp | Name | Phone | Note
//   2. Extensions → Apps Script → paste:
//        function doPost(e) {
//          const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//          const data = JSON.parse(e.postData.contents);
//          sheet.appendRow([new Date(), data.name, data.phone, data.note || '']);
//          return ContentService.createTextOutput('OK');
//        }
//   3. Deploy → New deployment → type "Web app" → Execute as "Me",
//      who has access "Anyone" → Deploy → copy the /exec URL below.
// Leave blank to skip the sheet write (download still happens either way —
// the form never blocks the download on network/webhook failure).
// ─────────────────────────────────────────────────────────────────────────────

export const EXPO_BANNER_ENABLED = true

export const EXPO_BANNER = {
  eyebrow:      'Gifts World Expo · Bengaluru 2026',
  heading:      'Meet Us at Stall D24',
  dateLine:     '20–22 August',
  locationLine: 'Tripura Vasini, Palace Grounds, Bengaluru',
  ctaLabel:     'Explore Catalogue',
  image:        '61638f2e-84f7-4d33-1c08-96961cf8e800',
  catalogueUrl: '/catalogue.pdf',
  sheetWebhookUrl: 'https://script.google.com/macros/s/AKfycbxNmFkYEZgTfdU62z2bCbTOuza9mHoiZYOKc8Gy_IpGNjTJ_GRQ1zVuU34MUjNO0A3VAw/exec',
  // Temporary override — while set, "Explore Catalogue" links straight out
  // to this external form instead of opening the in-app one below. Clear it
  // (set to '') to switch back to the built-in name/phone/note form.
  externalFormUrl: '',
}
