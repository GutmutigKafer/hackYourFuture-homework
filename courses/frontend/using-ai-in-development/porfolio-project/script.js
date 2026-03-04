const highlightText = document.querySelector(".highlight");
const maxDistance = 300;
let animationFrameId = null;
let currentAngle = 0;
let currentStop1 = 30;
let currentStop2 = 70;
let currentHue = 0;

const contactForm = document.getElementById("contact-form");
const sections = document.querySelectorAll("section");
const projectCards = document.querySelectorAll(".project-card");
const skillBoxes = document.querySelectorAll(".skill-box");

// Event listeners / Scroll - Animation - Submit Form
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", (event) => scrollToAnchor(event, anchor));
});

document.addEventListener("mousemove", (event) => {
  if (animationFrameId) return;

  animationFrameId = requestAnimationFrame(() => {
    gradientAnimation(event);
    animationFrameId = null;
  });
});

contactForm.addEventListener("submit", (event) => submitForm(event));

// Functions
const gradientAnimation = (event) => {
  if (!highlightText) return;
  const rect = highlightText.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;
  const distance = Math.hypot(deltaX * deltaX + deltaY * deltaY);

  const targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  const gradientSpread = Math.min(distance / maxDistance, 1);

  // Smooth transitions
  currentAngle = lerp(currentAngle, targetAngle, 0.1);
  currentStop1 = lerp(currentStop1, 30 + gradientSpread * 20, 0.1);
  currentStop2 = lerp(currentStop2, 70 + gradientSpread * 20, 0.1);

  const targetHue = (((currentAngle + 180) * 360) / 360) % 360;
  currentHue = lerp(currentHue, targetHue, 0.1);

  const color1 = `hsl(${currentHue}, 70%, 60%)`;
  const color2 = `hsl(${(currentHue + 60) % 360}, 70%, 60%)`;

  requestAnimationFrame(() => {
    highlightText.style.setProperty(
      "--gradient-angle",
      `${currentAngle + 90}deg`,
    );
    highlightText.style.setProperty("--gradient-stop-1", `${currentStop1}%`);
    highlightText.style.setProperty("--gradient-stop-2", `${currentStop2}%`);
    highlightText.style.setProperty("--gradient-color-1", color1);
    highlightText.style.setProperty("--gradient-color-2", color2);
  });
};
const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

const scrollToAnchor = (event, anchor) => {
  event.preventDefault();
  const section = document.querySelector(anchor.getAttribute("href"));
  if (!section) return;

  const offset = document.querySelector("nav").offsetHeight;
  const sectionTop = section.offsetTop - offset;

  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
};

const submitForm = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form submitted:", { name, email, message });

  contactForm.reset();
  alert("Thank you for your message! I will get back to you soon.");
};

const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.5s ease-out";
  observer.observe(section);
});

projectCards.forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.3s ease-out";
  observer.observe(card);
});

skillBoxes.forEach((box) => {
  box.style.opacity = 0;
  box.style.transform = "translateY(50px)";
  box.style.transition = "all 0.3s ease-out";
  observer.observe(box);
});
