

const shadowHeader = () =>{
    const header = document.getElementById("header")

    this.scrollY >=50 ? header.classList.add("shadow-header")
                      : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


const swiperFavorites = new Swiper(".favorites__swiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto", 
    centeredSlides: true, // ❌ 'auto' noto‘g‘ri, ✅ true bo‘lishi kerak
    spaceBetween: 20, // Slide orasidagi masofa
});
