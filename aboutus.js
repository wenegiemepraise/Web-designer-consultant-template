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
function initializeCountUp(targetId, endValue) {
  const countUp = new CountUp(targetId, endValue, { enableScrollSpy: true }); // Initialize CountUp with scroll spy enabled
  if (!countUp.error) {
    countUp.start(); // Start the CountUp animation
  } else {
    console.error(countUp.error); // Log any errors to the console
  }
}

// Call the function for each target element
initializeCountUp("clientsCount", 100);
initializeCountUp("RetentionCount", 98);
initializeCountUp("satisfactionCount", 95);
