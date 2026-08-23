document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       ELEMENTS
    ========================================== */

    const header =
        document.getElementById("mainHeader");

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const sections =
        document.querySelectorAll("main section[id]");

    const tripForm =
        document.getElementById("tripForm");

    const tripMessage =
        document.getElementById("tripMessage");


    /* ==========================================
       NAVBAR SCROLL
    ========================================== */

    function updateHeader() {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* ==========================================
       MOBILE MENU
    ========================================== */

    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle("open");

                const isOpen =
                    mobileMenu.classList.contains("open");

                menuButton.innerHTML = isOpen
                    ? '<i class="fa-solid fa-xmark"></i>'
                    : '<i class="fa-solid fa-bars"></i>';

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove("open");

                        menuButton.innerHTML =
                            '<i class="fa-solid fa-bars"></i>';

                    }
                );

            });

    }


    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    function updateActiveNav() {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 140;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            const section =
                link.dataset.section;

            link.classList.toggle(
                "active",
                section === currentSection
            );

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );

    updateActiveNav();


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* ==========================================
       TRIP FORM
    ========================================== */

    if (tripForm) {

        tripForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const destination =
                    document.getElementById(
                        "tripDestination"
                    ).value;

                const style =
                    document.getElementById(
                        "travelStyle"
                    ).value;

                const date =
                    document.getElementById(
                        "travelDate"
                    ).value;

                const travelers =
                    document.getElementById(
                        "travelers"
                    ).value;


                if (
                    !destination ||
                    !style ||
                    !date ||
                    !travelers
                ) {

                    return;

                }


                tripMessage.textContent =
                    `Your ${style.toLowerCase()} trip to ${destination} for ${travelers} traveler(s) is ready to be planned!`;


                tripMessage.classList.remove(
                    "hidden"
                );


                tripForm.reset();

            }
        );

    }


    /* ==========================================
       DATE MINIMUM
    ========================================== */

    const travelDate =
        document.getElementById("travelDate");


    if (travelDate) {

        const today =
            new Date().toISOString().split("T")[0];

        travelDate.min = today;

    }

    /* ==========================================
   TRAVEL PACKAGES
========================================== */

const travelPackages = [

    {
        title: "Bali Honeymoon Escape",
        category: "honeymoon",
        location: "Bali, Indonesia",
        duration: "6 Days / 5 Nights",
        price: "₹69,999",
        image: "images/Bali.jpg",
        description:
            "A romantic tropical escape filled with beaches, sunsets and unforgettable moments."
    },

    {
        title: "Maldives Romantic Escape",
        category: "honeymoon",
        location: "Maldives",
        duration: "5 Days / 4 Nights",
        price: "₹89,999",
        image: "images/Maldives.jpg",
        description:
            "Relax together in paradise with turquoise waters, private beaches and island experiences."
    },

    {
        title: "Dubai Family Adventure",
        category: "family",
        location: "Dubai, UAE",
        duration: "6 Days / 5 Nights",
        price: "₹79,999",
        image: "images/Dubai.jpg",
        description:
            "A fun-filled family holiday combining iconic attractions, desert adventures and city experiences."
    },

    {
        title: "Swiss Family Explorer",
        category: "family",
        location: "Switzerland",
        duration: "8 Days / 7 Nights",
        price: "₹1,49,999",
        image: "images/Switzerland.jpg",
        description:
            "Discover breathtaking mountains, charming villages and unforgettable family experiences."
    },

    {
        title: "Bali Adventure",
        category: "adventure",
        location: "Bali, Indonesia",
        duration: "7 Days / 6 Nights",
        price: "₹59,999",
        image: "images/adventure.jpg",
        description:
            "Explore waterfalls, jungles, beaches and exciting outdoor experiences across Bali."
    },

    {
        title: "Dubai Luxury Escape",
        category: "luxury",
        location: "Dubai, UAE",
        duration: "5 Days / 4 Nights",
        price: "₹1,29,999",
        image: "images/Dubai.jpg",
        description:
            "Experience Dubai at its finest with premium stays, luxury dining and unforgettable experiences."
    },

    {
        title: "Maldives Luxury Retreat",
        category: "luxury",
        location: "Maldives",
        duration: "6 Days / 5 Nights",
        price: "₹1,39,999",
        image: "images/Maldives.jpg",
        description:
            "A peaceful premium island retreat designed for travellers seeking comfort and privacy."
    },

    {
        title: "Swiss Solo Explorer",
        category: "solo",
        location: "Switzerland",
        duration: "7 Days / 6 Nights",
        price: "₹1,19,999",
        image: "images/Switzerland.jpg",
        description:
            "Travel through the Alps, explore beautiful towns and create your own unforgettable adventure."
    }

];


