const seasonalMessage = document.querySelector(".seasonal-message");
const seasonalTag = document.querySelector(".seasonal-tag");

if (seasonalMessage && seasonalTag) {
  const month = new Date().getMonth();
  let label = "Seasonal Spotlight";
  let message = "Seasonal maintenance bookings are open now.";

  if (month === 11 || month === 0 || month === 1) {
    message = "Snow removal and same-day help available this week.";
  } else if (month >= 2 && month <= 4) {
    message = "Spring refresh: deck repairs and exterior touch-ups.";
  } else if (month >= 5 && month <= 8) {
    message = "Summer projects: decks, fences, and outdoor repairs.";
  } else {
    message = "Fall prep: seasonal maintenance and weatherproofing.";
  }

  seasonalTag.textContent = label;
  seasonalMessage.textContent = message;
}

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const staggerGroups = document.querySelectorAll(".stagger");
staggerGroups.forEach((group) => {
  [...group.children].forEach((child, index) => {
    child.style.setProperty("--i", index);
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
