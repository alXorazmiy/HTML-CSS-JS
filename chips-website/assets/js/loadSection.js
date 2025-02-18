

document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home").innerHTML = data;

                const sr = ScrollReveal({
                    origin :'top',
                    distance : '60px',
                    duration: 2500,
                    delay: 300,
                    reset: true
                })


                sr.reveal(".home__data")
                sr.reveal(".home__circle, .home__img", {delay: 600, scale: .5})
                sr.reveal(".home__chips-1, .home__chips-2, .home__chips-3", {delay: 1000, interval: 100})
                sr.reveal(".home__leaf", {delay: 1200})
                sr.reveal(".home__tomato-1, .home__tomato-2", {delay: 1400, interval: 100})

        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/care.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("care").innerHTML = data;
            const sr = ScrollReveal({
                origin :'top',
                distance : '60px',
                duration: 2500,
                delay: 300,
                reset: true

            })
            sr.reveal(".care__img", {origin: "left"})
            sr.reveal(".care__list", {origin: "right"})
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/product.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("products").innerHTML = data;
            const sr = ScrollReveal({
                origin :'top',
                distance : '60px',
                duration: 2500,
                delay: 300,
                reset: true

            })


            sr.reveal(".products__card", {interval: 100})
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/favorite.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("favorites").innerHTML = data;
            const sr = ScrollReveal({
                origin :'top',
                distance : '60px',
                duration: 2500,
                delay: 300,
                reset: true

            })


            sr.reveal(".favorites__container")
            const swiperFavorites = new Swiper(".favorites__swiper", {
                loop: true,
                grabCursor: true,
                slidesPerView: 'auto', 
                centeredSlides: true,
                breakpoints: {
                    320: { slidesPerView: 3 }, // Kichik ekran
                    768: { slidesPerView: 3 }, // O‘rta ekran
                    1024: { slidesPerView: 3 } // Katta ekran
                }
            });

        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});
