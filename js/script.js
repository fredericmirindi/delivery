/* === ThinkBit Edge - script.js === */

document.addEventListener('DOMContentLoaded', function() {

    // --- Update copyright year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile navigation toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            const isExpanded = mainNav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
            navToggle.innerHTML = isExpanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu if a link is clicked (Optional)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    console.log("ThinkBit Edge scripts loaded.");

}); // End of DOMContentLoaded
