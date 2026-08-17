# Rainbow Star Productions — Art Deco Homepage Concept

A homepage redesign concept for Rainbow Star Productions, a Wichita-based magic and dance duo (Bootstrap Bill & Rainbow Star) who perform corporate and private events across Kansas, Oklahoma, and Missouri.

**This is a design concept, not the live site.** It's an unsolicited creative exploration built to demonstrate a full brand direction — not a commissioned or deployed project, and not affiliated with or endorsed by Rainbow Star Productions. Copy, testimonials, and photography are used with attribution from their public site ([rainbowstar-productions.com](https://www.rainbowstar-productions.com/)) for demonstration purposes only.

## The brief

Take the existing site's real content and proof (60+ five-star reviews, named corporate clients, four written testimonials, veteran-owned status) and rebuild the homepage around a 1920s–30s Art Deco theatrical identity — vintage marquee, old Hollywood glamour, geometric framing — while keeping it read as professional event entertainment rather than a children's party act or a casino.

## What's here

- Full desktop-to-mobile responsive homepage (`index.html`)
- Custom type system: Josefin Sans (display), Cormorant Garamond (editorial serif/italic), Work Sans (body) — all self-hosted, no external font requests
- Hand-built Art Deco motifs: stepped "crown" frame, radiating sunburst, marquee bulb twinkle, ticket-stub testimonial cards — no icon libraries or template kits
- Real photography and trust assets (hero photo, client-logo strip, veteran-owned badge) pulled from the source site

## Structure

```
index.html
assets/
├── css/       fonts.css (font-face declarations), styles.css (design system + layout)
├── js/        main.js (mobile nav toggle, scroll-reveal)
├── fonts/     self-hosted .woff2 files (Google Fonts, SIL Open Font License)
└── images/    hero photo, client trust strip, veteran-owned badge (.webp)
```

## Running it

No build step — it's static HTML/CSS/JS. Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Palette & type

| Token | Hex | Role |
|---|---|---|
| Ink | `#16110D` | Primary background |
| Curtain | `#5C1220` | Hero glow, footer transition |
| Ivory | `#F4ECDC` | Primary text on dark |
| Champagne gold | `#C8A25E` | Accent — lines, buttons, stars |
| Brass | `#8A6D3E` | Hairlines, secondary marks |

Display: **Josefin Sans** · Editorial: **Cormorant Garamond** italic · Body: **Work Sans**
