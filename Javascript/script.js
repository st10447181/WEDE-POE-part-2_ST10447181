
// MOBILE MENU TOGGLE (HAMBURGER)


document.addEventListener("DOMContentLoaded", function() {
    // 1. Find the hamburger button and the menu
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    // 2. Check if they exist on the page to prevent errors
    if (menuToggle && navMenu) {
        // 3. Listen for a click on the hamburger
        menuToggle.addEventListener("click", function() {
            // 4. Toggle the "active" class on the menu
            navMenu.classList.toggle("active");
        });
    }
});