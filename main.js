//Typing animations
document.addEventListener("DOMContentLoaded", function () {
  const typeit = new TypeIt(".titles", {
    speed: 100,
    cursor: false,
    loop: true,
  });

  const strings = [
    "We were founded in 2024.",
    "We have over 100 clients.",
    "We are expanding nationwide.",
    "We prioritise your success!",
    "We are here to help!",
  ];

  // Add strings to TypeIt instance
  strings.forEach((string, index) => {
    if (index === strings.length - 1) {
      // If it's the last string
      typeit
        .type(" " + string)
        .pause(2000) // Longer pause for the last iteration
        .delete()
        .pause(100); // Type, pause, delete, and pause for next string
    } else {
      typeit
        .type(" " + string)
        .pause(700) // Default pause for other iterations
        .delete()
        .pause(100); // Type, pause, delete, and pause for next string
    }
  });

  typeit.go(); // Start TypeIt instance
});

//Scroll Reveal animation
window.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "100px",
    duration: 2600,
    reset: true,
  });

  sr.reveal(".faq-header", { origin: "top", delay: 100 });
  sr.reveal("#faq-1", { origin: "left", delay: 100 });
  sr.reveal("#faq-2", { origin: "right", delay: 100 });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
