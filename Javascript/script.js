
// AMICON CYCLES - JAVASCRIPT


document.addEventListener("DOMContentLoaded", function() {
    
    
    // Feature number1: MOBILE HAMBURGER MENU
    
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    
    // Feature number 2: FORM VALIDATION & SUCCESS MESSAGE
    
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            // Prevent the form from actually reloading the page
            event.preventDefault();
            
            // Simple check to ensure required fields are filled
            if (form.checkValidity()) {
                // Show a success message
                alert("Thank you! Your message has been sent successfully. We will get back to you within 24 hours.");
                
                // Clear the form fields
                form.reset();
            } else {
                // If fields are missing, let the browser handle the error highlights
                form.reportValidity();
            }
        });
    });

    
    // Feature number 3: DYNAMIC BACK-TO-TOP BUTTON
    
    // Create the button element
    const topBtn = document.createElement("button");
    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    topBtn.id = "backToTopBtn";
    topBtn.title = "Go to top";
    document.body.appendChild(topBtn);

    // Show and hide the button depending on the scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    // Scroll to the top when clicked
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