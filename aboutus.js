// Import necessary modules
import { CountUp } from "./js/countUp.min.js";
import ScrollReveal from "scrollreveal";

// Initialize ScrollReveal animation
const sr = ScrollReveal({
  distance: "200px",
  duration: 2000,
  reset: true,
});

// Initialize CountUp animations
document.addEventListener("DOMContentLoaded", () => {
  const countUpClients = new CountUp("clientsCount", 100, {
    enableScrollSpy: true,
  });
  const countUpRetention = new CountUp("RetentionCount", 95, {
    enableScrollSpy: true,
  });
  const countUpSatisfaction = new CountUp("satisfactionCount", 98, {
    enableScrollSpy: true,
  });

  // Check if all CountUp instances were successfully created before starting them
  if (
    !countUpClients.error &&
    !countUpRetention.error &&
    !countUpSatisfaction.error
  ) {
    countUpClients.start();
    countUpRetention.start();
    countUpSatisfaction.start();
  } else {
    console.error("Error initializing CountUp instances");
  }

  // Initialize ScrollReveal animation
  sr.reveal(".about", { origin: "left", delay: 100 });
  sr.reveal(".about-img", { origin: "left", delay: 100 });
  sr.reveal(".our-mission", { origin: "right", delay: 100 });
  sr.reveal(".mission-img", { origin: "right", delay: 100 });
});
