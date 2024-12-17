// Selecting elements
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

// Function to close the mobile menu
function closeMenu() {
    mobileMenu.classList.add('hidden');  // Hide the menu
    overlay.classList.add('hidden');    // Hide the overlay
}

// Optional: You can trigger the mobile menu to open with a menu button (assumed to exist)
// Assuming there is a menu button with the id "menu-button" that toggles the mobile menu
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');  // Toggle the menu visibility
    overlay.classList.toggle('hidden');    // Toggle the overlay visibility
});

// Close the mobile menu if the overlay is clicked
overlay.addEventListener('click', () => {
    closeMenu();  // Close the menu when the overlay is clicked
});


