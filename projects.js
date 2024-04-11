//Scroll Reveal animation
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "200px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".projects h2", { origin: "left", delay: 100 });
  sr.reveal(".projects h5", { origin: "left", delay: 100 });
  sr.reveal(".projects p", { origin: "left", delay: 100 });
  sr.reveal(".software-projects h2", { origin: "right", delay: 100 });
  sr.reveal(".software-projects h5", { origin: "right", delay: 100 });
  sr.reveal(".software-projects p", { origin: "right", delay: 100 });
});
