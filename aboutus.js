import CountUp from "countup.js";

//Scroll Reveal animation
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "200px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".about", { origin: "left", delay: 100 });
  sr.reveal(".about-img", { origin: "left", delay: 100 });
  sr.reveal(".our-mission", { origin: "right", delay: 100 });
  sr.reveal(".mission-img", { origin: "right", delay: 100 });
});

//Count Animation
// Function to initialize count up animation
window.onload = function () {
  initializeCountUp("clientsCount", 100);
  initializeCountUp("RetentionCount", 95);
  initializeCountUp("satisfactionCount", 98);
};

function initializeCountUp(targetId, endValue) {
  const countUp = new CountUp(targetId, endValue);
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
}
