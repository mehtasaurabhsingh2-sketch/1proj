# Project 1: Modern Landing Page

## What we built

We built a modern landing page with a clean UI, responsive layout, and interactive navigation. The page includes a navbar, hero section, features section, and footer.

## How the layout works (HTML structure)

- `index.html` has a top-level `header` for the site navigation.
- The `main` element contains the `hero` section and the `features` section.
- The `footer` at the bottom contains a small copyright message and navigation links.
- Each section is wrapped with a `.container` to center the content and keep it aligned.

## CSS breakdown

### Layout
- We use `.container` to keep content centered with a max width.
- The header uses `display: flex` to align the brand, links, and toggle button.
- The hero section uses a grid to place text and a card side-by-side on desktop.
- The features section uses a grid for three cards.

### Colors
- We used a dark background with subtle gradients for a modern look.
- Accent colors are purple shades to highlight buttons and labels.
- Text colors are separated into primary (white) and secondary (soft gray).

### Responsiveness
- At `max-width: 900px`, the hero uses one column and the features grid becomes two columns.
- At `max-width: 680px`, the navbar becomes mobile-friendly, the menu hides behind a toggle button, and the feature cards stack vertically.

## JavaScript

### DOM selection
- `document.getElementById('navToggle')` selects the hamburger button.
- `document.getElementById('navLinks')` selects the navigation container.
- `document.getElementById('scrollFeatures')` selects the button in the hero.

### Event listeners
- `navToggle.addEventListener('click', ...)` listens for clicks on the mobile menu button.
- `scrollFeatures.addEventListener('click', ...)` listens for clicks on the hero button.
- We also add a click listener to every navigation link so the mobile menu closes after a link is tapped.

### Interactions
- Clicking the hamburger toggles the `.open` class on the nav menu.
- Clicking "See Features" scrolls the page smoothly to the features section.
- Clicking any nav link closes the mobile nav menu.

## Key lines of code

- `navLinks.classList.toggle('open');`
  - This line shows or hides the navigation links on mobile.

- `featuresSection.scrollIntoView({ behavior: 'smooth' });`
  - This line scrolls the page smoothly to the features section.

- `navLinks.querySelectorAll('a').forEach(...)`
  - This ensures the mobile menu closes when a user taps a link.

## Small exercises

1. Change the purple accent color in `style.css` to blue or green.
2. Add a new section below the features section with a testimonial or extra content.
3. Modify the secondary button so it shows an alert when clicked.
