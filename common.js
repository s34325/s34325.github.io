// reveal-on-scroll animation (shared across all pages)
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));
