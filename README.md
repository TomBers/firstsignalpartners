# firstsignalpartners

Static website (no build step). Open `index.html` in a browser.

- Pages: `index.html`, `how-it-works.html`, `our-value.html`, `search.html`, `strategic-partners.html`
- All styling (colours, fonts, hero photos) is in `css/style.css`; colours are at the top.
- Buttons link to the Google Form (signups are stored in its linked Google Sheet). To change it, search/replace the form URL in the `.html` files.
- Inline signup form: `js/signup.js` (injected into each `.cta` section) posts to the Google Form; set the email entry ID and role options at the top of that file.
- Strategic partner logos: see the comment in `strategic-partners.html`.
