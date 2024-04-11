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
  const countUp = new CountUp(targetId, 0, endValue);
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
}

// Function to check if element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var clientsCount = document.getElementById("clientsCount");
  var monthsCount = document.getElementById("monthsCount");
  var satisfactionCount = document.getElementById("satisfactionCount");

  if (isInViewport(clientsCount)) {
    initializeCountUp("clientsCount", 1000); // End value for clients count
    window.removeEventListener("scroll", handleScroll);
  }
  if (isInViewport(monthsCount)) {
    initializeCountUp("monthsCount", 95); // End value for client retention rate
    window.removeEventListener("scroll", handleScroll);
  }
  if (isInViewport(satisfactionCount)) {
    initializeCountUp("satisfactionCount", 98); // End value for client satisfaction
    window.removeEventListener("scroll", handleScroll);
  }
}

// Attach scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check in case elements are already in viewport
handleScroll();
