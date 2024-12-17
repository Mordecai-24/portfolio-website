// Element Selection
const menuIcon = document.querySelector('#menu-icon'); // Mobile menu icon
const navbar = document.querySelector('.navbar'); // Navbar
const sections = document.querySelectorAll('section'); // Page sections
const navlinks = document.querySelectorAll('header nav a'); // Navigation links
const dynamicText = document.getElementById("dynamic-text"); // Dynamic text container

// Dynamic Text Animation
const textArray = [
    "Graphic Designer",
    
    "frontened developer"
];
let textIndex = 0;

function updateText() {
    dynamicText.style.opacity = 0; // Fade out
    setTimeout(() => {
        dynamicText.textContent = textArray[textIndex]; // Update text
        textIndex = (textIndex + 1) % textArray.length; // Cycle array
        dynamicText.style.opacity = 1; // Fade in
    }, 500); // Match the CSS fade-out duration
}
setInterval(updateText, 2500); // Update every 2.5 seconds

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting); // Add/Remove active class
    });
}, { threshold: 0.1 });

// Observe elements for reveal
document.querySelectorAll(".timeline-item, .heading, .home-content, .home-img")
    .forEach(el => observer.observe(el));

// Highlight Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let top = window.scrollY; // Current scroll position

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150; // Section offset
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => link.classList.remove('active')); // Clear active class
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active'); // Highlight current
        }
    });
});

// Mobile Navbar Toggle
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Toggle menu icon
    navbar.classList.toggle('active'); // Toggle navbar visibility
});
