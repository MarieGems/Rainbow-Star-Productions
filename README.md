# Rainbow Star Productions — Art Deco Homepage Concept

A homepage redesign concept for Rainbow Star Productions, a Wichita-based magic and dance duo (Bootstrap Bill & Rainbow Star) who perform corporate and private events across Kansas, Oklahoma, and Missouri.

**This is a design concept, not the live site.** It's an unsolicited creative exploration built to demonstrate a full brand direction — not a commissioned or deployed project, and not affiliated with or endorsed by Rainbow Star Productions. Copy, testimonials, and photography are used with attribution from their public site ([rainbowstar-productions.com](https://www.rainbowstar-productions.com/)) for demonstration purposes only.

## The brief

Take the existing site's real content and proof (60+ five-star reviews, named corporate clients, four written testimonials, veteran-owned status) and rebuild the homepage around a 1920s–30s Art Deco theatrical identity — vintage marquee, old Hollywood glamour, geometric framing — while keeping it read as professional event entertainment rather than a children's party act or a casino.

## What's here

- Full desktop-to-mobile responsive homepage in one file (`index.html`) — inline CSS/JS, no build step, no external JS libraries
- Custom type system: Josefin Sans (display), Cormorant Garamond (editorial serif/italic), Work Sans (body), loaded via Google Fonts
- Hand-built Art Deco motifs: stepped "crown" frame, radiating sunburst, marquee bulb twinkle, ticket-stub testimonial cards — no icon libraries or template kits
- Restrained motion throughout — hero parallax, nav pulse/shine, draw-on checkmarks, count-up stats, hover lifts — all transform/opacity-based so it stays smooth on low-end hardware, and all respect `prefers-reduced-motion`
- **Works fully without JavaScript**: scroll-reveal, count-up, and the mobile menu (CSS-only checkbox toggle) all degrade to a correct, fully visible static page if JS never runs
- The client roster (McDonald's, Cargill, The Cotillion, Old Cowtown Museum) is set as typographic text, not the low-res screenshot graphic from the original site

## Structure

```
index.html   — everything: markup, styles, script
```

The only two external resources are the Google Fonts stylesheet and the hero photo, which is hotlinked from Rainbow Star Productions' own Squarespace CDN with a themed gradient fallback if it fails to load. Everything else is inline. If this becomes a real production build, swap the hotlinked hero photo for a self-hosted file.

## Running it

No build step, no dependencies. Just open `index.html` directly in a browser, or serve it with any static server:

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
