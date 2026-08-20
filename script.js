// =========================
// WANDERLY JAVASCRIPT
// =========================


// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");


// Open mobile menu
menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

        menuBtn.setAttribute(
            "aria-label",
            "Close navigation"
        );

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }

});


// =========================
// CLOSE MOBILE MENU
// =========================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});


// =========================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================

document.addEventListener("click", function (event) {

    const clickedMenu =
        menuBtn.contains(event.target);

    const clickedNavbar =
        navbar.contains(event.target);


    if (
        navbar.classList.contains("active") &&
        !clickedMenu &&
        !clickedNavbar
    ) {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }

});