# goalscope — Daily Predictions Website

Public, normal-looking sports predictions site. Not just odds — full homepage, insights, how it works, contact, newsletter.

## Structure
```
predictions-website/
  index.html        # Homepage (hero, stats, trust, newsletter, FAQ)
  predictions.html  # All accumulators with full tables + math
  about.html        # How picks are made
  blog.html         # Insights / lessons
  contact.html      # Contact form
  admin.html        # Upload daily TXT files (drag & drop)
  assets/app.js     # Parser for uploaded TXT -> preview
  data/
    predictions.json # Home cards
    details.json     # Full legs per accumulator
    uploads/         # Synced copies of /storage/emulated/0/Predictions/*.txt
  sync.sh           # Copy phone Predictions folder into site
  vercel.json
```

## Run locally (on your phone)
```bash
cd ~/predictions-website
python3 -m http.server 8080
# then open http://localhost:8080 in Chrome
```

## Sync daily predictions
After you save new files to /storage/emulated/0/Predictions/ (this is automatic for all future predictions):
```bash
./sync.sh
# or manually:
cp /storage/emulated/0/Predictions/*.txt ~/predictions-website/data/uploads/
```

Admin page (admin.html) also accepts drag & drop and stores previews in browser storage instantly.

## Deploy publicly (free)

### Option A — Vercel (recommended)
1. Create GitHub repo, push this folder:
   ```bash
   cd ~/predictions-website
   git init && git add . && git commit -m "goalscope launch"
   gh repo create goalscope --public --source=. --push
   ```
2. Go to vercel.com → Add New Project → Import your repo → Deploy (no build step, static).
3. Set custom domain if you want (goalscope.vercel.app by default).

### Option B — Netlify
Drag & drop the entire `predictions-website` folder onto app.netlify.com/drop — instant public URL.

### Option C — GitHub Pages
Push to GitHub → Settings → Pages → Source: main / root → Save. Site appears at username.github.io/goalscope

## Connecting forms/newsletter
- Contact form: replace `onsubmit` alert with Formspree endpoint (formspree.io) or Netlify Forms (`netlify` attribute).
- Newsletter: connect to Mailchimp / Brevo via their embed form.

## Updating predictions daily
1. New TXT appears in /storage/emulated/0/Predictions/
2. Run ./sync.sh (or set cron)
3. Edit data/details.json & data/predictions.json to add the new acca (or use admin.html Upload → Download bundle → replace file)
4. git commit && git push → Vercel auto-deploys

18+ Gamble responsibly.
