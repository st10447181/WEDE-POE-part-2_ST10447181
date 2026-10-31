document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            // Toggle the 'active' class on the nav menu
            navMenu.classList.toggle("active");
        });
    }
});