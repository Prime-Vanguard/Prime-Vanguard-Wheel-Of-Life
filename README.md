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

## Reel tracking

Link each reel to the page with `?utm_content=<reel id>` (for example `?utm_content=reel03_hookA`). The apply buttons open the Form with one prefilled field, the reel code (`entry.1969345638`), set to that ID, or `direct` when there is none. Name, phone, age, score and pillar are never put in the link; applicants type their own score and flat-tire pillar into the Form.

The Form entry IDs are in `js/main.js` (`FORM_URL`, `FORM_REEL_ENTRY`). If a Form field is deleted and recreated, its ID changes.

## Analytics hook

No analytics vendor is loaded yet. The page calls `window.pvTrack(name)` (if defined) and fires a `pv:event` event on `window` for: `page_view`, `assessment_start`, `pillar_done_1` to `pillar_done_5`, `assessment_complete`, `apply_click`. Events never carry scores or personal data.

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
