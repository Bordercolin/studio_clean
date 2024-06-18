const hamburgerMenu = document.querySelector(".nav-bar__hamburger");
const navFullScreen = document.querySelector(".nav-bar--fullscreen");

hamburgerMenu.addEventListener("click", function () {
  navFullScreen.style.display = "flex";
  document.body.classList.add("no-scroll");
});

const exitButton = document.querySelector(".nav-bar--fullscreen__cross");
exitButton.addEventListener("click", function () {
  navFullScreen.style.display = "none";
  document.body.classList.remove("no-scroll");
});
