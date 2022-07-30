
var elHamburger = document.querySelector(".header__hamburger")
var line1 = document.querySelector(".line1")
var line2 = document.querySelector(".line2")
var line3 = document.querySelector(".line3")
var elModal = document.querySelector(".modal")

elHamburger.addEventListener("click", function() {
    line1.classList.toggle("rotate")
    line2.classList.toggle("rotate-dom")
    line3.classList.toggle("rotate-return")
    elModal.classList.toggle("down")
})