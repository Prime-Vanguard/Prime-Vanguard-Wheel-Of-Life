# Prime Vanguard Wheel of Mastery

An Arabic (Modern Standard Arabic, right-to-left) self-assessment page for Prime Vanguard. The visitor rates five pillars, sees their wheel, their flat tire (الإطار المثقوب) and a free 7-day plan, then goes to the Google Form to apply.

Live: https://prime-vanguard.github.io/Prime-Vanguard-Wheel-Of-Life/

## What the page does

1. Hero with one button that starts the assessment in place.
2. Five screens in fixed order (Faith, Fitness, Finance, Intellect, Legacy and Brotherhood), one question each, a 1 to 10 selector that advances on tap, a back button and a live wheel.
3. Result: SVG radar wheel, average score, the flat-tire pillar (lowest score; ties go to the earlier pillar, Faith first), a band line, and a balanced-wheel message when the lowest score is 8 or more.
4. A free 7-day plan for the flat-tire pillar, with the fitness or finance disclaimer when relevant.
5. Apply button to the Google Form, three "what happens next" steps, and the price line.
6. Pillar strip, founder note, FAQ, footer with disclaimers and the tagline in English and Arabic.

## Privacy

The page collects and stores nothing: no form, no cookies, no `localStorage`. Everything runs in memory. Applicants enter their details only in the Google Form.

## Structure

```
index.html        Page (Arabic, RTL)
css/styles.css    Styles (CSS logical properties, mobile first)
js/main.js        Assessment, SVG wheel, plans, Form link
public/           Logo (SVG), icons, share image, self-hosted Tajawal fonts (OFL)
```

No build step, no external scripts or CDNs. Open `index.html` through any static server to test (for example `python3 -m http.server`).

## Editing copy

All Arabic text is in `index.html` and the `PILLARS` array at the top of `js/main.js` (questions and the 7-day plans). Domain and canonical: the canonical link points to the GitHub Pages URL until primevanguard.com is live.

## Language

Arabic (Modern Standard Arabic, RTL) is the default. The header button switches to English (LTR) without reloading, and the choice is reflected as `?lang=en` so a link can open the English page. Nothing is stored. English copy lives in `PILLARS_EN` and the `EN` dictionary in `js/main.js`; Arabic text is read from `index.html` (`data-i18n` attributes).

## Analytics

No vendor is loaded yet. `track()` fires a `pv:event` window event, calls `window.pvTrack(name)` if defined and `window.umami.track(name)` if present. Events: page_view, assessment_start, pillar_done_1..5, assessment_complete, apply_click, language_ar, language_en.
