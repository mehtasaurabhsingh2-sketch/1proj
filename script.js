const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const scrollFeatures = document.getElementById('scrollFeatures');

// Toggle the mobile navigation menu
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll smoothly to the features section
scrollFeatures.addEventListener('click', () => {
  const featuresSection = document.getElementById('features');
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

// Close mobile menu after clicking a navigation link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});
