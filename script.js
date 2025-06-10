/* DARK MODE */

let themeToggle = document.querySelectorAll(".themeToggle");

themeToggle.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});


/* NAVBAR */

let navBars = document.getElementById("nav-mobile");
let navLinks = document.getElementById("links-mobile");

navBars.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* CELULAR INTERATIVO */

function openApp(url) {
    document.getElementById('appFrame').src = url;
    document.getElementById('screen').classList.add('show-app');
}

function goBack() {
    document.getElementById('appFrame').src = "";
    document.getElementById('screen').classList.remove('show-app');
}