/* ==========================================
   RENDER PACKAGES
========================================== */

const packagesGrid =
    document.getElementById("packagesGrid");


function renderPackages(filter = "all") {

    if (!packagesGrid) return;


    const filteredPackages =
        filter === "all"
            ? travelPackages
            : travelPackages.filter(
                item => item.category === filter
            );


    packagesGrid.innerHTML = "";


    filteredPackages.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "package-card";


        card.innerHTML = `

            <div class="package-image-wrapper">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    class="package-image"
                >

                <span class="package-badge">
                    ${item.category}
                </span>

            </div>


            <div class="p-6">

                <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    ${item.location}
                </p>


                <h3 class="mt-2 text-2xl font-bold text-[#17221c]">
                    ${item.title}
                </h3>


                <p class="mt-3 text-sm leading-6 text-gray-500">
                    ${item.description}
                </p>


                <div class="mt-5 flex flex-wrap gap-4">

                    <span class="package-detail">

                        <i class="fa-regular fa-clock text-wanderly-500"></i>

                        ${item.duration}

                    </span>


                    <span class="package-detail">

                        <i class="fa-solid fa-location-dot text-wanderly-500"></i>

                        ${item.location}

                    </span>

                </div>


                <div class="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                    <div>

                        <p class="text-xs text-gray-400">
                            Starting from
                        </p>

                        <p class="package-price">
                            ${item.price}
                        </p>

                    </div>


                    <a
                        href="index.html#plan"
                        class="grid h-11 w-11 place-items-center rounded-full bg-wanderly-500 text-white transition hover:bg-wanderly-700"
                        aria-label="Plan this trip"
                    >

                        <i class="fa-solid fa-arrow-right"></i>

                    </a>

                </div>

            </div>

        `;


        packagesGrid.appendChild(card);

    });

}


/* ==========================================
   FILTER BUTTONS
========================================== */

const packageFilters =
    document.querySelectorAll(
        ".package-filter"
    );


packageFilters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            packageFilters.forEach(
                item =>
                    item.classList.remove("active")
            );


            button.classList.add("active");


            const filter =
                button.dataset.filter;


            renderPackages(filter);

        }
    );

});


/* Initial render */

renderPackages("all");




}); 

/* ==========================================
   PLAN YOUR TRIP FORM
========================================== */

const tripForm =
    document.getElementById("tripForm");

const tripSuccess =
    document.getElementById("tripSuccess");

const planAnother =
    document.getElementById("planAnother");


