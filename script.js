
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000);
  }
});

document.querySelectorAll(".has-dropdown > a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle("active");
    }
  });
});
