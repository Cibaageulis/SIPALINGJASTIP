// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector(".jastipfashion");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Ketika hamburger menu di klik
document.querySelector("#jastip-fashion").onclick = () => {
  navbarNav.classList.toggle("active");
};
