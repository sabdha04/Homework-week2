const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function() {
    nav.classList.toggle("menu-active");
});