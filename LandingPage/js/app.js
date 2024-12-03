document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar-list');

    // Create navbar items dynamically
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = section.getAttribute('data-label');
        navLink.href = `#${section.id}`;
        navLink.classList.add('nav-link');

        navLink.addEventListener('click', function (e) {
            e.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });

        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    // Highlight active section during scrolling
    function underlineNavOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                // Clear all active classes first
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active class to the corresponding nav item
                document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            }
        });
    }

    // Initialize and attach scroll event
    underlineNavOnScroll();
    window.addEventListener('scroll', underlineNavOnScroll);
});
