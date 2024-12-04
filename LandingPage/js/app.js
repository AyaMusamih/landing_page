document.addEventListener('DOMContentLoaded', function () {
    const sections = document.getElementsByTagName('section');
    const navbar = document.getElementById('nav-list');

    // Generate the navigation menu based on the page's sections
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const navItem = document.createElement('li');
        const anchor = document.createElement('a');

        anchor.innerText = section.dataset.label; // Use the custom label from the section's data attribute
        anchor.setAttribute('href', `#${section.id}`); // Link to the section by its ID
        anchor.className = 'nav-item';

        navItem.appendChild(anchor);
        navbar.appendChild(navItem);

        // Scroll smoothly to the section when a menu item is clicked
        anchor.onclick = function (event) {
            event.preventDefault();
            window.scrollTo({
                top: section.offsetTop - 50, // Account for offset to align section properly
                behavior: 'smooth', // Smooth animation for better user experience
            });
        };
    }

    // Update the menu to highlight the active section during scroll
    const handleScroll = function () {
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const bounding = section.getBoundingClientRect();

            if (bounding.top <= 100 && bounding.bottom >= 100) {
                const links = document.getElementsByClassName('nav-item');
                for (let j = 0; j < links.length; j++) {
                    links[j].classList.remove('active'); // Remove highlight from all links
                }
                const currentLink = navbar.querySelector(`a[href="#${section.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active'); // Highlight the current section's link
                }
                break;
            }
        }
    };

    // Listen for scroll events and update the active menu item accordingly
    window.addEventListener('scroll', handleScroll);

    // Ensure the active menu item is highlighted on page load
    handleScroll();
});
