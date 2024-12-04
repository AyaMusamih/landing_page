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

      // Function to handle active state for sections and links
      const handleScroll = function () {
        for (const section of sections) {
            const bounding = section.getBoundingClientRect();

            // Check if the section is in the viewport
            if (bounding.top <= 150 && bounding.bottom >= 150) {
                section.classList.add('your-active-class'); // Add active class to section
                const link = navbar.querySelector(`a[href="#${section.id}"]`);
                if (link) {
                    link.classList.add('active'); // Add active class to the corresponding link
                }
            } else {
                section.classList.remove('your-active-class'); // Remove active class from section
                const link = navbar.querySelector(`a[href="#${section.id}"]`);
                if (link) {
                    link.classList.remove('active'); // Remove active class from the link
                }
            }
        }
    };

    // Listen for scroll events and update the active menu item accordingly
    window.addEventListener('scroll', handleScroll);

    // Ensure the active menu item is highlighted on page load
    handleScroll();
});
