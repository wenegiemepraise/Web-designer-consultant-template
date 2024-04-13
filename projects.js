//Scroll Reveal animation
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "200px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".left-swiper", { origin: "left", delay: 100 });
  sr.reveal(".right-swiper", { origin: "right", delay: 100 });
});
