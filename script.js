let themeToggle = document.querySelectorAll(".themeToggle");

themeToggle.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

let navBars = document.getElementById("nav-mobile");
let navLinks = document.getElementById("links-mobile");

navBars.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
