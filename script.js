document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "indigo"; // Change background color on scroll
        } else {
            navbar.style.backgroundColor = "midnightblue"; // Revert to original color when scrolled to top
        }
    });

    var menuItems = document.querySelectorAll("#navbar a");

    menuItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            this.style.color = "green"; // Change font color on hover
        });

        item.addEventListener("mouseout", function() {
            this.style.color = "white"; // Revert to original font color when not hovered
        });
    });
});
