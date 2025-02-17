

document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home").innerHTML = data;
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/care.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("care").innerHTML = data;
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/product.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("products").innerHTML = data;
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/favorite.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("favorites").innerHTML = data;

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
