document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home-section").innerHTML = data;
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/favorite.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("favorite-section").innerHTML = data;
        })
        .catch(error => console.error("Home section yuklashda xatolik:", error));
});