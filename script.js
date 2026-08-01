// Dynamic Creation of Back to Top Button
const topBtn = document.createElement('button');
topBtn.innerHTML = '▲';
topBtn.id = 'backToTop';
topBtn.setAttribute('title', 'Back to Top');
document.body.appendChild(topBtn);

// Show / Hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

// Smooth Scroll to Top on click
topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log("Portfolio JavaScript Active!");
