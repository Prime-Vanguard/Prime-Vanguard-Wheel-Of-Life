# Prime Vanguard Wheel of Life

An interactive wheel of life assessment tool for Prime Vanguard, focused on 5 non-negotiable pillars of mastery.

## Live Demo

Live Link: https://prime-vanguard.github.io/Prime-Vanguard-Wheel-Of-Life/

## Project Structure

```
Prime Vanguard Wheel of life/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom styles and animations
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## Features

- **Interactive Radar Chart**: Visual representation of 5 life pillars using Chart.js
- **Real-time Assessment**: Sliders for each pillar with instant chart updates
- **Data Persistence**: Scores are saved to localStorage
- **Responsive Design**: Mobile-first approach with touch-friendly controls
- **Accessibility**: Skip links, ARIA labels, keyboard navigation support
- **Insights Panel**: Personalized recommendations based on weakest pillar

## The 5 Pillars

1. **Faith & Spiritual Commitment** (The Axle) - Foundation for all other pillars
2. **Fitness & Physical Armor** (The Chassis) - Physical vessel for legacy
3. **Finance & Wealth Building** (The Fuel) - Resources for family and ventures
4. **Personal Development & Intellect** (The Navigation) - Mindset and learning
5. **Legacy & Brotherhood** (The Destination) - Impact on the Ummah

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Chart.js** - Radar chart visualization (via CDN)
- **Vanilla JavaScript** - No framework dependencies
- **Fontsource** - Inter and Tajawal fonts (via CDN)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Development

To run locally:

1. Open `index.html` in a web browser
2. No build process required
3. All dependencies loaded via CDN

## Customization

- Modify pillar data in `js/main.js` (pillars array)
- Adjust colors in `css/styles.css` (CSS variables)
- Update content in `index.html`

## Performance Optimizations

- Debounced slider input (150ms delay)
- Efficient chart updates
- localStorage for data persistence
- Responsive image handling

## Accessibility Features

- Skip to main content link
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus-visible states
- Touch-friendly button sizes (44px minimum)
- Screen reader friendly

## SEO

- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL
- Semantic HTML structure

## License

© 2026 Prime Vanguard. All rights reserved.
