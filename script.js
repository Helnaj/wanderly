// =========================
// WANDERLY JAVASCRIPT
// =========================


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.getElementById("header");

function updateHeader() {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");


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
// NAVIGATION LINKS
// =========================

const navLinks = document.querySelectorAll(
    ".navbar a:not(.nav-btn)"
);


// =========================
// CLOSE MOBILE MENU
// =========================

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
// CLOSE MENU OUTSIDE
// =========================

document.addEventListener("click", function (event) {

    const clickedInsideNavbar =
        navbar.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);


    if (
        navbar.classList.contains("active") &&
        !clickedInsideNavbar &&
        !clickedMenuButton
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


// =========================
// ACTIVE NAVIGATION ON SCROLL
// =========================

const sections = document.querySelectorAll(
    "section[id], footer[id]"
);


function updateActiveNav() {

    let currentSection = "home";

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = sectionId;

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();  