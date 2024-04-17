// Initialize ScrollReveal animation
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "200px",
    duration: 2000,
    reset: true,
  });

  // Initialize ScrollReveal animation
  sr.reveal(".about", { origin: "left", delay: 100 });
  sr.reveal(".about-img", { origin: "left", delay: 100 });
  sr.reveal(".our-mission", { origin: "right", delay: 100 });
  sr.reveal(".mission-img", { origin: "right", delay: 100 });
});
