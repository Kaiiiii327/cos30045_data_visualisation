document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".nav-links a");


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        link.classList.remove("active");


        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });


    console.log(
        "COS30045 Appliance Energy Consumption Website loaded."
    );

});