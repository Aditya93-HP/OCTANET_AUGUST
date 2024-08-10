// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Popup Modal for "Get Started" Button
const ctaButton = document.getElementById('ctaButton');
const modal = document.getElementById('popupModal');
const closeBtn = document.querySelector('.close-btn');

ctaButton.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
