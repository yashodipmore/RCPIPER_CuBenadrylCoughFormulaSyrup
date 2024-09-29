// Define the content for each language

// Function to change the content based on selected language
function changeLanguage(language) {
    // Get the content elements (title and paragraph)
    const titleElement = document.querySelector('#content h2');
    const paragraphElement = document.querySelector('#content p');

    // Update the content
    titleElement.textContent = content[language].title;
    paragraphElement.textContent = content[language].paragraph;
}

// Select all the language buttons
const languageLinks = document.querySelectorAll('.language-selection ul li a');

// Add event listeners to each link
languageLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the language attribute (data-lang) to identify the selected language
        const selectedLanguage = link.getAttribute('data-lang');

        // Call the function to change content based on selected language
        changeLanguage(selectedLanguage);
    });
});

function toggleNav() {
    const sideNav = document.getElementById('sideNav');
    if (sideNav.style.display === 'none' || sideNav.style.display === '') {
        sideNav.style.display = 'block'; // Show the navigation
    } else {
        sideNav.style.display = 'none'; // Hide the navigation
    }
}


