const hamburgerMenu = document.getElementById("menu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});