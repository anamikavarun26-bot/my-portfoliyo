// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Floating Back to Top Button Creation
const topBtn = document.createElement('button');
topBtn.innerHTML = '▲';
topBtn.id = 'backToTop';
topBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(topBtn);

// Show / Hide button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

// Click to scroll up smoothly
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log("Portfolio JavaScript & Button Effects Active!");
