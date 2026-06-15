const startOverlay = document.getElementById("startOverlay");
const startButton = document.getElementById("startButton");

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");

const sponsorForm = document.getElementById("sponsorForm");
const spaceBackground = document.getElementById("spaceBackground");

startButton.addEventListener("click", () => {
  startOverlay.classList.add("hidden");
});

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  sideMenu.classList.toggle("open");
});

document.querySelectorAll(".side-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("active");
    sideMenu.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  spaceBackground.style.transform = `translateY(${scrollPosition * 0.08}px)`;
});

sponsorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Danke! Die Sponsoren-Anfrage wurde als Demo erfasst.");
  sponsorForm.reset();
});
