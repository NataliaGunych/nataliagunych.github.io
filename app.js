const track = document.querySelector(".services-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  track.scrollBy({ left: track.offsetWidth * 0.8, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  track.scrollBy({ left: -track.offsetWidth * 0.8, behavior: "smooth" });
});

const reviewsTrack = document.querySelector(".reviews-track");
const reviewsNext = document.querySelector(".reviews-next");
const reviewsPrev = document.querySelector(".reviews-prev");

reviewsNext.addEventListener("click", () => {
  reviewsTrack.scrollBy({
    left: reviewsTrack.offsetWidth,
    behavior: "smooth",
  });
});

reviewsPrev.addEventListener("click", () => {
  reviewsTrack.scrollBy({
    left: -reviewsTrack.offsetWidth,
    behavior: "smooth",
  });
});

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".header-mobile");
const closeMenu = document.querySelector(".close-menu");
const menuLinks = document.querySelectorAll(".header-mobile a");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
