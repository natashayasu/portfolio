const tema = document.querySelector("#toggle-theme");

tema.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-mode");

  if (document.documentElement.classList.contains("dark-mode")) {
    tema.textContent = "Light mode";
  } else {
    tema.textContent = "Dark mode";
  }
});

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

function openMenu() {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
}

function handleResize() {
  if (window.innerWidth > 800) {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    menu.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  }
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);