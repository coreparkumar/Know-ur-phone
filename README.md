# Take Control of Your Phone — GitHub Pages Site

A simple static site (HTML / CSS / JS) ready to deploy to GitHub Pages.

## Files
- `index.html` — the page content
- `styles.css` — styling
- `script.js` — subscribe form logic

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `phone-privacy-guide`).
2. Copy the contents of this `gh-pages/` folder into the repo root.
3. Push to GitHub.
4. In the repo: **Settings → Pages → Source: `main` branch, `/root`**.
5. Your site will be live at `https://<username>.github.io/<repo>/`.

## Enable Email Collection (Google Forms)

GitHub Pages is static — it can't receive form submissions on its own. The easiest free option is **Google Forms** (unlimited responses, free):

1. Go to [Google Forms](https://forms.new) and create a new blank form.
2. Add a question:
   - Type: **Short answer**
   - Question text: `Email address`
   - Click the three dots → **Response validation** → set to **Email** (optional but recommended).
3. Click the **eye icon** (Preview) and submit one test response so the form is active.
4. Click **Send** → **embed icon** (`< >`) → copy the iframe embed URL. It looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/viewform?embedded=true
   ```
5. In `index.html`, replace `YOUR_FORM_ID` in this line with the part from your URL:
   ```html
   <iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" ...>
   ```
6. Responses will appear in your Google Forms **Responses** tab. You can also link a Google Sheet to automatically collect emails.

**Demo mode:** if you leave `YOUR_FORM_ID` unchanged, the page shows a warning message reminding you to configure the form.

## Alternatives to Google Forms
- [Formspree](https://formspree.io) — simple AJAX forms, free tier 50 submissions/month.
- [Getform](https://getform.io)
- [Web3Forms](https://web3forms.com)
- [Netlify Forms](https://www.netlify.com/products/forms/) (if hosting on Netlify instead)
