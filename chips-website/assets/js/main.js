

const shadowHeader = () =>{
    const header = document.getElementById("header")

    this.scrollY >=50 ? header.classList.add("shadow-header")
                      : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)



const scrollUp = () =>{
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >=350 ? scrollUp.classList.add("show-scroll")
                       : scrollUp.classList.remove("show-scroll")
}

window.addEventListener('scroll', scrollUp)




