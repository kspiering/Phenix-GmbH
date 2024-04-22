const burgerIcon = document.getElementById("burgerIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileNav = document.querySelector(".mobileNav");

burgerIcon.addEventListener("click", () => {
  mobileNav.style.display = "block";
  burgerIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  mobileNav.style.display = "none";
  burgerIcon.style.display = "flex";
});
