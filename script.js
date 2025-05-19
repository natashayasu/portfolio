let themeToggle = document.getElementById("themeToggle")

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
});


let navBars = document.getElementById("navBars")
let navLinks = document.getElementById("navLinks")

navBars.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});