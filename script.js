

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#fff';
        navbar.style.padding = '10px 10%';
    } else {
        navbar.style.padding = '20px 10%';
    }
});

// Simple Log to confirm script is working
console.log("Portfolio Loaded Successfully!");
