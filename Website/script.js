document.addEventListener("DOMContentLoaded", function () {

  
    // 1. Identify the current page
    let currentPage =
        decodeURIComponent(
            window.location.pathname.split("/").pop()
        );

    // If no filename is shown in the URL,
    // treat it as the Home page
    if (currentPage === "") {
        currentPage = "index.html";
    }


    // 2. Find all navigation links
    const navLinks =
        document.querySelectorAll(".nav-links a");


    // 3. Add current-page feedback
    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        // Remove active class first
        link.classList.remove("active");


        // Highlight the current page
        if (linkPage === currentPage) {

            link.classList.add("active");

        }


        // 4. Use JavaScript to change pages
        link.addEventListener("click", function (event) {

            // Stop the normal HTML link behaviour
            event.preventDefault();

            const targetPage =
                link.getAttribute("href");

            // JavaScript changes the page
            window.location.href = targetPage;

        });

    });


    // 5. Power logo returns to Home
    const logoLink =
        document.querySelector(".logo-link");

    if (logoLink) {

        logoLink.addEventListener("click", function (event) {

            event.preventDefault();

            window.location.href = "index.html";

        });

    }

    // Used to check that JavaScript loaded correctly
    console.log(
        "COS30045 Appliance Energy Consumption Website loaded."
    );

});