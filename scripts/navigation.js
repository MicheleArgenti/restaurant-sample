// Mobile Menu Toggle
const mobileMenuBtn = document.getElementsByClassName('.mobile-menu-btn');
const nav = document.querySelector('nav');
console.log(mobileMenuBtn)

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});