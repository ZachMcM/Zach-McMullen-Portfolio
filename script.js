//portfolio

let nav = document.querySelector("nav")

window.onscroll = () => {
    if (window.scrollY != 0) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove('scrolled')
    }
}

//link page

const shareBtn = document.querySelector('.share-button')
const modal = document.querySelector('.modal-container')
const modalClose = document.querySelector('.fa-xmark')

const title = window.document.title
const url = window.document.location.href

shareBtn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).then(() => {
            console.log('Thanks for sharing')
        })
    } else {
        modal.classList.add('active')
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active')
        })
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.classList.remove("active")
            }
        })
    }
})