if (tripForm) {

    const fields = {

        destination: {
            input: document.getElementById("destination"),
            error: document.getElementById("destinationError")
        },

        travelType: {
            input: document.getElementById("travelType"),
            error: document.getElementById("travelTypeError")
        },

        travellers: {
            input: document.getElementById("travellers"),
            error: document.getElementById("travellersError")
        },

        travelDate: {
            input: document.getElementById("travelDate"),
            error: document.getElementById("travelDateError")
        },

        budget: {
            input: document.getElementById("budget"),
            error: document.getElementById("budgetError")
        },

        email: {
            input: document.getElementById("email"),
            error: document.getElementById("emailError")
        }

    };


    /* ==========================================
       CLEAR ERROR
    ========================================== */

    function clearError(field) {

        field.input.classList.remove("error");

        field.error.textContent = "";

    }


    /* ==========================================
       SHOW ERROR
    ========================================== */

    function showError(field, message) {

        field.input.classList.add("error");

        field.error.textContent = message;

    }


    /* ==========================================
       VALIDATE FORM
    ========================================== */

    function validateTripForm() {

        let valid = true;


        /* Destination */

        if (!fields.destination.input.value) {

            showError(
                fields.destination,
                "Please select a destination."
            );

            valid = false;

        } else {

            clearError(fields.destination);

        }


        /* Travel Type */

        if (!fields.travelType.input.value) {

            showError(
                fields.travelType,
                "Please select your trip type."
            );

            valid = false;

        } else {

            clearError(fields.travelType);

        }


        /* Travellers */

        const travellers =
            Number(fields.travellers.input.value);


        if (
            !fields.travellers.input.value ||
            travellers < 1 ||
            travellers > 30
        ) {

            showError(
                fields.travellers,
                "Enter a number between 1 and 30."
            );

            valid = false;

        } else {

            clearError(fields.travellers);

        }


        /* Travel Date */

        const selectedDate =
            fields.travelDate.input.value;


        const today =
            new Date()
                .toISOString()
                .split("T")[0];


        if (!selectedDate) {

            showError(
                fields.travelDate,
                "Please choose a travel date."
            );

            valid = false;

        } else if (selectedDate < today) {

            showError(
                fields.travelDate,
                "Please choose a future date."
            );

            valid = false;

        } else {

            clearError(fields.travelDate);

        }


        /* Budget */

        if (!fields.budget.input.value) {

            showError(
                fields.budget,
                "Please select your estimated budget."
            );

            valid = false;

        } else {

            clearError(fields.budget);

        }


        /* Email */

        const email =
            fields.email.input.value.trim();


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!email) {

            showError(
                fields.email,
                "Please enter your email address."
            );

            valid = false;

        } else if (!emailPattern.test(email)) {

            showError(
                fields.email,
                "Please enter a valid email address."
            );

            valid = false;

        } else {

            clearError(fields.email);

        }


        return valid;

    }


    /* ==========================================
       SUBMIT
    ========================================== */

tripForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const valid =
            validateTripForm();


        if (!valid) {

            const firstError =
                tripForm.querySelector(
                    ".form-input.error"
                );

            if (firstError) {
                firstError.focus();
            }

            return;

        }


        /* ==========================================
           SEND FORM THROUGH EMAILJS
        ========================================== */

        const submitButton =
            document.getElementById("tripSubmit");


        const originalButtonHTML =
            submitButton.innerHTML;


        submitButton.disabled = true;

        submitButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        `;


        emailjs.sendForm(
            "service_wlcn7bs",
            "template_9153p02",
            tripForm
        )
        .then(
            () => {

                console.log(
                    "Wanderly enquiry sent successfully!"
                );


                /* Hide form */

                tripForm.classList.add(
                    "hidden"
                );


                /* Show success message */

                tripSuccess.classList.remove(
                    "hidden"
                );


                tripSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalButtonHTML;

            },

            (error) => {

                console.error(
                    "EmailJS Error:",
                    error
                );


                alert(
                    "Sorry, we couldn't send your enquiry. Please try again."
                );


                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalButtonHTML;

            }
        );

    }
);


    /* ==========================================
       PLAN ANOTHER TRIP
    ========================================== */

    if (planAnother) {

        planAnother.addEventListener(
            "click",
            () => {

                tripForm.reset();


                Object.values(fields).forEach(
                    field => clearError(field)
                );


                tripSuccess.classList.add(
                    "hidden"
                );


                tripForm.classList.remove(
                    "hidden"
                );


                tripForm.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* ==========================================
       REMOVE ERROR WHILE TYPING
    ========================================== */

    Object.values(fields).forEach(
        field => {

            field.input.addEventListener(
                "input",
                () => {

                    clearError(field);

                }
            );


            field.input.addEventListener(
                "change",
                () => {

                    clearError(field);

                }
            );

        }
    );

}