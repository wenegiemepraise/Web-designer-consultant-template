//Scroll Reveal animation
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "100px",
    duration: 2600,
    reset: true,
  });

  sr.reveal(".no.1", { origin: "top", delay: 100 });
  sr.reveal(".no.2", { origin: "top", delay: 200 });
  sr.reveal(".no.3", { origin: "top", delay: 300 });
  sr.reveal(".no.4", { origin: "top", delay: 400 });
  sr.reveal(".no.5", { origin: "top", delay: 500 });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
