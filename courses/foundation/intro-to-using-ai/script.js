document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    const offset = document.querySelector("nav").offsetHeight + 20;
    const sectionTop = section.offsetTop - offset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  });
});

const highlightText = document.querySelector(".highlight");
const maxDistance = 300; // Reduced for more sensitivity

let currentAngle = 0;
let currentStop1 = 30;
let currentStop2 = 70;
let currentHue = 0;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

document.addEventListener("mousemove", (e) => {
  if (!highlightText) return;

  const rect = highlightText.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

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
      `${currentAngle + 90}deg`
    );
    highlightText.style.setProperty("--gradient-stop-1", `${currentStop1}%`);
    highlightText.style.setProperty("--gradient-stop-2", `${currentStop2}%`);
    highlightText.style.setProperty("--gradient-color-1", color1);
    highlightText.style.setProperty("--gradient-color-2", color2);
  });
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form submitted:", { name, email, message });

  contactForm.reset();
  alert("Thank you for your message! I will get back to you soon.");
});

const sections = document.querySelectorAll("section");
const projectCards = document.querySelectorAll(".project-card");

const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
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
