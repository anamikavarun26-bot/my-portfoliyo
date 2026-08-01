// Back to Top Button Create & Scroll Logic
const topBtn = document.createElement('button');
topBtn.innerHTML = '▲';
topBtn.id = 'backToTop';
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
