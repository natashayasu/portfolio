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


/* SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;
    let scrollTo = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);
    if (scrollTo < 0) scrollTo = 0;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });
});
