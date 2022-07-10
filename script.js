//portfolio

let nav = document.querySelector("nav")

window.onscroll = () => {
    if (window.scrollY != 0) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove('scrolled')
    }
}



