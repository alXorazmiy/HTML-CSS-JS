document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-section").innerHTML = data;
            loadNavbar(); 
            loadScroll(); // Sahifada section'lar yuklanganidan keyin chaqiriladi.
        })
        .catch(error => console.error("Navbar yuklashda xatolik:", error));
});

function loadNavbar() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    const navLink = document.querySelectorAll(".nav__link");

    const linkAction = () => {
        navMenu.classList.remove("show-menu");
    };

    navLink.forEach(n => n.addEventListener("click", linkAction));
}

function loadScroll() {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
        const scrollDown = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute("id");
            const sectionClass = document.querySelector(".nav__menu a[href*='" + sectionId + "']");

            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                if (sectionClass) {
                    sectionClass.classList.add("active_link");
                }
            } else {
                if (sectionClass) {
                    sectionClass.classList.remove("active_link");
                }
            }
        });
    };

    // Scroll event qo‘shish
    window.addEventListener("scroll", scrollActive);
}
