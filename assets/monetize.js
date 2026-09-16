// GoalScope monetization config — replace YOUR_ID when you get affiliate links
// SportyBet: https://affiliates.sportybet.com | Bet9ja: https://affiliate.bet9ja.com
window.GOALSCOPE_AFFILIATE = {
  sportybet: "https://www.sportybet.com",
  bet9ja: "https://www.bet9ja.com",
  shrinkme: "https://shrinkme.click/GoalScopeTips",
  enabled: false
};

// Booking codes — auto-filled by bookers
// SportyBet: ~/prediction-tools/sportybet_booker.py
// Game 1 = PMUH1U 19.26 (Matchday 8-fold), Game 2 = P5XK49 41.75 (La Liga & Alps), Game 3 = UVA4B8 25.63 (Cup & Cross-Atlantic), Game 4 = L6BXNY 58.72 (Continent & Coors-Free)
window.GOALSCOPE_BOOKING = {
  "acca-main": "PMUH1U",
  "acca-1": "P5XK49",
  "acca-2": "UVA4B8",
  "acca-3": "L6BXNY",
  "2026-09-15-acca-main": "",
  "2026-09-15-acca-1": "",
  "2026-09-15-acca-2": "",
  "2026-09-15-acca-3": "",
  "2026-09-16-acca-main": "PMUH1U",
  "2026-09-16-acca-1": "P5XK49",
  "2026-09-16-acca-2": "UVA4B8",
  "2026-09-16-acca-3": "L6BXNY"
};
// Bet9ja: ~/prediction-tools/bet9ja_booker.py
window.GOALSCOPE_BOOKING_ODDS = {
  "2026-09-16-acca-main": "19.26", // PMUH1U Game 1
  "2026-09-16-acca-1": "41.75", // P5XK49 Game 2
  "2026-09-16-acca-2": "25.63", // UVA4B8 Game 3
  "2026-09-16-acca-3": "58.72" // L6BXNY Game 4
};

window.GOALSCOPE_BOOKING_BET9JA = {
  "acca-main": "",
  "acca-1": "",
  "acca-2": "",
  "acca-3": ""
};

// Display ads — placeholder IDs (uncomment when you join a network)
window.GOALSCOPE_ADS = {
  // monetag: "//your-monetag-tag.js",
  // propeller: "//your-propeller-tag.js",
  enabled: false
};

window.GOALSCOPE_TURNSTILE = {
  // Cloudflare Turnstile — get free at https://dash.cloudflare.com/?to=/:account/turnstile
  // Demo key (always passes) for testing: 0x4AAAAAAE5HsBRKxm8cgvlh — replace with your real sitekey for production
  siteKey: "0x4AAAAAAE5HsBRKxm8cgvlh",
  workerUrl: "https://goalscope-form.ogbukachristian22.workers.dev/",
  enabled: true // set false to disable without removing widget
};

window.GOALSCOPE_NEWSLETTER = {
  provider: "local",
  brevoFormAction: "",
  mailchimpAction: ""
};
