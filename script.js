  // Toggle mobile menu
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

    // Typing effect
    const typingElement = document.getElementById("typing");
const texts = ["Web Developer", "Front-End Developer"]; // multiple lines
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!isDeleting && charIndex < currentText.length) {
    typingElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } 
  else if (isDeleting && charIndex > 0) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, 100);
  } 
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % texts.length; // next text
    }
    setTimeout(type, 800); // pause before typing/deleting
  }
}

window.addEventListener("load", type);

    // Fade-in on scroll
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("opacity-100");
        }
      });
    }, {threshold: 0.2});

    faders.forEach(fader => observer.observe(fader));

    
    // Placeholder typing effect
const placeholders = {
  name: ["John Doe", "Jane Smith"],
  email: ["example@gmail.com", "hello@domain.com"],
  message: ["I want to work with you!", "Let's build something amazing!"]
};

function typePlaceholder(elementId, texts, delay = 150, pause = 1500) {
  const element = document.getElementById(elementId);
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function loop() {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
      element.placeholder = currentText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(loop, delay);
    } 
    else if (isDeleting && charIndex > 0) {
      element.placeholder = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(loop, delay / 2);
    } 
    else {
      isDeleting = !isDeleting;
      if (!isDeleting) textIndex = (textIndex + 1) % texts.length;
      setTimeout(loop, pause);
    }
  }
  loop();
}

// Initialize for all inputs
window.addEventListener("load", () => {
  typePlaceholder("name", placeholders.name);
  typePlaceholder("email", placeholders.email);
  typePlaceholder("message", placeholders.message);
});

 