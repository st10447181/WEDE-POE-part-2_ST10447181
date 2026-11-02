
// AMICON CYCLES - JAVASCRIPT


document.addEventListener("DOMContentLoaded", function() {
    
    
    // Feature number 1: MOBILE HAMBURGER MENU
    
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    
    // Feature number 3: DYNAMIC BACK-TO-TOP BUTTON
    
    const topBtn = document.createElement("button");
    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    topBtn.id = "backToTopBtn";
    topBtn.title = "Go to top";
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    
    // Feature number 4: NAVBAR SCROLL EFFECT
    
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

});
