# Memories — Romantic Gallery

This small project has a single page with a central button that opens a modal gallery with animated images and optional background music.

How to use
- Place your images in `assets/` and name them `photo1.svg`, `photo2.svg`, etc., or update `index.html` to reference your files.
- Add a music file named `music.mp3` to `assets/` to enable background music when the gallery opens.
- Open `index.html` in your browser (or visit `http://localhost/login/` if you use a local server like Laragon).

Files created:
- `index.html` — main page and modal
- `styles.css` — styling and animations
- `script.js` — interactivity and audio
- `assets/*.svg` — placeholder images
- `assets/music-placeholder.txt` — instructions for the music file

Customize:
- Replace SVGs with your photos (PNG/JPG). Keep names or update the HTML.
- Adjust colors and animation durations in `styles.css`.

Notes:
- Browsers generally block autoplay; music will attempt to play on the user click that opens the gallery.
- If you want a continuous slideshow without user clicks, the music will still require user interaction in many browsers.

Enjoy! ❤️